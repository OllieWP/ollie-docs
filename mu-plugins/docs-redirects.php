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
		'/docs/learn-wordpress' => '/docs/learn-wordpress/site-editor-basics/',
		'/docs/design' => '/docs/design/style-variations/',
		'/docs/build' => '/docs/build/pattern-library-intro/',
		'/docs/ollie-ai' => '/docs/ollie-ai/ai-in-the-editor/',
		'/docs/woocommerce' => '/docs/woocommerce/ollie-for-woocommerce/',
		'/docs/support' => '/docs/support/site-wide-authentication/',
	);
	if ( isset( $always[ $path ] ) ) {
		wp_safe_redirect( home_url( $always[ $path ] ), 301 );
		exit;
	}
	if ( ! is_404() ) {
		return;
	}
	$map = array(
		'/docs/ollie-block-theme' => '/docs/learn-wordpress/wordpress-block-theme/',
		'/docs/ollie-block-theme/getting-started' => '/docs/getting-started/getting-started-intro/',
		'/docs/ollie-block-theme/wordpress-block-theme' => '/docs/learn-wordpress/wordpress-block-theme/',
		'/docs/ollie-block-theme/block-theme-structure' => '/docs/support/block-theme-structure/',
		'/docs/ollie-block-theme/ollie-color-palette' => '/docs/design/ollie-color-palette/',
		'/docs/ollie-block-theme/disable-ollie-styles' => '/docs/support/disable-ollie-styles/',
		'/docs/ollie-block-theme/ollie-changelog' => '/docs/support/ollie-changelog/',
		'/docs/ollie-pro' => '/docs/getting-started/getting-started-intro/',
		'/docs/ollie-pro/ollie-pro-intro' => '/docs/getting-started/ollie-pro-intro/',
		'/docs/ollie-pro/ollie-pro-dashboard' => '/docs/getting-started/ollie-pro-dashboard/',
		'/docs/ollie-pro/ollie-pro-pattern-library' => '/docs/build/pattern-library-intro/',
		'/docs/ollie-pro/ollie-pro-extensions' => '/docs/getting-started/extensions-intro/',
		'/docs/ollie-pro/carousel-designer' => '/docs/build/carousel-designer/',
		'/docs/ollie-pro/site-wide-authentication' => '/docs/support/site-wide-authentication/',
		'/docs/ollie-pro/using-ollie-pro-on-local-and-staging-sites' => '/docs/support/using-ollie-pro-on-local-and-staging-sites/',
		'/docs/ollie-pro/upgrade-your-subscription' => '/docs/support/upgrade-your-subscription/',
		'/docs/how-to-make-a-carousel-in-the-block-editor' => '/docs/build/carousel-designer/',
		'/docs/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor' => '/docs/build/carousel-designer/',
		'/docs/general' => '/docs/support/site-wide-authentication/',
		'/docs/general/ollie-support' => '/docs/support/ollie-support/',
		'/docs/general/resources' => '/docs/support/resources/',
		'/docs/block-based-resources' => '/docs/support/block-based-resources/',
		'/docs/blocks/how-to-make-a-carousel-in-the-block-editor' => '/docs/build/carousel-designer/',
		'/docs/blocks/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor' => '/docs/build/carousel-designer/',
		'/docs/blocks/carousel-designer' => '/docs/build/carousel-designer/',
		'/docs/theme/ollie-theme-intro' => '/docs/learn-wordpress/wordpress-block-theme/',
		'/docs/blocks' => '/docs/getting-started/extensions-intro/',
		'/docs/getting-started/site-editor-basics' => '/docs/learn-wordpress/site-editor-basics/',
		'/docs/getting-started/customizing-your-header-and-footer' => '/docs/design/customizing-your-header-and-footer/',
		'/docs/extensions/extensions-intro' => '/docs/getting-started/extensions-intro/',
		'/docs/theme/wordpress-block-theme' => '/docs/learn-wordpress/wordpress-block-theme/',
		'/docs/theme/style-variations' => '/docs/design/style-variations/',
		'/docs/theme/global-styles' => '/docs/design/global-styles/',
		'/docs/theme/ollie-color-palette' => '/docs/design/ollie-color-palette/',
		'/docs/theme/block-theme-structure' => '/docs/support/block-theme-structure/',
		'/docs/theme/using-ollie-pro-with-a-custom-theme' => '/docs/support/using-ollie-pro-with-a-custom-theme/',
		'/docs/theme/disable-ollie-styles' => '/docs/support/disable-ollie-styles/',
		'/docs/theme/ollie-changelog' => '/docs/support/ollie-changelog/',
		'/docs/patterns/pattern-library-intro' => '/docs/build/pattern-library-intro/',
		'/docs/patterns/pattern-library-tips' => '/docs/build/pattern-library-tips/',
		'/docs/patterns/creating-your-own-patterns' => '/docs/build/creating-your-own-patterns/',
		'/docs/patterns/understanding-patterns' => '/docs/learn-wordpress/understanding-patterns/',
		'/docs/patterns/patterns-vs-reusable-blocks' => '/docs/learn-wordpress/patterns-vs-reusable-blocks/',
		'/docs/extensions/menu-designer' => '/docs/design/menu-designer/',
		'/docs/extensions/motion-gradient-and-texture' => '/docs/design/motion-gradient-and-texture/',
		'/docs/extensions/animation-designer' => '/docs/design/animation-designer/',
		'/docs/extensions/hover-colors' => '/docs/design/hover-colors/',
		'/docs/extensions/carousel-designer' => '/docs/build/carousel-designer/',
		'/docs/extensions/smart-sync' => '/docs/build/smart-sync/',
		'/docs/extensions/advanced-grid' => '/docs/build/advanced-grid/',
		'/docs/extensions/advanced-columns' => '/docs/build/advanced-columns/',
		'/docs/extensions/advanced-group' => '/docs/build/advanced-group/',
		'/docs/extensions/responsive-controls' => '/docs/build/responsive-controls/',
		'/docs/extensions/video-modal' => '/docs/build/video-modal/',
		'/docs/extensions/button-icons' => '/docs/build/button-icons/',
		'/docs/extensions/text-wrap' => '/docs/build/text-wrap/',
		'/docs/extensions/class-manager' => '/docs/build/class-manager/',
		'/docs/extensions/keyboard-shortcuts' => '/docs/build/keyboard-shortcuts/',
		'/docs/extensions/how-to-make-a-carousel-in-the-block-editor' => '/docs/build/how-to-make-a-carousel-in-the-block-editor/',
		'/docs/extensions/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor' => '/docs/build/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor/',
		'/docs/extensions/ollie-ai' => '/docs/ollie-ai/ai-in-the-editor/',
		'/docs/extensions/ollie-mcp' => '/docs/ollie-ai/ollie-mcp/',
		'/docs/extensions/ollie-for-woocommerce' => '/docs/woocommerce/ollie-for-woocommerce/',
		'/docs/theme' => '/docs/learn-wordpress/wordpress-block-theme/',
		'/docs/extensions' => '/docs/getting-started/extensions-intro/',
		'/docs/patterns' => '/docs/build/pattern-library-intro/',
		'/docs/support/account-support-intro' => '/docs/support/site-wide-authentication/',
	);
	if ( isset( $map[ $path ] ) ) {
		wp_safe_redirect( home_url( $map[ $path ] ), 301 );
		exit;
	}
}, 1 );
