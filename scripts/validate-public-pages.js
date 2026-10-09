const fs = require("fs");
const path = require("path");

const root = process.cwd();
const excludedDirectories = new Set([".git", "node_modules"]);
const sharedScript = fs.readFileSync(path.join(root, "script.js"), "utf8");
const measurementId = sharedScript.match(/ANALYTICS_MEASUREMENT_ID\s*=\s*["']([^"']+)["']/)?.[1];
const publicPages = [];

if (!measurementId) {
  console.error("script.js: could not find ANALYTICS_MEASUREMENT_ID");
  process.exit(1);
}

function collectHtml(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!excludedDirectories.has(entry.name)) collectHtml(path.join(directory, entry.name));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      publicPages.push(path.relative(root, path.join(directory, entry.name)));
    }
  }
}

collectHtml(root);
const failures = [];

for (const page of publicPages.sort()) {
  const file = fs.readFileSync(path.join(root, page), "utf8");
  const scripts = [...file.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map((match) => match[1]);
  if (!scripts.some((src) => path.posix.basename(src) === "script.js")) {
    failures.push(`${page}: missing shared script.js`);
  }
  if (file.includes(measurementId) || file.includes("googletagmanager.com/gtag/js")) {
    failures.push(`${page}: contains duplicated GA configuration`);
  }
  if (/\bgtag\s*\(\s*["']event["']/.test(file)) {
    failures.push(`${page}: contains inline gtag event tracking; use data attributes`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${publicPages.length} public HTML pages.`);
