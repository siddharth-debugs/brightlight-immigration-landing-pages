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
      "RCIC-licensed Canadian spousal sponsorship. Inland and outland applications, refusal reviews, and honest eligibility advice. Book a free 15-minute call.",
  },
  hero: {
    badge: "Spousal sponsorship · Licensed RCIC R522969",
    h1Lead: "Bring your spouse",
    h1LeadItalic: "to Canada.",
    h1Tail: "Permanent residence,",
    h1Scribble: "done properly.",
    subhead:
      "We file inland and outland spousal sponsorship applications for married, common-law, and conjugal partners. Book a free 15-minute call with a licensed RCIC to map out your file and timeline.",
    cardEyebrow: "Free strategy call",
    cardTitle: ["15 minutes.", "Clear next steps."],
    cardCta: "Book my call",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What a properly filed",
    titleItalic: "spousal file looks like.",
    items: [
      {
        icon: "shield",
        title: "Licensed representation.",
        body: "RCIC R522969 — legally authorized to represent you before IRCC. Not a consultant, not an agent.",
      },
      {
        icon: "files",
        title: "Officer-ready evidence.",
        body: "Genuineness, co-habitation, and relationship history documented the way an IRCC officer reads them.",
      },
      {
        icon: "refresh",
        title: "Refusals reviewed honestly.",
        body: "If a prior refusal needs to be addressed, we explain what went wrong and what it takes to file again.",
      },
    ],
  },
  finalCTA: {
    title1: "One call.",
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
