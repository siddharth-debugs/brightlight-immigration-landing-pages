import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import { SERVICES } from "../services";
import { setSEO, setJSONLD, SITE_URL, ogImageFor } from "../lib/seo";
import { BRAND } from "../data";

export default function IndexPage() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setSEO({
      title:
        "Brightlight Immigration — Licensed RCIC R522969 in Surrey, BC",
      description:
        "Licensed Canadian immigration consultants. Spousal sponsorship, PGWP transitions, work permit extensions, Francophone Mobility, and Vulnerable Worker OWP. Free 15-minute call with RCIC R522969.",
      path: "/",
      type: "website",
      image: ogImageFor("home"),
    });

    setJSONLD("ld-organization", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.name,
      url: SITE_URL,
      logo: BRAND.logo,
      image: BRAND.logo,
      telephone: BRAND.phone,
      email: BRAND.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "15315 66 Ave Unit 327",
        addressLocality: "Surrey",
        addressRegion: "BC",
        postalCode: "V3S 2A1",
        addressCountry: "CA",
      },
      areaServed: { "@type": "Country", name: "Canada" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(BRAND.rating),
        reviewCount: String(BRAND.reviews),
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.instagram.com/brightlightimmigration/",
        "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Immigration services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.fullName,
            url: `${SITE_URL}/${s.slug}`,
            description: s.tagline,
          },
        })),
      },
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <Header onCTA={openModal} />

      <main>
        <section className="pb-10 pt-12 sm:pb-14 sm:pt-20">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-[54px]"
              >
                Canadian immigration,{" "}
                <span className="italic text-navy-700">done right.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.55] text-navy-700"
              >
                Pick the service you need. Each page has a free 15-minute
                strategy call with a licensed RCIC.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="container-x">
            <div className="mx-auto grid max-w-3xl gap-3">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={`/${s.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-navy-800/10 bg-white px-6 py-5 transition hover:border-navy-800/25 hover:shadow-soft"
                  >
                    <div>
                      <div className="font-display text-[20px] leading-tight text-navy-900 sm:text-[22px]">
                        {s.fullName}
                      </div>
                      <div className="mt-1 text-[14px] text-navy-700">
                        {s.tagline}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-navy-700 transition group-hover:translate-x-0.5 group-hover:text-navy-900" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: SERVICES.length * 0.05 }}
              >
                <Link
                  to="/pgwp-options"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-gold-400/50 bg-gold-50 px-6 py-5 transition hover:border-gold-500 hover:shadow-soft"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-900">
                        Alt version
                      </span>
                      <span className="font-display text-[20px] leading-tight text-navy-900 sm:text-[22px]">
                        PGWP Expiring — 5 Pathways
                      </span>
                    </div>
                    <div className="mt-1 text-[14px] text-navy-700">
                      Editorial-style review variant of the PGWP-expiring page.
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-navy-700 transition group-hover:translate-x-0.5 group-hover:text-navy-900" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal open={open} onClose={closeModal} />
    </div>
  );
}
