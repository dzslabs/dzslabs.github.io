# Task: Dynamic footer copyright year

Date: 2026-10-05

Status: Completed

## Objective

Keep the DZS Labs footer copyright year current automatically across the static site.

## Scope

Replace hard-coded footer copyright years with a shared, lightweight vanilla JavaScript updater. Do not change footer layout, wording, navigation, or unrelated content.

## Initial state

Every public page footer displayed the literal year `2026`. The shared `script.js` already loads on all site pages.

## Plan

1. Mark the footer year consistently in each page.
2. Update the shared script to populate the current calendar year.
3. Validate the diff, page loading, and rendered year behavior.

## Work completed

- Added a shared `[data-current-year]` updater to `script.js`.
- Marked the copyright year in every tracked public footer so it updates to the current calendar year at runtime.

## Files changed

### Created

- `docs/tasks/2026-10-05-dynamic-footer-year.md`

### Modified

- `script.js`
- `index.html`
- `about.html`
- `contact.html`
- `contact-success.html`
- `products.html`
- `privacy.html`
- `terms.html`
- `slides-from-photos/index.html`
- `slides-from-photos/feedback/index.html`
- `slides-from-photos/feedback/thanks/index.html`

### Deleted

- None

## Decisions

- The footer retains a `2026` fallback in the HTML and is updated at runtime by the existing shared script.
- No new dependency, build step, or page-specific script was added.

## Validation

- Confirmed every tracked public page has exactly one dynamic footer-year marker.
- Confirmed no hard-coded `© 2026` footer literal remains in tracked HTML.
- Confirmed the local server returns HTTP 200 for the homepage, core pages, Slides from Photos page, feedback routes, and contact-success page.
- Ran `git diff --check` successfully.

## Known issues

None known.

## Remaining work

None for this task.

## Suggested next step

None.

## Final status

Completed
