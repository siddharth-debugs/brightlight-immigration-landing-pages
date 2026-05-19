import { BRAND } from "../data";

// Production site origin. Override via VITE_SITE_URL at build time if
// the production hostname changes.
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://www.brightlightimmigration.ca";

// 1200x630 hero screenshots committed to public/og/{slug}.jpg, captured
// from the actual rendered pages. Use ogImageFor(slug) for any route,
// or the constant DEFAULT_OG_IMAGE for fallback.
function joinBase(...parts) {
  return parts
    .map((p, i) => (i === 0 ? p.replace(/\/$/, "") : p.replace(/^\/|\/$/g, "")))
    .filter(Boolean)
    .join("/");
}

export function ogImageFor(slug = "home") {
  // Absolute URL is required by most social crawlers.
  return joinBase(SITE_URL, "og", `${slug}.jpg`);
}

export const DEFAULT_OG_IMAGE = ogImageFor("home");

// Backwards-compatible alias: older callers passed a title, but the
// argument is now expected to be a service slug.
export function brandOgImage(slugOrTitle) {
  return ogImageFor(slugOrTitle || "home");
}

function setMeta(attr, key, value) {
  if (value == null || value === "") return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Set page-level SEO meta in a single call.
 *
 * @param {object} opts
 * @param {string} opts.title       Document <title>. Also used for og/twitter title.
 * @param {string} opts.description Meta description. Also used for og/twitter description.
 * @param {string} [opts.path]      URL path including leading slash, e.g. "/spousal-sponsorship".
 * @param {string} [opts.image]     OG/Twitter image URL. Defaults to brand logo.
 * @param {string} [opts.type]      og:type. "website" for home, "article" otherwise.
 */
export function setSEO({ title, description, path = "/", image, type }) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const ogType = type || (path === "/" ? "website" : "article");

  document.title = title;
  setMeta("name", "description", description);
  setLink("canonical", url);

  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", ogType);
  setMeta("property", "og:image", ogImage);
  setMeta("property", "og:image:width", "1200");
  setMeta("property", "og:image:height", "630");
  setMeta("property", "og:image:type", "image/jpeg");
  setMeta("property", "og:image:alt", title);
  setMeta("property", "og:site_name", BRAND.name);
  setMeta("property", "og:locale", "en_CA");

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", ogImage);
  setMeta("name", "twitter:image:alt", title);
}

/**
 * Install (or replace) a JSON-LD <script> in <head> by id.
 */
export function setJSONLD(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Remove a previously-installed JSON-LD <script> by id.
 */
export function clearJSONLD(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}
