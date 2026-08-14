/**
 * Lossless converter between Gutenberg block markup and Markdown.
 *
 * Strategy: only prose blocks with default attributes (paragraph, heading,
 * list, code, separator, simple table) are expressed as Markdown. Every
 * other block — groups, columns, covers, buttons, embeds — passes through
 * as raw block markup embedded in the Markdown file.
 *
 * Round-trip safety is enforced per block: a block is only exported as
 * Markdown if converting that Markdown back reproduces the original markup
 * byte-for-byte. Anything that doesn't survive the check stays raw.
 */

const TOKEN_RE =
	/<!--\s+(\/)?wp:([a-z][a-z0-9_/-]*)(\s+\{[\s\S]*?\})?\s+(\/)?-->/g;

/*
 * Video cards: docs write `{{video id="..." title="..." desc="..."}}` and
 * the converter expands it from a single markup template — one place to
 * restyle every card (a repo-side synced pattern; real synced patterns
 * can't vary anchors per instance). The card opens the site's video modal
 * on click anywhere in the card: the `ollie-video` class and the YouTube
 * id anchor live on the outer group.
 */
import { readFileSync as _readFileSync } from 'node:fs';
const VIDEO_CARD_TEMPLATE = _readFileSync(
	new URL( './video-card-template.html', import.meta.url ),
	'utf8'
);
const VIDEO_DIRECTIVE_RE =
	/^\{\{video id="([^"\s]+)" title="([^"]+)" desc="([^"]+)"\}\}\s*$/;

function expandVideoCard( id, title, desc ) {
	return VIDEO_CARD_TEMPLATE.replaceAll( '%%ID%%', id )
		.replaceAll( '%%TITLE%%', title )
		.replaceAll( '%%DESC%%', desc );
}

function videoCardToMd( block ) {
	if (
		! block.attrs ||
		! block.attrs.includes( '"name":"Video Box"' ) ||
		! block.attrs.includes( 'ollie-video' )
	) {
		return null;
	}
	const id = block.attrs.match( /"anchor":"([^"]+)"/ )?.[ 1 ];
	const title = block.fullRaw.match(
		/<h4 class="wp-block-heading has-primary-font-family has-small-font-size">([^<]+)<\/h4>/
	)?.[ 1 ];
	const desc = block.fullRaw.match(
		/<p class="has-main-color has-text-color has-link-color has-x-small-font-size">([^<]+)<\/p>/
	)?.[ 1 ];
	if ( ! id || ! title || ! desc ) return null;
	if ( [ id, title, desc ].some( ( s ) => s.includes( '"' ) ) ) return null;
	return `{{video id="${ id }" title="${ title }" desc="${ desc }"}}`;
}

/** Split serialized block content into top-level blocks. */
export function parseBlocks( html ) {
	const blocks = [];
	let depth = 0;
	let start = null;
	let startToken = null;
	let lastIndex = 0;
	TOKEN_RE.lastIndex = 0;
	let m;
	while ( ( m = TOKEN_RE.exec( html ) ) ) {
		const [ full, closer, name, attrs, voidMark ] = m;
		if ( ! closer && ! voidMark ) {
			if ( depth === 0 ) {
				pushFreeform( blocks, html.slice( lastIndex, m.index ) );
				start = m.index;
				startToken = { name, attrs: attrs ? attrs.trim() : null };
			}
			depth++;
		} else if ( closer ) {
			depth--;
			if ( depth === 0 && start !== null ) {
				const fullRaw = html.slice( start, m.index + full.length );
				const innerStart = start + fullRaw.indexOf( '-->' ) + 3;
				blocks.push( {
					name: startToken.name,
					attrs: startToken.attrs,
					inner: html.slice( innerStart, m.index ),
					fullRaw,
				} );
				lastIndex = m.index + full.length;
				start = null;
			}
		} else if ( voidMark && depth === 0 ) {
			pushFreeform( blocks, html.slice( lastIndex, m.index ) );
			blocks.push( {
				name,
				attrs: attrs ? attrs.trim() : null,
				inner: '',
				fullRaw: full,
			} );
			lastIndex = m.index + full.length;
		}
	}
	pushFreeform( blocks, html.slice( lastIndex ) );
	return blocks;
}

function pushFreeform( blocks, text ) {
	if ( text.trim() !== '' ) {
		blocks.push( { name: null, attrs: null, inner: text, fullRaw: text } );
	}
}

