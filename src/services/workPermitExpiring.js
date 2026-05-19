export default {
  slug: "work-permit-expiring",
  navName: "Work Permit Expiring",
  shortName: "Work Permit Expiring",
  fullName: "Work Permit Expiring — What's Next",
  category: "Work Permit · Transition",
  tagline:
    "Closed work permit ending? You have more options than your employer's LMIA.",
  cardBlurb:
    "Extend, switch employers, file PR, or bridge — we map your real options before status runs out.",
  processing: "Apply before expiry to maintain status",
  audience: "Employer-specific (closed) work permit holders",
  accent: "from-amber-700 to-amber-500",
  meta: {
    title:
      "Work Permit Expiring? Your Next Move | Brightlight Immigration",
    description:
      "Your closed work permit is ending — extension, BOWP, PNP, LMIA-exempt, or change of status. Free 15-minute call with a licensed RCIC.",
  },
  hero: {
    badge: "Work permit expiring · Licensed RCIC R522969",
    h1Lead: "Work permit expiring?",
    h1LeadItalic: "Know your real options.",
    h1Tail: "",
    h1Scribble: "",
    subhead:
      "Free 15-minute call with a licensed RCIC. We map every realistic path — extension, BOWP, PNP, LMIA-exempt switch, or change of status — before your status runs out.",
    cardEyebrow: "Free pathway audit",
    cardTitle: ["15 minutes.", "A clear next move."],
    cardCta: "Map my next move",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "What you get",
    titleItalic: "on the call.",
    items: [
      {
        icon: "files",
        title: "Every pathway worth considering.",
        body: "Extend with your current employer, BOWP if you've filed PR, PNP work permit support, LMIA-exempt switches, or visitor record — we tell you which actually fit you.",
      },
      {
        icon: "clock",
        title: "Timing to maintain status.",
        body: "Apply before your permit expires and you can keep working under maintained status. We tell you the exact deadline for your file.",
      },
      {
        icon: "shield",
        title: "An honest PR read.",
        body: "Express Entry, PNP, or no — we score your profile and tell you whether PR is realistic in months or years.",
      },
    ],
  },
  finalCTA: {
    title1: "Your permit isn't the end.",
    italic: "Let's map what's next.",
  },
  inquiry: {
    serviceLabel: "work permit expiring",
    steps: [
      {
        key: "expiry",
        q: "When does your work permit expire?",
        options: [
          { v: "expired", l: "Already expired" },
          { v: "soon", l: "Within 3 months" },
          { v: "later", l: "3–12 months" },
          { v: "12plus", l: "More than 12 months" },
        ],
      },
      {
        key: "permit",
        q: "What kind of work permit do you have?",
        options: [
          { v: "lmia-closed", l: "LMIA-based (employer-specific)" },
          { v: "lmia-exempt", l: "LMIA-exempt (IMP)" },
          { v: "open", l: "Open work permit" },
          { v: "unsure", l: "Not sure" },
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
