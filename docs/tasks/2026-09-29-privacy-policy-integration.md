# Task: Integrate supplied Privacy Policy

Date: 2026-09-29

Status: Completed

## Objective

Replace the existing Privacy Policy page content with the supplied authoritative `privacy-policy.md`, preserving the existing DZS Labs legal-page layout and adding the supplied dates and company details.

## Scope

Privacy Policy content and its table of contents only. Do not modify Terms or unrelated pages.

## Initial state

- Read the complete root `AGENTS.md`.
- Inspected `privacy.html` and the shared legal-page CSS in `styles.css`.
- Checked `git status` and preserved all existing working-tree changes.
- The repository does not contain `privacy-policy.md`.
- The supplied attachment contains the task instructions only; it does not include the authoritative policy content.
- Confirmed public contacts were supplied separately: `PRIVACY@DZSLABS.SITE` and `SUPPORT@DZSLABS.SITE`. These may be used as `mailto:` links once the full policy source is available.
- The complete authoritative source was subsequently provided at `/Users/s369/Work/DZS Labs/dzslabs-legal/privacy-policy.md` and read in full before integration.

## Plan

1. Obtain the complete authoritative `privacy-policy.md`.
2. Convert its 25 sections into semantic HTML while preserving the existing legal layout and updating the table of contents.
3. Verify dates, company details, unresolved contact placeholders, account-deletion route, anchors, and responsive behavior.

## Work completed

- No legal content was changed because the required source Markdown is unavailable.
- Recorded the confirmed privacy and support contacts without adding them to the page prematurely.
- Replaced the old 10-section page with all 25 sections from `privacy-policy.md`, preserving the existing header, footer, legal layout, and section separators.
- Added the supplied effective/updated dates, DZS Infinity LLC company number and address, working privacy/support `mailto:` links, and a 25-entry matching table of contents.
- Added a privacy-page-scoped readability rule so the long policy remains 16px with comfortable line height on desktop and mobile without changing global legal styles.

## Files changed

### Created

- `docs/tasks/2026-09-29-privacy-policy-integration.md`

### Modified

- `privacy.html`

### Deleted

- None

## Decisions

- Used only the complete supplied `privacy-policy.md` as the legal content source; no legal language was reconstructed or summarized.

## Validation

- Confirmed the current Privacy Policy page and shared legal CSS are present.
- Confirmed the supplied source was read in full before conversion.
- Confirmed 25 sections and 25 TOC entries, all TOC anchors resolve, placeholders and raw Markdown are absent, and the old 10-section headings are gone.
- Confirmed company number `7060203`, supplied legal address, brand/entity distinction, and all privacy/support mailto links.
- Confirmed `https://dzslabs.site/account-deletion` is retained in the policy; the local route returned HTTP 404 and needs separate implementation.
- Browser validation at 1440, 1024, 768, and 390 pixels confirmed 16px body text, no horizontal overflow, usable TOC/anchors, unchanged global shell, and no console or failed-request errors. `git diff --check` passed.

## Known issues

- The account-deletion route does not currently exist and remains an unresolved implementation item.

## Remaining work

- Implement `/account-deletion` separately if the published policy destination is required.

## Suggested next step

- Review the legal content and add the account-deletion route in a separate task if approved.

## Final status

Completed
