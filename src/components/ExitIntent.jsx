import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Phone } from "lucide-react";
import { BRAND } from "../data";

const KEY = "brightlight_exit_dismissed";

export default function ExitIntent({ onCTA }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;

    let shown = false;
    const trigger = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      sessionStorage.setItem(KEY, "1");
    };

    const onLeave = (e) => {
      if (e.clientY <= 0) trigger();
    };
    const onMouseOut = (e) => {
      if (!e.toElement && !e.relatedTarget) trigger();
    };

    // Mobile fallback: after 45 seconds on page
    const timer = setTimeout(trigger, 45000);

    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(timer);
    };
  }, []);

  function handleClose() {
    setOpen(false);
  }

  function handleClaim() {
    setOpen(false);
    onCTA?.("exit-intent");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[75] grid place-items-center bg-navy-950/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border-2 border-gold-400 bg-cream shadow-lift"
          >
            <div className="relative bg-navy-900 px-6 py-7 text-cream sm:px-8">
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-cream/70 transition hover:bg-cream/5 hover:text-cream"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                <Gift className="h-3 w-3" /> Before you go
              </span>
              <h3 className="mt-3 font-display text-[28px] font-medium leading-[1.05] tracking-tight sm:text-[34px]">
                Take a 60-second{" "}
                <span className="italic text-gold-400">eligibility check</span>{" "}
                with you.
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-cream/80">
                Leave just your phone number and we will call you back within
                24 hours with a free, no-strings honest answer about your file.
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8">
              <button onClick={handleClaim} className="btn-gold w-full">
                Yes — call me back
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-navy-700">
                <Phone className="h-3.5 w-3.5" />
                Prefer to call now? {BRAND.phone}
              </div>
              <button
                onClick={handleClose}
                className="mt-4 block w-full text-center text-[12px] text-navy-700/60 underline-offset-2 hover:text-navy-700 hover:underline"
              >
                No thanks, I will figure it out alone
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
