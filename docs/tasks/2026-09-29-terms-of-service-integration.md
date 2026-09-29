# Task: Integrate supplied Terms of Service

Date: 2026-09-29

Status: Completed

## Objective

Replace the old short Terms page with the complete authoritative `terms-of-service.md` while preserving the existing DZS Labs legal-page design.

## Scope

Terms content and its table of contents only. Do not modify Privacy or unrelated pages.

## Initial state

- Read the complete root `AGENTS.md` and the complete source `/Users/s369/Work/DZS Labs/dzslabs-legal/terms-of-service.md`.
- Inspected `terms.html`, shared legal CSS, repository status, and the recent Privacy Policy integration journal.
- The existing Terms page contained the older 10-section policy.

## Work completed

- Removed the old Terms content and integrated all 34 numbered sections from `terms-of-service.md` in order.
- Converted Markdown headings, paragraphs, emphasis, lists, links, and section anchors into semantic HTML.
- Added the supplied effective/updated dates, DZS Infinity LLC company number `7060203`, and the authoritative legal address in the Contact section.
- Replaced the confirmed support placeholder with a working `mailto:SUPPORT@DZSLABS.SITE` link.
- Omitted the unconfirmed `LEGAL@DZSLABS.SITE` placeholder from the visible Contact section rather than inventing or substituting an address.
- Retained the unresolved governing-law placeholders exactly in Section 32 and documented them for legal confirmation.
- Updated the TOC to 34 matching entries and mapped the existing Privacy URL text to `privacy.html` for the static site.
- Added page-scoped 16px legal body typography for readable long-form Terms content without changing global styles.

## Files changed

### Created

- `docs/tasks/2026-09-29-terms-of-service-integration.md`

### Modified

- `terms.html`

### Deleted

- None

## Decisions

- The source Markdown was treated as authoritative; no legal text was summarized or rewritten.
- The unconfirmed legal email was not exposed. The two governing-law placeholders remain visible because no formation jurisdiction or county/state was supplied and guessing would alter the legal text.
- The supplied refund-policy and support URLs remain linked even though those routes are not implemented locally.

## Validation

- Confirmed 34 sections and 34 TOC entries in exact source order; all anchors resolve.
- Confirmed dates, company number, legal address, DZS Labs/DZS Infinity LLC distinction, and support mailto link.
- Confirmed no old 10-section headings, raw Markdown syntax, legal-email placeholder, or support-email placeholder remain.
- Confirmed unresolved placeholders are limited to `[STATE / JURISDICTION OF FORMATION OF DZS INFINITY LLC]` and `[COUNTY / STATE]` in Section 32.
- Checked local routes: `/refund-policy` HTTP 404, `/support` HTTP 404, and `/privacy` HTTP 404; the Terms links remain and the Privacy link resolves through the existing `privacy.html` static route.
- Browser validation at 1440, 1024, 768, and 390 pixels confirmed 16px body text, usable TOC, no horizontal overflow, unchanged global header/footer, and no console or failed-request errors. `git diff --check` passed.

## Known issues

- Legal inquiries email remains unresolved and is intentionally omitted from visible HTML.
- Formation jurisdiction and county/state for Section 32 remain unresolved.
- Refund-policy and support routes are not implemented; the privacy route is represented by `privacy.html` in the static site.

## Remaining work

- Confirm the legal contact email and governing-law fields before treating the Terms as fully finalized.
- Implement missing linked routes separately if required.

## Suggested next step

- Obtain legal confirmation for Section 32 and the legal-contact mailbox, then add the missing policy/support routes in a separate task.

## Final status

Completed
