# Task: Google Photos to Google Slides SEO/GEO page

Date: 2026-10-21

Status: Completed

## Objective

Create the second Slides from Photos SEO/GEO guide for the Google Photos to
Google Slides source-specific intent.

## Scope

Included the new Google Photos-specific guide, minimal contextual internal
links, one sitemap entry, reuse of the existing guide shell and consent-aware
Marketplace tracking, and validation of the static implementation.

Excluded application code, analytics implementation, OAuth, privacy pages,
robots policy, Marketplace configuration, video embedding, and new image
creation.

## Initial state

The Page #2 route did not exist. Page #1 and the product landing page already
provided the approved guide shell, CTA tracking, and responsive CSS. The
repository contained no verified Slides from Photos implementation source and
no authentic Google Photos Picker screenshot.

## Plan

1. Reuse the Page #1 guide structure and approved metadata conventions.
2. Write conservative Google Photos Picker and album-search content based on
   verified Google documentation and the Product Privacy Notice.
3. Add only the approved contextual links and sitemap entry.
4. Validate structure, links, assets, JSON-LD, sitemap, and static routes.

## Work completed

- Created the Google Photos-specific guide with one-photo-per-slide workflow,
  album-title search versus explicit selection guidance, Fit/Fill, larger
  selection reliability, native Slides comparison, FAQ, and final CTA.
- Used the real product screenshot as a generic product visual, explicitly
  avoiding any claim that it depicts the Google Photos Picker.
- Reused the existing consent-aware `marketplace_click` event with `hero`,
  `after_how_to`, and `final` CTA positions.
- Added one product-to-Page #2 link, one Page #1-to-Page #2 link, reciprocal
  guide links, and one canonical sitemap entry.
- Added WebPage and BreadcrumbList JSON-LD only; no FAQPage or HowTo schema.
- Visual review found the portrait progress screenshot too tall for the
  desktop two-column layout, so the section was switched to the existing
  landscape large-batch progress visual. No layout/CSS change was required.
- Final visual review identified that the previous generic hero showed Google
  Drive as the active source, so it was replaced after the human reviewer
  supplied a source-specific visual.
- The human reviewer supplied an authentic Google Photos-specific hero at
  `assets/products/slides-from-photos/google-photos-to-google-slides-hero.webp`
  (1110 × 770, 204,956 bytes). It visibly shows Google Photos selected in the
  Slides from Photos source panel, so the previous hero blocker is resolved.
- The new hero is now used by the page, `og:image`, and `twitter:image`.
- The human reviewer supplied authentic screenshots for all three visual stages:
  Google Photos selection, selected-batch review/order, and completed Slides
  output.
- Applied the human-approved hero alt text exactly and added a compact
  three-stage workflow summary using the supplied authentic screenshots with
  their approved ALT text.
- Removed the temporary Stage 2 and Stage 3 placeholders; no fake UI or
  third-party screenshots were introduced.
- The semantic H1 was retained exactly; its existing `sfp-guide-title-detail`
  span provides the smaller parenthetical treatment on desktop.
- The tutorial now includes authentic visual proof for selection, review/order,
  and completed Slides output.
- Surgically shortened the Fit/Fill and larger-selection sections and removed
  the duplicative Fit/Fill FAQ while retaining source-specific questions.
- No fake visual assets or external reference images were introduced.

## Files changed

### Created

- `slides-from-photos/google-photos-to-google-slides/index.html`
- `docs/tasks/2026-10-21-google-photos-to-google-slides.md`

### Modified

- `slides-from-photos/index.html`
- `slides-from-photos/one-photo-per-slide-google-slides/index.html`
- `sitemap.xml`

### Deleted

- None

## Decisions

- Album wording describes searching by album title and explicitly selecting
  desired photos; it does not promise album-card browsing or full-album import.
- Exact add-on UI labels and return behavior remain unclaimed because no
  implementation source was available.
- The human-supplied hero is now an authentic Google Photos-specific source
  visual and resolves the prior hero publication blocker.
- No CSS change was needed; the corrected Page #1 guide classes were reused.
- Added one concise Stage 1 supporting sentence to balance the three visual
  step cards; no other visual-step content or styling changed.
- Updated the product landing definition to associate Slides from Photos with
  DZS Labs and grouped the two published guides under “Step-by-step guides.”
  Both internal links remain clean and UTM-free.
- Human review refined the product-hub guide links into a clearer lightweight
  resource-card group with concise descriptions.

## Validation

- `npm run validate:public-pages` passed and validated 15 public HTML pages.
- `node --check script.js` passed.
- `git diff --check` passed.
- Sitemap XML parsed successfully.
- Both JSON-LD blocks parsed successfully; the page has exactly one H1.
- Static checks confirmed three Marketplace CTAs with `hero`, `after_how_to`,
  and `final` positions, the exact Marketplace URL, no UTMs, and all local
  image assets present.
- Local HTTP checks returned 200 for the new route and all three referenced
  image assets.
- Browser screenshot tooling was unavailable, so responsive visual behavior
  is not verified.

## Known issues

- None known for the approved three-stage visual sequence.
- The supplied demonstration video could not be verified and was not linked.

## Remaining work

Human review of the final three-stage visual summary before publication.

## Suggested next step

Complete final publication review.

## Final status

Completed
