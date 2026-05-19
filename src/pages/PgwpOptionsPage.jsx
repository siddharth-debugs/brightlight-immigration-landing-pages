import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRight,
  Briefcase,
  Languages,
  GraduationCap,
  Clock3,
  Sparkles,
  Phone,
  ShieldCheck,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import StickyMobileCTA from "../components/StickyMobileCTA";
import { BRAND } from "../data";
import { setSEO, setJSONLD, SITE_URL, ogImageFor } from "../lib/seo";

const PATHWAYS = [
  {
    n: "01",
    short: "LMIA",
    name: "LMIA-Based Work Permit",
    icon: Briefcase,
    pitch:
      "Your employer files an LMIA. You stay on a closed permit while your PR file moves forward.",
    forWho:
      "Skilled workers (typically TEER 0–3) whose employer is willing to support the LMIA process.",
    bullets: [
      "A confirmed job offer in Canada",
      "An employer willing to support the LMIA",
      "A solid CRS score for the PR pathway",
    ],
    pros: ["You keep working", "Strong CRS bump from arranged employment"],
    cons: ["Tied to one employer", "Process typically 8–12 months"],
    timing: "8–12 months end-to-end",
    cost: "Free 15-min call",
    ctaLabel: "Book a free consultation",
  },
  {
    n: "02",
    short: "Francophone",
    name: "Francophone Mobility Program",
    icon: Languages,
    pitch:
      "Prove NCLC 5+ French in speaking and listening — skip the LMIA entirely.",
    forWho:
      "French-speaking applicants destined outside Quebec, in most TEER categories.",
    bullets: [
      "NCLC 5+ in speaking and listening (TEF / TCF Canada)",
      "Job offer outside Quebec",
      "TEER 0–5 (primary agriculture in 4–5 excluded)",
    ],
    pros: ["No LMIA — exemption code C16", "Open permit up to 3 years"],
    cons: ["Requires verifiable French test result", "Quebec is excluded"],
    timing: "Weeks, not months",
    cost: "Free 15-min call",
    ctaLabel: "Book a free consultation",
  },
  {
    n: "03",
    short: "Study Permit",
    name: "Study Permit",
    icon: GraduationCap,
    pitch:
      "Go back to school. Earn another work permit later — or work part-time while you study.",
    forWho:
      "Applicants without a job offer or French proof who want to invest in a recognized credential.",
    bullets: [
      "Proof of funds (tuition + living costs)",
      "IELTS 6.0+ with no band below 6 (or equivalent)",
      "Acceptance from a recognized DLI",
    ],
    pros: [
      "Work up to 24 hours/week while studying",
      "Co-op permits possible even if PGWP is exhausted",
    ],
    cons: ["Significant tuition outlay", "No second PGWP if your first was used"],
    timing: "Matches your program length",
    cost: "Free 15-min call",
    ctaLabel: "Book a free consultation",
  },
  {
    n: "04",
    short: "Visitor Record",
    name: "Visitor Record",
    icon: Clock3,
    pitch:
      "Buy yourself time. Stay legally in Canada while you finish your PR file or wait for an ITA.",
    forWho:
      "Applicants close to a PR draw who need a few months of clean, legal status.",
    bullets: [
      "Up to 6 months typically approved",
      "Status maintained — but you cannot work",
      "Best paired with a filed PR or upcoming ITA",
    ],
    pros: ["Inexpensive", "Decision typically within weeks"],
    cons: ["You cannot work on a visitor record"],
    timing: "Days to weeks to file",
    cost: "Free 15-min call",
    ctaLabel: "Book a free consultation",
  },
  {
    n: "05",
    short: "PR Session",
    name: "PR Guidance Session",
    icon: Sparkles,
    pitch:
      "A 45–60 minute working session with a licensed RCIC that maps your full PR roadmap.",
    forWho:
      "Applicants who want a detailed PR strategy — beyond what a 15-minute call can cover.",
    bullets: [
      "Express Entry — CEC / FSW / FST",
      "Provincial Nominee Programs (PNP)",
      "Category-based draws & niche pathways",
    ],
    pros: ["Full file review", "You walk away with a written plan"],
    cons: ["Paid working session — not a free intro call"],
    timing: "45–60 minutes",
    cost: "$99 + GST",
    ctaLabel: "Book the PR session",
    paid: true,
  },
];

