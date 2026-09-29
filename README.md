# DZS Labs public website

Static public website for **DZS Labs**, a software brand owned and operated by **DZS Infinity LLC**.

- Deployment: GitHub Pages
- Repository: `dzslabs/dzslabs.github.io`
- Public URL: https://dzslabs.github.io/
- Stack: semantic HTML, CSS, minimal vanilla JavaScript, SVG assets
- Build step: none

## Run locally

Install Node.js (an LTS release is recommended), which includes npm. From the repository directory run:

```bash
npm install
npm run dev
```

The development server opens `index.html` in your browser. The site is available at http://localhost:3000. Saving an HTML, CSS, JavaScript, or asset file automatically refreshes the browser. Keep port 3000 free before starting the server.

`npm start` runs the same development server. Stop it with `Ctrl+C` in the terminal.

`live-server` is a development dependency only, and `node_modules/` is ignored by Git. Production remains plain static HTML, CSS, JavaScript, and assets: GitHub Pages needs no npm install or build step. Keep `.nojekyll` in the repository; no `dist` or `build` directory is required.

## Contact form configuration

The only required future configuration item is the contact-form delivery endpoint.

Open `script.js` and set:

```js
const FORM_ENDPOINT = "";
```

to the endpoint supplied by a service such as Formspree or Web3Forms. Until an endpoint is configured, the form intentionally prevents transmission and shows a neutral message instead of pretending a message was sent.

## File structure

```text
/
├── index.html
├── products.html
├── about.html
├── contact.html
├── privacy.html
├── terms.html
├── slides-from-photos/
│   ├── index.html
│   └── slides-from-photos.css
├── styles.css
├── script.js
├── .nojekyll
├── README.md
└── assets/
    ├── logo/
    │   ├── dzs-labs-logo.svg
    │   ├── dzs-labs-mark.svg
    │   └── favicon.svg
    ├── products/
    │   ├── slidebatch.svg
    │   └── shelfready-sheets.svg
    └── visuals/
        └── hero-visual.svg
```
