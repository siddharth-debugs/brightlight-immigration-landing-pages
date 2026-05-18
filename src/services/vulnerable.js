export default {
  slug: "vulnerable-worker-permit",
  navName: "Vulnerable Worker OWP",
  shortName: "Vulnerable Worker OWP",
  fullName: "Open Work Permit for Vulnerable Workers",
  category: "Work Permit",
  tagline: "Stuck at a job you can't leave? You may qualify for a new work permit.",
  cardBlurb:
    "Facing abuse or unsafe work? Switch employers legally and confidentially.",
  processing: "Priority processing by IRCC",
  audience: "Workers facing exploitation or abuse",
  accent: "from-rose-700 to-rose-500",
  meta: {
    title:
      "Open Work Permit for Vulnerable Workers | Brightlight Immigration",
    description:
      "Confidential RCIC-licensed help filing the Open Work Permit for Vulnerable Workers. IRCC fee waived. Free 15-minute call.",
  },
  hero: {
    badge: "Confidential · IRCC fee waived",
    h1Lead: "Facing abuse at work?",
    h1LeadItalic: "Apply for a new permit.",
    h1Tail: "Switch employers,",
    h1Scribble: "safely.",
    subhead:
      "If you're facing abuse, harassment, or unsafe conditions, you may qualify for an Open Work Permit with the IRCC fee waived. Book a free, confidential call with a licensed RCIC.",
    cardEyebrow: "Confidential call",
    cardTitle: ["15 minutes.", "Confidential review."],
    cardCta: "Speak with an RCIC",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "How we help you",
    titleItalic: "switch jobs safely.",
    items: [
      {
        icon: "shield",
        title: "Strictly confidential.",
        body: "Your employer is never contacted. PIPEDA-compliant intake. We treat your case with discretion from the first call.",
      },
      {
        icon: "files",
        title: "Officer-ready evidence.",
        body: "Documentation of abuse, exploitation, or unsafe work prepared the way IRCC expects to see it.",
      },
      {
        icon: "clock",
        title: "Maintained status while we file.",
        body: "You don't have to choose between safety and your legal stay in Canada. We protect both while the application is in progress.",
      },
    ],
  },
  finalCTA: {
    title1: "A safer job",
    italic: "is one call away.",
  },
  inquiry: {
    serviceLabel: "Vulnerable Worker OWP",
    steps: [
      {
        key: "situation",
        q: "What are you facing at work?",
        options: [
          { v: "abuse", l: "Abuse or harassment" },
          { v: "unsafe", l: "Unsafe conditions" },
          { v: "wage", l: "Unpaid wages or fraud" },
          { v: "other", l: "Something else" },
        ],
      },
      {
        key: "permit",
        q: "What is your current permit status?",
        options: [
          { v: "closed", l: "Closed (employer-specific)" },
          { v: "open", l: "Open work permit" },
          { v: "expired", l: "Expired" },
          { v: "unsure", l: "Not sure" },
        ],
      },
      {
        key: "timing",
        q: "When would you like to speak?",
        options: [
          { v: "now", l: "As soon as possible" },
          { v: "week", l: "Within a week" },
          { v: "planning", l: "Planning ahead" },
        ],
      },
    ],
  },
};
