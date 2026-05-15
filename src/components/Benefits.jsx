import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, RefreshCw } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Licensed, not an agent.",
    body: "RCIC R522969 — legally authorized to represent you before IRCC.",
  },
  {
    icon: FileCheck2,
    title: "Refusal-proof files.",
    body: "Built the way an IRCC officer reads them. Nothing missed.",
  },
  {
    icon: RefreshCw,
    title: "We fix bad applications.",
    body: "Most of our wins started as someone else’s refusal.",
  },
];

export default function Benefits({ onCTA }) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1 w-6 bg-gold-500" />
            Why Brightlight
          </span>
          <h2 className="mt-4 font-display text-[36px] font-medium leading-[1.05] tracking-tight text-navy-900 sm:text-[48px]">
            Three reasons your{" "}
            <span className="italic text-navy-700">spouse lands faster.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ITEMS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-800 text-gold-400">
                <b.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-[22px] font-semibold leading-tight tracking-tight text-navy-900">
                {b.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-navy-700">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={onCTA} className="btn-primary">
            Book my free call
          </button>
        </div>
      </div>
    </section>
  );
}
