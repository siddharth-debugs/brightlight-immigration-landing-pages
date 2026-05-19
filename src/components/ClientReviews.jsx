import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS_BY_SERVICE } from "../data";

export default function ClientReviews({ service }) {
  const reviews = (service && REVIEWS_BY_SERVICE[service.slug]) || [];
  if (reviews.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1 w-6 bg-gold-500" /> Google reviews
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            In their{" "}
            <span className="italic text-navy-700">own words.</span>
          </h2>
          <p className="mt-3 text-[14.5px] text-navy-700">
            Verified 5-star reviews from clients we helped on this exact path.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
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
      className="flex h-full flex-col rounded-2xl border border-navy-800/10 bg-cream p-6"
    >
      <div className="flex items-start justify-between">
        <Quote className="h-5 w-5 text-gold-400" />
        <div className="flex">
          {[...Array(r.rating)].map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>

      <blockquote className="mt-3 flex-1 text-[14.5px] leading-[1.55] text-navy-800">
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
