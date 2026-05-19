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

// Google reviews, extracted from screenshots in reviews-screenshots/.
// Grouped by the service each reviewer was helped with. Reviewers who
// mentioned multiple services appear under the most specific one.
export const REVIEWS_BY_SERVICE = {
  "spousal-sponsorship": [
    {
      name: "Seema Mansuri",
      tag: "PR with spouse · Local Guide",
      rating: 5,
      text: "My sincere gratitude to Loveneet and the whole team for assisting me in securing my PR along with my spouse. Loveneet is very knowledgeable and with her expertise we could achieve our PR goal. Attention to detail, highly professional and answers all the queries with clarity. Truly a trustworthy immigration service. Highly recommended!",
    },
    {
      name: "Arshpreet Kaur",
      tag: "Spousal sponsorship · Sept 2024",
      rating: 5,
      text: "Bright Light Immigration handled my spousal sponsorship application. They were always available to answer my calls and kept me informed at every step. Highly recommend.",
    },
    {
      name: "Harminder Badyal",
      tag: "PR approval · Local Guide",
      rating: 5,
      text: "Very good experience about my PR application. Everything was handled professionally and smoothly.",
    },
  ],
  "pgwp-expiring": [
    {
      name: "Deepak Pandey",
      tag: "PGWP filing",
      rating: 5,
      text: "I had a great experience with Bright Light Immigration. They helped me with my PGWP application and guided me throughout the entire process. The team was very professional, responsive, and made sure everything was done correctly and on time. They explained each step clearly, which made the process stress-free for me.",
    },
    {
      name: "Harpreet Kaur",
      tag: "PGWP + SOWP extension",
      rating: 5,
      text: "I had a great experience working with Bright Light Immigration for several immigration matters, including my PGWP, my husband's SOWP extension, and converting my daughter's visitor visa to a study permit. Professional, responsive, and very knowledgeable throughout the process. Everything was handled smoothly and within the expected timelines.",
    },
  ],
  "work-permit-expiring": [
    {
      name: "Abhi Verma",
      tag: "Open Work Permit approval",
      rating: 5,
      text: "I am extremely grateful to Bright Light Immigration for helping me secure my Open Work Permit approval. From start to finish, the entire process was smooth, professional, and stress-free. A special thanks to my case manager, Avneet, who was absolutely outstanding — highly professional, proactive, and always kept me updated.",
    },
    {
      name: "Jokris Cruz",
      tag: "Work permit application",
      rating: 5,
      text: "Thank you for your excellent service and for your smooth and kind assistance throughout the process of my work permit application.",
    },
    {
      name: "Husanpreet Singh",
      tag: "5-star service · 10 reviews",
      rating: 5,
      text: "Definitely deserve a 5 star review. Extremely professional, helpful and complete transparent immigration services.",
    },
  ],
  "vulnerable-worker-permit": [
    {
      name: "Jaspreet Singh",
      tag: "VOWP approved · Local Guide",
      rating: 5,
      text: "Had a wonderful experience with Brightlight Immigration. I received my VOWP, which I was initially skeptical about. Loveneet and the team handled my case professionally and with care from start to finish.",
    },
    {
      name: "Harman Sarao",
      tag: "Vulnerable Worker OWP",
      rating: 5,
      text: "Thank you Loveneet for getting my Vulnerable Worker Open Work Permit approved. Best immigration services.",
    },
    {
      name: "Sunny",
      tag: "After several other consultants",
      rating: 5,
      text: "I want to say a heartfelt thank you to the Brightlight Immigration team. I had tried so many consultants — Brightlight was the one that finally heard me and got the result.",
    },
  ],
};

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
