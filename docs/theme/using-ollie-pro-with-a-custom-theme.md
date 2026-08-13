---
id: 67640
title: "Using Ollie Pro with a Custom Theme"
status: "publish"
order: 5
excerpt: "Run Ollie Pro on your own Ollie-based theme — the freedom, the requirements, and the trade-offs."
---

Ollie Pro can run on your own theme — not just the official Ollie theme. If you maintain a base theme for agency or client work, you can build it on Ollie's foundation and keep every Ollie Pro feature.

**Know what you're signing up for.** This is an advanced, self-supported path. Ollie Pro is built on the Ollie design system, and we can only guarantee how features look and behave on the official theme. With your own theme, compatibility is your responsibility — our support team can help with Ollie Pro itself, but not with building or maintaining custom themes. In exchange, you get complete freedom over your foundation.

## Why the Design System Matters

Nearly everything in Ollie Pro leans on the theme underneath it: patterns reference the palette slots, extensions use the spacing presets, typography controls offer the theme's font presets. A theme without those pieces will still run Ollie Pro, but patterns arrive unstyled and designs won't match their previews. The goal is to keep that design system contract intact while making everything else your own.

## The Recommended Approach

1. Start your theme with `theme.json` and the related style assets copied from Ollie. That carries over the contract: palette slots, spacing scale, typography presets, and style slugs.
2. Customize from there — your templates, your patterns, your defaults.
3. Keep it maintained. As Ollie's design system evolves, your theme needs to pick up the changes to stay compatible with the features that use them.

## Making Ollie Pro Recognize Your Theme

Two ways to qualify as compatible:

**Name your parent theme `ollie-something`.** Any parent theme whose directory slug starts with `ollie-` — like `ollie-agency` — is compatible automatically, including its child themes.

**Or use the filter.** For any other theme name, declare compatibility in your theme's `functions.php`:

```
add_filter( 'ollie_pro_is_theme_compatible', function( $is_compatible, $theme ) {
	return $is_compatible || 'my-parent-theme' === $theme->get_template();
}, 10, 2 );
```

Returning `false` from the filter disables Ollie Pro entirely. Ollie Pro's minimum-version check only applies to the official theme, so your theme's versioning is your own.

## Good to Know

- If something looks off on your theme but works on the official Ollie theme, diff the two `theme.json` files first.
- After significant theme changes, test the Ollie Pro features you rely on — patterns and anything color- or spacing-driven are the sensitive spots.
- Want customization without the maintenance? A child theme of the official Ollie theme keeps Ollie updates flowing while you override what you need.
