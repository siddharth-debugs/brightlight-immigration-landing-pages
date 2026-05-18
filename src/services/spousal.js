export default {
  slug: "spousal-sponsorship",
  navName: "Spousal Sponsorship",
  shortName: "Spousal PR",
  fullName: "Spousal Sponsorship",
  category: "Family Sponsorship",
  tagline: "Bring your spouse to Canada as a Permanent Resident.",
  cardBlurb:
    "Sponsor your married, common-law, or conjugal partner — inland or outland.",
  processing: "10–14 months",
  audience: "Married, common-law or conjugal partners",
  accent: "from-navy-800 to-navy-600",
  meta: {
    title:
      "Spousal Sponsorship — Bring Your Spouse to Canada | Brightlight Immigration",
    description:
      "RCIC-licensed Canadian spousal sponsorship. Inland and outland filings, refusal reviews, honest eligibility advice. Book a free 15-minute call.",
  },
  hero: {
    badge: "Spousal sponsorship · Licensed RCIC R522969",
    h1Lead: "Bring your spouse",
    h1LeadItalic: "to Canada.",
    h1Tail: "Permanent residence,",
    h1Scribble: "done properly.",
    subhead:
      "Free 15-minute call with a licensed RCIC. Tell us your situation — we'll tell you what your file needs.",
    cardEyebrow: "Free strategy call",
    cardTitle: ["15 minutes.", "Clear next steps."],
    cardCta: "Book my call",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What you get",
    titleItalic: "on the call.",
    items: [
      {
        icon: "shield",
        title: "An honest eligibility read.",
        body: "We tell you if you qualify — inland, outland, or not yet — before you spend a dollar.",
      },
      {
        icon: "files",
        title: "The exact documents your file needs.",
        body: "Genuineness, co-habitation, financial — we walk you through what IRCC will ask for.",
      },
      {
        icon: "refresh",
        title: "A clear plan if you've been refused.",
        body: "We read the refusal, name what went wrong, and tell you whether a re-file makes sense.",
      },
    ],
  },
  finalCTA: {
    title1: "Free 15-minute call.",
    italic: "Clearer next steps.",
  },
  inquiry: {
    serviceLabel: "spousal sponsorship",
    steps: [
      {
        key: "status",
        q: "What is your relationship status?",
        options: [
          { v: "married", l: "Married" },
          { v: "common-law", l: "Common-law" },
          { v: "engaged", l: "Engaged" },
        ],
      },
      {
        key: "spouseLocation",
        q: "Where is your spouse right now?",
        options: [
          { v: "in-canada", l: "In Canada" },
          { v: "abroad", l: "Outside Canada" },
        ],
      },
      {
        key: "refusal",
        q: "Any prior Canadian visa or PR refusal?",
        options: [
          { v: "no", l: "No" },
          { v: "yes", l: "Yes" },
        ],
      },
    ],
  },
};
