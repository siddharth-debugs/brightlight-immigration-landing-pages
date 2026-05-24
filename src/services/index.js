// Explicit .js extensions so Node ESM (used by scripts/prerender-meta.mjs)
// can import these directly. Vite handles both forms.
import spousal from "./spousal.js";
import pgwp from "./pgwp.js";
import workPermitExpiring from "./workPermitExpiring.js";
import vulnerable from "./vulnerable.js";
import francophone from "./francophone.js";
import studyVisaMasters from "./studyVisaMasters.js";

export const SERVICES = [
  spousal,
  pgwp,
  workPermitExpiring,
  vulnerable,
  francophone,
  studyVisaMasters,
];

export function findService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

export {
  spousal,
  pgwp,
  workPermitExpiring,
  vulnerable,
  francophone,
  studyVisaMasters,
};
