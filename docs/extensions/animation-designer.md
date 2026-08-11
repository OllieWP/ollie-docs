---
id: 67372
title: "Animation Designer"
status: "draft"
order: 2
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=gMcDO9rCNgc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=gMcDO9rCNgc
</div></figure>
<!-- /wp:embed -->

Animation Designer adds beautiful entrance and hover animations to your blocks — fades, zooms, and staggered reveals that trigger as visitors scroll — all from the block sidebar, no code required.

It works with the blocks you build layouts from: Group, Columns, Column, Heading, Paragraph, Image, Buttons, Cover, and Post Template.

## Adding an Animation

Select a supported block and open the **Animation** panel in the **Styles** tab of the block sidebar (there's also an Animation shortcut in the block toolbar). Choose an **Animation Type**:

- **Fade In**, **Fade In Up**, **Fade In Down**, **Fade In Left**, **Fade In Right** — classic entrance fades, with or without movement.
- **Fade In Words** — headings and paragraphs can fade in one word at a time, with a **Word Delay** slider controlling the rhythm.
- **Zoom** and **Pulse** — scale-based entrances.
- **Scale on Hover** — the block gently grows when hovered.
- **Zoom Background on Hover** — Cover blocks only; the background image zooms while the block stays put.

Then shape the motion:

- **Duration** — how long the animation runs (0.1–5 seconds).
- **Delay** — wait before it starts.
- **Scale** and **Distance** — how far zoom and movement animations travel.

Use the play button in the panel to preview the animation right in the editor.

## Animate on Scroll

Turn on **Animate on Scroll** and the animation waits until the block enters the viewport — the classic reveal-as-you-scroll effect. **Animate Once** (on by default) plays it only on the first visit into view, and **Scroll Offset** fine-tunes exactly when it fires relative to the viewport edge.

## Sequential Animations

On container blocks — Groups, Columns, grids, and Post Templates — a toggle like **Animate group items sequentially** staggers the animation across each child item, with **Delay between animations** controlling the cascade. One setting on the parent, and every card, column, or post animates in turn.

## Animation Presets

Dialed in something you love? Use **Save As Preset** to store the whole configuration under a name, then apply it to any other block from the **Animation Preset** dropdown. Presets are synced: edit a preset once and every block using it updates everywhere on your site. You can update or delete presets right from the panel — deleting one removes it from all blocks that used it.

## Good to Know

- Visitors who have reduced motion enabled in their system settings automatically see your content with no animations at all — no setup required.
- Animations run on lightweight, dependency-free code that stays inactive on pages without animated blocks.
- Fade In Words previews on the frontend rather than in the editor canvas.
