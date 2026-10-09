# AGENTS.md

# DZS Labs Website — Agent Instructions

This file defines the permanent working rules for AI coding agents operating on the DZS Labs website repository.

Read this file completely before making changes.

---

## 1. Project identity

### Public brand

DZS Labs

### Legal entity

DZS Infinity LLC

These are NOT interchangeable.

DZS Labs is a software brand.

DZS Infinity LLC is the legal entity that owns and operates DZS Labs.

Approved wording:

> DZS Labs is a software brand owned and operated by DZS Infinity LLC.

Never write:

- DZS Labs LLC
- DZS Labs Inc.
- DZS Labs corporation
- DZS Labs is incorporated
- any wording implying that DZS Labs itself is the registered legal entity

Unless the user explicitly changes the legal structure in a later task.

---

## 2. Project purpose

This repository contains the public DZS Labs website.

The site currently exists primarily to:

- establish the DZS Labs software brand
- present current and future software products
- provide corporate credibility
- support marketplace/platform verification
- provide legal pages
- provide contact information / contact functionality
- serve as the public web presence of DZS Labs

The site should feel like a focused software publisher.

It should NOT feel like:

- a startup fundraising landing page
- an AI startup
- a creative agency
- a freelancer portfolio
- an ecommerce store
- a giant enterprise company
- a holding-company website

Credibility should come from clarity, accuracy and restraint.

Do not fabricate credibility signals.

---

## 3. Current product state

### Current public product

The only product currently presented on the public DZS Labs website is:

### Slides from Photos

A Google Slides add-on designed to turn batches of photos into presentation slides automatically.

Do not display an `In development` badge or status for Slides from Photos unless the user explicitly requests that status again. Do not infer a replacement availability status. Do not claim that Slides from Photos is publicly installable unless that is explicitly confirmed.

### Hidden / unpublished product

### ShelfReady Sheets

ShelfReady Sheets exists as a DZS Labs project/product but is intentionally hidden from the current public website. Do not reintroduce ShelfReady Sheets into public pages unless the user explicitly requests it.

Its internal product direction includes:

- importing supplier CSV / Excel data
- reviewing exceptions
- identifying issues such as missing barcodes, quantity differences and cost changes
- preparing barcode / price label output
- integrating with existing retailer POS / spreadsheet workflows

Keep this internal context when it helps prevent accidental reintroduction, but do not present ShelfReady Sheets as a current public product.

Do not invent product capabilities or a replacement availability status.

Never use claims such as:

- Available now
- Install now
- Buy now
- Used by thousands
- Trusted by
- customer counts
- ratings
- testimonials
- marketplace badges

unless they have become factually true and have been explicitly provided.

---

## 4. Current website architecture

The website is intentionally static.

Primary technologies:

- semantic HTML5
- CSS
- vanilla JavaScript
- SVG
- static assets

Current pages:

- `index.html`
- `products.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`

Shared website files include:

- `styles.css`
- `script.js`
- `assets/`
- `.nojekyll`
- `README.md`

Do not convert the site to another framework unless the user explicitly requests it.

Do not introduce without explicit approval:

- React
- Next.js
- Vue
- Angular
- Astro
- Svelte
- TypeScript
- Vite
- Webpack
- server-side rendering
- PHP
- a database
- a required production build process

---

## 5. npm usage

npm may be used for LOCAL DEVELOPMENT tooling.

npm must not become a production dependency for the public website unless explicitly requested later.

The production website must remain deployable directly as static files to GitHub Pages.

Local development may use a live-reload server.

Expected development URL:

`http://localhost:3000`

If npm scripts exist in `package.json`, inspect them before starting the project.

Prefer the repository-defined development command.

If no development script exists yet, a temporary local server can be run using:

```bash
npx live-server --port=3000 --open=/index.html
```

Do not introduce a build step merely to run the static website locally.

---

## 6. Deployment

Production hosting:

GitHub Pages

Repository:

`dzslabs/dzslabs.github.io`

Expected public URL:

`https://dzslabs.github.io/`

The repository should remain directly deployable from static files.

Requirements:

- relative internal paths
- no localhost URLs in production files
- no private machine paths
- no API secrets
- no credentials
- no `node_modules` committed
- no required build output
- retain `.nojekyll`

When changing URLs, assets or navigation, consider GitHub Pages compatibility.

---

## 7. Visual source of truth

The current approved website design is:

**DZS Labs Website Design System V1.3**

Do not redesign the website unless the user explicitly asks for a redesign.

Do not reinterpret the design based on personal preference.

When multiple design documents conflict, use this priority:

1. final V1.3 screenshots / design boards
2. final V1.3 implementation requirements
3. older brand/design documents
4. inferred design preferences

The V1.3 visual boards are the final visual authority.

Older design documentation may contain superseded typography, colors, layouts or concepts.

Do NOT revert the site to older directions simply because they appear in an older document.

---

## 8. Current visual system

The current V1.3 website direction uses a minimal software-publisher aesthetic.

Primary visual characteristics:

- warm white background
- dark ink typography
- restrained blue brand accent
- generous but controlled whitespace
- thin neutral borders
- minimal decoration
- editorial product rows
- subtle product-specific accents
- clear typography hierarchy

