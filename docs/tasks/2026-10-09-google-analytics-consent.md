# Task: Google Analytics consent integration

Date: 2026-10-09

Status: Ready for review

## Objective

Add consent-gated Google Analytics 4 to the static DZS Labs website through the existing shared `script.js`, without loading Analytics before visitor consent.

## Scope

Included centralized GA4 loading, a first-party analytics consent banner, preference reversal through a Privacy choices control, scoped responsive styles, a public-page validation script, and maintenance documentation.

Excluded Google Tag Manager, advertising features, user IDs, Signals, other consent categories, legal-page rewrites, and changes to the Slides from Photos product privacy notices.

## Initial state

All 13 public HTML pages load the shared `script.js`. No existing GA, GTM, consent banner, Consent Mode, or analytics loader was present. The general Privacy Policy contains general analytics and cookie wording but does not identify Google Analytics specifically.

## Plan

1. Add consent-gated GA4 initialization and first-party preference handling to `script.js`.
2. Add minimal banner/footer control styles without changing page layouts.
3. Add a lightweight public-page validation command and update the maintenance rule.
4. Validate fresh, accepted, declined, returning, reversal, nested-route, and responsive behavior as far as the local static environment permits.

## Work completed

- Centralized GA4 in `script.js` with measurement ID `G-TB36M1KMD2`.
- Added a first-party `localStorage` preference named `dzslabs_analytics_consent` with `granted` and `denied` values.
- Added a dynamically generated consent banner. Google Analytics is not loaded or initialized until the visitor accepts.
- Added a footer `Privacy choices` control so visitors can reopen the choice UI. Changing a granted choice to denied clears only the known GA cookies (`_ga` and `_ga_TB36M1KMD2`) where the browser permits it and prevents future page-load initialization.
- Added `scripts/validate-public-pages.js` and the `npm run validate:public-pages` command. It checks all public HTML pages for the shared `script.js` and rejects direct GA configuration in page markup.
- Added a concise maintenance rule to `AGENTS.md` documenting centralized, consent-gated analytics.
- Updated General Privacy Section 14 to name Google Analytics 4 and describe its optional, consent-gated loading, Privacy choices reversal, and known-cookie cleanup behavior.
- Updated the General Privacy Last Updated date to October 9, 2026 in both the website HTML and authoritative Markdown source.
- Added generic declarative CTA event tracking through `data-*` attributes and shared `script.js` logic. The Slides from Photos Marketplace CTA emits the consent-aware `marketplace_click` event with `product=slides_from_photos`, `marketplace=google_workspace`, `cta_action=install`, and `cta_position=hero`.
- Kept CTA navigation independent of GA success and added no UTM parameters.

## Files changed

### Created

- `docs/tasks/2026-10-09-google-analytics-consent.md`
- `scripts/validate-public-pages.js`

### Modified

- `script.js`
- `styles.css`
- `package.json`
- `AGENTS.md`
- `privacy.html`
- `slides-from-photos/index.html`
- `scripts/validate-public-pages.js`

### Deleted

- None

## Decisions

The existing shared `script.js` is the single implementation location because all 13 public pages already load it, including nested routes. No HTML page contains the measurement ID or the Google tag URL. Google Tag Manager, advertising features, Consent Mode, user IDs, and other consent categories were intentionally excluded.

The approved disclosure now appears in Section 14 of both General Privacy representations. No Product Privacy Notice was modified.

Marketplace/product CTA tracking uses the standard declarative attribute vocabulary (`data-analytics-event`, `data-product`, `data-marketplace`, `data-cta-action`, and `data-cta-position`). The shared click handler sends events only when consent is `granted` and GA is initialized; otherwise it leaves navigation untouched.

## Validation

- `node --check script.js` passed.
- `npm run validate:public-pages` passed and validated all 13 public HTML pages.
- The local development server served all 13 public routes with HTTP 200, including nested Slides from Photos pages.
- `git diff --check` passed.
- `npm run validate:public-pages` passed and validated all 13 public HTML pages after the Privacy update.
- Static inspection confirmed no GA request path is created until the stored preference is `granted`, and no direct GA snippet is present in public HTML.
- Manual browser network testing confirmed no Google Analytics request before consent, Google Analytics loading after `Accept cookies`, and no Google Analytics loading after `Decline`.
- Static inspection confirmed the Marketplace CTA carries the approved event attributes, uses the exact Marketplace URL without UTM parameters, and contains no inline GA handler.
- Responsive behavior was reviewed through the scoped CSS rules for approximately 390px and the existing shared layout remains unchanged; visual browser screenshots were not available in this environment.

## Known issues

None known.

## Remaining work

- Review the implementation and the focused privacy disclosure question.
- Review the final diff and publish after approval.

## Suggested next step

Review the final diff and production deployment after approval.

## Final status

Ready for review
