import { Phone, Mail, ShieldCheck } from "lucide-react";
import { BRAND } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-navy-800/10 bg-cream/80 py-4">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[12.5px] text-navy-700">
        <div className="inline-flex items-center gap-2.5">
          <img
            src={BRAND.icon}
            alt="Brightlight"
            className="h-5 w-auto"
            loading="lazy"
          />
          <span className="font-medium text-navy-900">
            © {new Date().getFullYear()} Bright Light Immigration · RCIC R522969
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-navy-900"
          >
            <Phone className="h-3 w-3" /> {BRAND.phone}
          </a>
          <a
            href={BRAND.emailHref}
            className="inline-flex items-center gap-1.5 hover:text-navy-900"
          >
            <Mail className="h-3 w-3" /> {BRAND.email}
          </a>
          <span className="inline-flex items-center gap-1.5 text-navy-700/70">
            <ShieldCheck className="h-3 w-3 text-gold-500" /> CICC Member
          </span>
        </div>
      </div>
    </footer>
  );
}
