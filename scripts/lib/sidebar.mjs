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
		// Normalize ordering drift between hand-built items.
		item = item.replace( '"order":"desc"', '"order":"asc"' );
		return item;
	} );

	// Everything between the accordion container div and its close is the
	// item list; swap it wholesale.
	const containerOpen = accordion.indexOf( '>', accordion.indexOf( '<div role="group" class="wp-block-accordion"' ) ) + 1;
	const containerClose = accordion.lastIndexOf( '</div>' );
	const newAccordion =
		accordion.slice( 0, containerOpen ) +
		items.join( '\n\n' ) +
		accordion.slice( containerClose );

	return (
		sidebarRaw.slice( 0, accordionSpan[ 0 ] ) +
		newAccordion +
		sidebarRaw.slice( accordionSpan[ 1 ] )
	);
}
