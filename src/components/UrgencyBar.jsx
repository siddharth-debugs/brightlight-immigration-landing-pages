import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function nextFriday6pm() {
  const now = new Date();
  const d = new Date(now);
  const dayDiff = (5 - now.getDay() + 7) % 7 || 7;
  d.setDate(now.getDate() + dayDiff);
  d.setHours(18, 0, 0, 0);
  return d;
}

export default function UrgencyBar() {
  const [target] = useState(nextFriday6pm());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <div className="relative z-50 bg-navy-900 text-cream">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 py-2.5 text-center text-[12px] font-medium sm:text-[13px]">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-gold-400" />
          <strong className="font-semibold text-gold-400">
            3 free strategy slots remaining
          </strong>
          <span className="hidden text-cream/70 sm:inline">this week</span>
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-cream/30 sm:block" />
        <span className="inline-flex items-center gap-2 font-mono text-[12px] tabular-nums text-cream/85">
          Booking closes Friday in
          <span className="rounded-md bg-cream/10 px-1.5 py-0.5 text-cream">
            {String(d).padStart(2, "0")}d
          </span>
          <span className="rounded-md bg-cream/10 px-1.5 py-0.5 text-cream">
            {String(h).padStart(2, "0")}h
          </span>
          <span className="rounded-md bg-cream/10 px-1.5 py-0.5 text-cream">
            {String(m).padStart(2, "0")}m
          </span>
          <span className="rounded-md bg-gold-400/20 px-1.5 py-0.5 text-gold-400">
            {String(s).padStart(2, "0")}s
          </span>
        </span>
      </div>
    </div>
  );
}
