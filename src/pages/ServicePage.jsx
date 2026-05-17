import { useEffect, useState, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { findService } from "../services";
import UrgencyBar from "../components/UrgencyBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Benefits from "../components/Benefits";
import Founder from "../components/Founder";
import UrgencyBlock from "../components/UrgencyBlock";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import SocialProofToast from "../components/SocialProofToast";
import ExitIntent from "../components/ExitIntent";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function ServicePage() {
  const { slug } = useParams();
  const service = findService(slug);
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (service?.meta) {
      document.title = service.meta.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", service.meta.description);
    }
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <UrgencyBar />
      <Header onCTA={openModal} />

      <main>
        <Hero service={service} onCTA={openModal} />
        <TrustStrip />
        <Benefits service={service} onCTA={openModal} />
        <Founder onCTA={openModal} />
        <UrgencyBlock service={service} onCTA={openModal} />
        <Testimonials />
        <FinalCTA service={service} onCTA={openModal} />
      </main>

      <Footer />

      <InquiryModal open={open} onClose={closeModal} service={service} />
      <SocialProofToast />
      <ExitIntent onCTA={openModal} />
      <StickyMobileCTA onCTA={openModal} />

      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
