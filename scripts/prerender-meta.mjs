// Post-build step: for each service in src/services, write a per-route
// static HTML file in dist/ with route-specific meta tags so that
// non-JS crawlers (WhatsApp, Facebook, LinkedIn, X, Slack) see the
// right title / description / og:image when the link is shared.
//
// Without this, every URL on the SPA serves dist/index.html, which has
// the home-page meta — so /spousal-sponsorship and /pgwp-expiring both
// preview as "Brightlight Immigration" with no service-specific copy.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = process.env.SITE_URL || "https://www.brightlightimmigration.ca";

function brandOgImage() {
  // 1200x630 OG card: brand logo scaled to a sensible size and centered
  // on a navy canvas. Same definition as src/lib/seo.js -- kept in sync.
  return (
    "https://res.cloudinary.com/dkqo3uz5o/image/upload/" +
    "c_scale,w_640/" +
    "c_pad,w_1200,h_630,b_rgb:132f46,q_auto,f_jpg/" +
    "v1776960199/brightlight-main-logo_amxfxh.webp"
  );
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function escapeText(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const replacers = [
  // <title>...</title>
  (html, { title }) =>
    html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`),
  // <link rel="canonical" href="..." />
  (html, { url }) =>
    html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeAttr(url)}" />`
    ),
  // <meta name="description" content="..." />
  (html, { description }) =>
    html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttr(description)}" />`
    ),
  // og:title
  (html, { title }) =>
    html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`
    ),
  // og:description
  (html, { description }) =>
    html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeAttr(description)}" />`
    ),
  // og:url
  (html, { url }) =>
    html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${escapeAttr(url)}" />`
    ),
  // og:image
  (html, { image }) =>
    html.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${escapeAttr(image)}" />`
    ),
  // og:image:alt
  (html, { title }) =>
    html.replace(
      /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image:alt" content="${escapeAttr(title)}" />`
    ),
  // og:type — service pages are articles
  (html) =>
    html.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="article" />`
    ),
  // twitter:title
  (html, { title }) =>
    html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeAttr(title)}" />`
    ),
  // twitter:description
  (html, { description }) =>
    html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeAttr(description)}" />`
    ),
  // twitter:image
  (html, { image }) =>
    html.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image" content="${escapeAttr(image)}" />`
    ),
  // twitter:image:alt
  (html, { title }) =>
    html.replace(
      /<meta\s+name="twitter:image:alt"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image:alt" content="${escapeAttr(title)}" />`
    ),
];

async function main() {
  const baseHtml = await fs.readFile(path.join(DIST, "index.html"), "utf8");
  const servicesUrl = pathToFileURL(
    path.join(ROOT, "src", "services", "index.js")
  ).href;
  const { SERVICES } = await import(servicesUrl);

  let written = 0;
  for (const svc of SERVICES) {
    const meta = svc.meta || {};
    const title = meta.title || `${svc.fullName} | Brightlight Immigration`;
    const description = meta.description || svc.tagline || "";
    const url = `${SITE_URL.replace(/\/$/, "")}/${svc.slug}`;
    const image = meta.image || brandOgImage(svc.fullName);
    const ctx = { title, description, url, image };

    let html = baseHtml;
    for (const fn of replacers) html = fn(html, ctx);

    const outDir = path.join(DIST, svc.slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
    written++;
    console.log(`  ✓ ${svc.slug}/index.html`);
  }
  console.log(`prerender-meta: wrote ${written} per-route HTML files`);
}

main().catch((e) => {
  console.error("prerender-meta failed:", e);
  process.exit(1);
});
