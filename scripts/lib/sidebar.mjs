/**
 * Docs sidebar generator.
 *
 * The olliewp.com docs sidebar is a template part containing an accordion
 * with one item per docs section; each item holds a query loop filtered to
 * that section's post id. This module regenerates the accordion from the
 * repo's section tree, treating the first existing accordion item as the
 * design template — so visual changes made to the sidebar in the Site
 * Editor carry forward automatically.
 */

const TOKEN_RE =
	/<!--\s+(\/)?wp:([a-z][a-z0-9_/-]*)(\s+\{[\s\S]*?\})?\s+(\/)?-->/g;

/** Find the [start, end) span of the first `name` block in `html`. */
function findBlockSpan( html, name, from = 0 ) {
	TOKEN_RE.lastIndex = from;
	let depth = 0;
	let start = -1;
	let m;
	while ( ( m = TOKEN_RE.exec( html ) ) ) {
		const [ full, closer, tokenName, , voidMark ] = m;
		if ( tokenName === name && ! closer && ! voidMark && depth === 0 ) {
			start = m.index;
		}
		if ( start === -1 ) continue;
		if ( ! closer && ! voidMark ) depth++;
		else if ( closer ) depth--;
		if ( depth === 0 && start !== -1 && closer && tokenName === name ) {
			return [ start, m.index + full.length ];
		}
	}
	return null;
}

/**
 * Rebuild the sidebar's accordion from the section list.
 *
 * @param {string} sidebarRaw Current template part markup.
 * @param {Array}  sections   [{ title, id }] in display order.
 * @return {string} Updated markup.
 */
export function buildSidebar( sidebarRaw, sections ) {
	const accordionSpan = findBlockSpan( sidebarRaw, 'accordion' );
	if ( ! accordionSpan ) {
		throw new Error( 'No accordion block found in the docs sidebar.' );
	}
	const accordion = sidebarRaw.slice( ...accordionSpan );
	const itemSpan = findBlockSpan( accordion, 'accordion-item' );
	if ( ! itemSpan ) {
		throw new Error( 'No accordion-item found in the docs sidebar.' );
	}
	const template = accordion.slice( ...itemSpan );

	const items = sections.map( ( section, i ) => {
		let item = template;
		// First section starts open; the rest start closed.
		item = item.replace(
			/^<!-- wp:accordion-item(?: \{[^\n]*\})? -->/,
			i === 0
				? '<!-- wp:accordion-item {"openByDefault":true} -->'
				: '<!-- wp:accordion-item -->'
		);
		item = item.replace(
			/class="wp-block-accordion-item(?: is-open)?"/,
			i === 0
				? 'class="wp-block-accordion-item is-open"'
				: 'class="wp-block-accordion-item"'
		);
		const safeTitle = section.title
			.replace( /&/g, '&amp;' )
			.replace( /</g, '&lt;' )
			.replace( />/g, '&gt;' );
		item = item.replace(
			/(<span class="wp-block-accordion-heading__toggle-title">)(?:<strong>)?[^<]*(?:<\/strong>)?(<\/span>)/,
			`$1<strong>${ safeTitle }</strong>$2`
		);
		item = item.replace( /"parents":\[\d+\]/, `"parents":[${ section.id }]` );
		// Normalize ordering drift between hand-built items, and lift the
		// query's 10-item default so large sections list every doc.
		item = item.replace( '"order":"desc"', '"order":"asc"' );
		item = item.replace( '"perPage":10,', '"perPage":100,' );
		return item;
	} );

	// Everything between the accordion container div and its close is the
	// item list; swap it wholesale. The container tag is matched by class
	// token (styling in the Site Editor adds classes and inline styles),
	// and any failure to find it must throw — a blind splice here once
	// destroyed the container tag entirely.
	const containerMatch = accordion.match(
		/<div[^>]*class="(?:[^"]* )?wp-block-accordion(?: [^"]*)?"[^>]*>/
	);
	if ( ! containerMatch ) {
		throw new Error( 'Accordion container div not found in the docs sidebar.' );
	}
	const containerOpen = containerMatch.index + containerMatch[ 0 ].length;
	const containerClose = accordion.lastIndexOf( '</div>' );
	if ( containerClose <= containerOpen ) {
		throw new Error( 'Accordion container close not found in the docs sidebar.' );
	}
	const newAccordion =
		accordion.slice( 0, containerOpen ) +
		items.join( '\n\n' ) +
		accordion.slice( containerClose );

	const result =
		sidebarRaw.slice( 0, accordionSpan[ 0 ] ) +
		newAccordion +
		sidebarRaw.slice( accordionSpan[ 1 ] );

	// Structural verification: refuse to emit markup that lost the
	// container, changed div balance, or has the wrong item count.
	const balance = ( s ) =>
		( s.match( /<div\b/g ) || [] ).length - ( s.match( /<\/div>/g ) || [] ).length;
	const itemCount = ( result.match( /<!-- wp:accordion-item/g ) || [] ).length;
	if (
		balance( result ) !== balance( sidebarRaw ) ||
		itemCount !== sections.length ||
		! /<div[^>]*class="(?:[^"]* )?wp-block-accordion(?: [^"]*)?"[^>]*>/.test( result )
	) {
		throw new Error( 'Docs sidebar regeneration failed structural verification.' );
	}
	return result;
}