Approximate V1.3 palette:

- Warm white: `#FFFCF9`
- Ink: `#0F172A`
- Neutral gray: `#E5E7EB`
- Primary blue: `#2563EB`
- Slides from Photos accent: `#8B5CF6`
- ShelfReady Sheets accent: `#10B981`

Primary typography:

`Inter`

Do not replace the typography or palette without explicit instruction.

---

## 9. Brand mark

The approved V1.3 identity uses the recommended Z-led geometric mark shown in the final design board.

It is paired with the wordmark:

`DZS Labs`

Do not return to the previous overlapping-rectangle identity.

Do not redesign the logo casually while working on unrelated website tasks.

Logo assets should remain vector-based where possible.

---

## 10. Design philosophy

The website should remain restrained.

Prefer:

- clear typography
- spacing
- alignment
- hierarchy
- subtle separators
- simple interaction
- accurate copy

Avoid unnecessary:

- cards
- gradients
- glassmorphism
- floating shapes
- huge shadows
- excessive animations
- parallax
- fake dashboards
- stock photography
- decorative complexity
- oversized SaaS-style rounded containers

Do not add sections merely because a typical SaaS site has them.

The site intentionally does not try to look larger than the business currently is.

---

## 11. Header

Desktop navigation:

- Products
- About
- Contact

Logo links to home.

Keep navigation minimal.

Do not add without explicit instruction:

- Login
- Sign up
- Pricing
- Blog
- Dashboard
- Get started

Mobile uses a compact accessible menu.

---

## 12. Footer

The footer should remain compact.

Expected links:

- Products
- About
- Contact
- Privacy
- Terms

Brand line:

`Practical software for everyday workflows.`

Legal relationship must remain clear.

Copyright belongs to:

`DZS Infinity LLC`

Never write:

`© DZS Labs LLC`

---

## 13. Homepage

The homepage is intentionally concise.

Primary headline:

`Practical software for everyday workflows.`

Primary CTA:

`Explore products`

Secondary link:

`About DZS Labs`

Product shown:

- Slides from Photos

Slides from Photos should not carry an `In development` badge or status in the public catalog.

Do not add large marketing sections unless explicitly requested.

---

## 14. Products page

Main headline:

`Focused software for practical workflows.`

The page currently presents:

- Slides from Photos

Do not invent an availability status for the product.

Do not turn product presentation into pricing cards.

---

## 15. About page

Keep the About page concise.

Primary content areas:

- DZS Labs introduction
- what DZS Labs builds
- DZS Labs / DZS Infinity LLC legal relationship

Do not invent:

- company history
- employee counts
- offices
- founder biography
- investment information
- customer lists
- awards

unless supplied by the user.

---

## 16. Contact page

The public heading is:

`Contact DZS Labs`

Fields currently expected:

- Name
- Email
- Subject
- Message

The website is static.

Do not fake form delivery.

Do not invent public email addresses.

Examples of addresses that MUST NOT be invented:

- hello@dzslabs.com
- legal@dzslabs.com
- support@dzslabs.com
- partnerships@dzslabs.com

If no form backend is configured, the UI must clearly avoid pretending the message was delivered.

Keep future form-service configuration isolated and easy to update.

Never commit API keys or private tokens.

---

## 17. Privacy and Terms

Privacy Policy and Terms of Service are sensitive content.

Do not casually invent factual claims about:

- data collected
- Google API scopes
- user data storage
- analytics
- processors
- retention periods
- encryption
- security certifications
- cookies
- data selling
- payment processing
- governing law

unless those facts are explicitly known and approved.

When technical implementation changes affect privacy or terms, flag the issue in the task log.

Do not silently rewrite legal pages to make them sound more complete.

---

## 18. Accessibility

Preserve or improve accessibility.

Target WCAG AA where reasonably possible.

Requirements include:

- semantic HTML
- valid heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible labels
- accessible mobile navigation
- meaningful alt text where applicable
- approximately 44px minimum interactive touch targets
- reduced-motion support
- no essential information conveyed only through color

Do not remove accessibility behavior for visual convenience.

---

## 19. Responsive behavior

The website should work intentionally at approximately:

- 1440px+
- 1024px
- 768px
- 390px

Do not treat mobile as a scaled-down desktop layout.

Check for:

- horizontal overflow
- broken text wrapping
- unusable navigation
- oversized headings
- cramped form controls
- incorrect product stacking
- legal-document readability

---

## 20. Performance

The site should remain lightweight.

Prefer:

- CSS
- SVG
- native browser APIs
- minimal JavaScript

Avoid unnecessary dependencies.

Do not introduce tracking or analytics without explicit instruction.

When Analytics is enabled, every new public HTML page must load the shared
`script.js`. Google Analytics 4 is initialized centrally from `script.js` with
measurement ID `G-TB36M1KMD2` and must remain gated on Analytics consent. Do
not paste GA snippets directly into individual pages. Marketplace and product
CTA analytics should use declarative `data-*` attributes and shared
`script.js` tracking logic; do not add inline `gtag` handlers.

