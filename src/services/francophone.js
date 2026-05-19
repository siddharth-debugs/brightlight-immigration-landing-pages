export default {
  slug: "francophone-mobility",
  navName: "Francophone Mobility",
  shortName: "Francophone Mobility",
  fullName: "Francophone Mobility Program",
  category: "Work Permit",
  tagline: "French-speaking? Work in Canada outside Quebec — no LMIA.",
  cardBlurb:
    "Open work permit of up to 3 years for NCLC 5+ French speakers, no LMIA required.",
  processing: "Faster than LMIA-based work permits",
  audience: "French-speaking foreign nationals (NCLC 5+ in speaking & listening)",
  accent: "from-indigo-700 to-indigo-500",
  badge: "Updated July 2025",
  meta: {
    title:
      "Francophone Mobility Program — No-LMIA Work Permit (C16) | Brightlight Immigration",
    description:
      "RCIC-licensed filing for the Francophone Mobility Program. Open work permit up to 3 years for French-speaking foreign nationals outside Quebec. No LMIA (exemption code C16).",
  },
  hero: {
    badge: "Updated July 2025 · No LMIA required",
    h1Lead: "Parlez-vous français?",
    h1LeadItalic: "Skip the LMIA.",
    h1Tail: "Work in Canada",
    h1Scribble: "outside Quebec.",
    subhead:
      "Free 15-minute call with a licensed RCIC. We confirm whether you qualify under exemption code C16 — and what your French test needs to show.",
    cardEyebrow: "Free eligibility check",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What you get",
    titleItalic: "on the call.",
    items: [
      {
        icon: "shield",
        title: "Confirmation that C16 applies to you.",
        body: "No LMIA needed when your job offer is outside Quebec and you meet the language bar.",
      },
      {
        icon: "files",
        title: "Clarity on the French test.",
        body: "You only need NCLC 5 in speaking and listening — TEF Canada or TCF Canada. We tell you what score to target.",
      },
      {
        icon: "clock",
        title: "A 3-year open permit, properly filed.",
        body: "Work for almost any employer almost anywhere in Canada outside Quebec. We file it the way IRCC wants to see it.",
      },
    ],
  },
  highlights: {
    eyebrow: "At a glance",
    title1: "The program in",
    titleItalic: "30 seconds.",
    subhead:
      "What an officer cares about. Stripped to the four facts that decide your file.",
    items: [
      {
        label: "LMIA",
        value: "Not required",
        note: "Filed under exemption code C16 (Mobilité Francophone) — no Labour Market Impact Assessment.",
      },
      {
        label: "Permit type",
        value: "Open · up to 3 years",
        note: "Work for almost any employer almost anywhere in Canada outside Quebec.",
      },
      {
        label: "French level",
        value: "NCLC 5+",
        note: "Only speaking and listening — not all four skills. Proven via TEF Canada or TCF Canada.",
      },
      {
        label: "Where you can work",
        value: "Outside Quebec",
        note: "Any province or territory. Most TEER categories eligible; primary agriculture in TEER 4–5 excluded.",
      },
    ],
    footnote: "Sources: IRCC · Francophone Mobility (updated July 2025)",
  },
  founder: {
    pullQuote:
      "Your French isn't paperwork. It is a passport to almost every province.",
    tagline: "Filing under Mobilité Francophone since the exemption began.",
    bio: "Licensed RCIC since 2014. Loveneet files Francophone Mobility cases under exemption code C16 — confirming NCLC scores, structuring offers of employment, and securing the full 3-year permit.",
    specialties: [
      "LMIA exemption code C16 (Mobilité Francophone)",
      "TEF / TCF Canada language documentation",
      "Offers of employment via the Employer Portal",
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
          { v: "fluent-or-learning", l: "Fluent but untested / Still learning" },
          { v: "willing", l: "Don't know, but willing to test" },
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
          { v: "yes", l: "Yes" },
          { v: "looking", l: "Looking for a job" },
          { v: "no", l: "No" },
        ],
      },
    ],
  },
};
