export default {
  slug: "pgwp",
  navName: "PGWP",
  shortName: "PGWP",
  fullName: "Post-Graduate Work Permit",
  category: "Work Permit",
  tagline: "Turn your Canadian degree into a 3-year open work permit.",
  cardBlurb:
    "International grad from a DLI? Stay and work in Canada for up to 3 years.",
  processing: "Apply within 180 days of program completion",
  audience: "International grads from a Canadian DLI",
  accent: "from-emerald-700 to-emerald-500",
  meta: {
    title:
      "Post-Graduate Work Permit (PGWP) — RCIC-Filed | Brightlight Immigration",
    description:
      "RCIC-licensed PGWP filing for graduates of Canadian DLIs. Free 15-minute eligibility call.",
  },
  hero: {
    badge: "PGWP filing · Licensed RCIC R522969",
    h1Lead: "Just graduated?",
    h1LeadItalic: "Stay and work in Canada.",
    h1Tail: "Your PGWP,",
    h1Scribble: "filed right.",
    subhead:
      "We file Post-Graduate Work Permits for international graduates of Canadian DLIs. Book a free 15-minute call with a licensed RCIC to confirm eligibility, duration, and timing.",
    cardEyebrow: "Free PGWP audit",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What a properly filed",
    titleItalic: "PGWP file looks like.",
    items: [
      {
        icon: "clock",
        title: "Filed inside the 180-day window.",
        body: "We document program completion and study-permit validity precisely the way IRCC requires.",
      },
      {
        icon: "files",
        title: "Transcripts and completion letter.",
        body: "The two most-missed documents that quietly trigger refusals — included from day one.",
      },
      {
        icon: "shield",
        title: "Correct duration assigned.",
        body: "We make sure IRCC issues the full duration your program qualifies for, not a shorter permit by mistake.",
      },
    ],
  },
  finalCTA: {
    title1: "Your degree opened doors.",
    italic: "Walk through them.",
  },
  inquiry: {
    serviceLabel: "PGWP",
    steps: [
      {
        key: "graduated",
        q: "Have you completed your program?",
        options: [
          { v: "yes-recent", l: "Yes — within 180 days" },
          { v: "yes-old", l: "Yes — more than 180 days ago" },
          { v: "soon", l: "Not yet, but soon" },
        ],
      },
      {
        key: "studyPermit",
        q: "Is your study permit still valid?",
        options: [
          { v: "valid", l: "Valid" },
          { v: "expired", l: "Expired" },
          { v: "unsure", l: "Not sure" },
        ],
      },
      {
        key: "dli",
        q: "Was your program at a PGWP-eligible DLI?",
        options: [
          { v: "yes", l: "Yes" },
          { v: "no", l: "No" },
          { v: "unsure", l: "Not sure" },
        ],
      },
    ],
  },
};
