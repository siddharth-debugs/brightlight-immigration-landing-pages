export default {
  slug: "francophone-mobility",
  navName: "Francophone Mobility",
  shortName: "Francophone Mobility",
  fullName: "Francophone Mobility Program",
  category: "Work Permit",
  tagline: "French-speaking? Skip the LMIA and work in Canada faster.",
  cardBlurb:
    "Work in Canada outside Quebec with no LMIA required.",
  processing: "2–4 weeks (vs months for LMIA-based permits)",
  audience: "French-speaking foreign nationals (NCLC 5+)",
  accent: "from-indigo-700 to-indigo-500",
  badge: "Updated July 2025",
  meta: {
    title:
      "Francophone Mobility Program — No LMIA Work Permit | Brightlight Immigration",
    description:
      "RCIC-licensed filing for the Francophone Mobility Program. Work in Canada outside Quebec without an LMIA. Free 15-minute eligibility call.",
  },
  hero: {
    badge: "Updated July 2025 · No LMIA required",
    h1Lead: "Parlez-vous français?",
    h1LeadItalic: "Skip the LMIA.",
    h1Tail: "Work in Canada,",
    h1Scribble: "with your French.",
    subhead:
      "We file work permits under the Francophone Mobility Program for NCLC 5+ French speakers — no LMIA, no employer red tape. Book a free 15-minute call with a licensed RCIC to confirm eligibility.",
    cardEyebrow: "Free eligibility check",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "How your French",
    titleItalic: "opens Canada.",
    items: [
      {
        icon: "clock",
        title: "No LMIA. Faster filing.",
        body: "We file under the Mobilité Francophone exemption — typically 2–4 weeks instead of the months an LMIA-based permit takes.",
      },
      {
        icon: "shield",
        title: "TEF / TCF documented correctly.",
        body: "We help you evidence NCLC 5+ French ability the way IRCC wants to see it on file.",
      },
      {
        icon: "files",
        title: "Outside Quebec, anywhere.",
        body: "Any province or territory except Quebec — BC, Ontario, Alberta, Atlantic provinces, and the territories.",
      },
    ],
  },
  finalCTA: {
    title1: "Your French is the key.",
    italic: "Use it well.",
  },
  inquiry: {
    serviceLabel: "Francophone Mobility",
    steps: [
      {
        key: "french",
        q: "What is your French level?",
        options: [
          { v: "native", l: "Native speaker" },
          { v: "nclc5", l: "NCLC 5+ (tested)" },
          { v: "untested", l: "Fluent but untested" },
          { v: "learning", l: "Still learning" },
        ],
      },
      {
        key: "destination",
        q: "Where do you want to work?",
        options: [
          { v: "outside-qc", l: "Outside Quebec" },
          { v: "qc", l: "In Quebec" },
          { v: "flexible", l: "Flexible" },
        ],
      },
      {
        key: "offer",
        q: "Do you have a Canadian job offer?",
        options: [
          { v: "yes", l: "Yes, signed" },
          { v: "exploring", l: "Exploring offers" },
          { v: "no", l: "No, planning ahead" },
        ],
      },
    ],
  },
};