/* ------------------------------------------------------------------ *
 * Inline HTML <-> Markdown
 * ------------------------------------------------------------------ */

function escapeCode( text ) {
	return text
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' );
}

function unescapeCode( text ) {
	return text
		.replace( /&lt;/g, '<' )
		.replace( /&gt;/g, '>' )
		.replace( /&amp;/g, '&' );
}

/** Inline HTML -> Markdown. Unknown inline HTML is left verbatim. */
export function inlineToMd( html ) {
	let out = html;
	out = out.replace(
		/<a href="([^"<>]*)">((?:(?!<\/a>)[\s\S])*?)<\/a>/g,
		( _, href, text ) => `[${ inlineToMd( text ) }](${ href })`
	);
	out = out.replace(
		/<(strong|b)>((?:(?!<\/\1>)[\s\S])*?)<\/\1>/g,
		( _, tag, text ) => `**${ inlineToMd( text ) }**`
	);
	out = out.replace(
		/<(em|i)>((?:(?!<\/\1>)[\s\S])*?)<\/\1>/g,
		( _, tag, text ) => `*${ inlineToMd( text ) }*`
	);
	out = out.replace(
		/<code>((?:(?!<\/code>)[\s\S])*?)<\/code>/g,
		( _, text ) => '`' + unescapeCode( text ) + '`'
	);
	return out;
}

/** Inline Markdown -> HTML. Exact inverse of inlineToMd for its output. */
export function mdToInline( md ) {
	const stash = [];
	let out = md.replace( /`([^`\n]+)`/g, ( _, text ) => {
		stash.push( `<code>${ escapeCode( text ) }</code>` );
		return `\x00${ stash.length - 1 }\x00`;
	} );
	out = out.replace(
		/\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^()\s]*)\)/g,
		( _, text, href ) => `<a href="${ href }">${ mdToInline( text ) }</a>`
	);
	out = out.replace(
		/\*\*((?:(?!\*\*)[\s\S])+?)\*\*/g,
		( _, text ) => `<strong>${ mdToInline( text ) }</strong>`
	);
	out = out.replace(
		/\*([^*\n]+)\*/g,
		( _, text ) => `<em>${ mdToInline( text ) }</em>`
	);
	// Guarded restore: recursive calls for bold/link inner text see the
	// outer call's placeholders but have their own (empty) stash — leave
	// unknown indexes alone so the outer call restores them.
	out = out.replace( /\x00(\d+)\x00/g, ( m, i ) => stash[ Number( i ) ] ?? m );
	return out;
}

/* ------------------------------------------------------------------ *
 * Block -> Markdown converters (return null when not convertible)
 * ------------------------------------------------------------------ */

function paragraphToMd( block ) {
	if ( block.attrs !== null ) return null;
	const m = block.inner.match( /^\n<p>([\s\S]*?)<\/p>\n$/ );
	if ( ! m ) return null;
	const md = inlineToMd( m[ 1 ] );
	// A paragraph whose lines could be mistaken for other Markdown syntax
	// stays raw rather than gaining escape rules.
	if (
		md.split( '\n' ).some( ( line ) =>
			/^(#{1,6} |---\s*$|```|\||[-*] |\d+\. |<!-- wp:)/.test( line )
		)
	) {
		return null;
	}
	return md;
}

function headingToMd( block ) {
	let level = 2;
	if ( block.attrs !== null ) {
		if ( ! /^\{"level":([1-6])\}$/.test( block.attrs ) ) return null;
		level = Number( block.attrs.match( /^\{"level":([1-6])\}$/ )[ 1 ] );
		if ( level === 2 ) return null; // level 2 serializes without attrs
	}
	const re = new RegExp(
		`^\\n<h${ level } class="wp-block-heading">([\\s\\S]*?)</h${ level }>\\n$`
	);
	const m = block.inner.match( re );
	if ( ! m || m[ 1 ].includes( '\n' ) ) return null;
	return `${ '#'.repeat( level ) } ${ inlineToMd( m[ 1 ] ) }`;
}

