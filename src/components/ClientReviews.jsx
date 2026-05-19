import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { REVIEWS_BY_SERVICE } from "../data";

const MOBILE_PAGE = 3;

export default function ClientReviews({ service }) {
  const reviews = (service && REVIEWS_BY_SERVICE[service.slug]) || [];
  const [shown, setShown] = useState(MOBILE_PAGE);

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

        {/* Desktop: Swiper carousel showing 3 at a time */}
        <div className="reviews-swiper-wrap relative mx-auto mt-12 hidden max-w-6xl px-12 lg:block">
          <button
            type="button"
            className="reviews-prev absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-navy-800/15 bg-white text-navy-900 shadow-soft transition hover:border-navy-800/35 hover:shadow-lift"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="reviews-next absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-navy-800/15 bg-white text-navy-900 shadow-soft transition hover:border-navy-800/35 hover:shadow-lift"
            aria-label="Next review"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <Swiper
            modules={[Navigation, A11y]}
            navigation={{ prevEl: ".reviews-prev", nextEl: ".reviews-next" }}
            slidesPerView={3}
            spaceBetween={16}
            className="!pb-2"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={r.name} className="!h-auto">
                <ReviewCard r={r} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile / tablet: 3 cards visible, "Load more" reveals next 3 */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 lg:hidden">
          {reviews.slice(0, shown).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
          {shown < reviews.length && (
            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={() =>
                  setShown((s) => Math.min(reviews.length, s + MOBILE_PAGE))
                }
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/15 bg-cream px-5 py-2.5 text-[13px] font-semibold text-navy-900 transition hover:border-navy-800/35 hover:bg-white"
              >
                <Plus className="h-3.5 w-3.5" /> Load more reviews
              </button>
            </div>
          )}
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
