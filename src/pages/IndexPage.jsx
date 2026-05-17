import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import UrgencyBar from "../components/UrgencyBar";
import Header from "../components/Header";
import TrustStrip from "../components/TrustStrip";
import Founder from "../components/Founder";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import SocialProofToast from "../components/SocialProofToast";
import StickyMobileCTA from "../components/StickyMobileCTA";
import { BRAND } from "../data";
import { SERVICES } from "../services";

export default function IndexPage() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.title =
      "Brightlight Immigration · Canadian Immigration Consultants (RCIC R522969)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <UrgencyBar />
      <Header onCTA={openModal} />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-14 pt-12 sm:pt-16 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-gold-100/60 via-cream to-cream" />
            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-200/40 blur-3xl" />
            <div className="absolute -right-40 top-40 h-[460px] w-[460px] rounded-full bg-navy-600/10 blur-3xl" />
          </div>

          <div className="container-x text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center gap-2"
            >
              <span className="pill">
                <Sparkles className="h-3 w-3 text-gold-500" />
                RCIC R522969 · 13 years · 1,000+ families
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mx-auto mt-5 max-w-3xl font-display text-[44px] leading-[1.02] tracking-[-0.02em] text-navy-900 sm:text-[60px] lg:text-[68px]"
            >
              Canadian immigration,{" "}
              <span className="italic text-navy-700">done right.</span>
              <span className="block">
                Pick the path you're on —{" "}
                <span className="scribble-underline">we handle the rest.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-[1.55] text-navy-700"
            >
              Free 15-minute strategy call with a licensed RCIC. We tell you
              exactly what your file needs. No pitch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
            >
              <button onClick={openModal} className="btn-gold">
                Book my free call <ArrowRight className="h-4 w-4" />
              </button>
              <a href={BRAND.phoneHref} className="btn-ghost">
                <Phone className="h-3.5 w-3.5" /> {BRAND.phone}
              </a>
            </motion.div>
          </div>
        </section>

        <TrustStrip />

        {/* Services grid */}
        <section className="relative py-20 sm:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <span className="h-1 w-6 bg-gold-500" />
                Our specialist services
              </span>
              <h2 className="mt-4 font-display text-[36px] leading-[1.05] tracking-tight text-navy-900 sm:text-[46px]">
                Pick the{" "}
                <span className="italic text-navy-700">path</span> you're on.
              </h2>
              <p className="mt-3 text-[15.5px] text-navy-700">
                Each page below is a complete service breakdown. Free strategy
                call on every one.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.slug} s={s} i={i} />
              ))}
            </div>
          </div>
        </section>

        <Founder onCTA={openModal} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
          <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-gold-400/15 blur-3xl" />
          <div className="container-x relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-[40px] leading-[1.02] tracking-tight sm:text-[58px]">
              Not sure which path is yours?{" "}
              <span className="italic text-gold-400">
                We'll tell you on the call.
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={openModal} className="btn-gold">
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
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400" /> RCIC
                R522969
              </span>
              <span className="h-1 w-1 rounded-full bg-cream/25" />
              <span>CICC Member</span>
              <span className="h-1 w-1 rounded-full bg-cream/25" />
              <span>PIPEDA Compliant</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal open={open} onClose={closeModal} />
      <SocialProofToast />
      <StickyMobileCTA onCTA={openModal} />

      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}

function ServiceCard({ s, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-navy-800/10 bg-white transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <Link to={`/${s.slug}`} className="block p-7">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-800/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-navy-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            {s.category}
          </span>
          {s.badge && (
            <span className="rounded-full border border-gold-400/40 bg-gold-50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-navy-900">
              {s.badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-[28px] leading-tight tracking-tight text-navy-900 sm:text-[32px]">
          {s.fullName}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
          {s.cardBlurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-navy-700">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/10 bg-cream px-3 py-1.5">
            <Users className="h-3 w-3 text-gold-500" />
            {s.audience}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/10 bg-cream px-3 py-1.5">
            <Clock className="h-3 w-3 text-gold-500" />
            {s.processing}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-navy-800/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-navy-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Free 15-min strategy call
          </span>
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-navy-900 transition group-hover:text-navy-600">
            See details
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
