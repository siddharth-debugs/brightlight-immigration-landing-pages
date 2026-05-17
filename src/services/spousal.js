export default {
  slug: "spousal-sponsorship",
  navName: "Spousal Sponsorship",
  shortName: "Spousal PR",
  fullName: "Spousal Sponsorship",
  category: "Family Sponsorship",
  tagline: "Bring your spouse to Canada as a Permanent Resident.",
  cardBlurb:
    "Sponsor your married, common-law, or conjugal partner — even after a prior refusal.",
  processing: "10–14 months",
  audience: "Married, common-law or conjugal partners",
  accent: "from-navy-800 to-navy-600",
  meta: {
    title:
      "Bring Your Spouse to Canada — Spousal Sponsorship | Brightlight Immigration",
    description:
      "RCIC-licensed Canadian spousal sponsorship experts. 13 years experience, 4.8★ from 200+ families. Book a free 15-minute strategy call.",
  },
  hero: {
    badge: "Only 3 free slots left this week",
    h1Lead: "Bring your spouse",
    h1LeadItalic: "to Canada.",
    h1Tail: "Without another",
    h1Scribble: "refusal.",
    subhead:
      "Free 15-minute call with a licensed RCIC. We tell you exactly what your file needs. No pitch.",
    cardEyebrow: "Free strategy call",
    cardTitle: ["15 minutes.", "One honest answer."],
    cardCta: "Pick my slot — 2 min",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "Three reasons your",
    titleItalic: "spouse lands faster.",
    items: [
      {
        icon: "shield",
        title: "Licensed, not an agent.",
        body: "RCIC R522969 — legally authorized to represent you before IRCC.",
      },
      {
        icon: "files",
        title: "Refusal-proof files.",
        body: "Built the way an IRCC officer reads them. Nothing missed.",
      },
      {
        icon: "refresh",
        title: "We fix bad applications.",
        body: "Most of our wins started as someone else's refusal.",
      },
    ],
  },
  urgency: {
    eyebrow: "Weekly intake closing",
    title1: "Only",
    italic: "3 slots",
    suffix: "left this week.",
    body: "We cap intake at 8 files per week so every case gets senior RCIC review. Next batch opens Monday.",
    cta: "Claim a remaining slot",
  },
  finalCTA: {
    badge: "3 free slots left",
    title1: "One call.",
    italic: "One step closer.",
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
