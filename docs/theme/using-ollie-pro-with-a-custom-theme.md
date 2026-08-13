---
id: 67640
title: "Using Ollie Pro with a Custom Theme"
status: "draft"
order: 5
excerpt: "Run Ollie Pro on your own Ollie-based theme — the freedom, the requirements, and the trade-offs."
---

Ollie Pro can run on your own theme — not just the official Ollie theme. If you're an agency or freelancer who maintains a base theme for client work, you can build it on Ollie's foundation and keep every Ollie Pro feature: the pattern library, the extensions, the blocks, all of it.

**Before you go this route, know what you're signing up for.** This is an advanced, self-supported path. Ollie Pro's features are built on the Ollie design system — the color slots, spacing and typography presets, and style conventions defined in the theme — and we can only guarantee how they look and behave on the official theme. When you bring your own theme, keeping it compatible is your responsibility: our support team can help with Ollie Pro itself, but not with building or maintaining bespoke themes. In exchange, you get complete freedom over your foundation. We think that's a fair trade — and this doc gives you everything you need to make it work.

## Why the Design System Matters

Practically everything in Ollie Pro leans on the theme underneath it. Patterns reference the theme's color palette slots. Extensions use its spacing presets. Motion Gradient reads its color variables; typography controls offer its font presets. On the Ollie theme, all of this snaps together invisibly.

A theme that doesn't provide those pieces will still technically run Ollie Pro — but patterns can arrive unstyled, controls can offer empty preset lists, and designs won't look like the previews. The goal of a custom Ollie-based theme is to keep the design system contract intact while making everything else your own.

## The Recommended Approach

Don't start from scratch — start from Ollie:

1. Create your theme with `theme.json` and the related style assets copied from the Ollie theme as your baseline. That carries over the design system contract: the palette slots, spacing scale, typography presets, and style slugs that Ollie Pro features expect.
2. Make it yours from there — your defaults, your templates, your patterns, your opinions. The parts you customize on top of the contract are fully yours to shape.
3. Keep it maintained. When Ollie's design system evolves — new presets, new style slugs used by new features — your theme needs to pick those changes up to stay compatible with the features that rely on them.

As long as the contract holds, Ollie Pro's features work the way they do on the official theme.

## Making Ollie Pro Recognize Your Theme

Ollie Pro activates when it detects a compatible theme. Two ways to qualify:

**Name your parent theme `ollie-something`.** Any parent theme whose directory slug starts with `ollie-` — say, `ollie-agency` — is treated as compatible automatically. Child themes built on such a parent work too, no configuration needed.

**Or use the filter.** If your theme's name is entirely your own, declare compatibility from your theme's `functions.php`:

```
add_filter( 'ollie_pro_is_theme_compatible', function( $is_compatible, $theme ) {
	return $is_compatible || 'my-parent-theme' === $theme->get_template();
}, 10, 2 );
```

The filter is the source of truth: returning `false` from it disables Ollie Pro for the active theme entirely, which you can also use to switch Ollie Pro off deliberately in unusual setups.

One nicety: Ollie Pro's minimum-version check applies only to the official Ollie theme, so your custom theme's own versioning is entirely your business.

## Good to Know

- Your theme must provide the Ollie design system: the `theme.json` settings, style slugs, stylesheets, and assets that Ollie Pro features reference. Copying them from Ollie and keeping them current is the whole game.
- Test the Ollie Pro features you actually use after each significant theme change — patterns, the extensions you rely on, and anything color- or spacing-driven are the sensitive spots.
- Compatibility of a custom theme is the theme author's responsibility. If something looks off on your theme but works on the official Ollie theme, the difference between the two theme.json files is the first place to look.
- If you just want a lighter touch than a whole custom theme, a [child theme](/docs/support/resources/) of the official Ollie theme gets you customization with none of the maintenance burden — Ollie updates still flow to you.
