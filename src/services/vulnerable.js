export default {
  slug: "vulnerable-worker-permit",
  navName: "Vulnerable Worker OWP",
  shortName: "Vulnerable Worker OWP",
  fullName: "Open Work Permit for Vulnerable Workers",
  category: "Work Permit",
  tagline:
    "Stuck at a job you can't leave? You may qualify for a new work permit.",
  cardBlurb:
    "Facing abuse or unsafe work? Switch employers legally and confidentially.",
  processing: "Priority processing by IRCC",
  audience: "Workers facing abuse, harassment, or unsafe conditions",
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
    h1LeadItalic: "You can change employers.",
    h1Tail: "An open work permit,",
    h1Scribble: "fee-waived.",
    subhead:
      "Free, confidential call with a licensed RCIC. If you're facing abuse, harassment, or unsafe work, you may qualify for an Open Work Permit with the IRCC fee waived.",
    cardEyebrow: "Confidential call",
    cardTitle: ["15 minutes.", "Confidential review."],
    cardCta: "Speak with an RCIC",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What you get",
    titleItalic: "on the call.",
    items: [
      {
        icon: "shield",
        title: "A confidential review.",
        body: "Your employer is never contacted. PIPEDA-compliant intake from the first message.",
      },
      {
        icon: "files",
        title: "An honest read on your evidence.",
        body: "We tell you what IRCC will accept as proof of abuse or unsafe work — and what to gather.",
      },
      {
        icon: "clock",
        title: "A plan that keeps your status legal.",
        body: "We protect your legal stay in Canada while the application is in progress.",
      },
    ],
  },
  founder: {
    pullQuote:
      "A vulnerable worker file is not paperwork. It is dignity, restored.",
    tagline: "Confidential help for workers facing abuse at their job.",
    bio: "Licensed RCIC since 2014. Loveneet handles vulnerable worker applications with strict confidentiality — your employer is never contacted. PIPEDA-compliant intake from the first message.",
    specialties: [
      "Open Work Permit with IRCC fee waived",
      "Officer-ready evidence of abuse or unsafe work",
      "Maintained status while we file",
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
