---
title: "Advanced Grid Controls"
status: "draft"
order: 12
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=PHjaO4uOwxE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=PHjaO4uOwxE
</div></figure>
<!-- /wp:embed -->

Advanced Grid Controls adds real responsive breakpoints to the WordPress Grid layout. Core grids give you one configuration for every screen size; this extension lets you say "4 columns on desktop, 2 below 1024px, 1 below 600px" — the control CSS developers have, without the CSS.

## Using It

Give a **Group**, **Post Template**, or **Term Template** block the **Grid** layout, and a **Grid Breakpoints** panel appears in the sidebar.

1. Click **Add new breakpoint** and enter a screen width in pixels — or use the one-click common sizes: **600px**, **768px**, **1024px**. You can add up to five breakpoints.
2. For each breakpoint, set what the grid becomes below that width:
	- On a **manual grid** (fixed column count), choose the number of **Columns** (1–12).
	- On an **auto grid**, set the **Minimum column width**, and the grid keeps fitting as many columns as that width allows.
3. Edit or delete breakpoints anytime from the **Edit breakpoint** dropdown.

The extension follows whichever grid mode your block already uses — no duplicate settings, it simply extends the core control per breakpoint. When a breakpoint sets the grid to a single column, items spanning multiple columns or rows collapse cleanly too.

## Tips

- Two breakpoints cover most designs: tablet (768px or 1024px) and phone (600px). Start there before adding more.
- Auto grids with a per-breakpoint minimum width are the low-maintenance option — you tune the card size, not the column math.
- This pairs perfectly with Post Templates in a Query Loop: your blog archive gets deliberate tablet and phone layouts instead of whatever falls out of the default.
