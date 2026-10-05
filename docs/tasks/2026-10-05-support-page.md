# Task: Dedicated DZS Labs Support page

Date: 2026-10-05

Status: Ready for review

## Objective

Create `support.html` at the exact public route `https://dzslabs.site/support.html`,
using the Contact page as the visual and form source of truth.

## Scope

Included the new static Support page and the Terms Support URL update in the
website HTML and authoritative Terms Markdown. Excluded global navigation,
other page designs, additional success pages, and unrelated legal or SEO work.

## Work completed

- Reused the Contact page shell, layout, form controls, FormSubmit POST flow,
  honeypot, success destination, header, footer, and responsive structure.
- Added the approved Support eyebrow, heading, intro, supporting copy, message
  guidance, and sensitive-information warning.
- Set the Support page title, description, canonical, and exact route.
- Updated the Terms Support URL to `https://dzslabs.site/support.html` in both
  current HTML and the authoritative Terms Markdown.

## Files changed

### Created

- `support.html`
- `docs/tasks/2026-10-05-support-page.md`

### Modified

- `terms.html`
- `/Users/s369/Work/DZS Labs/dzslabs-legal/terms-of-service.md`

## Validation

- Confirmed the Support page uses the FormSubmit endpoint for
  `contact@dzslabs.site` with POST, support subject, CAPTCHA, table template,
  honeypot, and `contact-success.html` redirect.
- Confirmed exact title, description, canonical, field names, labels, and
  required behavior.
- Confirmed Terms HTML and source use `https://dzslabs.site/support.html`.
- Confirmed no `/support/` route or redirect was created.
- `git diff --check` passed.
- Reviewed shared Contact responsive rules for 1440px, 1024px, 768px, and
  390px layouts.

## Known issues

- The existing root-page canonical convention still uses GitHub Pages URLs;
  this task intentionally did not change unrelated canonical metadata.
- FormSubmit activation and real delivery remain external account-state items.

## Final status

Ready for review
