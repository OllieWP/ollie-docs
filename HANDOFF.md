# Docs-as-Code for WordPress — Workflow Breakdown

How the olliewp.com docs system works, why it's built the way it is, and
what it takes to implement the same thing on another site.

## The Idea

Documentation lives as **markdown files in a git repo** — that's the single
source of truth. WordPress is the **publishing surface**: a sync script
converts markdown to Gutenberg block markup and pushes it to the site over
the standard REST API, authenticated with an application password. There is
no plugin to install on the WordPress side and no build step on the server.
The site ends up with completely normal posts — real blocks, editable in
the editor, with revision history — that just happen to be generated.

What this buys you:

- Every doc change is a git commit — history, review, rollback.
- Docs are editable with any tool that edits text files, including AI
  agents (this entire system was operated through Claude Code).
- One command publishes; a dry-run previews exactly what would change.
- The markdown repo becomes a hub other surfaces can consume — in-app
  help, llms.txt, future sites — without touching WordPress again.

## Repository Layout

```
docs/                      ← the content; folder structure = site hierarchy
  getting-started/
    index.md               ← section landing page (parent doc)
    site-editor-basics.md  ← child doc
  extensions/
    ...
scripts/
  export.mjs               ← site → markdown (initial import, absorb wp-admin edits)
  sync.mjs                 ← markdown → site (the publish command)
  lib/convert.mjs          ← lossless blocks ↔ markdown converter
  lib/sidebar.mjs          ← regenerates the sidebar template part
  lib/wp.mjs               ← tiny REST client, credentials from .env
mu-plugins/                ← files uploaded to wp-content/mu-plugins/ on the site
  docs-redirects.php       ← 301s from a restructure (404-gated)
  docs-sidebar-active.php  ← server-side "open current section, highlight link"
_retired/                  ← content removed from the site but preserved
MIGRATION.md               ← the restructure's go-live runbook + redirect map
```

Each file has YAML-ish front matter: `id` (the WP post id — written back
automatically when sync creates a doc), `title`, `status` (publish/draft),
and `order` (menu order). **The folder a file sits in determines its parent
on the site** — moving a file between folders re-parents the doc. Zero
npm dependencies; Node 18+ only.

## The Converter — the Load-Bearing Piece

Gutenberg content is HTML with comment delimiters. Converting it to
markdown naively is lossy, so the converter is deliberately conservative:

- **Prose blocks** (paragraphs, headings, lists, code, tables, separators,
  images) with default attributes convert to clean markdown, both ways.
- **Everything else** — groups, columns, covers, embeds, any block with
  custom attributes — passes through as raw block markup embedded in the
  markdown file. Editors change the text inside those chunks but leave the
  structure alone.
- **The guarantee:** a block is only ever exported as markdown if
  converting that markdown back reproduces the original markup
  **byte-for-byte**. Anything that fails the check stays raw. The result:
  a full export → sync cycle is a verified no-op, so the tooling can never
  corrupt content it didn't understand.

This is the design decision that makes the whole system trustworthy, and
it's what to replicate first if rebuilding elsewhere.

## The Sync Contract

`node scripts/sync.mjs` (with `--dry-run` to preview):

- Compares every local doc against the live site and **only writes docs
  that actually differ** — content, title, slug, status, parent, or order.
- Files without an `id` are **created**, and the new id is written back
  into the file's front matter.
- Parents sync before children; a child's parent id resolves from its
  folder's `index.md`.
- **It never deletes.** Docs on the site with no local file are reported,
  and removal is a deliberate manual step (trash via wp-admin or API),
  with the content preserved in `_retired/` first.
- Direction of truth: the repo wins. If someone edits in wp-admin, run
  `export.mjs` first to pull those edits into markdown, then continue.

`export.mjs` is the inverse: site → markdown, overwriting local files.
Used once for the initial import, and thereafter only to absorb wp-admin
edits.

