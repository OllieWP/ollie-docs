---
id: 67380
title: "Smart Sync"
status: "publish"
order: 2
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=0OHoSuj4Mcw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=0OHoSuj4Mcw
</div></figure>
<!-- /wp:embed -->

Smart Sync is design at light speed: style one card in a row of pricing columns, one item in a grid, or one slide in a carousel — and the same change applies to all of its siblings automatically. Layout and style stay perfectly consistent, while every item keeps its own text, images, and links.

## How It Works

Build a repeating layout — a Columns block, a grid, a Group of matching cards, or Carousel Slides — and start styling one of the items. The moment you make a style change, a message pops up at the bottom of the editor: **"Sync 3 similar blocks?"**

- Click **Sync** (or press **⌘+Enter** / **Ctrl+Enter**) and the change is applied to every matching sibling — and Smart Sync switches on for that container, so further edits propagate live as you work.
- Ignore or dismiss the message (Escape works too) and nothing syncs; your change stays on the one block.

You can also toggle sync directly: select the container or any of its items and click **Smart Sync blocks** in the block toolbar. When sync is on, the same button reads **Disable Smart Sync**.

## What Syncs — and What Doesn't

Smart Sync separates *design* from *content*:

- **Syncs:** spacing, colors, typography, borders, layout changes, moving or reordering inner blocks, adding or removing elements.
- **Never syncs:** the words in your headings and paragraphs, the images you've chosen, and the links behind your buttons. Each item stays unique where it matters.

Matching is structural — Smart Sync finds siblings built from the same arrangement of blocks, so a stray one-off block in the container is simply left alone.

## Smart Sync for Carousels

Carousel Slides have a dedicated **Smart Sync slides** toggle in the Carousel Settings panel. With it on, redesign one slide and every slide follows — the fastest way to build a polished testimonial or card carousel. See the [Carousel Designer doc](/docs/blocks/carousel-designer/) for the full picture.

## Tips

- Perfect one card completely — spacing, colors, hover states, the lot — before duplicating it, then let Smart Sync handle consistency as you refine.
- Smart Sync works on Columns blocks, grid Groups, Groups with two or more matching items, and Carousel Slides. It needs at least two similar items before the toolbar button and sync prompt appear.
- Everything is a normal editor change under the hood, so undo works exactly as you'd expect.
