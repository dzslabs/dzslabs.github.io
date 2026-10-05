# Task: General Privacy account and data deletion wording

Date: 2026-10-05

Status: Completed

## Objective

Update Section 17 of the general DZS Labs Privacy Policy to remove the obsolete
account-deletion route and provide the approved privacy/deletion request
instructions.

## Scope

Updated the general Privacy Policy HTML and its authoritative Markdown source.
The Slides from Photos Product Privacy Notice, layouts, navigation, and other
pages were left unchanged. No account-deletion page or redirect was created.

## Work completed

Section 17 now states that DZS Labs does not currently require separate DZS
Labs accounts, provides future product-specific instructions if needed, and
accepts privacy/deletion requests through `PRIVACY@DZSLABS.SITE` using a
`mailto:` link. The obsolete `https://dzslabs.site/account-deletion` URL was
removed from both general-policy representations.

## Files changed

### Modified

- `privacy.html`
- `/Users/s369/Work/DZS Labs/dzslabs-legal/privacy-policy.md`

### Created

- `docs/tasks/2026-10-05-general-privacy-account-deletion.md`

## Validation

- Confirmed the new Section 17 wording and working privacy mailto link.
- Confirmed `slides-from-photos/privacy.html` remains unchanged and contains no
  obsolete account-deletion URL.
- Confirmed no account-deletion page or redirect was created.
- Searched current files and historical task records for remaining references.
- `git diff --check` passed.

## Remaining occurrences

Historical task journals retain account-deletion references as records of the
previous policy state. No current general Privacy Policy or product privacy
page links to that route.

## Final status

Completed
