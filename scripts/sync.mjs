/**
 * Push local Markdown docs to the live site.
 *
 *   node scripts/sync.mjs            # push changes
 *   node scripts/sync.mjs --dry-run  # show what would change
 *
 * Files with an `id` in front matter update that doc; files without one
 * create a new doc (and the id is written back into the file). Parent is
 * derived from the file's location: docs/<parent>/<slug>.md is a child of
 * docs/<parent>/index.md. Only changed docs are written. Docs that exist
 * on the site but not locally are reported, never deleted.
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, basename, dirname } from 'node:path';
import {
	markdownToBlocks,
	parseFrontMatter,
	serializeFrontMatter,
} from './lib/convert.mjs';
import { fetchAllDocs, wpFetch, ROOT } from './lib/wp.mjs';

const dryRun = process.argv.includes( '--dry-run' );
const docsDir = join( ROOT, 'docs' );

function* walk( dir ) {
	for ( const entry of readdirSync( dir ) ) {
		const path = join( dir, entry );
		if ( statSync( path ).isDirectory() ) yield* walk( path );
		else if ( entry.endsWith( '.md' ) ) yield path;
	}
}

// Read every local file into a work item.
const items = [];
for ( const path of walk( docsDir ) ) {
	const { meta, body } = parseFrontMatter( readFileSync( path, 'utf8' ) );
	const rel = relative( docsDir, path );
	const isIndex = basename( path ) === 'index.md';
	const slug = isIndex
		? basename( dirname( path ) )
		: basename( path, '.md' );
	const parentSlug =
		! isIndex && dirname( rel ) !== '.' ? basename( dirname( rel ) ) : null;
	if ( ! meta.title ) {
		console.error( `! ${ rel }: missing title in front matter — skipped` );
		continue;
	}
	items.push( { path, rel, slug, parentSlug, isIndex, meta, body } );
}

// Depth-first so parents are created before their children.
items.sort( ( a, b ) => ( a.parentSlug ? 1 : 0 ) - ( b.parentSlug ? 1 : 0 ) );

const remote = await fetchAllDocs();
const remoteById = new Map( remote.map( ( d ) => [ d.id, d ] ) );
const idBySlug = new Map( remote.map( ( d ) => [ d.slug, d.id ] ) );

// Parents resolve from the local index.md first: a section folder may be
// renamed locally (slug change pending sync), so the remote slug map alone
// would miss it.
const parentIdByFolder = new Map(
	items
		.filter( ( i ) => i.isIndex && i.meta.id )
		.map( ( i ) => [ i.slug, i.meta.id ] )
);
const localIds = new Set();
let changed = 0;

for ( const item of items ) {
	const content = markdownToBlocks( item.body );
	let parentId = item.parentSlug
		? parentIdByFolder.get( item.parentSlug ) ?? idBySlug.get( item.parentSlug )
		: 0;
	if ( item.parentSlug && ! parentId ) {
		// In a live run the parent index.md is created before its children
		// reach this point; a dry run can't create it, so a pending parent
		// is expected there rather than an error.
		const pendingParent = items.some(
			( i ) => i.isIndex && i.slug === item.parentSlug && ! i.meta.id
		);
		if ( dryRun && pendingParent ) {
			changed++;
			console.log(
				`would update  ${ item.rel } (once parent "${ item.parentSlug }" is created)`
			);
			continue;
		}
		console.error(
			`! ${ item.rel }: parent "${ item.parentSlug }" not found on site — skipped`
		);
		continue;
	}

	const payload = {
		title: item.meta.title,
		slug: item.slug,
		status: item.meta.status || 'publish',
		menu_order: item.meta.order ?? 0,
		parent: parentId,
		content,
	};

	const existing = item.meta.id ? remoteById.get( item.meta.id ) : null;
	if ( item.meta.id && ! existing ) {
		console.error(
			`! ${ item.rel }: id ${ item.meta.id } not found on site — skipped (remove the id to create it as new)`
		);
		continue;
	}

	if ( existing ) {
		localIds.add( existing.id );
		const same =
			existing.content.raw === content &&
			existing.title.raw === payload.title &&
			existing.slug === payload.slug &&
			existing.status === payload.status &&
			existing.menu_order === payload.menu_order &&
			existing.parent === payload.parent;
		if ( same ) continue;
		changed++;
		console.log( `${ dryRun ? 'would update' : 'updating' }  ${ item.rel }` );
		if ( ! dryRun ) {
			await wpFetch( `/docs/${ existing.id }`, {
				method: 'POST',
				body: JSON.stringify( payload ),
			} );
		}
	} else {
		changed++;
		console.log( `${ dryRun ? 'would create' : 'creating' }  ${ item.rel }` );
		if ( ! dryRun ) {
			const res = await wpFetch( '/docs', {
				method: 'POST',
				body: JSON.stringify( payload ),
			} );
			const created = await res.json();
			localIds.add( created.id );
			idBySlug.set( created.slug, created.id );
			if ( item.isIndex ) {
				parentIdByFolder.set( item.slug, created.id );
			}
			// Write the new id back into the file's front matter.
			writeFileSync(
				item.path,
				serializeFrontMatter(
					{ id: created.id, ...item.meta },
					item.body
				)
			);
			console.log( `           ${ item.rel } → id ${ created.id }` );
		}
	}
}

for ( const doc of remote ) {
	if ( doc.slug && ! localIds.has( doc.id ) && ! items.some( ( i ) => i.meta.id === doc.id ) ) {
		console.warn(
			`! Site has "${ doc.slug }" (id ${ doc.id }) with no local file — not touching it.`
		);
	}
}

console.log(
	changed
		? `\n${ dryRun ? 'Would change' : 'Changed' } ${ changed } doc(s).`
		: '\nEverything up to date.'
);
