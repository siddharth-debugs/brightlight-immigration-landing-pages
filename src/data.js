export const BRAND = {
  name: "Brightlight Immigration",
  short: "Brightlight",
  phone: "+1 604-503-3734",
  phoneHref: "tel:+16045033734",
  email: "info@brightlightimmigration.ca",
  emailHref: "mailto:info@brightlightimmigration.ca",
  address: "15315 66 Ave Unit 327, Surrey, BC V3S 2A1",
  rcic: "R522969",
  cicc: "CICC",
  rating: 4.8,
  reviews: 200,
  yearsExperience: 13,
  booking: "https://book.brightlightimmigration.ca/contact-us",
  logo:
    "https://res.cloudinary.com/dkqo3uz5o/image/upload/v1776960199/brightlight-main-logo_amxfxh.webp",
  icon:
    "https://res.cloudinary.com/dkqo3uz5o/image/upload/v1776959120/brlightlight-icon_r07dqm.webp",
};

export const FOUNDER = {
  name: "Loveneet Paneswar",
  title: "Regulated Canadian Immigration Consultant",
  tagline: 'Your trusted "ally" in Canadian Immigration',
  license: "RCIC License # R522969",
  rcicNumber: "R522969",
  ciccMembership: "Member in good standing with CICC",
  experience: "13 years of Canadian immigration experience",
  bio: "Licensed RCIC since 2014. Loveneet personally reviews every spousal file we take on — including the complicated ones other firms turn away.",
  pullQuote:
    "A spousal file is not paperwork. It is a family waiting at an airport.",
  specialties: [
    "Spousal sponsorship — inland & outland",
    "Refusal overturns & GCMS appeals",
    "Service in English, Punjabi & Hindi",
  ],
  photo: "/loveneet.jpg",
  linkedin: "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
};

export const REVIEWS = [
  {
    name: "Rhea Patel",
    rating: 5,
    image:
      "https://www.brightlightimmigration.ca/images/api/testimonials-section-review1img.jpg",
    text: "Loveneet at Bright Light Immigration was professional, knowledgeable, and always available to answer questions. The entire process was smooth, and I felt supported every step of the way.",
    tag: "Spousal sponsorship",
  },
  {
    name: "Rajinder Singh",
    rating: 5,
    image:
      "https://www.brightlightimmigration.ca/images/api/testimonials-section-review2img.jpg",
    text: "I applied for my study permit extension on the day my study permit was expiring and still got it approved. Their hard work and knowledge in the field got the work done.",
    tag: "Last-minute file",
  },
  {
    name: "Mehak Sekhon",
    rating: 4,
    image:
      "https://www.brightlightimmigration.ca/images/api/testimonials-section-review3img.jpg",
    text: "Your seamless knowledge, attention to detail, and clear communication set you apart as the best migration agent. I wholeheartedly recommend your services.",
    tag: "5-star service",
  },
  {
    name: "Harleen Sidhu",
    rating: 4,
    image:
      "https://www.brightlightimmigration.ca/images/api/testimonials-section-review5img.jpg",
    text: "I applied for BCPNP under the Health Care Authority with Loveneet's assistance and was approved in just two days. The team provided quick responses to all queries.",
    tag: "Approved in 2 days",
  },
  {
    name: "Priya Gill",
    rating: 5,
    image:
      "https://www.brightlightimmigration.ca/images/api/testimonials-section-review6img.jpg",
    text: "The RCIC license gave me confidence from the first call. The process was explained clearly, and I received excellent guidance throughout.",
    tag: "First-time applicant",
  },
];

// Reels are hosted on Cloudinary (cloud: dkqo3uz5o, folder: brightlight/reels).
// Source IDs match the original Instagram reel shortcodes for traceability.
const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dkqo3uz5o/video/upload";

export function reelVideoSrc(id) {
  return `${CLOUDINARY_BASE}/q_auto,f_auto/brightlight/reels/${id}.mp4`;
}

export function reelPosterSrc(id) {
  return `${CLOUDINARY_BASE}/so_2,w_720,h_1280,c_fill,g_auto,q_auto,f_jpg/brightlight/reels/${id}.jpg`;
}

export const REELS_BY_SERVICE = {
  "spousal-sponsorship": [
    "DTS_VWOE5dS",
    "DT8Gl6WkouM",
    "DSAl5w1Dbjx",
    "DNlXiMryjec",
  ],
  "pgwp-expiring": [
    "DYSvA8cEVI3",
    "DWGF9i9DhZ7",
    "DT_6JD_CvcW",
    "DSiH0uGEhA7",
    "DRxJFoaAGvO",
    "DOoUNlZkqsB",
    "DLT70T1S5hO",
  ],
  "work-permit-expiring": [
    "DYQG41ZiLse",
    "DWaZ0vgiS7v",
    "DT25T37jrxi",
    "DSRcd2KlIYP",
    "DSEjQPIDZ_n",
  ],
  "vulnerable-worker-permit": [
    "DYX47vPj5ue",
    "DVtdSukFVx6",
    "DVcuLsRk6Rk",
    "DTO42IZFPvm",
    "DN8evuEkhrw",
    "DMyI25uyMti",
    "DMc0tsJSS3J",
  ],
};
