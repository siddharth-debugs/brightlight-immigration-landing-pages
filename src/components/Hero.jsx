import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { BRAND } from "../data";

export default function Hero({ service, onCTA }) {
  const h = service.hero;
  return (
    <section id="top" className="pb-12 pt-10 sm:pb-16 sm:pt-16">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              {h.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-[56px]"
          >
            {h.h1Lead}{" "}
            <span className="italic text-navy-700">{h.h1LeadItalic}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] text-navy-700 sm:text-[17px]"
          >
            {h.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <button onClick={onCTA} className="btn-gold">
              {h.cardCta} <ArrowRight className="h-4 w-4" />
            </button>
            <a href={BRAND.phoneHref} className="btn-ghost">
              <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
            </a>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] text-navy-700/80">
            <ShieldCheck className="h-3.5 w-3.5 text-navy-700" />
            Free 15-min call · No documents · No obligation
          </div>
        </div>
      </div>
    </section>
  );
}
