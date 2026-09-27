# DZS Labs public website

Static public website for **DZS Labs**, a software brand owned and operated by **DZS Infinity LLC**.

- Deployment: GitHub Pages
- Repository: `dzslabs/dzslabs.github.io`
- Public URL: https://dzslabs.github.io/
- Stack: semantic HTML, CSS, minimal vanilla JavaScript, SVG assets
- Build step: none

## Run locally

Either open `index.html` directly in a browser, or from the project directory run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

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
