import { Phone, ArrowRight } from "lucide-react";
import { BRAND } from "../data";

export default function StickyMobileCTA({ onCTA }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800/10 bg-cream/95 px-3 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={BRAND.phoneHref}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy-800/20 bg-white text-navy-800"
          aria-label="Call now"
        >
          <Phone className="h-4 w-4" />
        </a>
        <button onClick={onCTA} className="btn-gold flex-1 py-3 text-[14px]">
          Reserve free call <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
