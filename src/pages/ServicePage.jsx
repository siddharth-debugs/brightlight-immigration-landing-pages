import { useEffect, useState, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { findService } from "../services";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Benefits from "../components/Benefits";
import Founder from "../components/Founder";
import Testimonials from "../components/Testimonials";
import ClientReviews from "../components/ClientReviews";
import ServiceHighlights from "../components/ServiceHighlights";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
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
      <Header onCTA={openModal} />

      <main>
        <Hero service={service} onCTA={openModal} />
        <TrustStrip />
        <Founder service={service} onCTA={openModal} />
        <Benefits service={service} onCTA={openModal} />
        <Testimonials service={service} />
        <ClientReviews service={service} />
        <ServiceHighlights service={service} />
        <FinalCTA service={service} onCTA={openModal} />
      </main>

      <Footer />

      <InquiryModal open={open} onClose={closeModal} service={service} />
      <StickyMobileCTA onCTA={openModal} />

      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
