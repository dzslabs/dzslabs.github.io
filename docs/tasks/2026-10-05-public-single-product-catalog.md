# Task: Public single-product catalog

Date: 2026-10-05

Status: Completed

## Objective

Update the public DZS Labs catalog so it presents only Slides from Photos and no longer displays its `In development` badge/status.

## Scope

Included: current public HTML, metadata, authoritative project-state documentation, and copy that specifically describes the current public catalog.

Excluded: ShelfReady project deletion, historical task records, retained unused assets, redesign, legal-page rewrites, and invention of a replacement availability status.

## Initial state

The homepage and Products page currently present Slides from Photos and ShelfReady Sheets, with `In development` badges and two-product copy. `AGENTS.md` still describes two current products. ShelfReady assets remain in `assets/products/`.

## Plan

1. Remove ShelfReady from current public page markup, links, and metadata.
2. Remove the Slides from Photos public status badge without adding a replacement claim.
3. Update authoritative current documentation, audit all remaining occurrences, and validate the public pages responsively.

## Work completed

- Removed the ShelfReady Sheets product row, link, icon reference, descriptive copy, and two-product availability note from `index.html` and `products.html`.
- Removed the public `In development` badge from Slides from Photos on both catalog pages without adding a replacement status.
- Updated homepage and Products page descriptions so they no longer name ShelfReady or imply two products.
- Updated `AGENTS.md` to distinguish the sole current public product from the intentionally hidden ShelfReady project.

## Files changed

### Created

- `docs/tasks/2026-10-05-public-single-product-catalog.md`

### Modified

- `index.html`
- `products.html`
- `AGENTS.md`

### Deleted

- None.

## Decisions

- ShelfReady assets were retained for possible future internal reactivation, but no current public HTML, metadata, CSS, or navigation references them.
- No replacement availability status was added for Slides from Photos.
- Historical task journals were left unchanged.
- The global Products navigation label and existing one-product layout system were preserved.

## Validation

- Searched current public HTML/CSS/metadata for ShelfReady, ShelfReady Sheets, `shelfready-sheets`, `In development`, two-product copy, and related phrases; no accidental public occurrences remain.
- Confirmed remaining ShelfReady occurrences are limited to `AGENTS.md`, the retained unused SVG asset, README asset inventory, and historical/current task documentation.
- Confirmed remaining `In development` occurrences are limited to authoritative internal guidance and historical task documentation.
- Ran `git diff --check` successfully.
- Loaded the homepage and Products page through the local server and confirmed both return HTTP 200.
- Reviewed the single-product markup and shared responsive rules for 1440px, 1024px, 768px, and 390px; no empty product slot or fixed-width overflow was introduced.

## Known issues

No public catalog issue known. The retained ShelfReady SVG remains present as an unused asset by design.

## Remaining work

None for this requested public-catalog update.

## Suggested next step

Revisit the public catalog only when the product presentation state is explicitly changed.

## Final status

Completed