## The Sidebar as Derived Data

The docs sidebar on the site is a template part: an accordion with one
item per section, each containing a query loop that lists that section's
children by menu order. Two pieces make it fully automatic:

1. **Sync regenerates it.** The script fetches the template part, takes
   the *first existing accordion item as the design template* (so visual
   restyling in the Site Editor survives), and rebuilds one item per
   top-level section — titles, order, and query ids all from the repo.
   Add or rename a section in the repo and the sidebar follows.
2. **A small mu-plugin makes it stateful.** The accordion's open state is
   static markup, so a server-side filter rewrites it per request: the
   section containing the current doc renders open, the active link gets
   a highlight class. No JavaScript, no flicker — and it stays consistent
   with the block's client hydration because it rewrites the same
   `openByDefault` context the client reads.

## Restructuring and Redirects

The repo structure is the information architecture, so restructuring =
moving files and running sync. Two lessons from doing a full 3-section →
6-section migration live:

- **Redirects:** hierarchical CPT URLs change when docs re-parent. The
  redirect map is a generated mu-plugin that is **404-gated** (only fires
  when the old URL genuinely misses), which means it can be deployed
  *before* the migration with zero risk and zero broken-link window. It
  runs at `template_redirect` priority 1 — WordPress's built-in canonical
  redirect (priority 10) guesses moved URLs by name and usually guesses
  right, but prefix collisions make it guess wrong; the curated map must
  win.
- **Reuse post ids.** When creating sections, promote existing docs to be
  section landing pages (`index.md`) instead of creating new posts —
  fewer redirects, preserved SEO.

## Day-to-Day Workflow

- **Edit a doc:** change the markdown → `sync.mjs --dry-run` → `sync.mjs`.
- **New doc:** add a `.md` file with front matter but no `id` → sync
  creates it (as a draft if `status: "draft"`), writes the id back.
- **Publish drafts:** flip `status` in front matter → sync.
- **Reorder / retitle / move:** edit front matter or move files → sync.
- **Unpublish:** set `status: "draft"` → sync (and consider a redirect).

In practice the repo is operated conversationally through an AI agent:
"update the carousel doc to mention X" → the agent edits, dry-runs,
syncs, and commits. The agent also wrote most of the docs themselves by
researching the product's source code (exact control labels, defaults,
supported blocks) — which is the difference between docs that gesture at
features and docs that match the shipped UI.

## Implementing on Another Site

Prerequisites: WordPress 5.6+ (application passwords), REST API enabled,
and a post type for docs (a hierarchical CPT with `show_in_rest`, or plain
pages — change the REST route in `lib/wp.mjs` and `sync.mjs` accordingly).

1. Copy `scripts/` and `.env.example`; set `WP_URL`, `WP_USER`,
   `WP_APP_PASSWORD` in a gitignored `.env`.
2. Point the REST route at your post type (currently `/wp/v2/docs`).
3. Run `export.mjs` for the initial import; commit.
4. Verify the round-trip: `sync.mjs --dry-run` must report "Everything up
   to date" before you trust anything else.
5. Site-specific pieces to adapt or drop: the sidebar generator assumes
   the accordion + query-loop template part pattern; the active-state
   mu-plugin assumes the core accordion block; the redirects file is
   this site's migration map. The converter and sync/export scripts are
   generic.

## Gotchas Worth Knowing

- WordPress may normalize content once at creation time — the first sync
  after a big create wave can show a one-time "everything changed" diff
  that converges on the next write. Harmless, but expect it.
- Drafts created over REST keep their slugs and hierarchy, so a whole
  restructure can be staged invisibly and flipped live by publishing.
- mu-plugins don't appear in the Plugins admin screen — keep a header
  comment in each file explaining what it is and when it can be removed.
- The one-way truth direction is a discipline, not a mechanism: nothing
  stops a wp-admin edit, so make "export before editing locally after
  someone touched wp-admin" a habit.
