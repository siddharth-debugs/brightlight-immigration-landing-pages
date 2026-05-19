export default {
  slug: "pgwp-expiring",
  navName: "PGWP Expiring",
  shortName: "PGWP Expiring",
  fullName: "PGWP Expiring — What's Next",
  category: "Work Permit · Transition",
  tagline: "Your PGWP is expiring? You still have options to stay and work.",
  cardBlurb:
    "PGWP can't be renewed — but BOWP, PNP, LMIA-based or spousal permits often can.",
  processing: "Apply before expiry to maintain status",
  audience: "PGWP holders whose permit is ending in 12 months or less",
  accent: "from-emerald-700 to-emerald-500",
  meta: {
    title:
      "PGWP Expiring? Your Next Work Permit Options | Brightlight Immigration",
    description:
      "Your PGWP can't be renewed, but most graduates qualify for a BOWP, LMIA-based permit, PNP, or spousal OWP. Free 15-minute call with a licensed RCIC.",
  },
  hero: {
    badge: "PGWP expiring · Licensed RCIC R522969",
    h1Lead: "PGWP expiring?",
    h1LeadItalic: "You still have options.",
    h1Tail: "",
    h1Scribble: "",
    subhead:
      "Free 15-minute call with a licensed RCIC. We map your best pathway — BOWP, PNP, LMIA-based, or spousal — before your status runs out.",
    cardEyebrow: "Free pathway audit",
    cardTitle: ["15 minutes.", "A clear next step."],
    cardCta: "Map my next step",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What you get",
    titleItalic: "on the call.",
    items: [
      {
        icon: "files",
        title: "An honest pathway audit.",
        body: "BOWP, PNP, LMIA-based work permit, spousal OWP, visitor record, restoration — we tell you which actually fit your situation.",
      },
      {
        icon: "clock",
        title: "Timing to keep your status.",
        body: "Apply before expiry and you can keep working under maintained status. We tell you the exact deadline that matters for your file.",
      },
      {
        icon: "shield",
        title: "An honest PR read.",
        body: "Express Entry CEC, PNP, or no — we score your profile and tell you whether a PR application is realistic in 6 months or 16.",
      },
    ],
  },
  founder: {
    pullQuote:
      "Your PGWP isn't a deadline. It is a door to what comes next.",
    tagline: "Mapping pathways for graduates whose permits are ending.",
    bio: "Licensed RCIC since 2014. Loveneet has guided 1,000+ graduates through the transition after PGWP — BOWP, PNP, LMIA-based switches, and PR filings — including last-minute files most firms refuse.",
    specialties: [
      "BOWP filings while PR is in process",
      "PNP nominations & LMIA-based switches",
      "Restoration if status has already expired",
    ],
  },
  finalCTA: {
    title1: "Your PGWP isn't the end.",
    italic: "Let's map what's next.",
  },
  inquiry: {
    serviceLabel: "PGWP expiring",
    steps: [
      {
        key: "expiry",
        q: "When does your PGWP expire?",
        options: [
          { v: "expired", l: "Already expired" },
          { v: "soon", l: "Within 3 months" },
          { v: "later", l: "3–12 months" },
          { v: "12plus", l: "More than 12 months" },
        ],
      },
      {
        key: "experience",
        q: "How much Canadian work experience do you have?",
        options: [
          { v: "less-1y", l: "Less than 1 year" },
          { v: "1y", l: "About 1 year" },
          { v: "2y-plus", l: "2+ years" },
        ],
      },
      {
        key: "pr",
        q: "Have you started a PR application?",
        options: [
          { v: "ee-filed", l: "Yes — Express Entry filed" },
          { v: "pnp", l: "Yes — PNP in progress" },
          { v: "no", l: "No, exploring options" },
        ],
      },
    ],
  },
};
