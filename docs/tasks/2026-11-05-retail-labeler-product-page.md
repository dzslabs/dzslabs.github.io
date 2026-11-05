# Task: Retail Labeler product page

Date: 2026-11-05

Status: In progress

## Objective

Create the Retail Labeler product landing page at `/retail-labeler/` using the
approved copy, the existing DZS Labs site shell, and clearly marked visual
placeholders until authentic product screenshots are supplied.

## Scope

Included the new product page, scoped page CSS, planned-asset documentation,
and one sitemap entry. Excluded add-on source changes, global redesign,
analytics changes, legal-page changes, and deployment.

## Initial state

The sibling source at
`/Users/s369/Work/Projects-WorkSpace/shelfready-sheets/shelfready-sheets-main/`
identifies the product as Retail Labeler and contains the label designer,
template persistence, barcode, Google Sheets catalog, print-format, and PDF
rendering code. No authentic public screenshots or verified Retail Labeler
Marketplace listing URL were found.

## Plan

1. Reuse the global DZS Labs shell and create a Retail Labeler-scoped layout.
2. Preserve the approved product copy and use accessible visual placeholders.
3. Document each planned screenshot asset and add the canonical sitemap route.
4. Validate static pages, links, metadata, and responsive-safe CSS locally.

## Work completed

- Added the Retail Labeler landing page with the approved eleven product sections,
  FAQ, final CTA, shared navigation, legal links, and footer.
- Added scoped `rl-` CSS for the hero, editorial sections, workflow cards,
  placeholders, FAQ, and responsive stacking.
- Added a planned asset README covering all nine future screenshot filenames.
- Added the `/retail-labeler/` sitemap entry while preserving the existing
  Retail Labeler privacy route.
- Used the existing Slides from Photos product screenshot only as the approved
  social-preview fallback; it is not presented as a Retail Labeler visual.

## Decisions

- Authentic Retail Labeler screenshots are missing, so every visual position
  uses an explicit placeholder rather than a broken or misleading image.
- No official Retail Labeler Google Workspace Marketplace URL was found in the
  inspected repository or sibling source. The install CTA is visibly disabled
  and marked as pending; no install analytics attributes were added.
- Pricing and Help Center destinations were not found. They remain clearly
  marked as pending text rather than dead links.
- Existing shared `script.js`, global CSS, legal pages, and other products were
  not modified.

## Validation

- `npm run validate:public-pages` passed: 18 public HTML pages validated.
- `node --check script.js` passed.
- `git diff --check` passed.
- Static checks confirmed one H1, the canonical URL, both JSON-LD blocks, nine
  documented placeholders, and the single sitemap route.
- Browser rendering and live Marketplace navigation were not verified.

## Known issues

- Publication is blocked until a verified Marketplace destination and
  authentic Retail Labeler screenshots are supplied.

## Remaining work

Replace placeholders with verified screenshots, confirm the Marketplace URL,
and complete human visual/legal review before publication.

## Suggested next step

Supply the official listing URL and authentic screenshots, then replace only
the documented placeholder positions.

## Final status

Blocked