const INQUIRY = {
  serviceLabel: "PGWP options",
  steps: [
    {
      key: "interest",
      q: "Which pathway are you considering?",
      options: [
        { v: "lmia", l: "LMIA-based work permit" },
        { v: "francophone", l: "Francophone Mobility" },
        { v: "study", l: "Study permit" },
        { v: "visitor", l: "Visitor record" },
        { v: "pr", l: "Paid PR guidance session" },
        { v: "unsure", l: "Not sure — help me choose" },
      ],
    },
    {
      key: "pgwp",
      q: "What is your PGWP status today?",
      options: [
        { v: "expired", l: "Already expired" },
        { v: "soon", l: "Expires within 3 months" },
        { v: "later", l: "Expires in 3–12 months" },
      ],
    },
  ],
};

export default function PgwpOptionsPage() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setSEO({
      title:
        "PGWP Expiring? 5 Pathways to Stay in Canada | Brightlight Immigration",
      description:
        "Your PGWP is ending — or already has. Five realistic pathways to stay and work in Canada: LMIA-based permit, Francophone Mobility, study permit, visitor record, and a paid PR guidance session.",
      path: "/pgwp-options",
      image: ogImageFor("pgwp-expiring"),
      type: "article",
    });

    setJSONLD("ld-pgwp-options", {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/pgwp-options#service`,
      name: "PGWP Expiring — Pathways to Stay in Canada",
      description:
        "RCIC-licensed pathway review for PGWP holders whose permit is ending or has expired.",
      url: `${SITE_URL}/pgwp-options`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND.name,
        telephone: BRAND.phone,
        email: BRAND.email,
      },
      areaServed: { "@type": "Country", name: "Canada" },
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <Header onCTA={openModal} />

      <main>
        <HeroSection onCTA={openModal} />
        <PathwaysSection onCTA={openModal} />
        <ClosingCTA onCTA={openModal} />
      </main>

      <Footer />

      <InquiryModal
        open={open}
        onClose={closeModal}
        service={{ inquiry: INQUIRY, fullName: "PGWP options" }}
      />
      <StickyMobileCTA onCTA={openModal} />
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function HeroSection({ onCTA }) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-12 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-gradient-to-b from-gold-100/55 via-cream to-cream" />
        <div className="absolute -left-40 top-12 h-[380px] w-[380px] rounded-full bg-gold-200/35 blur-3xl" />
        <div className="absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-navy-600/10 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              PGWP Expiring · Licensed RCIC R522969
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 font-display text-[40px] leading-[1.02] tracking-[-0.02em] text-navy-900 sm:text-[60px]"
          >
            PGWP expiring,{" "}
            <span className="italic text-navy-700">or already expired?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-[16.5px] leading-[1.6] text-navy-700 sm:text-[17.5px]"
          >
            It's normal to feel uncertain when your work permit window is
            closing. You still have{" "}
            <span className="font-semibold text-navy-900">
              five realistic pathways
            </span>{" "}
            to stay and work in Canada. Pick one below to see the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button onClick={onCTA} className="btn-gold">
              Map my pathway <ArrowRight className="h-4 w-4" />
            </button>
            <a href={BRAND.phoneHref} className="btn-ghost">
              <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
            </a>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] text-navy-700/80">
            <ShieldCheck className="h-3.5 w-3.5 text-navy-700" />
            Free 15-min call · No documents · No obligation
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Pathways: tabs + single panel ─────────────── */

