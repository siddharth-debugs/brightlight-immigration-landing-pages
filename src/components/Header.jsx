import { Phone } from "lucide-react";
import { BRAND } from "../data";

export default function Header({ onCTA }) {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-800/10 bg-cream/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={BRAND.icon}
            alt="Brightlight Immigration"
            className="h-10 w-auto"
            loading="eager"
          />
          <div className="leading-[1.05]">
            <div className="font-display text-[19px] text-navy-900">
              Brightlight
            </div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-700/85">
              Immigration
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold text-navy-900 hover:text-navy-600 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
          </a>
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-4 py-2.5 text-[13px] font-semibold text-cream shadow-soft transition hover:bg-navy-900"
          >
            Book free call
          </button>
        </div>
      </div>
    </header>
  );
}