---

## 21. General engineering rules

Before modifying anything:

1. inspect the repository
2. read this `AGENTS.md`
3. read `README.md`
4. inspect `git status`
5. inspect relevant existing files
6. read the recent task history in `docs/tasks/`
7. understand the current implementation before editing

Never blindly replace files because generating a new version is easier.

Preserve working functionality unless the task requires changing it.

Reuse existing design patterns and CSS variables where appropriate.

Avoid duplicate CSS and duplicate JavaScript behavior.

Prefer small coherent changes over unnecessary rewrites.

Do not refactor unrelated code during a focused task unless there is a clear technical reason.

If unrelated technical debt is discovered, record it in the task document rather than silently expanding scope.

---

## 22. Verification

Do not claim that something works unless it was actually verified.

For relevant changes, inspect or test:

- HTML pages load
- CSS loads
- JavaScript loads
- assets resolve
- navigation links work
- mobile navigation works
- no obvious horizontal overflow
- no JavaScript console errors
- local server starts
- affected responsive layouts remain usable
- GitHub Pages compatibility remains intact

Use browser/runtime verification when available.

If something could not be tested, explicitly record that fact.

---

# 23. Mandatory development task journal

Every substantial coding task MUST have its own Markdown task record.

Directory:

`docs/tasks/`

Filename format:

`YYYY-MM-DD-short-task-name.md`

Example:

`docs/tasks/2026-09-29-local-dev-server.md`

Use lowercase kebab-case for the task name.

Do not create meaningless task names such as:

- changes.md
- update.md
- fixes.md
- task1.md

The filename should describe the work.

---

## 24. At the beginning of every task

Before implementation:

1. read this `AGENTS.md`
2. inspect the repository and git status
3. read the most recent relevant files in `docs/tasks/`
4. create the new task Markdown file
5. set its status to `In progress`
6. write the objective and intended scope
7. record the initial implementation plan

Do not wait until the end to create the task record.

The task file is part of the implementation process.

---

## 25. During the task

Keep the task file updated when meaningful decisions occur.

Record:

- important implementation decisions
- files changed
- unexpected issues
- relevant discoveries
- scope adjustments
- technical debt discovered
- verification performed

The purpose is to allow another agent or developer to resume work without needing the previous chat conversation.

Do not fill the log with every terminal command.

Document decisions and useful state, not noise.

---

## 26. At the end of every task

Update the same task file.

Set the status to one of:

- `Completed`
- `Partially completed`
- `Blocked`

Include:

- what was implemented
- files created
- files modified
- important decisions
- tests / validation performed
- known issues
- remaining work
- suggested next step

Only mark a task `Completed` when the requested work is actually complete.

---

## 27. Task document template

Every new file in `docs/tasks/` should follow approximately this structure:

```markdown
# Task: [short task title]

Date: YYYY-MM-DD

Status: In progress

## Objective

Describe what the user requested and what this task is intended to accomplish.

## Scope

What is included.

What is explicitly not included.

## Initial state

Relevant implementation details before the changes.

## Plan

1. ...
2. ...
3. ...

## Work completed

Document meaningful implementation work.

## Files changed

### Created

- `path/file`

### Modified

- `path/file`

### Deleted

- None

## Decisions

Record implementation decisions that future developers need to understand.

## Validation

Record actual verification performed.

Examples:

- local server started successfully
- pages manually checked
- navigation verified
- JavaScript console checked
- responsive widths inspected

Do not list tests that were not actually performed.

## Known issues

List unresolved issues.

Use `None known` if appropriate.

## Remaining work

Anything intentionally left unfinished.

## Suggested next step

State the most logical continuation for the next development session.

## Final status

Completed / Partially completed / Blocked
```

---

## 28. Continuity between sessions

The repository itself must contain enough context for development to continue even if the next AI agent has no access to previous conversations.

Therefore:

- do not rely on chat history as the only source of implementation knowledge
- record important decisions in repository documentation
- read previous task logs before changing related functionality
- do not repeat investigations already documented unless circumstances changed

If a previous task made a deliberate decision, preserve it unless the new task explicitly supersedes it.

When superseding a previous decision, document why.

---

## 29. Git discipline

Do not delete or overwrite unrelated user changes.

Always inspect `git status` before broad modifications.

Do not commit automatically unless explicitly asked.

Do not push automatically unless explicitly asked.

Do not change Git remotes unless explicitly asked.

Do not rewrite Git history.

Do not commit:

- secrets
- credentials
- `.env` files containing secrets
- `node_modules`
- machine-specific temporary files

---

## 30. Scope discipline

The user may request one narrow change at a time.

Do that task first.

Do not turn a small task into an architectural rewrite.

If a better future architecture is identified, document the recommendation in the task log rather than implementing it without approval.

Exceptions are allowed only when a small prerequisite change is objectively necessary to complete the requested task safely.

---

## 31. Final response after coding

When reporting completed work to the user, keep the response concise and factual.

Include:

- what changed
- important files affected
- verification performed
- anything requiring user input
- unresolved issue if one exists

Do not claim success for untested behavior.

The repository and its task logs should contain the detailed technical history.