function listToMd( block, indent = '' ) {
	let ordered = false;
	if ( block.attrs !== null ) {
		if ( block.attrs !== '{"ordered":true}' ) return null;
		ordered = true;
	}
	const tag = ordered ? 'ol' : 'ul';
	const re = new RegExp(
		`^\\n<${ tag } class="wp-block-list">([\\s\\S]*)</${ tag }>\\n$`
	);
	const m = block.inner.match( re );
	if ( ! m ) return null;
	const items = parseBlocks( m[ 1 ] );
	const lines = [];
	let n = 1;
	for ( const item of items ) {
		if ( item.name !== 'list-item' || item.attrs !== null ) return null;
		const im = item.inner.match( /^\n<li>([\s\S]*?)<\/li>\n$/ );
		if ( ! im ) return null;
		let content = im[ 1 ];
		let nestedMd = '';
		// A nested list sits at the end of the <li>.
		const nestedIdx = content.indexOf( '<!-- wp:list' );
		if ( nestedIdx !== -1 ) {
			const nestedBlocks = parseBlocks( content.slice( nestedIdx ) );
			if (
				nestedBlocks.length !== 1 ||
				nestedBlocks[ 0 ].name !== 'list'
			) {
				return null;
			}
			nestedMd = listToMd( nestedBlocks[ 0 ], indent + '    ' );
			if ( nestedMd === null ) return null;
			content = content.slice( 0, nestedIdx );
		}
		const text = inlineToMd( content );
		if ( text.includes( '\n' ) ) return null;
		const marker = ordered ? `${ n }.` : '-';
		lines.push( `${ indent }${ marker } ${ text }` );
		if ( nestedMd ) lines.push( nestedMd );
		n++;
	}
	return lines.join( '\n' );
}

function codeToMd( block ) {
	if ( block.attrs !== null ) return null;
	const m = block.inner.match(
		/^\n<pre class="wp-block-code"><code>([\s\S]*?)<\/code><\/pre>\n$/
	);
	if ( ! m ) return null;
	const code = unescapeCode( m[ 1 ] );
	if ( code.includes( '```' ) ) return null;
	return '```\n' + code + '\n```';
}

function separatorToMd( block ) {
	if ( block.attrs !== null ) return null;
	if (
		block.inner !==
		'\n<hr class="wp-block-separator has-alpha-channel-opacity"/>\n'
	) {
		return null;
	}
	return '---';
}

function tableToMd( block ) {
	if ( block.attrs !== '{"hasFixedLayout":false}' ) return null;
	const m = block.inner.match(
		/^\n<figure class="wp-block-table"><table><thead><tr>([\s\S]*?)<\/tr><\/thead><tbody>([\s\S]*?)<\/tbody><\/table><\/figure>\n$/
	);
	if ( ! m ) return null;
	const headCells = splitCells( m[ 1 ], 'th' );
	if ( ! headCells ) return null;
	const rows = [];
	const rowRe = /<tr>([\s\S]*?)<\/tr>/g;
	let joined = '';
	let r;
	while ( ( r = rowRe.exec( m[ 2 ] ) ) ) {
		const cells = splitCells( r[ 1 ], 'td' );
		if ( ! cells || cells.length !== headCells.length ) return null;
		rows.push( cells );
		joined += r[ 0 ];
	}
	if ( joined !== m[ 2 ] ) return null;
	const line = ( cells ) => `| ${ cells.join( ' | ' ) } |`;
	return [
		line( headCells.map( inlineToMd ) ),
		line( headCells.map( () => '---' ) ),
		...rows.map( ( cells ) => line( cells.map( inlineToMd ) ) ),
	].join( '\n' );
}

function splitCells( rowHtml, tag ) {
	const re = new RegExp( `<${ tag }>([\\s\\S]*?)</${ tag }>`, 'g' );
	const cells = [];
	let joined = '';
	let m;
	while ( ( m = re.exec( rowHtml ) ) ) {
		if ( m[ 1 ].includes( '|' ) || m[ 1 ].includes( '\n' ) ) return null;
		cells.push( m[ 1 ] );
		joined += m[ 0 ];
	}
	return joined === rowHtml ? cells : null;
}

const CONVERTERS = {
	paragraph: paragraphToMd,
	heading: headingToMd,
	list: ( b ) => listToMd( b ),
	code: codeToMd,
	separator: separatorToMd,
	table: tableToMd,
	group: videoCardToMd,
};

/**
 * Serialized blocks -> Markdown. Each block is verified to round-trip
 * before being emitted as Markdown; otherwise its raw markup is kept.
 */
export function blocksToMarkdown( html ) {
	const chunks = [];
	for ( const block of parseBlocks( html ) ) {
		const convert = block.name && CONVERTERS[ block.name ];
		let md = null;
		if ( convert ) {
			md = convert( block );
			if ( md !== null && markdownToBlocks( md ) !== block.fullRaw ) {
				md = null; // failed round-trip; keep raw
			}
		}
		chunks.push( md !== null ? md : block.fullRaw.trim() );
	}
	return chunks.join( '\n\n' ) + '\n';
}

