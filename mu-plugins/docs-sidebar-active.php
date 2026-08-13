<?php
/**
 * Docs sidebar: open the accordion section containing the current doc and
 * highlight the active link. Entirely server-side — the correct state is
 * in the HTML before first paint, and the accordion's Interactivity API
 * hydration agrees because its openByDefault context is rewritten too.
 *
 * Upload to wp-content/mu-plugins/ on olliewp.com.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Open the accordion item whose panel links to the current doc (or, on a
 * section landing page, whose panel links to the section's children);
 * close the rest. Only touches accordion items containing a query loop,
 * which distinguishes the docs sidebar from any other accordion.
 */
add_filter( 'render_block_core/accordion-item', function ( $content ) {
	if ( ! is_singular( 'docs' ) || false === strpos( $content, 'wp-block-query' ) ) {
		return $content;
	}

	$permalink = esc_url( get_permalink( get_queried_object_id() ) );
	$open      = false !== strpos( $content, 'href="' . $permalink . '"' );
	if ( ! $open ) {
		// Section landing page: its children's URLs live under it.
		$open = (bool) preg_match(
			'#href="' . preg_quote( untrailingslashit( $permalink ), '#' ) . '/[^"]+"#',
			$content
		);
	}

	if ( $open ) {
		$content = str_replace( '&quot;openByDefault&quot;: false', '&quot;openByDefault&quot;: true', $content );
		$content = preg_replace( '/class="wp-block-accordion-item (?!is-open)/', 'class="wp-block-accordion-item is-open ', $content, 1 );
		$content = str_replace( 'aria-expanded="false"', 'aria-expanded="true"', $content );
		// Un-inert the panel so it is visible pre-hydration and without JS.
		$content = preg_replace( '/(<div[^>]*?)\s+inert(="[^"]*")?([^>]*wp-block-accordion-panel)/', '$1$3', $content, 1 );
	} else {
		$content = str_replace( '&quot;openByDefault&quot;: true', '&quot;openByDefault&quot;: false', $content );
		$content = preg_replace( '/class="wp-block-accordion-item is-open\s*/', 'class="wp-block-accordion-item ', $content, 1 );
		$content = str_replace( 'aria-expanded="true"', 'aria-expanded="false"', $content );
		if ( ! preg_match( '/<div[^>]*inert[^>]*wp-block-accordion-panel/', $content ) ) {
			$content = preg_replace(
				'/<div ([^>]*class="[^"]*wp-block-accordion-panel)/',
				'<div inert $1',
				$content,
				1
			);
		}
	}

	return $content;
}, 10, 1 );

/**
 * Mark the sidebar link for the doc being viewed. Sidebar titles are the
 * level-4 linked post titles inside the query loops; the doc's own page
 * title is a different level, so it is never touched.
 */
add_filter( 'render_block_core/post-title', function ( $content, $block, $instance ) {
	if (
		! is_singular( 'docs' ) ||
		empty( $block['attrs']['isLink'] ) ||
		4 !== (int) ( $block['attrs']['level'] ?? 0 ) ||
		(int) ( $instance->context['postId'] ?? 0 ) !== get_queried_object_id()
	) {
		return $content;
	}
	return str_replace( 'class="', 'class="ollie-doc-current ', $content );
}, 10, 3 );

/**
 * Canonical overrides for docs that mirror blog content: search engines
 * consolidate ranking signals on the blog post while the doc stays
 * available in the docs sidebar. Keyed by doc post id.
 */
add_action( 'template_redirect', function () {
	if ( ! is_singular( 'docs' ) ) {
		return;
	}
	$canonical_map = array(
		67750 => 'https://olliewp.com/wordpress-patterns-vs-reusable-blocks/', // Patterns vs Reusable Blocks
	);
	$doc_id = get_queried_object_id();
	if ( ! isset( $canonical_map[ $doc_id ] ) ) {
		return;
	}
	remove_action( 'wp_head', 'rel_canonical' );
	add_action( 'wp_head', function () use ( $canonical_map, $doc_id ) {
		echo '<link rel="canonical" href="' . esc_url( $canonical_map[ $doc_id ] ) . '" />' . "\n";
	} );
} );

/** Active-link styling, printed only on doc pages. */
add_action( 'wp_head', function () {
	if ( ! is_singular( 'docs' ) ) {
		return;
	}
	echo '<style id="ollie-docs-sidebar-active">'
		. '.ollie-doc-current a{color:var(--wp--preset--color--primary);font-weight:500;}'
		. '</style>';
} );
