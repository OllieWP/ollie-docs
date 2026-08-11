# Docs Restructure — Go-Live Checklist

The repo has been reorganized into six sections (Getting Started, Blocks,
Patterns, Extensions, Ollie Theme, Account & Support). **None of this is on
the live site yet.** Running `node scripts/sync.mjs` publishes the whole
restructure at once: re-parents ~20 docs, renames section slugs, and
creates the new Blocks section. Do the steps below in order.

## 1. Sync

```bash
node scripts/sync.mjs --dry-run   # review
node scripts/sync.mjs
```

## 2. Add redirects

Re-parenting changes URLs. Add these 301s (no redirect plugin is installed
on olliewp.com — Redirection is a good fit, or rules in Ollie Website
Enhancer):

| Old URL | New URL |
| --- | --- |
| /docs/ollie-block-theme/ | /docs/theme/ |
| /docs/ollie-block-theme/getting-started/ | /docs/getting-started/ |
| /docs/ollie-block-theme/wordpress-block-theme/ | /docs/theme/wordpress-block-theme/ |
| /docs/ollie-block-theme/block-theme-structure/ | /docs/theme/block-theme-structure/ |
| /docs/ollie-block-theme/ollie-color-palette/ | /docs/theme/ollie-color-palette/ |
| /docs/ollie-block-theme/disable-ollie-styles/ | /docs/theme/disable-ollie-styles/ |
| /docs/ollie-block-theme/ollie-changelog/ | /docs/theme/ollie-changelog/ |
| /docs/ollie-pro/ | /docs/getting-started/ |
| /docs/ollie-pro/ollie-pro-intro/ | /docs/getting-started/ollie-pro-intro/ |
| /docs/ollie-pro/ollie-pro-dashboard/ | /docs/getting-started/ollie-pro-dashboard/ |
| /docs/ollie-pro/ollie-pro-pattern-library/ | /docs/patterns/ |
| /docs/ollie-pro/ollie-pro-extensions/ | /docs/extensions/ |
| /docs/ollie-pro/carousel-designer/ | /docs/blocks/carousel-designer/ |
| /docs/ollie-pro/site-wide-authentication/ | /docs/support/site-wide-authentication/ |
| /docs/ollie-pro/using-ollie-pro-on-local-and-staging-sites/ | /docs/support/using-ollie-pro-on-local-and-staging-sites/ |
| /docs/ollie-pro/upgrade-your-subscription/ | /docs/support/upgrade-your-subscription/ |
| /docs/how-to-make-a-carousel-in-the-block-editor/ | /docs/blocks/how-to-make-a-carousel-in-the-block-editor/ |
| /docs/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor/ | /docs/blocks/how-to-make-a-horizontal-scroll-carousel-in-the-block-editor/ |
| /docs/general/ | /docs/support/ |
| /docs/general/ollie-support/ | /docs/support/ollie-support/ |
| /docs/general/resources/ | /docs/support/resources/ |
| /docs/block-based-resources/ | /docs/support/block-based-resources/ |

## 3. Clean up in wp-admin

- **Trash the old "Ollie Pro" doc (id 60103)** — its content duplicated
  the intro doc; the file is preserved at `_retired/ollie-pro.md`. Sync
  will keep warning about it until it's trashed.
- **Trash the empty untitled draft (id 64517)** — pre-existing junk.

## 4. Finish the Blocks landing page

`docs/blocks/index.md` is created new by the sync, so it has no post id
until then and couldn't include the child-listing query loop the other
section landings have (the Advanced Query Loop block filters by
`parents:[<id>]`). After the first sync writes its id into the front
matter, copy the `wp:query` block from `docs/theme/index.md` into it,
swap the id inside `"parents":[…]`, and sync again.

## 5. Verify

- The docs sidebar shows the six new sections. Sync regenerates the
  `docs-sidebar` template part automatically in the same run (dry-run
  can't preview the Blocks section id, so it just notes the sidebar will
  update once Blocks is created).
- Section landing pages list their children (query loops carry the right
  parent ids).
- Docs navigation/sidebar reflects the new tree (menu orders are set in
  front matter).
- The retired URLs 301 to their new homes.

## Notes

- The `motion-gradient-and-texture` doc is still `status: draft` — flip to
  `publish` in its front matter when ready.
- Video embeds were added from the video library to: Carousel Designer,
  Pattern Library (section landing), and WordPress Block Theme Introduction.
  The extensions overview and color palette docs already had their videos.
