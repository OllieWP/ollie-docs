---
id: 67379
title: "Responsive Controls"
status: "publish"
order: 13
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=5Wv_3MfU7ws","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=5Wv_3MfU7ws
</div></figure>
<!-- /wp:embed -->

Responsive Controls brings per-device settings to the block editor — the feature WordPress users have wanted forever. Set your typography and spacing for desktop, then switch the editor's device preview to Tablet or Mobile and set different values for smaller screens. No custom CSS, no media queries.

## How It Works

There are no extra tabs to learn. Use the **device preview** dropdown in the editor toolbar — the same Desktop / Tablet / Mobile switcher you already use to preview layouts:

1. Design your block normally on Desktop with the standard controls.
2. Switch the preview to **Tablet** or **Mobile**. The familiar controls are replaced by device-specific versions — **Font size (Tablet)**, **Padding (Mobile)**, and so on.
3. Set your overrides. The canvas is already showing that device's width, so you see exactly what you're getting.

Values cascade sensibly: mobile inherits from tablet, tablet inherits from desktop. You only override what needs to change, and a **Reset all** button clears the current device's spacing overrides in one click.

## What Becomes Responsive

- **Font size** — with your theme's normal size presets, per device.
- **Padding, Margin, and Block spacing** — the full spacing controls, per device.
- **Minimum height** — per device.
- **Max Width** — on paragraphs and headings, at every device size including desktop.
- **Text alignment** — center a heading on mobile that's left-aligned on desktop, right from the toolbar.
- **Justification and Orientation** — on Groups, Rows, and Buttons: change alignment per device, or turn a horizontal Row into a vertical stack on phones.

Supported blocks: Paragraph, Heading, List, Quote, Button, Buttons, Group, Columns, Column, Cover, Site Title, and Post Content. Tablet overrides apply below 768px, mobile below 480px.

## Tips

- The two highest-impact overrides on almost every site: smaller hero heading font sizes on mobile, and reduced section padding on mobile. Those two alone fix most "looks broken on my phone" complaints.
- Everything outputs as lean CSS on the frontend — no JavaScript measuring your screen.
