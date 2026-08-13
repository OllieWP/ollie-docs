<?php
/**
 * 301 redirects for the docs restructure (generated from ollie-docs/MIGRATION.md).
 *
 * Drop into Ollie Website Enhancer (require it from the main plugin file)
 * or upload to wp-content/mu-plugins/ as-is. Safe to remove a year after
 * the migration once search engines and inbound links have caught up.
 */

defined( 'ABSPATH' ) || exit;

// Priority 1: run before core's canonical/old-slug guessing (priority 10),
// which otherwise guesses wrong for section URLs like /docs/ollie-pro/
// (it prefix-matches to /docs/…/ollie-pro-dashboard/).
add_action( 'template_redirect', function () {
	$path = untrailingslashit( wp_parse_url( $_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH ) ?? '' );
	// Section landing pages exist only to parent their sections, so they
	// redirect to their intro docs unconditionally (they are real published
	// pages and would never hit the 404-gated map above).
	$always = array(
		'/docs/getting-started' => '/docs/getting-started/getting-started-intro/',
		'/docs/patterns' => '/docs/patterns/pattern-library-intro/',
		'/docs/extensions' => '/docs/extensions/extensions-intro/',
		'/docs/theme' => '/docs/theme/ollie-theme-intro/',
		'/docs/support' => '/docs/support/account-support-intro/',
	);
	if ( isset( $always[ $path ] ) ) {
		wp_safe_redirect( home_url( $always[ $path ] ), 301 );
		exit;
	}
	if ( ! is_404() ) {
		return;
	}
	$map = array(
		'/docs/ollie-block-theme' => '/docs/theme/ollie-theme-intro/',
		'/docs/ollie-block-theme/getting-started' => '/docs/getting-started/getting-started-intro/',
		'/docs/ollie-block-theme/wordpress-block-theme' => '/docs/theme/wordpress-block-theme/',
		'/docs/ollie-block-theme/block-theme-structure' => '/docs/theme/block-theme-structure/',
		'/docs/ollie-block-theme/ollie-color-palette' => '/docs/theme/ollie-color-palette/',
		'/docs/ollie-block-theme/disable-ollie-styles' => '/docs/theme/disable-ollie-styles/',
		'/docs/ollie-block-theme/ollie-changelog' => '/docs/theme/ollie-changelog/',
		'/docs/ollie-pro' => '/docs/getting-started/getting-started-intro/',
		'/docs/ollie-pro/ollie-pro-intro' => '/docs/getting-started/ollie-pro-intro/',
		'/docs/ollie-pro/ollie-pro-dashboard' => '/docs/getting-started/ollie-pro-dashboard/',
		'/docs/ollie-pro/ollie-pro-pattern-library' => '/docs/patterns/pattern-library-intro/',
		'/docs/ollie-pro/ollie-pro-extensions' => '/docs/extensions/extensions-intro/',
		'/docs/ollie-pro/carousel-designer' => '/docs/extensions/carousel-designer/',
		'/docs/ollie-pro/site-wide-authentication' => '/docs/support/site-wide-authentication/',
		'/docs/ollie-pro/using-ollie-pro-on-local-and-staging-sites' => '/docs/support/using-ollie-pro-on-local-and-staging-sites/',
		'/docs/ollie-pro/upgrade-your-subscription' => '/docs/support/upgrade-your-subscription/',
		'/docs/how-to-make-a-carousel-in-the-block-editor' => '/docs/extensions/carousel-designer/',
		'/docs/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor' => '/docs/extensions/carousel-designer/',
		'/docs/general' => '/docs/support/account-support-intro/',
		'/docs/general/ollie-support' => '/docs/support/ollie-support/',
		'/docs/general/resources' => '/docs/support/resources/',
		'/docs/block-based-resources' => '/docs/support/block-based-resources/',
		'/docs/blocks/how-to-make-a-carousel-in-the-block-editor' => '/docs/extensions/carousel-designer/',
		'/docs/blocks/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor' => '/docs/extensions/carousel-designer/',
		'/docs/blocks/carousel-designer' => '/docs/extensions/carousel-designer/',
		'/docs/blocks' => '/docs/extensions/extensions-intro/',
	);
	if ( isset( $map[ $path ] ) ) {
		wp_safe_redirect( home_url( $map[ $path ] ), 301 );
		exit;
	}
}, 1 );
