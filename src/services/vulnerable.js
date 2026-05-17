export default {
  slug: "vulnerable-worker-permit",
  navName: "Vulnerable Worker OWP",
  shortName: "Vulnerable Worker OWP",
  fullName: "Open Work Permit for Vulnerable Workers",
  category: "Work Permit · Emergency",
  tagline: "Stuck at a job you can't leave? You can apply for a new work permit today.",
  cardBlurb:
    "Facing abuse or unsafe work? Switch employers legally and confidentially.",
  processing: "Processed as a priority — days, not months",
  audience: "Workers facing exploitation or abuse",
  accent: "from-rose-700 to-rose-500",
  meta: {
    title:
      "Open Work Permit for Vulnerable Workers | Brightlight Immigration",
    description:
      "Facing abuse or exploitation at work? You can apply for a free, confidential Open Work Permit. RCIC-licensed help, today.",
  },
  hero: {
    badge: "Confidential · Free to apply · Priority processing",
    h1Lead: "Trapped at work?",
    h1LeadItalic: "You have a way out.",
    h1Tail: "Apply for a permit",
    h1Scribble: "today.",
    subhead:
      "Free, confidential call with a licensed RCIC. If you're facing abuse, harassment, or unsafe conditions at work — you can apply for a new open work permit. The IRCC fee is waived.",
    cardEyebrow: "Confidential help",
    cardTitle: ["Speak today.", "Protected tomorrow."],
    cardCta: "Get confidential help",
  },
  benefits: {
    eyebrow: "Why Brightlight",
    title1: "We help you",
    titleItalic: "switch jobs safely.",
    items: [
      {
        icon: "shield",
        title: "Strictly confidential.",
        body: "Your employer is never contacted. PIPEDA-compliant intake. We treat your case with discretion.",
      },
      {
        icon: "files",
        title: "Evidence done correctly.",
        body: "Officer-ready documentation of abuse, exploitation, or unsafe work — the part most applicants get wrong.",
      },
      {
        icon: "clock",
        title: "Stay legal while you change.",
        body: "Maintained status while we file. You don't have to choose between safety and your legal stay.",
      },
    ],
  },
  urgency: {
    eyebrow: "Time-sensitive",
    title1: "Every day in an unsafe job",
    italic: "is risk",
    suffix: "you don't need to carry.",
    body: "IRCC processes Vulnerable Worker OWP applications as a priority. We respond within hours of your first call.",
    cta: "Get help today",
  },
  finalCTA: {
    badge: "Free · Confidential · Today",
    title1: "Your safety can't wait.",
    italic: "Neither will we.",
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
        key: "urgency",
        q: "How urgent is your situation?",
        options: [
          { v: "now", l: "I need help today" },
          { v: "week", l: "Within a week" },
          { v: "planning", l: "Planning ahead" },
        ],
      },
    ],
  },
};
