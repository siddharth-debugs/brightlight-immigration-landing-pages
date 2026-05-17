import spousal from "./spousal";
import pgwp from "./pgwp";
import vulnerable from "./vulnerable";
import francophone from "./francophone";

export const SERVICES = [spousal, pgwp, vulnerable, francophone];

export function findService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

export { spousal, pgwp, vulnerable, francophone };