function PathwaysSection({ onCTA }) {
  const [activeN, setActiveN] = useState(PATHWAYS[0].n);
  const active = PATHWAYS.find((p) => p.n === activeN) || PATHWAYS[0];

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1 w-6 bg-gold-500" /> What you can actually do
          </span>
          <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight text-navy-900 sm:text-[44px]">
            Five pathways,{" "}
            <span className="italic text-navy-700">in plain English.</span>
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.6] text-navy-700">
            Tap a pathway to see how it works, what you need, and whether it
            fits your file.
          </p>
        </div>

        <PathwayTabsSlider active={activeN} onChange={setActiveN} />

        <div className="mx-auto mt-10 max-w-5xl">
          <AnimatePresence mode="wait">
            {active.paid ? (
              <PaidPathwayPanel
                key={active.n}
                p={active}
                onCTA={onCTA}
              />
            ) : (
              <PathwayPanel key={active.n} p={active} onCTA={onCTA} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PathwayTabsSlider({ active, onChange }) {
  // Selection state is independent of slider scroll position.
  // Without loop and with slidesPerView=4 over 5 slides, Swiper's
  // activeIndex caps at 1 — so we can't rely on it to identify which
  // pathway is selected. The tabs themselves drive selection; the
  // slider just lets you scroll the visible window.
  return (
    <div className="pathway-tabs-wrap relative mx-auto mt-12 max-w-6xl">
      <button
        type="button"
        className="pathway-prev absolute -left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-navy-800/15 bg-white text-navy-900 shadow-lift transition hover:border-navy-800/35 hover:bg-cream sm:-left-4"
        aria-label="Previous pathway"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="pathway-next absolute -right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-navy-800/15 bg-white text-navy-900 shadow-lift transition hover:border-navy-800/35 hover:bg-cream sm:-right-4"
        aria-label="Next pathway"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        navigation={{ prevEl: ".pathway-prev", nextEl: ".pathway-next" }}
        pagination={{
          el: ".pathway-dots",
          clickable: true,
          bulletClass: "pathway-dot",
          bulletActiveClass: "pathway-dot-active",
        }}
        keyboard={{ enabled: true }}
        slidesPerView={1.3}
        spaceBetween={14}
        speed={400}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 16 },
          900: { slidesPerView: 3.2, spaceBetween: 18 },
          1200: { slidesPerView: 4, spaceBetween: 18 },
        }}
        className="!overflow-visible !px-2 !pb-2"
      >
        {PATHWAYS.map((p) => (
          <SwiperSlide key={p.n} className="!h-auto">
            <PathwayTab
              p={p}
              active={p.n === active}
              onClick={() => onChange(p.n)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pathway-dots mt-5 flex items-center justify-center gap-2" />
    </div>
  );
}

function PathwayTab({ p, active, onClick }) {
  const Icon = p.icon;
  const isPaid = p.paid;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative flex h-[140px] w-full flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 sm:h-[156px] sm:p-5 ${
        active
          ? isPaid
            ? "border-gold-400 bg-navy-900 text-cream shadow-lift"
            : "border-navy-800 bg-white text-navy-900 shadow-lift"
          : "border-navy-800/10 bg-white text-navy-900 opacity-80 hover:border-navy-800/30 hover:opacity-100 hover:shadow-soft"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-display text-[40px] italic leading-none tracking-[-0.02em] sm:text-[44px] ${
            active && isPaid
              ? "text-gold-400"
              : active
              ? "text-gold-500"
              : "text-navy-700/40"
          }`}
        >
          {p.n}
        </span>
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl transition ${
            active && isPaid
              ? "bg-gold-400 text-navy-900"
              : active
              ? "bg-navy-800 text-cream"
              : "bg-cream text-navy-700"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
      </div>

      <div>
        <div
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            active && isPaid
              ? "text-gold-400"
              : active
              ? "text-navy-700"
              : "text-navy-700/60"
          }`}
        >
          {isPaid ? "Premium" : "Pathway"}
        </div>
        <div
          className={`mt-1 font-display text-[17px] leading-tight tracking-tight sm:text-[19px] ${
            active && isPaid ? "text-cream" : "text-navy-900"
          }`}
        >
          {p.short}
        </div>
      </div>
    </button>
  );
}

function PathwayPanel({ p, onCTA }) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="rounded-[28px] border border-navy-800/10 bg-white p-8 shadow-soft sm:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
        <div className="flex items-start gap-6 lg:flex-col lg:items-start lg:gap-6">
          <span
            aria-hidden
            className="font-display text-[88px] italic leading-none tracking-[-0.03em] text-gold-400 sm:text-[112px]"
          >
            {p.n}
          </span>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-800 text-cream">
              <Icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-navy-700/70">
                Pathway
              </div>
              <div className="font-display text-[15px] text-navy-900">
                {p.short}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-[28px] leading-[1.1] tracking-tight text-navy-900 sm:text-[34px]">
            {p.name}
          </h3>

          <blockquote className="mt-5 border-l-2 border-gold-400 pl-5 font-display text-[20px] italic leading-snug text-navy-800 sm:text-[24px]">
            <span className="text-gold-400">“</span>
            {p.pitch}
            <span className="text-gold-400">”</span>
          </blockquote>

          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-navy-700/70">
                Best for
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-navy-800">
                {p.forWho}
              </p>
            </div>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-navy-700/70">
                Timing
              </div>
              <p className="mt-2 font-display text-[18px] leading-snug text-navy-900">
                {p.timing}
              </p>
            </div>

            <div className="sm:col-span-2">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-navy-700/70">
                What you need
              </div>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[14px] text-navy-900"
                  >
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-navy-800 text-cream">
                      <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <ProConList label="Pros" items={p.pros} tone="pro" />
            <ProConList label="Watch out for" items={p.cons} tone="con" />
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-navy-800/10 pt-6">
            <div className="text-[12px] text-navy-700/80">
              <span className="font-semibold text-navy-900">{p.cost}</span> ·
              Reviewed by RCIC R522969
            </div>
            <button onClick={onCTA} className="btn-primary">
              {p.ctaLabel} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function PaidPathwayPanel({ p, onCTA }) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-[28px] bg-navy-900 p-8 text-cream shadow-lift sm:p-12"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[280px] w-[280px] rounded-full bg-navy-600/40 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[180px_1fr_minmax(0,260px)] lg:gap-12">
        <div className="flex items-start gap-6 lg:flex-col lg:items-start lg:gap-6">
          <span
            aria-hidden
            className="font-display text-[88px] italic leading-none tracking-[-0.03em] text-gold-400 sm:text-[112px]"
          >
            {p.n}
          </span>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-400 text-navy-900">
              <Icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                Premium
              </div>
              <div className="font-display text-[15px] text-cream">
                {p.short}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-[28px] leading-[1.1] tracking-tight text-cream sm:text-[34px]">
            {p.name}
          </h3>

          <blockquote className="mt-5 border-l-2 border-gold-400 pl-5 font-display text-[20px] italic leading-snug text-cream/90 sm:text-[24px]">
            <span className="text-gold-400">“</span>
            {p.pitch}
            <span className="text-gold-400">”</span>
          </blockquote>

          <div className="mt-7">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              Best for
            </div>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-cream/85">
              {p.forWho}
            </p>
          </div>

          <div className="mt-6">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              What we cover
            </div>
            <ul className="mt-2.5 grid gap-1.5">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[14px] text-cream/95"
                >
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold-400 text-navy-900">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ProConList label="Pros" items={p.pros} tone="pro" dark />
            <ProConList label="Watch out for" items={p.cons} tone="con" dark />
          </div>
        </div>

        <aside className="relative rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
            Investment
          </div>
          <div className="mt-1 font-display text-[44px] italic leading-none text-gold-400 sm:text-[52px]">
            $99
          </div>
          <div className="mt-1 text-[12.5px] font-semibold uppercase tracking-wider text-cream/70">
            + GST · One-time
          </div>

          <div className="my-5 h-px w-full bg-cream/15" />

          <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-400">
            Session length
          </div>
          <div className="mt-1 font-display text-[20px] leading-tight text-cream">
            {p.timing}
          </div>

          <button onClick={onCTA} className="btn-gold mt-6 w-full">
            {p.ctaLabel} <ArrowRight className="h-4 w-4" />
          </button>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-cream/65">
            <ShieldCheck className="h-3 w-3 text-gold-400" />
            Licensed RCIC R522969
          </div>
        </aside>
      </div>
    </motion.article>
  );
}

