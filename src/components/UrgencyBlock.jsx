import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

const TOTAL_SLOTS = 8;
const TAKEN = 5;

export default function UrgencyBlock({ service, onCTA }) {
  const u = service.urgency;
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const end = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);

  const diff = Math.max(0, end.getTime() - now.getTime());
  const dd = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hh = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mm = Math.floor((diff / (1000 * 60)) % 60);
  const ss = Math.floor((diff / 1000) % 60);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border-2 border-gold-400 bg-gradient-to-br from-gold-100 via-cream to-gold-50 p-7 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-gold-400/30 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-red-500" />
                {u.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
                {u.title1}{" "}
                <span className="italic">{u.italic}</span> {u.suffix}
              </h2>
              <p className="mt-3 max-w-md text-[15.5px] text-navy-700">
                {u.body}
              </p>

              <div className="mt-5 max-w-md">
                <div className="mb-2 flex items-center justify-between text-[12px] font-medium text-navy-700">
                  <span>Slots claimed</span>
                  <span className="font-semibold text-red-600">
                    {TAKEN} / {TOTAL_SLOTS}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-navy-800/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(TAKEN / TOTAL_SLOTS) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-gold-400 to-red-500"
                  />
                </div>
              </div>

              <button onClick={onCTA} className="btn-primary mt-7">
                {u.cta}
              </button>
            </div>

            <div>
              <div className="rounded-3xl border border-navy-800/10 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-700">
                  <Timer className="h-3.5 w-3.5 text-red-600" />
                  Closes in
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2.5 text-center">
                  <Timebox v={dd} l="Days" />
                  <Timebox v={hh} l="Hrs" />
                  <Timebox v={mm} l="Min" />
                  <Timebox v={ss} l="Sec" accent />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Timebox({ v, l, accent }) {
  return (
    <div
      className={`rounded-xl border px-2 py-3 ${
        accent ? "border-gold-400 bg-gold-50" : "border-navy-800/10 bg-cream"
      }`}
    >
      <div className="font-display text-[26px] leading-none tabular-nums text-navy-900">
        {String(v).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-navy-700">
        {l}
      </div>
    </div>
  );
}
