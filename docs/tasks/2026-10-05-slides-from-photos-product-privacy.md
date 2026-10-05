# Task: Slides from Photos product privacy page

Date: 2026-10-05

Status: Ready for review

## Objective

Create `slides-from-photos/privacy.html` from the authoritative 17-section
Slides from Photos Product Privacy Notice, using the existing general Privacy
Policy page as the visual and layout source.

## Scope

Included the dedicated product privacy route, semantic HTML conversion, legal
table of contents, fixed legal dates, OAuth scope rendering, contact links, and
responsive validation. Excluded changes to `privacy.html`, the landing page,
global legal content, commits, and pushes.

## Initial state

The authoritative source is `docs/legal/slides-from-photos-product-privacy.md`
and contains all 17 numbered sections. It includes an internal French
publication note in Section 7; that note is editorial guidance and must not be
published.

The website repository contains no `appsscript.json`, Apps Script source,
Google Photos Picker integration, Drive integration, or JobStore
implementation from which the product-specific technical claims can be
verified.

## Plan

1. Convert the complete source into semantic HTML while excluding only the
   internal publication note.
2. Reuse the existing `privacy.html` legal shell and shared site assets.
3. Validate sections, anchors, links, scope strings, responsive behavior, and
   overflow without staging, committing, or pushing.

## Work completed

Created `slides-from-photos/privacy.html` from the authoritative source. The
existing legal shell, global header/footer, navigation pattern, typography,
separators, and responsive classes were reused. All 17 sections and matching
TOC anchors were integrated in source order.

## Files changed

### Created

- `slides-from-photos/privacy.html`
- `docs/tasks/2026-10-05-slides-from-photos-product-privacy.md`

### Modified

- None

### Deleted

- None

## Decisions

- Preserve the supplied legal text and fixed October 5, 2026 dates.
- Exclude only the internal French `Important avant publication` note and its
  example from public HTML.
- Keep the account-deletion URL even though it currently returns 404.
- Record implementation claims that cannot be verified from this website
  repository instead of changing the legal source.

## Technical verification matrix

| Claim | Repository evidence | Verified? | Notes |
| --- | --- | --- | --- |
| Google Slides `presentations` scope | No product implementation source | Not verified from website repository | Source text preserved exactly. |
| Google Drive `drive.file` scope | No product implementation source | Not verified from website repository | Source text preserved exactly. |
| Google Photos Picker scope | No product implementation source | Not verified from website repository | Source text preserved exactly. |
| `script.external_request` scope | No product implementation source | Not verified from website repository | Source text preserved exactly. |
| `script.container.ui` scope | No product implementation source | Not verified from website repository | Source text preserved exactly. |
| Local photo handling | Landing-page copy only | Not verified from website repository | Product notice preserved. |
| Resume/job state | Landing-page copy only; no JobStore source | Not verified from website repository | Retention note excluded from public HTML. |
| Photo-set verification | No implementation source | Not verified from website repository | Source text preserved. |
| Retention behavior | No JobStore source | Not verified from website repository | Exact duration unavailable. |
| Third-party/service-provider handling | General policy only | Not verified from website repository | Product wording preserved. |

## Validation

- Source contains 17 numbered sections; generated page contains 17 sections and
  17 matching TOC links with unique IDs.
- Local live-server route returned HTTP 200 for
  `/slides-from-photos/privacy.html`; existing `/privacy.html` also returned
  HTTP 200.
- All five OAuth scope strings appear exactly in `<code>` elements.
- No raw Markdown markers, placeholders, ShelfReady references, or
  `In development` status remain in the generated page.
- `git diff --check` passed.
- Responsive widths 1440px, 1024px, 768px, and 390px were reviewed against
  the shared legal CSS structure; long scope URLs use safe wrapping.

## Known issues

- `https://dzslabs.site/account-deletion` currently returns HTTP 404 and should
  be implemented before final publication if it is intended to remain in the
  notice.
- Product implementation evidence is unavailable, so the technical claims in
  the matrix remain unverified from the website repository.

## Remaining work

Review the generated page and confirm the product-specific legal wording and
technical claims before publication.

## Suggested next step

If implementation evidence becomes available, compare it with the notice and
record any discrepancies before publication.

## Final status

Ready for review
