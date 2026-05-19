import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import {
  REELS_BY_SERVICE,
  reelVideoSrc,
  reelPosterSrc,
} from "../data";

export default function Testimonials({ service }) {
  const reels = (service && REELS_BY_SERVICE[service.slug]) || [];
  const [openId, setOpenId] = useState(null);

  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1 w-6 bg-gold-500" /> Real stories
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            1,000+ families,{" "}
            <span className="italic text-navy-700">home together.</span>
          </h2>
          <p className="mt-3 text-[15px] text-navy-700">
            Real client videos · Real approvals.
          </p>
        </div>

        {reels.length > 0 && (
          <ReelsGrid reels={reels} onOpen={setOpenId} />
        )}
      </div>

      <ReelLightbox openId={openId} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ReelsGrid({ reels, onOpen }) {
  return (
    <div className="mt-10">
      <p className="text-center text-[13px] text-navy-700/80">
        {reels.length} client {reels.length === 1 ? "story" : "stories"} · Tap any to watch
      </p>
      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {reels.map((id, i) => (
          <ReelTile key={id} id={id} i={i} onPlay={() => onOpen(id)} />
        ))}
      </div>
    </div>
  );
}

function ReelTile({ id, i, onPlay }) {
  return (
    <motion.button
      type="button"
      onClick={onPlay}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-navy-900 shadow-soft ring-1 ring-navy-800/10 transition-shadow hover:shadow-lift"
      aria-label="Play client story"
    >
      <img
        src={reelPosterSrc(id)}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-navy-950/20" />

      <div className="absolute inset-0 grid place-items-center">
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/95 text-navy-900 shadow-lift transition duration-300 group-hover:scale-110 group-hover:bg-white sm:h-16 sm:w-16">
          <span className="absolute inset-0 rounded-full ring-2 ring-gold-400/0 transition group-hover:ring-gold-400/80" />
          <Play
            className="ml-0.5 h-5 w-5 fill-navy-900 sm:h-6 sm:w-6"
            strokeWidth={0}
          />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 pb-3 text-cream">
        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-cream/85">
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          Client reel
        </span>
        <span className="text-[10.5px] font-mono text-cream/70">
          #{String(i + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.button>
  );
}

function ReelLightbox({ openId, onClose }) {
  useEffect(() => {
    if (!openId) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId, onClose]);

  return (
    <AnimatePresence>
      {openId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[85] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={onClose}
            className="fixed right-5 top-5 z-[90] inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3.5 py-2 text-[12.5px] font-semibold text-navy-900 shadow-lift transition hover:bg-white sm:right-8 sm:top-8"
            aria-label="Close video"
          >
            <X className="h-3.5 w-3.5" /> Close
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[360px] sm:max-w-[380px]"
            style={{ maxHeight: "90vh" }}
          >
            <div className="relative rounded-[36px] bg-navy-900 p-2.5 shadow-lift ring-1 ring-cream/10">
              <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream/20" />

              <div
                className="relative overflow-hidden rounded-[28px] bg-black"
                style={{ aspectRatio: "9 / 16" }}
              >
                <video
                  key={openId}
                  src={reelVideoSrc(openId)}
                  poster={reelPosterSrc(openId)}
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

