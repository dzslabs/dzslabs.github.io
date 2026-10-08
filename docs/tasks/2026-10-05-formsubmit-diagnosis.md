# Task: FormSubmit diagnosis

Date: 2026-10-05

Status: Completed

## Objective

Diagnose why the Contact and Slides from Photos feedback forms may not be working, including native form markup, shared JavaScript, honeypots, redirects, and external FormSubmit activation.

## Scope

Included: `contact.html`, `slides-from-photos/feedback/index.html`, `script.js`, shared form behavior, success routes, recent task records, and local/browser verification.

Excluded: redesigns, provider changes, new backends, and unrelated page changes.

## Initial state

Both forms use direct FormSubmit POST actions. The shared script contains mobile navigation and dynamic footer-year behavior but no submit listener, `preventDefault`, `fetch`, or `FORM_ENDPOINT` logic. The Contact form retains the historical `data-contact-form` attribute without a current handler.

## Plan

1. Inspect both forms, shared scripts/styles, success routes, and task history.
2. Compare field/action/hidden-field/honeypot configuration and search for interception.
3. Test local validation/request behavior as far as the environment permits and document code versus external activation issues.

## Work completed

- Compared the Contact and Slides from Photos feedback forms and their hidden FormSubmit fields.
- Searched the repository and deployed shared script for submit interception, `preventDefault`, `fetch`, `FORM_ENDPOINT`, and submit listeners.
- Checked local and production success-route behavior and canonical URLs.

## Files changed

### Created

- `docs/tasks/2026-10-05-formsubmit-diagnosis.md`

### Modified

- None. The diagnostic journal is the only new tracked work from this task.

### Deleted

- None.

## Decisions

- No form markup or provider configuration was changed because neither form is blocked by current JavaScript.
- The legacy `data-contact-form` attribute is inert: no current script reads it.
- The feedback route files are present locally but untracked, so they are not deployed to the public site. This is the concrete code/repository deployment issue for the feedback form.

## Validation

- Parsed both local forms: each has one well-formed form, no nested forms, a valid POST action, named controls, submit button, and expected hidden fields.
- Contact fields are `name`, `email`, `subject`, and `message`, all required.
- Feedback fields are required `type` radios and `message`, plus optional `email`; the three radio values are `bug`, `feature_request`, and `general_feedback`.
- Both honeypots are empty text inputs with `autocomplete="off"`, `tabindex="-1"`, and `display:none`; no JavaScript populates them.
- Confirmed no `preventDefault`, `fetch`, submit event listener, endpoint guard, or fake success logic exists in the shared script or product scripts.
- Local Contact, Contact success, feedback, and feedback thank-you routes returned HTTP 200.
- Initial production check: Contact and Contact success returned HTTP 200, while feedback and feedback thank-you returned HTTP 404 before the new Pages deployment had propagated.
- After commit `507ae18c6c08330c973609192d856222c7035f22` was picked up by GitHub Pages, the dynamic `pages build and deployment` run completed successfully and deployed the routes. Both `https://dzslabs.site/slides-from-photos/feedback/` and `https://dzslabs.site/slides-from-photos/feedback/thanks/` now return HTTP 200.
- FormSubmit endpoint responded to a non-submitting HEAD request with HTTP 200 and advertised POST support. No real message was sent from this diagnostic.
- Confirmed stale GitHub Pages canonicals remain on `contact.html` and `contact-success.html`; this is separate from submission behavior.

## Known issues

- The earlier production 404 was deployment propagation timing immediately after the push, not a missing path in commit `507ae18c6c08330c973609192d856222c7035f22`.
- FormSubmit activation for `contact@dzslabs.site` cannot be proven from code or a non-submitting request.
- A real browser POST and email delivery were not attempted to avoid sending test messages.

## Remaining work

No deployment configuration change is required. Verify FormSubmit activation with a controlled real submission when ready.

## Suggested next step

Treat FormSubmit email activation as a separate follow-up action; do not change the native POST implementation unless browser evidence shows interception.

## Final status

Completed
