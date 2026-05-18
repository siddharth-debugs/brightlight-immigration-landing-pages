export default {
  slug: "francophone-mobility",
  navName: "Francophone Mobility",
  shortName: "Francophone Mobility",
  fullName: "Francophone Mobility Program",
  category: "Work Permit",
  tagline:
    "French-speaking? Work in Canada outside Quebec without an LMIA.",
  cardBlurb:
    "An open work permit for up to 3 years for NCLC 5+ French speakers — work for almost any employer, almost anywhere in Canada outside Quebec.",
  processing: "Faster than LMIA-based work permits",
  audience: "French-speaking foreign nationals (NCLC 5+ in speaking & listening)",
  accent: "from-indigo-700 to-indigo-500",
  badge: "Updated July 2025",
  meta: {
    title:
      "Francophone Mobility Program — No-LMIA Work Permit (C16) | Brightlight Immigration",
    description:
      "RCIC-licensed filing for the Francophone Mobility Program. Open work permit of up to 3 years for French-speaking foreign nationals working outside Quebec. No LMIA required (LMIA exemption code C16).",
  },
  hero: {
    badge: "Updated July 2025 · No LMIA required",
    h1Lead: "Parlez-vous français?",
    h1LeadItalic: "Skip the LMIA.",
    h1Tail: "Work in Canada",
    h1Scribble: "outside Quebec.",
    subhead:
      "The Francophone Mobility Program lets Canadian employers outside Quebec hire French-speaking foreign nationals without an LMIA. You can receive an open work permit valid for up to three years. Book a free 15-minute call with a licensed RCIC to confirm eligibility.",
    cardEyebrow: "Free eligibility check",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What the program",
    titleItalic: "actually requires.",
    items: [
      {
        icon: "shield",
        title: "No LMIA — exemption code C16.",
        body: "Your employer submits an offer of employment through the IRCC Employer Portal under LMIA exemption code C16 (Mobilité Francophone). No Labour Market Impact Assessment needed.",
      },
      {
        icon: "files",
        title: "NCLC 5+ in speaking and listening.",
        body: "You only need to prove NCLC 5 (CLB 5 equivalent) in speaking and listening — not all four skills. We help you document the right TEF Canada or TCF Canada result the way IRCC expects to see it.",
      },
      {
        icon: "clock",
        title: "Open permit, up to 3 years.",
        body: "You receive an open work permit valid for up to three years, so you can work for almost any employer almost anywhere in Canada outside Quebec. Open to most TEER categories, with primary agriculture in TEER 4 and 5 excluded.",
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
          { v: "nclc5", l: "NCLC 5+ (TEF/TCF tested)" },
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
