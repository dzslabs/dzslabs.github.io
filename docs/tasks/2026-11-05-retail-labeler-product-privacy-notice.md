# Task: RETAIL LABELER Product Privacy Notice

Date: 2026-11-05

Status: Blocked

## Objective

Create the product-specific RETAIL LABELER Privacy Notice at
`/retail-labeler/privacy.html` using the approved legal content and verified
implementation facts.

## Scope

Included the new legal page, its task record, and sitemap entry if the existing
site convention supports indexing product privacy notices.

Excluded add-on code, OAuth configuration, analytics, licensing, payment
configuration, the general Privacy Policy, and unrelated pages.

## Initial state

No RETAIL LABELER page or product landing page exists in this website
repository. The likely add-on source is the sibling ShelfReady Sheets
repository and must be checked before publication claims are verified.

## Plan

1. Verify the sibling product source and privacy-relevant implementation facts.
2. Add the approved notice using the existing legal-page shell and styles.
3. Add the canonical sitemap route if consistent with existing legal entries.
4. Validate content, links, HTML, and privacy accuracy without publishing.

## Work completed

- Verified the sibling source at `/Users/s369/Work/Projects-WorkSpace/shelfready-sheets/shelfready-sheets-main/`.
- Created the approved 19-section notice at
  `retail-labeler/privacy.html`.
- Added the canonical route to `sitemap.xml` because product privacy pages are
  included in the existing sitemap convention.
- Confirmed the notice uses one H1, 19 numbered H2 sections, semantic lists,
  inline OAuth scope code, and the existing DZS Labs legal shell.

## Files changed

### Created

- `docs/tasks/2026-11-05-retail-labeler-product-privacy-notice.md`

### Modified

- `sitemap.xml`

### Deleted

- None

## Decisions

- The page follows the established nested product privacy route convention.
- No RETAIL LABELER product landing page exists, so no product-page link was
  added; the supplied product URL is retained as plain text to avoid creating
  a dead internal link.
- The source confirms the four supplied OAuth scopes, Drive app-data storage,
  client-side PDF rendering, and an external jsDelivr PDFKit runtime.
- The source audit did not find production Lemon Squeezy licensing or GA4
  analytics implementation. Those notice claims remain unresolved and block
  publication pending human/product-owner confirmation.

## Validation

- `npm run validate:public-pages` passed: 17 public HTML pages validated.
- `node --check script.js` passed.
- `git diff --check` passed.
- One H1, 19 H2 sections, required OAuth scope strings, JSON-LD absence,
  sitemap entry, and internal link syntax were checked.
- Desktop/mobile browser rendering was not available; visual runtime checks are
  not verified.

## Privacy accuracy audit

| Claim | Status | Evidence |
|---|---|---|
| OAuth scopes | PASS | `src/appsscript.json` lists `spreadsheets.currentonly`, `drive.appdata`, `script.external_request`, and `script.container.ui`. |
| Google Sheets access | PASS | `src/Code.js` requires current-spreadsheet scope and the app reads the active spreadsheet. |
| Drive application data | PASS | `src/runtime/PersistenceRuntime.js` uses Drive `appDataFolder` and document properties. |
| PDF client-side processing | PASS | `src/PdfRenderer.html` and `src/ui/ProductionApp.html` render and download PDF bytes in the browser. |
| No centralized product catalog | PASS (static audit) | Storage code uses spreadsheet/app-data mechanisms; no separate catalog service was found. |
| No spreadsheet content in analytics | NOT VERIFIED | No production analytics implementation was found in the inspected source. |
| GA4 identifiers and events | NOT VERIFIED | No GA4/Measurement Protocol implementation was found in the inspected source. |
| Lemon Squeezy licensing | NOT VERIFIED | No Lemon Squeezy endpoint or license implementation was found in the inspected source. |
| External asset delivery | PASS | `src/core/pdf/PdfKitRuntime.html` pins an external jsDelivr PDFKit runtime with integrity checks. |
| Deletion and retention | NOT VERIFIED | Retention/deletion behavior requires product-owner confirmation beyond static source inspection. |

## Known issues

- GA4 analytics and Lemon Squeezy licensing claims in the approved notice are
  not supported by the inspected local source.
- Retention and deletion behavior is not fully verified.

## Remaining work

Confirm the production source or revise the approved notice with human legal and
product-owner approval before publication.

## Suggested next step

Resolve the analytics/licensing discrepancy, then complete legal review.

## Final status

Blocked