/* ------------------------------------------------------------------ *
 * Markdown -> blocks
 * ------------------------------------------------------------------ */

function serializeList( items, ordered, level ) {
	const tag = ordered ? 'ol' : 'ul';
	const open = ordered ? '<!-- wp:list {"ordered":true} -->' : '<!-- wp:list -->';
	const body = items
		.map( ( item ) => {
			let inner = mdToInline( item.text );
			if ( item.children ) {
				inner += serializeList(
					item.children.items,
					item.children.ordered,
					level + 1
				);
			}
			return `<!-- wp:list-item -->\n<li>${ inner }</li>\n<!-- /wp:list-item -->`;
		} )
		.join( '\n\n' );
	return `${ open }\n<${ tag } class="wp-block-list">${ body }</${ tag }>\n<!-- /wp:list -->`;
}

function parseListLines( lines ) {
	// Returns nested {ordered, items:[{text, children}]} from indented lines.
	const parse = ( startIdx, indent ) => {
		const items = [];
		let ordered = null;
		let i = startIdx;
		while ( i < lines.length ) {
			const m = lines[ i ].match( /^(\s*)(?:([-*])|(\d+)\.) (.*)$/ );
			if ( ! m ) break;
			const depth = m[ 1 ].length;
			if ( depth < indent ) break;
			if ( depth > indent ) {
				if ( ! items.length ) return null;
				const child = parse( i, depth );
				if ( ! child ) return null;
				items[ items.length - 1 ].children = child.node;
				i = child.next;
				continue;
			}
			const isOrdered = m[ 3 ] !== undefined;
			if ( ordered === null ) ordered = isOrdered;
			else if ( ordered !== isOrdered ) break;
			items.push( { text: m[ 4 ], children: null } );
			i++;
		}
		return items.length
			? { node: { ordered, items }, next: i }
			: null;
	};
	return parse( 0, lines[ 0 ].match( /^\s*/ )[ 0 ].length );
}

