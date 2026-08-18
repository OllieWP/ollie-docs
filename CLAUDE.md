# Ollie Docs — Working Notes

This repo is the single source of truth for olliewp.com's documentation.
Markdown in `docs/` syncs to the live site's `docs` post type over the
WordPress REST API (credentials in `.env`, already configured).

## Core workflow

- Edit markdown in `docs/` (folder = section, front matter = id/title/status/order/excerpt).
- Preview: `node scripts/sync.mjs --dry-run`
- Publish: `node scripts/sync.mjs` — pushes only changed docs, creates new
  ones (writes the id back), never deletes.
- If docs were edited in wp-admin, run `node scripts/export.mjs` FIRST to
  absorb those edits, then commit. The repo always wins on sync.

## Conventions

- New docs: front matter without an `id`; `status: "draft"` until the user
  approves publishing. Excerpts required (~75–90 chars, used by doc cards).
- Videos: one-line directive `{{video id="YOUTUBE_ID" [start="SECONDS"]
  title="..." desc="..."}}` — expands to the synced Video Modal Card
  pattern (ref 67760, design edited in the Site Editor, not here).

## Timestamped chapter cards

When a doc has a matching feature video, don't stop at one lead card —
add **chapter cards** that jump to where each topic appears in the video:

1. Get the timestamped transcript. First stop: **Ollie Content Studio**
   on the live site — `GET /wp-json/ocs/v1/campaigns` (same `.env`
   credentials), find the campaign matching the feature by title, then
   `GET /wp-json/ocs/v1/campaigns/<id>` and read the `source` field (or
   the transcript artifact's `raw_transcript`) — it's WebVTT with
   per-line timings. If no campaign exists, ask the user for a
   transcript or chapter list.
2. Map chapters to the doc's sections and place one card at the END of
   each matching section: `{{video id="..." start="<seconds>"
   title="<chapter>" desc="<one line>"}}`.
3. Curate — lead card at top plus cards for the substantial sections
   only. Skip intro/wrap-up chapters and minor beats whose sections are
   short; a card under every heading is noise. Reference example:
   `docs/build/carousel-designer.md`.
- Raw `<!-- wp: -->` chunks in markdown are intentional designed layouts —
  edit text inside them, don't restructure.
- The sidebar template part regenerates only when sections change;
  cosmetic sidebar edits made in the Site Editor are preserved.
- `pages/` holds tracked one-off pages (e.g. the /docs/ landing page) —
  same edit/sync flow, content and title only.
- `mu-plugins/` files (redirects, sidebar active-state, canonicals) are
  uploaded manually by the user to wp-content/mu-plugins/ on the live
  site — after changing one, ask the user to re-upload it, then verify.
- URL moves need redirect entries in `mu-plugins/docs-redirects.php`
  (404-gated map for retired URLs; unconditional map for live section
  pages). Section pages are blank by design and redirect to their first
  doc.
- Commit after each meaningful change; no Co-Authored-By trailers.

See `README.md` for command details and `HANDOFF.md` for the full
architecture breakdown.
