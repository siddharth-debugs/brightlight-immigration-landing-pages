import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { REELS_BY_SERVICE, REVIEWS } from "../data";

export default function Testimonials({ service }) {
  const reels = (service && REELS_BY_SERVICE[service.slug]) || [];

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1 w-6 bg-gold-500" /> Real stories
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            1,000+ families,{" "}
            <span className="italic text-navy-700">home together.</span>
          </h2>
          <p className="mt-3 text-[15px] text-navy-700">
            Real reviews · Real client reels · Real approvals.
          </p>
        </div>

        {/* Written reviews */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>

        {reels.length > 0 && <ReelsCarousel reels={reels} />}
      </div>
    </section>
  );
}

function ReelsCarousel({ reels }) {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 20 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="max-w-xl">
          <span className="eyebrow">
            <span className="h-1 w-6 bg-gold-500" /> Watch real clients
          </span>
          <h3 className="mt-3 font-display text-[26px] leading-tight tracking-tight text-navy-900 sm:text-[32px]">
            Approval stories,{" "}
            <span className="italic text-navy-700">in their own words.</span>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous reels"
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-800/15 bg-cream text-navy-900 transition hover:border-navy-800/35 hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next reels"
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-800/15 bg-cream text-navy-900 transition hover:border-navy-800/35 hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative mt-7">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={scrollerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reels.map((id, i) => (
            <PhoneCard key={id} id={id} i={i} />
          ))}
        </div>
      </div>

      <div className="mt-5 text-center">
        <a
          href="https://www.instagram.com/brightlightimmigration/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/15 bg-cream px-4 py-2 text-[12.5px] font-semibold text-navy-900 transition hover:border-navy-800/35 hover:bg-white"
        >
          Watch more on Instagram <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function PhoneCard({ id, i }) {
  return (
    <motion.div
      data-reel-card
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      className="relative w-[300px] shrink-0 snap-center sm:w-[320px]"
    >
      <div className="rounded-[36px] bg-navy-900 p-2.5 shadow-lift ring-1 ring-navy-800/10">
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream/20" />
        <div className="overflow-hidden rounded-[28px] bg-black">
          <iframe
            src={`https://www.instagram.com/reel/${id}/embed/`}
            title={`Client reel ${id}`}
            className="block h-[560px] w-full border-0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ReviewCard({ r, i }) {
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
          {initials}
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
