import { useState, useCallback } from "react";
import UrgencyBar from "./components/UrgencyBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Benefits from "./components/Benefits";
import Founder from "./components/Founder";
import UrgencyBlock from "./components/UrgencyBlock";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import InquiryModal from "./components/InquiryModal";
import SocialProofToast from "./components/SocialProofToast";
import ExitIntent from "./components/ExitIntent";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <UrgencyBar />
      <Header onCTA={openModal} />

      <main>
        <Hero onCTA={openModal} />
        <TrustStrip />
        <Benefits onCTA={openModal} />
        <Founder onCTA={openModal} />
        <UrgencyBlock onCTA={openModal} />
        <Testimonials />
        <FinalCTA onCTA={openModal} />
      </main>

      <Footer />

      <InquiryModal open={open} onClose={closeModal} />
      <SocialProofToast />
      <ExitIntent onCTA={openModal} />
      <StickyMobileCTA onCTA={openModal} />

      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
