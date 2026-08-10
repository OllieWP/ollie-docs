/**
 * Minimal WordPress REST client for the docs post type.
 * Credentials come from .env in the repo root (see .env.example).
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const ROOT = join( dirname( fileURLToPath( import.meta.url ) ), '..', '..' );

function loadEnv() {
	const env = {};
	let text;
	try {
		text = readFileSync( join( ROOT, '.env' ), 'utf8' );
	} catch {
		throw new Error(
			'Missing .env file. Copy .env.example to .env and fill in credentials.'
		);
	}
	for ( const line of text.split( '\n' ) ) {
		const m = line.match( /^([A-Z_]+)=(.*)$/ );
		if ( m ) env[ m[ 1 ] ] = m[ 2 ].replace( /^"|"$/g, '' );
	}
	for ( const key of [ 'WP_URL', 'WP_USER', 'WP_APP_PASSWORD' ] ) {
		if ( ! env[ key ] ) throw new Error( `Missing ${ key } in .env` );
	}
	return env;
}

const env = loadEnv();
const authHeader =
	'Basic ' +
	Buffer.from( `${ env.WP_USER }:${ env.WP_APP_PASSWORD }` ).toString( 'base64' );

export async function wpFetch( path, options = {} ) {
	const res = await fetch( `${ env.WP_URL }/wp-json/wp/v2${ path }`, {
		...options,
		headers: {
			Authorization: authHeader,
			'Content-Type': 'application/json',
			...( options.headers || {} ),
		},
	} );
	if ( ! res.ok ) {
		const body = await res.text();
		throw new Error( `${ res.status } ${ path }: ${ body.slice( 0, 300 ) }` );
	}
	return res;
}

/** Fetch every doc (all statuses), paginated. */
export async function fetchAllDocs() {
	const docs = [];
	let page = 1;
	for ( ;; ) {
		const res = await wpFetch(
			`/docs?context=edit&per_page=100&page=${ page }&status=publish,draft,pending,private`
		);
		const batch = await res.json();
		docs.push( ...batch );
		if ( batch.length < 100 ) break;
		page++;
	}
	return docs;
}
