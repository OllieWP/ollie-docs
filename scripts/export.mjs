/**
 * Export all docs from the live site into docs/ as Markdown files.
 *
 *   node scripts/export.mjs
 *
 * Layout: top-level docs with children become docs/<slug>/index.md with
 * children beside them; childless top-level docs become docs/<slug>.md.
 * Existing local files are overwritten — the site is the source of truth
 * for this command.
 */

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
	blocksToMarkdown,
	markdownToBlocks,
	parseFrontMatter,
	serializeFrontMatter,
} from './lib/convert.mjs';
import { fetchAllDocs, wpFetch, ROOT } from './lib/wp.mjs';

// --doc=<id> limits the export to a single doc (used by the sync-from-site
// GitHub Action for tight, reviewable commits). Hierarchy still loads in
// full so the file path resolves correctly.
const onlyDoc = Number(
	process.argv.find( ( a ) => a.startsWith( '--doc=' ) )?.slice( 6 ) ?? 0
);

const docs = await fetchAllDocs();
const byId = new Map( docs.map( ( d ) => [ d.id, d ] ) );
const hasChildren = new Set( docs.map( ( d ) => d.parent ).filter( Boolean ) );

let converted = 0;
let rawFallback = 0;

for ( const doc of docs ) {
	if ( onlyDoc && doc.id !== onlyDoc ) {
		continue;
	}
	if ( ! doc.slug ) {
		console.warn(
			`! Skipping doc ${ doc.id } (${ doc.status }) — it has no slug (empty draft?).`
		);
		continue;
	}

	let dir = join( ROOT, 'docs' );
	let filename = `${ doc.slug }.md`;
	if ( doc.parent ) {
		const parent = byId.get( doc.parent );
		if ( ! parent ) {
			console.warn( `! Doc ${ doc.slug } has unknown parent ${ doc.parent }` );
			continue;
		}
		dir = join( dir, parent.slug );
	} else if ( hasChildren.has( doc.id ) ) {
		dir = join( dir, doc.slug );
		filename = 'index.md';
	}

	const raw = doc.content.raw;
	let body = blocksToMarkdown( raw );

	// Whole-document round-trip check; fall back to raw markup if the
	// Markdown would not reproduce the site content exactly.
	if ( markdownToBlocks( body ) !== raw ) {
		console.warn( `! ${ doc.slug }: keeping full raw markup (round-trip mismatch)` );
		body = raw + '\n';
		rawFallback++;
	} else {
		converted++;
	}

	const file = serializeFrontMatter(
		{
			id: doc.id,
			title: doc.title.raw,
			status: doc.status,
			order: doc.menu_order,
			excerpt: doc.excerpt?.raw || undefined,
		},
		body
	);

	mkdirSync( dir, { recursive: true } );
	writeFileSync( join( dir, filename ), file );
	console.log( `  ${ join( dir, filename ).replace( ROOT + '/', '' ) }` );
}

// Tracked pages: any file already in pages/ is refreshed from the site.
// Skipped in single-doc mode.
const pagesDir = join( ROOT, 'pages' );
try {
	if ( onlyDoc ) throw Object.assign( new Error( 'skip' ), { code: 'ENOENT' } );
	for ( const file of readdirSync( pagesDir ) ) {
		if ( ! file.endsWith( '.md' ) ) continue;
		const path = join( pagesDir, file );
		const { meta } = parseFrontMatter( readFileSync( path, 'utf8' ) );
		if ( ! meta.id ) continue;
		const res = await wpFetch( `/pages/${ meta.id }?context=edit` );
		const page = await res.json();
		let body = blocksToMarkdown( page.content.raw );
		if ( markdownToBlocks( body ) !== page.content.raw ) {
			body = page.content.raw + '\n';
		}
		writeFileSync(
			path,
			serializeFrontMatter(
				{ id: page.id, type: 'page', title: page.title.raw, status: page.status },
				body
			)
		);
		console.log( `  pages/${ file }` );
	}
} catch ( err ) {
	if ( err.code !== 'ENOENT' ) throw err;
}

console.log( `\nExported ${ converted + rawFallback } docs (${ rawFallback } kept as raw markup).` );
