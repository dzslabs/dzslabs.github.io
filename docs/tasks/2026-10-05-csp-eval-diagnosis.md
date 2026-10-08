# Task: CSP eval warning diagnosis

Date: 2026-10-05

Status: Completed

## Objective

Identify the source of the browser warning that a site's Content Security Policy blocks `eval`, without weakening CSP or changing FormSubmit.

## Scope

Included: first-party JavaScript, HTML inline scripts, deployed response headers, static hosting configuration, FormSubmit navigation context, and browser/runtime evidence.

Excluded: CSP changes, `unsafe-eval`, form rewrites, provider changes, and design changes.

## Initial state

The repository contains a small shared `script.js` for mobile navigation and dynamic footer years. No CSP declaration or eval-like call has been found in the initial repository search.

## Plan

1. Search all first-party code and configuration for eval-like APIs and CSP declarations.
2. Inspect deployed CSP headers and compare normal pages with FormSubmit responses.
3. Check the two form routes, redirects, browser evidence where available, and extension-related limitations.

## Work completed

- Searched all first-party HTML, CSS, JavaScript, static-hosting files, and configuration for CSP declarations and eval-like APIs.
- Inspected deployed response headers for normal DZS pages, the feedback page, FormSubmit, and the GitHub Pages redirect.
- Inspected the FormSubmit landing response and its referenced third-party scripts.

## Files changed

### Created

- `docs/tasks/2026-10-05-csp-eval-diagnosis.md`

### Modified

- None yet.

### Deleted

- None

## Decisions

No CSP or form changes will be made during diagnosis.

## Validation

- No repository `<meta http-equiv="Content-Security-Policy">`, HTTP CSP header, `.htaccess`, or `script-src` directive exists in this static site.
- Local and production DZS pages return no `Content-Security-Policy` response header; therefore there is no current first-party `script-src` directive to report.
- First-party `script.js` contains only mobile-navigation listeners and current-year text replacement. It contains no `eval`, `new Function`, string-based timers, `preventDefault`, `fetch`, or submit listener.
- The repository contains no first-party `setTimeout` or `setInterval` call. The only matching historical text is in task documentation.
- Both form pages use native POST markup and load only the shared `script.js`; no product-specific submission script is loaded.
- Local Contact, feedback, and success routes return HTTP 200. Production Contact and feedback routes return HTTP 200.
- A non-submitting HEAD request to FormSubmit returned HTTP 200. No real POST was sent.
- FormSubmit's own `https://formsubmit.co/js/app.js` bundle contains `Function("return this")`, `(0,eval)("this")`, and `new Function(e)` in bundled dependencies. This is third-party code and is the only exact eval-like source identified during the investigation.
- FormSubmit's GET response references jQuery, FormSubmit `app.js`, Google Tag Manager, and Cloudflare challenge code. Its inspected response did not expose a CSP header or CSP meta tag.
- Browser extension versus incognito console comparison and a real POST/network trace were not available in this environment.

## Known issues

- The exact console stack/source for the reported warning could not be captured without interactive DevTools. First-party code is ruled out by repository and deployed-source inspection.
- The warning is most plausibly associated with FormSubmit's third-party page/bundle after navigation, or with a browser extension; this cannot be distinguished from static HTTP evidence alone.
- FormSubmit activation and email delivery remain unverified.

## Remaining work

Compare a normal browser session with an incognito session with extensions disabled, recording the console source and whether the warning appears before or after FormSubmit navigation. Capture a real POST only when an actual test submission is authorized.

## Suggested next step

If the warning appears only on FormSubmit or disappears in incognito, report it as third-party/extension behavior. Do not add `unsafe-eval` or change the site's CSP.

## Final status

Completed
