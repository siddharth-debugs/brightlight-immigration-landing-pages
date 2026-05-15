import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { RECENT_BOOKINGS } from "../data";

export default function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const initial = setTimeout(() => setVisible(true), 6500);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % RECENT_BOOKINGS.length);
        setVisible(true);
      }, 600);
    }, 9000);
    return () => {
      clearTimeout(initial);
      clearInterval(cycle);
    };
  }, [dismissed]);

  if (dismissed) return null;
  const item = RECENT_BOOKINGS[idx];

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-[60] hidden sm:block">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-auto flex w-[340px] items-center gap-3 rounded-2xl border border-navy-800/10 bg-white p-3.5 shadow-lift"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div className="flex-1 leading-snug">
              <div className="text-[13.5px] font-semibold text-navy-900">
                {item.name}
              </div>
              <div className="text-[12px] text-navy-700">{item.action}</div>
              <div className="mt-0.5 text-[10.5px] font-medium uppercase tracking-wider text-navy-700/70">
                {item.time}
              </div>
            </div>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="grid h-7 w-7 place-items-center rounded-full text-navy-700/40 transition hover:bg-navy-800/5 hover:text-navy-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
