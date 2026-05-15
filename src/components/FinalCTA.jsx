import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { BRAND } from "../data";

export default function FinalCTA({ onCTA }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-navy-600/30 blur-3xl" />

      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold-400" />
            3 free slots left
          </span>
          <h2 className="mt-5 font-display text-[40px] font-medium leading-[1.02] tracking-tight text-cream sm:text-[60px]">
            One call.{" "}
            <span className="italic text-gold-400">One step closer.</span>
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={onCTA} className="btn-gold">
              Book my free call <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-[14px] font-semibold text-cream backdrop-blur transition hover:border-gold-400 hover:text-gold-400"
            >
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-cream/65">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" /> RCIC R522969
            </span>
            <span className="h-1 w-1 rounded-full bg-cream/25" />
            <span>CICC Member</span>
            <span className="h-1 w-1 rounded-full bg-cream/25" />
            <span>PIPEDA Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
