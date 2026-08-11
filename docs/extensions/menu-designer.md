---
id: 67377
title: "Menu Designer"
status: "publish"
order: 3
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=UXWOafpBn38","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=UXWOafpBn38
</div></figure>
<!-- /wp:embed -->

Menu Designer brings real design freedom to WordPress navigation. Dropdown menus, mega menus, and mobile menus become block canvases — build them with images, buttons, columns, forms, product grids, or any other block, using the same editor you design pages with. No separate menu interface, no settings maze, no code.

## How It Works

Menus you design are saved as **template parts** — the same reusable pieces your header and footer are made of. That one idea unlocks everything else:

- You design menus with **any WordPress block**, with full access to your theme's fonts, colors, and spacing.
- Menus are reusable: create several dropdown or mobile designs and use different ones in different navigation blocks across your site.
- They're portable: copy a menu design between sites like any block content.

There are two pieces to know: the **Dropdown Menu block**, which you place inside a Navigation block, and the **Mobile Menu panel**, which appears on the Navigation block itself.

## Building a Dropdown or Mega Menu

1. Go to **Appearance → Editor → Patterns** and edit your **Header** template part.
2. Inside the Navigation block, add the **Dropdown Menu** block and give it a label with the **Text** setting — this is the menu item visitors see.
3. In the block's Settings panel, choose an existing dropdown template or click **Create a new one**.
4. Design the menu: pick a pre-designed pattern or start blank and build with blocks — a simple link list, a two-column layout with a featured image, or a full mega menu with calls to action.
5. Save, and configure the details:

- **Width** — content width, wide width, full width, or a **custom width** in pixels (600px by default). Full width is your mega menu setting; custom width is perfect for compact dropdowns.
- **Justification** — align the dropdown to the left, center, or right of its menu item.
- **Top spacing** — the gap between your navigation and the opened menu, so the dropdown clears your header cleanly.
- **Open on hover** — open the menu on hover instead of click.
- **Description** and **Title Attribute** — optional link attributes for accessibility and SEO polish.

For mobile, you can disable a dropdown entirely when the navigation collapses and send tappers to a **Fallback URL** instead — the right move when a wide hover-driven mega menu doesn't translate to a small touchscreen.

## Building a Mobile Menu

Your mobile menu doesn't have to be the default collapsed list — it can be a designed, branded experience:

1. Edit your **Header** template part and select the **Navigation** block.
2. In the Settings tab, find the **Mobile Menu** panel.
3. Select an existing mobile menu template or click **Create a new one**, then design it with any blocks — big touch-friendly links, a search bar, social icons, a call-to-action button.
4. Save and select your menu in the panel.

Then fine-tune:

- **Change mobile menu breakpoint** — control the screen width where the mobile menu takes over (600px by default).
- **Colors** — set the **Mobile menu background**, **Mobile toggle background**, and **Mobile toggle icon** in the Navigation block's color settings.

## Pre-Designed Menu Templates

With the free Ollie theme active, Menu Designer includes professionally designed starter templates — mobile menus, dropdowns, and mega menu layouts built on Ollie's design system. Pick one when creating a menu and customize instead of starting blank. Ollie Pro's pattern library adds full menu collections on top of that.

Theme and plugin developers can ship their own starter patterns too: any pattern registered with `Block Types: core/template-part/menu` appears as an option when creating a new menu.

## Good to Know

- **Smart positioning** — dropdowns detect screen edges and reposition themselves so they're never cut off, across browsers and devices.
- **Accessible by default** — proper ARIA attributes, full keyboard navigation, and screen reader compatibility, for both dropdowns and mobile menus.
- **Fast** — built on WordPress's modern Interactivity API, with assets loading only on pages that use a menu. No jQuery, no bloat.
- **Theme-friendly** — works with any theme that supports the WordPress Navigation block. If you ever deactivate the plugin, your menu template parts remain as regular template parts; only the dropdown and mobile behavior pauses until you reactivate.
- **Also on WordPress.org** — Menu Designer is available as a free standalone plugin, so your menus aren't locked to Ollie Pro.

## Tips

- Mega menu recipe: set **Width** to full width, then use a Columns block inside — links in the first columns, a featured image or promo card in the last.
- Keep hover-open for desktop-dense navigation, but pair it with a mobile fallback URL so touch users get a direct destination instead of a hover interaction.
- Since menus are template parts, you can A/B different navigation designs by swapping which template a Dropdown Menu block points to — no rebuilding.
