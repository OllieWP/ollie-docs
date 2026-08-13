---
id: 67371
title: "Advanced Group Controls"
status: "publish"
order: 12
excerpt: "Clickable group cards, mobile row stacking, and smarter sticky headers for Group blocks."
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=x2iPdgkgzfM","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=x2iPdgkgzfM
</div></figure>
<!-- /wp:embed -->

Advanced Group Controls gives the humble Group block three superpowers: whole-block links (think clickable cards), smarter mobile stacking for rows, and professional sticky-positioning behaviors.

## Clickable Groups

Select a Group, Column, or Cover block and click the **Link** icon in the block toolbar. Paste any URL and the entire block becomes clickable — the classic "whole card is a link" pattern, done accessibly and without wrapping hacks.

Inside a Query Loop it gets better: choose **Link to current post** and every card in the loop links to its own post automatically. In a Terms Query, **Link to current term** does the same for category and tag cards.

Links, buttons, and forms inside a linked group keep working normally — clicking them does their own thing, clicking anywhere else follows the card link.

## Row Stacking

On a Row (horizontal group), turn on **Stack row on mobile** to switch it to a vertical stack on small screens (below 600px). Compared to letting content wrap, this gives you a predictable, deliberate breakpoint — logos, button pairs, and meta rows stack exactly when you expect. On vertical Stack layouts you'll also find **Stretch full height**, which makes the group fill its parent — the key to equal-height cards in a grid.

## Smarter Sticky

When a Group's position is set to **Sticky** (in the Position panel), four new controls appear:

- **Hide on Scroll Down** — the sticky element slides away as visitors scroll down and glides back the moment they scroll up. The modern header behavior you see on polished sites everywhere.
- **Unstick on Mobile** — disable stickiness below 600px, where screen space is precious.
- **Top Offset** — how far from the top edge the block sticks (it accounts for the WordPress admin bar automatically).
- **Z-Index Position** — control stacking when the sticky element needs to sit above (or below) other content.

## Tips

- The blog-grid recipe: Query Loop → Group card per post → **Link to current post** → hover colors from the Hover Colors extension. Fully clickable, fully accessible cards in a minute.
- The header recipe: make your header group sticky, set a small Top Offset, and enable **Hide on Scroll Down** — content gets the full viewport while the nav stays one scroll-up away.