function ProConList({ label, items, tone, dark = false }) {
  const isPro = tone === "pro";
  const Icon = isPro ? Check : X;
  return (
    <div
      className={`rounded-xl p-4 ${
        dark
          ? "border border-cream/15 bg-cream/5"
          : "border border-navy-800/10 bg-cream"
      }`}
    >
      <div
        className={`text-[10.5px] font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-gold-400" : "text-navy-700/70"
        }`}
      >
        {label}
      </div>
      <ul className="mt-2 grid gap-1.5">
        {items.map((t) => (
          <li
            key={t}
            className={`flex items-start gap-2 text-[13px] leading-[1.5] ${
              dark ? "text-cream/90" : "text-navy-800"
            }`}
          >
            <span
              className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                isPro
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              <Icon className="h-2.5 w-2.5" strokeWidth={3.5} />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ──────────────────── Closing CTA ──────────────────── */

function ClosingCTA({ onCTA }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-20 h-[440px] w-[440px] rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-navy-600/30 blur-3xl" />

      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
            <span className="h-px w-8 bg-gold-400/60" />
            One last thing
            <span className="h-px w-8 bg-gold-400/60" />
          </div>

          <h2 className="mt-5 font-display text-[38px] leading-[1.04] tracking-tight text-cream sm:text-[58px]">
            The sooner you act,{" "}
            <span className="italic text-gold-400">
              the more doors stay open.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-cream/80">
            Fifteen minutes with a licensed RCIC. No documents. No obligation.
            We'll tell you which of the five pathways actually fits — and what
            to do this week to keep it open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={onCTA} className="btn-gold">
              Book my free call <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-[14px] font-semibold text-cream backdrop-blur transition hover:border-gold-400 hover:text-gold-400"
            >
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-cream/65">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" /> RCIC R522969
            </span>
            <span className="h-1 w-1 rounded-full bg-cream/25" />
            <span>CICC Member</span>
            <span className="h-1 w-1 rounded-full bg-cream/25" />
            <span>PIPEDA Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
