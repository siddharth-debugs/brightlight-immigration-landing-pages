export default {
  slug: "pgwp",
  navName: "PGWP",
  shortName: "PGWP",
  fullName: "Post-Graduate Work Permit",
  category: "Work Permit",
  tagline: "Turn your Canadian degree into a 3-year open work permit.",
  cardBlurb:
    "International grad from a DLI? Stay and work in Canada for up to 3 years.",
  processing: "Up to 180 days post-graduation",
  audience: "International grads from a Canadian DLI",
  accent: "from-emerald-700 to-emerald-500",
  meta: {
    title:
      "Post-Graduate Work Permit (PGWP) — RCIC-Filed | Brightlight Immigration",
    description:
      "Graduated from a Canadian DLI? Lock in your 3-year PGWP before the 180-day window closes. RCIC-licensed filing.",
  },
  hero: {
    badge: "180-day window — don't miss it",
    h1Lead: "Just graduated?",
    h1LeadItalic: "Stay and work in Canada.",
    h1Tail: "Without missing the",
    h1Scribble: "deadline.",
    subhead:
      "Free 15-minute call with a licensed RCIC. We file your PGWP before the 180-day window closes — fully eligible and properly documented.",
    cardEyebrow: "Free PGWP audit",
    cardTitle: ["15 minutes.", "Eligibility confirmed."],
    cardCta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "Three reasons your",
    titleItalic: "PGWP gets approved.",
    items: [
      {
        icon: "clock",
        title: "Deadline-proof filing.",
        body: "We file inside the 180-day window — even on day 179. With proof your study permit was still valid.",
      },
      {
        icon: "files",
        title: "Transcripts done right.",
        body: "Final transcript + completion letter — the two most-missed documents that trigger refusals.",
      },
      {
        icon: "shield",
        title: "Correct duration assigned.",
        body: "We make sure IRCC issues the full 3 years your program qualifies for — not 1 or 2 by mistake.",
      },
    ],
  },
  urgency: {
    eyebrow: "Every day counts",
    title1: "Your",
    italic: "180-day window",
    suffix: "is already counting down.",
    body: "PGWP applications filed late are refused — no exceptions. We accept 8 new PGWP files per week.",
    cta: "Lock in my PGWP",
  },
  finalCTA: {
    badge: "Deadline-driven · Free call",
    title1: "Your degree opened doors.",
    italic: "We keep them open.",
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
