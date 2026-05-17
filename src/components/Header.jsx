import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../data";
import { SERVICES } from "../services";

export default function Header({ onCTA }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-800/10 bg-cream/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
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
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] font-semibold text-navy-700 lg:flex">
          {SERVICES.map((s) => (
            <NavLink
              key={s.slug}
              to={`/${s.slug}`}
              className={({ isActive }) =>
                `transition hover:text-navy-900 ${
                  isActive ? "text-navy-900" : ""
                }`
              }
            >
              {s.navName}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold text-navy-900 hover:text-navy-600 xl:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
          </a>
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-4 py-2.5 text-[13px] font-semibold text-cream shadow-soft transition hover:bg-navy-900"
          >
            Book free call
          </button>
          <button
            onClick={() => setOpenMenu((m) => !m)}
            className="grid h-10 w-10 place-items-center rounded-full text-navy-800 transition hover:bg-navy-800/5 lg:hidden"
            aria-label="Toggle services menu"
          >
            {openMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="border-t border-navy-800/10 bg-cream/95 lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {SERVICES.map((s) => (
              <NavLink
                key={s.slug}
                to={`/${s.slug}`}
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-[14px] font-semibold transition ${
                    isActive
                      ? "bg-navy-800 text-cream"
                      : "text-navy-800 hover:bg-navy-800/5"
                  }`
                }
              >
                {s.navName}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
