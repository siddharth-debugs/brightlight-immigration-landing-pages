import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    name: "LMIA-Based Work Permit",
    icon: Briefcase,
    pitch:
      "Your employer applies for an LMIA. You stay on a closed work permit while your PR file moves forward.",
    forWho:
      "Skilled workers with employer support and a viable PR profile (typically TEER 0–3).",
    bullets: [
      "A confirmed job offer in Canada",
      "An employer willing to support the LMIA",
      "A solid CRS score for the PR pathway",
    ],
    pros: ["You keep working", "Strong CRS bump from arranged employment"],
    cons: ["Tied to one employer", "LMIA process is typically 8–12 months"],
    timing: "End-to-end: 8–12 months",
    cta: "Book a free consultation",
  },
  {
    n: "02",
    name: "Francophone Mobility Program",
    icon: Languages,
    pitch:
      "If you can prove NCLC 5+ French in speaking and listening, you skip the LMIA entirely.",
    forWho:
      "French-speaking applicants destined outside Quebec, in most TEER categories.",
    bullets: [
      "NCLC 5+ in speaking and listening (TEF / TCF Canada)",
      "Job offer outside Quebec",
      "TEER 0–5 (primary agriculture in 4–5 excluded)",
    ],
    pros: ["No LMIA — exemption code C16", "Open permit up to 3 years"],
    cons: ["Requires verifiable French test result", "Quebec is excluded"],
    timing: "Weeks, not months once your offer is ready",
    cta: "Book a free consultation",
  },
  {
    n: "03",
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
    cons: ["Significant tuition outlay", "No second PGWP if your first one was used"],
    timing: "Permit duration matches your program",
    cta: "Book a free consultation",
  },
  {
    n: "04",
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
    timing: "Days to weeks to file; up to 6 months of status",
    cta: "Book a free consultation",
  },
  {
    n: "05",
    name: "PR Guidance Session",
    icon: Sparkles,
    pitch:
      "A 45–60 minute paid working session with a licensed RCIC that maps your full PR roadmap.",
    forWho:
      "Applicants who want a detailed PR strategy — beyond what a 15-minute call can cover.",
    bullets: [
      "Express Entry — CEC / FSW / FST",
      "Provincial Nominee Programs (PNP)",
      "Category-based draws & niche pathways",
    ],
    pros: ["Full file review", "Walks away with a written plan"],
    cons: ["Paid session, not a free intro call"],
    timing: "$99 + GST · 45–60 minutes",
    cta: "Book PR session — $99 + GST",
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

function HeroSection({ onCTA }) {
  return (
    <section className="pb-12 pt-12 sm:pb-16 sm:pt-20">
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
              PGWP expiring · Licensed RCIC R522969
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-[56px]"
          >
            PGWP expiring{" "}
            <span className="italic text-navy-700">or already expired?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.6] text-navy-700 sm:text-[17px]"
          >
            It's normal to feel uncertain when your work permit window is
            closing. You still have <span className="font-semibold">five solid pathways</span> to
            stay and work in Canada — we'll walk you through the one that fits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
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
            Free 15-min RCIC call · No documents · No obligation
          </div>
        </div>
      </div>
    </section>
  );
}

function PathwaysSection({ onCTA }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1 w-6 bg-gold-500" /> Five pathways
          </span>
          <h2 className="mt-4 font-display text-[32px] leading-[1.05] tracking-tight text-navy-900 sm:text-[40px]">
            What you can actually do{" "}
            <span className="italic text-navy-700">next.</span>
          </h2>
          <p className="mt-3 text-[14.5px] text-navy-700">
            Each option below has a different timeline, cost, and qualification
            bar. We'll match you to the right one on the call.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6">
          {PATHWAYS.map((p, i) => (
            <PathwayCard key={p.n} p={p} i={i} onCTA={onCTA} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PathwayCard({ p, i, onCTA }) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className={`relative grid gap-6 rounded-3xl border bg-cream p-7 sm:p-9 lg:grid-cols-[180px_1fr_minmax(0,220px)] lg:items-start ${
        p.paid
          ? "border-gold-400/60 shadow-gold"
          : "border-navy-800/10 shadow-soft"
      }`}
    >
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
        <span className="font-mono text-[12px] font-semibold tracking-[0.18em] text-navy-700/70">
          STEP {p.n}
        </span>
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            p.paid
              ? "bg-gold-400 text-navy-900"
              : "bg-navy-800 text-cream"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[24px] leading-tight tracking-tight text-navy-900 sm:text-[28px]">
          {p.name}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-navy-700">
          {p.pitch}
        </p>

        <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-700/70">
          Best for
        </div>
        <p className="mt-1.5 text-[14.5px] leading-[1.55] text-navy-800">
          {p.forWho}
        </p>

        <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-700/70">
          What you need
        </div>
        <ul className="mt-2.5 grid gap-1.5">
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

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ProConList label="Pros" items={p.pros} tone="pro" />
          <ProConList label="Watch out for" items={p.cons} tone="con" />
        </div>
      </div>

      <div className="rounded-2xl border border-navy-800/10 bg-white p-5 lg:sticky lg:top-24">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700/70">
          Timing
        </div>
        <div className="mt-1.5 font-display text-[18px] leading-tight tracking-tight text-navy-900">
          {p.timing}
        </div>

        <button
          onClick={onCTA}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[13.5px] font-semibold transition ${
            p.paid
              ? "bg-gold-400 text-navy-900 hover:bg-gold-500"
              : "bg-navy-800 text-cream hover:bg-navy-900"
          }`}
        >
          {p.cta} <ArrowRight className="h-3.5 w-3.5" />
        </button>

        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-navy-700/70">
          <ShieldCheck className="h-3 w-3" />
          {p.paid ? "Paid working session" : "Free 15-min call"}
        </div>
      </div>
    </motion.article>
  );
}

function ProConList({ label, items, tone }) {
  const isPro = tone === "pro";
  return (
    <div className="rounded-xl border border-navy-800/10 bg-white p-3.5">
      <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-700/70">
        {label}
      </div>
      <ul className="mt-1.5 grid gap-1">
        {items.map((t) => (
          <li
            key={t}
            className="flex items-start gap-1.5 text-[13px] leading-[1.45] text-navy-800"
          >
            <span
              className={`mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full ${
                isPro ? "bg-emerald-600" : "bg-rose-500"
              }`}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingCTA({ onCTA }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-navy-600/30 blur-3xl" />

      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="font-display text-[36px] leading-[1.05] tracking-tight text-cream sm:text-[52px]">
            PGWP ending soon?{" "}
            <span className="italic text-gold-400">Start planning now.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-cream/80">
            The sooner you act, the more pathways stay open to you. We'll
            review your file in 15 minutes and tell you honestly which one
            fits.
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

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-cream/65">
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
