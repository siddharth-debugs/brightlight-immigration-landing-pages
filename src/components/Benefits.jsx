import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  RefreshCw,
  Clock,
  Users,
  Globe2,
} from "lucide-react";

const ICONS = {
  shield: ShieldCheck,
  files: FileCheck2,
  refresh: RefreshCw,
  clock: Clock,
  users: Users,
  globe: Globe2,
};

export default function Benefits({ service, onCTA }) {
  const b = service.benefits;
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1 w-6 bg-gold-500" />
            {b.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-[36px] leading-[1.05] tracking-tight text-navy-900 sm:text-[48px]">
            {b.title1}{" "}
            <span className="italic text-navy-700">{b.titleItalic}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {b.items.map((item, i) => {
            const Icon = ICONS[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-800 text-gold-400">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-[22px] leading-tight tracking-tight text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-navy-700">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
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
