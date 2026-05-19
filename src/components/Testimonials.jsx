import { motion } from "framer-motion";
import { Star, Quote, Film } from "lucide-react";
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
            Real reviews · Real client videos · Real approvals.
          </p>
        </div>

        {/* Written reviews */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>

        {/* Film reels */}
        {reels.length > 0 && (
          <div className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <Film className="h-3.5 w-3.5 text-gold-500" />
                Client reels on Film
              </span>
              <h3 className="mt-3 font-display text-[26px] leading-tight tracking-tight text-navy-900 sm:text-[32px]">
                Watch real client stories.
              </h3>
            </div>

            <div className="mx-auto mt-7 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {reels.map((id, i) => (
                <ReelEmbed key={id} id={id} i={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ReelEmbed({ id, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      className="overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-navy-800/10"
    >
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        title={`Film reel ${id}`}
        className="block h-[640px] w-full border-0"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        scrolling="no"
      />
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
