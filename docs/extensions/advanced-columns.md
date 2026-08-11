---
id: 67369
title: "Advanced Column Controls"
status: "draft"
order: 11
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=bAh5h221qiw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=bAh5h221qiw
</div></figure>
<!-- /wp:embed -->

Advanced Column Controls solves one of the block editor's oldest annoyances: when columns stack on mobile, they always stack in source order — even when that puts the wrong thing first. This extension lets you control exactly what order columns appear in on small screens.

## The Problem It Solves

Picture the classic alternating layout: image left / text right, then text left / image right. On desktop it zig-zags beautifully. On mobile it stacks as image, text, text, image — two text blocks colliding in the middle. What you want is image, text, image, text.

## Using It

Both controls appear once the core **Stack on mobile** setting is enabled on your Columns block (it's on by default):

- **Reverse direction on mobile** — on the Columns block: flips the stacking order of the whole row. The quick fix for a single image/text row that should lead with the text.
- **Order on mobile** — on each individual Column: pick the exact position (1, 2, 3…) that column should occupy in the mobile stack. Columns you don't number simply follow after the numbered ones.

Changes preview live when you switch the editor to mobile view, and the reordering kicks in on the frontend below WordPress's standard column-stacking width (781px).

## Tips

- For alternating image/text sections, set **Reverse direction on mobile** on every other Columns row — the zig-zag becomes a clean image-first rhythm on phones.
- Reordering is pure CSS — screen readers and keyboard users still get the document's logical order, so use it for visual polish, not for changing meaning.
