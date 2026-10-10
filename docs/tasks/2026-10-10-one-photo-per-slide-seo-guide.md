# Task: One-photo-per-slide SEO guide

Date: 2026-10-10

Status: Ready for review

## Objective

Create the first SEO/GEO acquisition guide for Slides from Photos at the
one-photo-per-slide Google Slides route, using the existing product design and
consent-aware Marketplace tracking.

## Scope

Included the new guide page, five supplied WebP assets, a natural product-page
guide link, scoped Slides from Photos guide styling, and an XML sitemap entry.

Excluded add-on code, OAuth scopes, Marketplace configuration, privacy pages,
analytics implementation, global navigation, and crawler-policy changes.

## Initial state

The repository had no sitemap.xml or robots.txt. The five approved guide assets
were present as untracked files under
`assets/products/slides-from-photos/10-10-26/`.

## Plan

1. Verify the supplied assets and existing Slides from Photos conventions.
2. Add the indexable guide page and product-page internal link.
3. Reuse the existing consent-aware `marketplace_click` data attributes on the
   three install CTAs.
4. Create the sitemap entry and validate the static routes and page structure.

## Work completed

- Created the guide at `/slides-from-photos/one-photo-per-slide-google-slides/`.
- Used all five approved WebP assets with descriptive alt text, eager hero
  loading, and lazy below-fold loading.
- Added the product-page link `How to insert multiple images into separate
  Google Slides`.
- Added three install CTAs using the existing `marketplace_click` event with
  `cta_position` values `hero`, `after_how_to`, and `final`.
- Created `sitemap.xml` with canonical public routes and the guide URL.
- Removed the transactional feedback form route from the sitemap; completion
  pages were excluded from the outset.
- Refined the guide's large-screen composition with a wider container, a
  balanced hero grid, larger hero visual, and paired text/image sections while
  preserving the mobile layout and approved content.
- Enlarged the desktop explanatory visuals after visual review by giving their
  image columns a practical 480px minimum and allowing wrappers to fill the
  available column width.
- Rebalanced the final desktop hero after visual review with an image-heavy
  ratio, a wider hero measure, top-oriented image alignment, and slightly
  reduced headline sizing.
- Added final visual polish after review: reduced the parenthetical H1 detail
  size on desktop, kept the existing 16px/1.65 guide prose measure, presented
  the three photo sources as lightweight cards, and added a restrained callout
  treatment to the built-in Google Slides comparison section.
- Corrected final desktop alignment so the guide uses the global header
  container convention as its outer width and gutter source of truth, removing
  the prior hero viewport expansion.
- Corrected final hero media containment so the right edge remains inside the
  shared header/page-shell container at desktop widths.
- Fixed the remaining hero overflow at its source: the full-width `<figure>`
  retained the browser's default inline margins, so its border extended beyond
  the grid track. The desktop hero rule now resets those margins to zero while
  preserving the approved image column size.
- Normalized the same browser-default horizontal figure margins on all lower
  guide media wrappers and added shrink-safe grid children, keeping every
  visual inside the shared page shell without changing the approved layouts.

## Files changed

### Created

- `slides-from-photos/one-photo-per-slide-google-slides/index.html`
- `sitemap.xml`
- `docs/tasks/2026-10-10-one-photo-per-slide-seo-guide.md`

### Modified

- `slides-from-photos/index.html`
- `slides-from-photos/slides-from-photos.css`

### Deleted

- None

## Decisions

- The guide uses the existing Slides from Photos header, footer, typography,
  buttons, and scoped stylesheet rather than introducing a parallel design.
- The existing `script.js` remains the only analytics implementation. No new
  event, consent system, Measurement ID, or inline handler was added.
- No robots.txt was created or changed because no crawler policy existed in the
  repository.

## Validation

- Confirmed all five required WebP files exist and are used by the guide.
- `npm run validate:public-pages` passed and validated 14 public HTML pages.
- `node --check script.js` passed.
- `git diff --check` passed.
- `npm run validate:public-pages` passed after the layout refinement.
- Static checks confirmed the guide's analytics attributes, metadata, links,
  and content remained unchanged.
- Confirmed the source-selection, review/order, Fit vs Fill, and large-batch
  visuals use full-width responsive wrappers in the desktop image columns.
- Local HTTP checks returned 200 for the guide, product page, sitemap, and all
  five image assets.
- Static checks confirmed one H1, valid heading structure, exact metadata,
  absolute Open Graph image, three CTA mappings, no UTMs, no inline handlers,
  no indexing blockers, and no future-guide links.

## Known issues

- Browser screenshot and network-level analytics checks were unavailable in
  this environment.

## Remaining work

Human review before staging, committing, pushing, or deployment.

## Suggested next step

Review the complete diff and rendered guide, then decide whether to publish.

## Final status

Ready for review
