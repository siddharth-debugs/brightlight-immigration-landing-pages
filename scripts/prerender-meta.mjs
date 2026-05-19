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
// The static index.html hardcodes the canonical production origin so
// the home preview is correct even without a build env override. When
// SITE_URL points elsewhere (GH Pages staging, alternate domain), we
// swap every hardcoded occurrence so OG/canonical resolve correctly.
const DEFAULT_SITE_URL = "https://www.brightlightimmigration.ca";
const SITE_URL = process.env.SITE_URL || DEFAULT_SITE_URL;

function rewriteSiteUrl(html) {
  if (SITE_URL === DEFAULT_SITE_URL) return html;
  const target = SITE_URL.replace(/\/$/, "");
  return html.split(DEFAULT_SITE_URL).join(target);
}

function ogImageFor(slug = "home") {
  // 1200x630 hero screenshots committed to public/og/{slug}.jpg.
  // Same definition as src/lib/seo.js — kept in sync.
  return `${SITE_URL.replace(/\/$/, "")}/og/${slug}.jpg`;
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

// One-off custom routes outside the SERVICES array. Each entry is
// effectively a hand-rolled landing page — the prerender still needs
// to bake in its meta tags so crawlers see them.
const EXTRA_ROUTES = [
  {
    slug: "pgwp-options",
    title:
      "PGWP Expiring? 5 Pathways to Stay in Canada | Brightlight Immigration",
    description:
      "Your PGWP is ending — or already has. Five realistic pathways to stay and work in Canada: LMIA-based permit, Francophone Mobility, study permit, visitor record, and a paid PR guidance session.",
    // Reuse the existing pgwp hero screenshot until a dedicated one is captured.
    imageSlug: "pgwp-expiring",
  },
];

async function main() {
  let baseHtml = await fs.readFile(path.join(DIST, "index.html"), "utf8");
  baseHtml = rewriteSiteUrl(baseHtml);
  // Write the home page back so its meta tags match the deploy host.
  await fs.writeFile(path.join(DIST, "index.html"), baseHtml, "utf8");
  const servicesUrl = pathToFileURL(
    path.join(ROOT, "src", "services", "index.js")
  ).href;
  const { SERVICES } = await import(servicesUrl);

  const routes = [
    ...SERVICES.map((svc) => {
      const meta = svc.meta || {};
      return {
        slug: svc.slug,
        title: meta.title || `${svc.fullName} | Brightlight Immigration`,
        description: meta.description || svc.tagline || "",
        image: meta.image || ogImageFor(svc.slug),
      };
    }),
    ...EXTRA_ROUTES.map((r) => ({
      slug: r.slug,
      title: r.title,
      description: r.description,
      image: r.image || ogImageFor(r.imageSlug || r.slug),
    })),
  ];

  let written = 0;
  for (const r of routes) {
    const url = `${SITE_URL.replace(/\/$/, "")}/${r.slug}`;
    const ctx = {
      title: r.title,
      description: r.description,
      url,
      image: r.image,
    };

    let html = baseHtml;
    for (const fn of replacers) html = fn(html, ctx);

    const outDir = path.join(DIST, r.slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
    written++;
    console.log(`  ✓ ${r.slug}/index.html`);
  }
  console.log(`prerender-meta: wrote ${written} per-route HTML files`);
}

main().catch((e) => {
  console.error("prerender-meta failed:", e);
  process.exit(1);
});
