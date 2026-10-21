# Task: Slides from Photos landing SEO/GEO Phase 2 corrections

Date: 2026-10-21

Status: Completed

## Objective

Apply the explicitly approved low-risk corrections from the Phase 1 landing-page
SEO/GEO audit: social image metadata and intrinsic hero-image dimensions.

## Scope

Included Open Graph and Twitter image metadata using the existing landing-page
hero screenshot, plus `width="1110"` and `height="770"` on that hero image.

Excluded copy, title, canonical, schema, CSS, analytics, consent, sitemap,
robots policy, guide content, redirects, and image conversion.

## Initial state

Phase 1 found no P0 or P1 issues. The landing page had valid product metadata
but no `og:image` or `twitter:image`; its existing hero asset is
`assets/products/slides-from-photos/product-screenshot.png`, verified at
1110 × 770 pixels.

## Plan

1. Add the same absolute production hero URL to Open Graph and Twitter image metadata.
2. Add the verified intrinsic dimensions to the existing hero `<img>`.
3. Validate metadata, JSON-LD, public pages, syntax, diff scope, and Git state.

## Work completed

- Added `og:image` and `twitter:image` using the existing absolute hero asset
  URL: `https://dzslabs.site/assets/products/slides-from-photos/product-screenshot.png`.
- Added `width="1110"` and `height="770"` to the existing hero image.
- Preserved the existing eager loading behavior, source path, alt text, layout,
  title, copy, schema, tracking, consent, sitemap, and robots state.

## Files changed

### Created

- `docs/tasks/2026-10-21-slides-from-photos-landing-seo-geo-audit.md`

### Modified

- `slides-from-photos/index.html`

### Deleted

- None

## Decisions

- Use the existing hero screenshot; do not create or convert an image.
- Keep the canonical, title, copy, schema, tracking, consent, CSS, sitemap,
  guide link, and robots state unchanged.
- Defer `/index.html` redirect policy, robots ownership, performance
  optimization, runtime GA verification, and measured Core Web Vitals.

## Validation

- `npm run validate:public-pages` passed for 14 public HTML pages.
- `node --check script.js` passed.
- `git diff --check` passed.
- Both JSON-LD blocks parsed successfully.
- Exactly one H1 remains.
- Social image metadata appears exactly once per format and uses the same
  existing absolute hero URL.
- The local hero asset exists and is verified at 1110 × 770 pixels.
- No new image file was created and no production deployment was claimed.

## Known issues

- Browser runtime, production deployment, LCP, and Core Web Vitals remain
  unverified.
- `/index.html` redirect policy and production robots ownership remain deferred
  governance items.

## Remaining work

- Human review before staging, committing, pushing, or deployment.

## Suggested next step

- Review the exact two-file implementation diff before publication.

## Final status

Completed