/** Markdown -> serialized block markup. */
export function markdownToBlocks( md ) {
	const out = [];
	const lines = md.replace( /\r\n/g, '\n' ).split( '\n' );
	let i = 0;
	while ( i < lines.length ) {
		const line = lines[ i ];
		if ( line.trim() === '' ) {
			i++;
			continue;
		}

		// Video card directive expands from the shared template.
		const video = line.match( VIDEO_DIRECTIVE_RE );
		if ( video ) {
			out.push( expandVideoCard( video[ 1 ], video[ 2 ], video[ 3 ] ) );
			i++;
			continue;
		}

		// Raw block markup passes through verbatim.
		if ( /^<!-- wp:/.test( line ) ) {
			let depth = 0;
			let j = i;
			const raw = [];
			for ( ; j < lines.length; j++ ) {
				raw.push( lines[ j ] );
				TOKEN_RE.lastIndex = 0;
				let t;
				while ( ( t = TOKEN_RE.exec( lines[ j ] ) ) ) {
					if ( ! t[ 1 ] && ! t[ 4 ] ) depth++;
					else if ( t[ 1 ] ) depth--;
				}
				if ( depth === 0 ) break;
			}
			out.push( raw.join( '\n' ) );
			i = j + 1;
			continue;
		}

		// Fenced code.
		if ( /^```/.test( line ) ) {
			const code = [];
			let j = i + 1;
			while ( j < lines.length && ! /^```/.test( lines[ j ] ) ) {
				code.push( lines[ j ] );
				j++;
			}
			out.push(
				`<!-- wp:code -->\n<pre class="wp-block-code"><code>${ escapeCode(
					code.join( '\n' )
				) }</code></pre>\n<!-- /wp:code -->`
			);
			i = j + 1;
			continue;
		}

		// Heading.
		const h = line.match( /^(#{1,6}) (.*)$/ );
		if ( h ) {
			const level = h[ 1 ].length;
			const attrs = level === 2 ? '' : ` {"level":${ level }}`;
			out.push(
				`<!-- wp:heading${ attrs } -->\n<h${ level } class="wp-block-heading">${ mdToInline(
					h[ 2 ]
				) }</h${ level }>\n<!-- /wp:heading -->`
			);
			i++;
			continue;
		}

		// Separator.
		if ( /^---\s*$/.test( line ) ) {
			out.push(
				'<!-- wp:separator -->\n<hr class="wp-block-separator has-alpha-channel-opacity"/>\n<!-- /wp:separator -->'
			);
			i++;
			continue;
		}

		// Table.
		if (
			/^\|.*\|\s*$/.test( line ) &&
			i + 1 < lines.length &&
			/^\|[\s|:-]+\|\s*$/.test( lines[ i + 1 ] )
		) {
			const parseRow = ( l ) =>
				l
					.replace( /^\|\s?/, '' )
					.replace( /\s?\|\s*$/, '' )
					.split( / \| / )
					.map( ( c ) => mdToInline( c.trim() ) );
			const head = parseRow( line );
			const rows = [];
			let j = i + 2;
			while ( j < lines.length && /^\|.*\|\s*$/.test( lines[ j ] ) ) {
				rows.push( parseRow( lines[ j ] ) );
				j++;
			}
			const cells = ( row, tag ) =>
				row.map( ( c ) => `<${ tag }>${ c }</${ tag }>` ).join( '' );
			out.push(
				`<!-- wp:table {"hasFixedLayout":false} -->\n<figure class="wp-block-table"><table><thead><tr>${ cells(
					head,
					'th'
				) }</tr></thead><tbody>${ rows
					.map( ( r ) => `<tr>${ cells( r, 'td' ) }</tr>` )
					.join( '' ) }</tbody></table></figure>\n<!-- /wp:table -->`
			);
			i = j;
			continue;
		}

		// List.
		if ( /^\s*(?:[-*]|\d+\.) /.test( line ) ) {
			const listLines = [];
			let j = i;
			while (
				j < lines.length &&
				/^\s*(?:[-*]|\d+\.) /.test( lines[ j ] )
			) {
				listLines.push( lines[ j ] );
				j++;
			}
			const parsed = parseListLines( listLines );
			if ( parsed ) {
				out.push(
					serializeList( parsed.node.items, parsed.node.ordered, 0 )
				);
				i = j;
				continue;
			}
		}

		// Image on its own line.
		const img = line.match( /^!\[([^\]]*)\]\(([^()\s]+)\)\s*$/ );
		if ( img ) {
			out.push(
				`<!-- wp:image -->\n<figure class="wp-block-image"><img src="${ img[ 2 ] }" alt="${ img[ 1 ] }"/></figure>\n<!-- /wp:image -->`
			);
			i++;
			continue;
		}

		// Paragraph: consume until blank line or a line starting other syntax.
		const para = [ line ];
		let j = i + 1;
		while (
			j < lines.length &&
			lines[ j ].trim() !== '' &&
			! /^(#{1,6} |```|---\s*$|\||<!-- wp:|\s*(?:[-*]|\d+\.) |!\[)/.test(
				lines[ j ]
			)
		) {
			para.push( lines[ j ] );
			j++;
		}
		out.push(
			`<!-- wp:paragraph -->\n<p>${ mdToInline(
				para.join( '\n' )
			) }</p>\n<!-- /wp:paragraph -->`
		);
		i = j;
	}
	return out.join( '\n\n' );
}

/* ------------------------------------------------------------------ *
 * Front matter
 * ------------------------------------------------------------------ */

export function parseFrontMatter( fileText ) {
	const m = fileText.match( /^---\n([\s\S]*?)\n---\n\n?/ );
	if ( ! m ) return { meta: {}, body: fileText };
	const meta = {};
	for ( const line of m[ 1 ].split( '\n' ) ) {
		const kv = line.match( /^([a-z_]+): (.*)$/ );
		if ( ! kv ) continue;
		let value = kv[ 2 ];
		if ( value.startsWith( '"' ) ) value = JSON.parse( value );
		else if ( /^\d+$/.test( value ) ) value = Number( value );
		meta[ kv[ 1 ] ] = value;
	}
	return { meta, body: fileText.slice( m[ 0 ].length ) };
}

export function serializeFrontMatter( meta, body ) {
	const lines = [];
	for ( const [ key, value ] of Object.entries( meta ) ) {
		if ( value === undefined || value === null ) continue;
		lines.push(
			`${ key }: ${
				typeof value === 'number' ? value : JSON.stringify( value )
			}`
		);
	}
	return `---\n${ lines.join( '\n' ) }\n---\n\n${ body }`;
}
