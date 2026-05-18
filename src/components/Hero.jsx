import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { BRAND } from "../data";

export default function Hero({ service, onCTA }) {
  const h = service.hero;
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-14 pt-10 sm:pt-14 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-gold-100/60 via-cream to-cream" />
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[460px] w-[460px] rounded-full bg-navy-600/10 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                {h.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-0.02em] text-navy-900 sm:text-[58px] lg:text-[70px]"
            >
              {h.h1Lead}{" "}
              <span className="italic text-navy-700">{h.h1LeadItalic}</span>
              <span className="block">
                {h.h1Tail}{" "}
                <span className="scribble-underline">{h.h1Scribble}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 max-w-[560px] text-pretty text-[17px] leading-[1.55] text-navy-700 sm:text-[18px]"
            >
              {h.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <button onClick={onCTA} className="btn-gold">
                Book my free call <ArrowRight className="h-4 w-4" />
              </button>
              <a href={BRAND.phoneHref} className="btn-ghost">
                <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-7 flex items-center gap-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
                <span className="ml-1.5 text-[13.5px] font-semibold text-navy-900">
                  {BRAND.rating}
                </span>
                <span className="ml-1 text-[13px] text-navy-700">
                  · 200+ Google reviews
                </span>
              </div>
              <span className="h-4 w-px bg-navy-800/15" />
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-900">
                <ShieldCheck className="h-3.5 w-3.5 text-navy-700" />
                RCIC R522969
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 -z-10 rounded-[28px] bg-gold-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-navy-800/10 bg-white shadow-lift">
              <div className="relative grain bg-navy-800 p-6 text-cream">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                    {h.cardEyebrow}
                  </span>
                  <span className="rounded-full border border-cream/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                    $0
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[30px] leading-[1.05] tracking-tight">
                  {h.cardTitle[0]} <br />
                  {h.cardTitle[1]}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-[13px] leading-[1.55] text-navy-700">
                  A licensed RCIC will walk you through your file, options, and
                  realistic timelines. No pitch, no documents needed.
                </p>

                <button onClick={onCTA} className="btn-primary mt-5 w-full">
                  {h.cardCta} <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-navy-700/70">
                  <ShieldCheck className="h-3 w-3" />
                  Reviewed by RCIC R522969 · Confidential
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
