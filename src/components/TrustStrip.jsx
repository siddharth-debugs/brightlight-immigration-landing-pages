import { ShieldCheck, Users, Award, Globe2 } from "lucide-react";

const STATS = [
  { n: "13", l: "Years", icon: Award },
  { n: "1,000+", l: "Families reunited", icon: Users },
  { n: "98%", l: "Approval rate", icon: ShieldCheck },
  { n: "EN · PA · HI", l: "Languages", icon: Globe2 },
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-navy-800/10 bg-white py-7">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="flex items-center justify-center gap-3 text-center md:border-r md:border-navy-800/10 md:last:border-r-0"
            >
              <s.icon
                className="h-5 w-5 shrink-0 text-gold-500"
                strokeWidth={2.2}
              />
              <div className="text-left leading-tight">
                <div className="font-display text-[22px] font-semibold tracking-tight text-navy-900">
                  {s.n}
                </div>
                <div className="text-[11.5px] uppercase tracking-wider text-navy-700/80">
                  {s.l}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
