# Ollie Docs

Single source of truth for the olliewp.com documentation. Docs live here as
Markdown files and sync to the `docs` post type on the live site over the
WordPress REST API. Edit here (by hand or with Claude Code), then push.

## Setup

Copy `.env.example` to `.env` and fill in your olliewp.com username and an
[application password](https://olliewp.com/wp-admin/profile.php). Requires
Node 18+. No npm install needed — the scripts have zero dependencies.

## Commands

```bash
node scripts/sync.mjs --dry-run   # preview what would change on the site
node scripts/sync.mjs             # push local changes to olliewp.com
node scripts/export.mjs           # pull the site's docs into docs/ (overwrites local files)
```

`sync` only writes docs whose content or settings actually differ, reports
site docs that have no local file, and never deletes anything. `export`
treats the site as the source of truth and overwrites local files — use it
for the initial import or to absorb edits made in wp-admin.

`sync` also manages the **docs sidebar** (the `docs-sidebar` template part
on the site) — but only when the section list changes: a section added,
renamed, or reordered in the repo triggers a regeneration, with the first
existing accordion item as the design template. Otherwise the sidebar is
left completely alone, so styling and tweaks made in the Site Editor stick.
Run `node scripts/sync.mjs --sidebar` to force a regeneration.

## File layout

```
docs/
  some-doc.md              → top-level doc
  ollie-pro/
    index.md               → the "Ollie Pro" parent doc
    carousel-designer.md   → child of ollie-pro
```

The folder a file sits in determines its parent on the site. Front matter
carries the rest:

```markdown
---
id: 66891            # site post id — omit for new docs; sync fills it in
title: "Carousel Designer"
status: publish      # publish | draft
order: 4             # menu order within its section
---
```

To create a new doc, add a `.md` file with front matter (no `id`) and run
sync. To reorder docs, change `order`. To restructure, move files between
folders.

## Markdown ↔ blocks

Prose converts cleanly in both directions: paragraphs, headings, lists,
fenced code, tables, `---` separators, images, and inline bold / italic /
code / links.

Anything richer — groups, columns, covers, buttons, icon blocks — appears
in the Markdown as raw block markup (`<!-- wp:group -->…`). Leave those
chunks intact unless you mean to change them; they pass through to the
site verbatim. The exporter only emits Markdown for a block when
converting it back reproduces the original markup byte-for-byte, so a
full export → sync cycle is a no-op.

Designed marketing-style docs therefore look mostly raw in Markdown —
that's expected. Edit their text in place inside the markup, or edit them
in wp-admin and run `export` to pull the result back.
