import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Play, X } from "lucide-react";
import { REVIEWS, REELS } from "../data";

export default function Testimonials() {
  const [reelOpen, setReelOpen] = useState(null);

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1 w-6 bg-gold-500" /> Real stories
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            1,000+ families,{" "}
            <span className="italic text-navy-700">home together.</span>
          </h2>
          <p className="mt-3 text-[15px] text-navy-700">
            Real reviews · Real client videos · Real approvals.
          </p>
        </div>

        {/* Written reviews */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
        <div className="mx-auto mt-4 grid max-w-4xl gap-4 md:grid-cols-2">
          {REVIEWS.slice(3, 5).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i + 3} />
          ))}
        </div>

        {/* Video reels */}
        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="eyebrow">
                <Play className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                Watch real clients
              </span>
              <h3 className="mt-3 font-display text-[26px] leading-tight tracking-tight text-navy-900 sm:text-[32px]">
                Approval stories,{" "}
                <span className="italic text-navy-700">in their own words.</span>
              </h3>
            </div>
            <div className="text-[12.5px] text-navy-700/80">
              Real clients · YouTube
            </div>
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {REELS.slice(0, 4).map((reel, i) => (
              <ReelTile
                key={reel.id}
                reel={reel}
                i={i}
                onPlay={() => setReelOpen(reel)}
              />
            ))}
          </div>
        </div>
      </div>

      <ReelLightbox reel={reelOpen} onClose={() => setReelOpen(null)} />
    </section>
  );
}

function ReviewCard({ r, i }) {
  const [imgOk, setImgOk] = useState(true);
  const initials = r.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="rounded-2xl border border-navy-800/10 bg-cream p-6"
    >
      <div className="flex items-start justify-between">
        <Quote className="h-5 w-5 text-gold-400" />
        <div className="flex">
          {[...Array(r.rating)].map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>

      <blockquote className="mt-3 text-[14.5px] leading-[1.55] text-navy-800">
        “{r.text}”
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-800/10 pt-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-navy-800 to-navy-600 text-[12px] font-semibold text-cream">
          {imgOk ? (
            <img
              src={r.image}
              alt={r.name}
              className="h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            initials
          )}
        </div>
        <div className="leading-tight">
          <div className="text-[13.5px] font-semibold text-navy-900">
            {r.name}
          </div>
          <div className="text-[11.5px] uppercase tracking-wider text-navy-700/80">
            {r.tag}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

function ReelTile({ reel, i, onPlay }) {
  const [src, setSrc] = useState(
    `https://img.youtube.com/vi/${reel.id}/maxresdefault.jpg`
  );
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      onClick={onPlay}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-navy-800/10 transition hover:ring-2 hover:ring-gold-400"
      aria-label={`Play ${reel.name} story`}
    >
      <img
        src={src}
        alt={reel.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
        onError={() =>
          setSrc(`https://img.youtube.com/vi/${reel.id}/hqdefault.jpg`)
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-navy-900 shadow-lift transition group-hover:scale-110">
          <Play className="h-5 w-5 fill-navy-900" strokeWidth={0} />
        </span>
      </div>
      <div className="absolute inset-x-2 bottom-2 text-left text-cream">
        <div className="text-[12.5px] font-semibold leading-tight">
          {reel.name}
        </div>
        <div className="text-[10.5px] uppercase tracking-wider text-cream/80">
          {reel.label}
        </div>
      </div>
    </motion.button>
  );
}

function ReelLightbox({ reel, onClose }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setHovered(false);
  }, [reel?.id]);

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[85] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
        >
          {/* Close — fixed to viewport top-right */}
          <button
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
            className="relative w-full max-w-[380px] sm:max-w-[400px]"
            style={{ maxHeight: "90vh" }}
          >
            {/* Phone-style frame */}
            <div className="relative rounded-[36px] bg-navy-900 p-2.5 shadow-lift ring-1 ring-cream/10">
              {/* Top notch */}
              <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream/20" />

              <div
                className="relative overflow-hidden rounded-[28px] bg-black"
                style={{ aspectRatio: "9 / 16" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <iframe
                  key={reel.id}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${reel.id}&iv_load_policy=3&fs=0`}
                  title={reel.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />

                {/* Instant-hide control masks — only visible when NOT hovering */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-100 ${
                    hovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {/* Top: covers YouTube title + share/cc/settings */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/85 via-black/55 to-transparent" />
                  {/* Bottom: covers progress bar + caption row */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/95 via-black/65 to-transparent" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-cream">
              <div className="font-display text-[18px] leading-tight">
                {reel.name}
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-cream/70">
                {reel.label}
              </div>
              <div className="mt-2 text-[11px] text-cream/50">
                Hover for controls · ESC to close
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
