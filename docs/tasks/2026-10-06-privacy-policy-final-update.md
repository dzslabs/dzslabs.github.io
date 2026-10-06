# Task: Finalize privacy policy updates

Date: 2026-10-06

Status: Ready for review

## Objective

Reconcile the interrupted Product Privacy Notice update and apply the final approved revisions to the Slides from Photos Product Privacy Notice and the general DZS Labs Privacy Policy.

## Scope

Included the approved date, section, wording, numbering, and source-synchronization changes in the two privacy documents and their authoritative Markdown sources.

Excluded unrelated working-tree diagnostics, product pages, forms, and legal sections outside the approved changes.

## Initial state

The Product Privacy Notice contained partial prior changes: an H3 data subsection, old main-section numbering, the previous Batch/Retention/Sharing/Analytics wording, and the earlier Google API policy text. The general Privacy page still had its prior Section 5 and Section 16 wording and September 29, 2026 last-updated date.

## Work completed

- Updated the Product Privacy Notice Last Updated date to October 6, 2026 while preserving the October 5, 2026 Effective Date.
- Replaced the partial Product Privacy structure with 18 numbered sections, making Raw, Aggregated, Anonymized, and Derived Google User Data the new main Section 6 and renumbering Sections 7–18.
- Replaced Product Sections 7, 8, 9, and 13 with the approved Batch Progress, Data Storage and Retention, Sharing and Disclosure, Google API Services User Data Policy, and Analytics and Diagnostics wording.
- Removed the Google OAuth verification editorial sentence and the internal French retention note from the public HTML/source output.
- Preserved the approved Security, Advertising, Removing Access, Data Deletion, Children, Changes, and Contact content while renumbering it.
- Updated the general Privacy Last Updated date, replaced Section 5, and applied the targeted Section 16 retention paragraphs in both HTML and the accessible authoritative Markdown source.
- Included the final approved third-party AI/ML transfer sentence in Product Section 10.

## Files changed

### Created

- `docs/tasks/2026-10-06-privacy-policy-final-update.md`

### Modified

- `slides-from-photos/privacy.html`
- `docs/legal/slides-from-photos-product-privacy.md`
- `privacy.html`
- `/Users/s369/Work/DZS Labs/dzslabs-legal/privacy-policy.md` (accessible external source)

### Deleted

- None

## Decisions

- Stable section IDs were retained where possible; the new Product Section 6 uses `raw-aggregated-anonymized-derived-google-user-data`.
- No account-deletion URL, product-specific scopes, or unrelated legal wording was added.
- The final approved statement that Product data is not transferred to third-party AI/ML services for generalized-model development is included as instructed.
- The external legal source directory is accessible but is not a Git repository; no external commit or publication action was performed.

## Validation

- Compared the final Product and general HTML/source changes for approved wording and numbering.
- Confirmed the Product Privacy Notice has 18 main numbered sections and a matching 18-item TOC.
- Confirmed the Product five OAuth scope strings remain unchanged.
- Confirmed the old service-provider clause and Google OAuth guidance editorial sentence are absent from Product content.
- Confirmed no `/account-deletion`, ShelfReady, `In development`, tracking-parameter, or internal French note appears in the public Product HTML.
- Confirmed Sections 10–14 from the previous Product document were preserved or replaced only where explicitly approved.
- `git diff --check` passed for the website repository.

## Known issues

The separate product implementation repository/evidence is not present in this website repository, so implementation behavior cannot be independently verified here. The final legal wording was applied as explicitly approved.

## Remaining work

User review of the unstaged working-tree changes. No Git publication action was performed.

## Suggested next step

Review the rendered legal pages and then decide whether to stage and publish the approved changes.

## Final status

Ready for review
