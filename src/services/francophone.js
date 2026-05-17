export default {
  slug: "francophone-mobility",
  navName: "Francophone Mobility",
  shortName: "Francophone Mobility",
  fullName: "Francophone Mobility Program",
  category: "Work Permit · No LMIA",
  tagline: "French-speaking? Skip the LMIA and work in Canada faster.",
  cardBlurb:
    "Work in Canada outside Quebec with no LMIA required. Updated July 2025.",
  processing: "2–4 weeks (vs months for LMIA-based permits)",
  audience: "French-speaking foreign nationals (NCLC 5+)",
  accent: "from-indigo-700 to-indigo-500",
  badge: "Updated July 2025",
  meta: {
    title:
      "Francophone Mobility Program — No LMIA Work Permit | Brightlight Immigration",
    description:
      "French speakers can work in Canada outside Quebec without an LMIA. RCIC-licensed filing for the Francophone Mobility Program.",
  },
  hero: {
    badge: "Updated July 2025 — No LMIA required",
    h1Lead: "Parlez-vous français?",
    h1LeadItalic: "Skip the LMIA.",
    h1Tail: "Work in Canada,",
    h1Scribble: "faster.",
    subhead:
      "Free 15-minute call with a licensed RCIC. We confirm your eligibility for the Francophone Mobility Program and file your work permit — no LMIA, no employer red tape.",
    cardEyebrow: "Free eligibility check",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "Three reasons",
    titleItalic: "your French opens Canada.",
    items: [
      {
        icon: "clock",
        title: "No LMIA. No waiting.",
        body: "We file under the Mobilité Francophone exemption — 2–4 weeks typical, not 6+ months.",
      },
      {
        icon: "shield",
        title: "TEF / TCF proof done right.",
        body: "We help you document your NCLC 5+ French ability the way IRCC wants to see it.",
      },
      {
        icon: "files",
        title: "Outside Quebec, anywhere.",
        body: "Any province or territory except Quebec — including BC, Ontario, Alberta, Atlantic provinces.",
      },
    ],
  },
  urgency: {
    eyebrow: "Program updates frequently",
    title1: "Rules updated",
    italic: "July 2025.",
    suffix: "Still your fastest path.",
    body: "We cap Francophone Mobility intake at 8 files per week. Senior RCIC review on every file.",
    cta: "Claim a slot",
  },
  finalCTA: {
    badge: "No LMIA · Faster · Free call",
    title1: "Your French is the key.",
    italic: "Use it.",
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
