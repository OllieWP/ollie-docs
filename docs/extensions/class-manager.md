---
id: 67374
title: "CSS Class Manager"
status: "publish"
order: 4
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=z3fcun2hiOM","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=z3fcun2hiOM
</div></figure>
<!-- /wp:embed -->

Class Manager turns WordPress's plain "Additional CSS class(es)" text field into a real styling system: a searchable library of reusable classes, applied as neat removable tags, each with its own CSS you write once and use anywhere — including hover, focus, and responsive styles.

## Getting Started

Select any block and open the **Advanced** panel in the sidebar. Click **Use Ollie Class Manager** and your block's existing classes migrate into the manager automatically (you can always use **Switch Back** to return to the plain field — nothing is lost).

From then on, the Advanced panel gives you a smart class field: **type or search for a class** and pick from your saved library, or type a new name to create one on the spot. Applied classes appear as tags you can remove with a click. There's also a **Custom Classes** dropdown in every block's toolbar for a quick look at what's applied.

## Writing CSS

Click **Manage Classes and CSS** (or a class tag, or run **Open Class Manager** from the command palette) to open the manager. Select a class and write CSS for it — just the rules; the selector is added for you:

- **State tabs** — write separate rules for **Base**, **Hover**, **Focus**, **Active**, and **Disabled** states, no pseudo-selector syntax required.
- **Breakpoints** — one-click helpers insert **Tablet (780px)** and **Mobile (600px)** media query blocks.
- **Variables** — browse and insert your theme's CSS variables (colors, spacing, typography presets) so custom CSS stays connected to your design system.

Changes preview live in the editor as you type. Alongside **Block Styles** you'll also find a **Global Styles** tab for site-wide custom CSS, and a **Compiled CSS** tab where you can copy or download everything the manager generates — handy if you ever want to move your styles into a theme.

## Smart Loading and Usage Tracking

Class Manager only loads a class's CSS on pages where the class is actually used, so your site never carries dead styles. And before you rename or delete anything, the **Class Usage** panel shows exactly which published pages use the class — deleting a class warns you if it's still in use somewhere.

## Tips

- Build utility classes for the tweaks you repeat — a text gradient, a card shadow, a max-width helper — and apply them anywhere in two keystrokes.
- Use the state tabs for link and button treatments instead of writing `:hover` rules by hand.
- The sidebar view of the manager is great for iterating: it stays open beside the canvas and edits whatever block you have selected.
