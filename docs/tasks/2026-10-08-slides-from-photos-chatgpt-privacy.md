# Task: Slides from Photos ChatGPT Plugin Privacy Notice

Date: 2026-10-08

Status: Ready for review

## Objective

Create the dedicated ChatGPT Plugin Privacy Notice at `/slides-from-photos/chatgpt-privacy.html` using the authoritative legal content supplied for the Slides from Photos ChatGPT Plugin.

## Scope

Included the new static legal page, its authoritative Markdown source, the 13-section table of contents, required links, shared legal-page shell, and validation.

Excluded existing Privacy Policy pages, the Slides from Photos add-on Product Privacy Notice, global navigation/footer changes, and any implementation or legal claims beyond the supplied content.

## Initial state

The repository contains the approved Slides from Photos Product Privacy Notice at `slides-from-photos/privacy.html`, which is the visual source of truth. No ChatGPT Plugin Privacy Notice page or source file existed.

## Plan

1. Reuse the existing Product Privacy legal shell and shared assets.
2. Convert the supplied 13-section content into semantic HTML and synchronized Markdown.
3. Validate links, anchors, responsive-safe wrapping, local routes, and diff cleanliness without staging or publishing.

## Work completed

- Created `slides-from-photos/chatgpt-privacy.html` at the exact requested public route.
- Reused the existing Slides from Photos Product Privacy header, footer, legal shell, TOC, typography, section structure, and responsive classes.
- Added the supplied 13-section legal content with the approved dates and H1.
- Created `docs/legal/slides-from-photos-chatgpt-plugin-privacy.md` with materially synchronized legal wording.
- Added the exact Google Workspace Marketplace URL and links to the general Privacy Policy, Slides from Photos product page, and separate add-on Product Privacy Notice.
- Linked only the words `Product Privacy Notice` in Sections 2 and 6 to the separate add-on notice.
- Reused the approved DZS Infinity LLC legal entity, company number, and address formatting.

## Files changed

### Created

- `slides-from-photos/chatgpt-privacy.html`
- `docs/legal/slides-from-photos-chatgpt-plugin-privacy.md`
- `docs/tasks/2026-10-08-slides-from-photos-chatgpt-privacy.md`

### Modified

- None

### Deleted

- None

## Decisions

- The page uses the existing legal-document family rather than introducing a product marketing layout.
- The visible H1 is `ChatGPT Plugin Privacy Notice`; the Markdown source retains the full document title.
- No Google OAuth scopes, backend capabilities, MCP behavior, OpenAI retention claims, analytics claims, or other technical facts were added beyond the supplied content.
- Existing Privacy pages and global navigation/footer were not modified.

## Validation

- Confirmed exactly 13 numbered sections and 13 matching TOC entries.
- Confirmed every TOC target matches a unique section ID.
- Confirmed the exact canonical, title, dates, Marketplace URL, product URLs, mailto links, legal entity, company number, and address.
- Confirmed no Google OAuth scope strings, tracking parameters, placeholders, TODO/TBD text, raw Markdown, nested anchors, internal editorial notes, or `DZS Labs LLC` wording were introduced.
- Confirmed the HTML and Markdown contain matching substantive section wording.
- Reviewed the shared legal CSS breakpoints for 1440px, 1024px, 768px, and 390px; long URLs and email addresses use the existing wrapping-safe legal styles.
- Local static routes returned HTTP 200 for the new page and the two existing Privacy pages.
- `git diff --check` passed.

## Known issues

None known.

## Remaining work

User review. No files were staged, committed, or pushed.

## Suggested next step

Review the rendered page and decide whether to publish it in a later task.

## Final status

Ready for review
