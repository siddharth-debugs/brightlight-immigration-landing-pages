import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServiceHighlights({ service }) {
  const h = service?.highlights;
  if (!h || !Array.isArray(h.items) || h.items.length === 0) return null;

  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1 w-6 bg-gold-500" /> {h.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            {h.title1}{" "}
            <span className="italic text-navy-700">{h.titleItalic}</span>
          </h2>
          {h.subhead && (
            <p className="mt-3 text-[15px] text-navy-700">{h.subhead}</p>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {h.items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft transition hover:shadow-lift"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-600">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700/75">
                    {it.label}
                  </div>
                  <div className="mt-1 font-display text-[22px] leading-tight tracking-tight text-navy-900">
                    {it.value}
                  </div>
                  {it.note && (
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-navy-700">
                      {it.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {h.footnote && (
          <p className="mt-8 text-center text-[12px] text-navy-700/70">
            {h.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
