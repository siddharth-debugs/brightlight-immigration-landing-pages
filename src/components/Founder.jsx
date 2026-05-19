import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { FOUNDER } from "../data";

export default function Founder({ onCTA, service }) {
  const [imgOk, setImgOk] = useState(true);
  const f = service?.founder || {};
  const pullQuote = f.pullQuote || FOUNDER.pullQuote;
  const bio = f.bio || FOUNDER.bio;
  const specialties = f.specialties || FOUNDER.specialties;
  const tagline = f.tagline || FOUNDER.tagline;
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle editorial background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-gold-100/70 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-navy-600/5 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-20">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            {/* Offset border frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[28px] border-2 border-gold-400" />
            <div className="absolute -inset-2 -z-20 rounded-[32px] bg-gold-400/20 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[28px] bg-navy-900 ring-1 ring-navy-800/10">
              {imgOk ? (
                <img
                  src={`${import.meta.env.BASE_URL}${FOUNDER.photo.replace(/^\//, "")}`}
                  alt={`${FOUNDER.name} — ${FOUNDER.title}`}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 45%" }}
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-gold-300 to-gold-500">
                  <div className="text-center">
                    <div className="font-display text-[130px] leading-none text-navy-900">
                      LP
                    </div>
                  </div>
                </div>
              )}

              {/* Floating rating badge */}
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-navy-900 shadow-soft backdrop-blur">
                <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
                4.8 · 200+ reviews
              </div>
            </div>

            {/* Caption strip */}
            <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-navy-800/10 bg-cream px-4 py-3">
              <div className="leading-tight">
                <div className="font-display text-[18px] text-navy-900">
                  Loveneet Paneswar
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700/80">
                  RCIC R522969 · CICC Member
                </div>
              </div>
              <span className="rounded-full bg-navy-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                Since 2014
              </span>
            </div>
          </motion.div>

          {/* Content column */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-700">
              <span className="h-px w-8 bg-gold-500" />
              The founder
            </div>

            {/* Big pull quote — magazine treatment */}
            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-5 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[46px] lg:text-[52px]"
            >
              <span className="text-gold-400">“</span>
              {pullQuote}
              <span className="text-gold-400">”</span>
            </motion.blockquote>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-700/80">
                <span className="h-px w-5 bg-navy-800/30" />
                Loveneet Paneswar, Principal RCIC
              </span>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/15 bg-white px-3 py-1 text-[11.5px] font-semibold text-navy-900 transition hover:border-navy-800/30 hover:text-navy-600"
              >
                <LinkedInIcon className="h-3 w-3" /> LinkedIn
              </a>
            </div>

            <p className="mt-6 font-display text-[19px] italic leading-snug text-navy-700 sm:text-[22px]">
              {tagline}
            </p>

            <p className="mt-5 max-w-xl text-[15.5px] leading-[1.65] text-navy-700">
              {bio}
            </p>

            <ul className="mt-7 grid max-w-xl gap-2.5">
              {specialties.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[15px] text-navy-900"
                >
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-navy-800 text-cream">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={onCTA} className="btn-primary">
                Book my call with Loveneet <ArrowRight className="h-4 w-4" />
              </button>
              <div className="text-[12px] text-navy-700/70">
                Free 15-min RCIC call · No obligation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
