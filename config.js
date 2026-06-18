/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "The Poolsmith",
    phone:     "+27 74 338 7861",
    whatsapp:  "+27 74 338 7861",
    address:   "Johannesburg, South Africa",
    hours:     "Mon–Fri 7am–5pm · Sat 7am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg",
      "Randburg",
      "Sandton",
      "Midrand",
      "Roodepoort",
      "Soweto",
      "Centurion",
      "Pretoria"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "The Poolsmith — Pool services in johannesburg",
    description: "The Poolsmith provides professional pool services in Johannesburg. 6 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "tide",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Pool services · Johannesburg & surrounds",
    heroTitle:  "Crystal-clear water — <em>all year round.</em>",
    heroLead:   "The Poolsmith keeps swimming pools clean, chemically balanced and fully functional across Johannesburg. Maintenance, repairs, pump and filter work — we handle it all.",

    googleRating: "5",
    reviewsCount: "6",
    featuredQuote: "Pool has never looked better. Consistent weekly service, always on time and the water is always balanced. Very happy.",
    featuredQuoteAuthor: "— Karen H., Google review",

    trustSignals: ["Weekly cleaning", "Chemical balancing", "Pump & filter repairs", "Pool plastering"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Pool cleaning, maintenance and repairs.",
    servicesLead:  "From weekly cleaning to a full pump overhaul — we keep your pool swim-ready all season.",
    services: [
      {
        icon:  "droplet",
        title: "Pool cleaning",
        desc:  "Regular pool brushing, vacuuming, skimmer and basket emptying. Leaves and algae removed, surface scrubbed clean."
      },
      {
        icon:  "gauge",
        title: "Chemical balancing",
        desc:  "Water tested and chemicals added correctly — pH, chlorine, alkalinity and stabiliser balanced so the water is safe to swim in."
      },
      {
        icon:  "wrench",
        title: "Pump & filter repairs",
        desc:  "Pump not running, filter not cleaning? We diagnose and repair or replace the equipment with quality parts."
      },
      {
        icon:  "bolt",
        title: "Pool automation",
        desc:  "Automated dosing systems, timers and salt chlorinators installed and maintained for lower-maintenance swimming."
      },
      {
        icon:  "hardhat",
        title: "Pool plastering & tiling",
        desc:  "Worn, stained or cracked pool plaster repaired or completely replastered. Tile repair and replacement."
      },
      {
        icon:  "calendar",
        title: "Maintenance contracts",
        desc:  "Weekly or bi-weekly service contracts — we handle everything so your pool is always ready to use."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Pool cleaning",
        title:   "Brushed and vacuumed",
        caption: "Walls and floor brushed, pool vacuumed and debris removed so the pool is clean to the bottom."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Chemical balancing",
        title:   "Water tested properly",
        caption: "pH, chlorine, alkalinity and stabiliser tested and adjusted to keep the water safe, clear and non-corrosive."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Pump & filter",
        title:   "Repaired and running",
        caption: "Pump and filter serviced, repaired or replaced — clean circulation is the foundation of a healthy pool."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Pool plastering",
        title:   "Resurfaced and smooth",
        caption: "Old, chalky or stained plaster removed and replaced so the pool surface is smooth, sealed and attractive."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Maintenance visit",
        title:   "Done, every week",
        caption: "Regular service visits keep chemicals balanced, equipment running and the pool swim-ready every time."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "The Poolsmith team at work in Johannesburg",
      text:  "Pool installation, maintenance and repairs — we keep your pool perfect."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Serving pools across Johannesburg and surrounds.",
    areasLead:  "We cover Johannesburg CBD, Parktown, Melville and the surrounding areas. Maintenance contracts available throughout the service area.",
    areasNote:  "Not sure if we cover your area? Send us a message and we will confirm.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why pool owners keep us on contract.",
    why: [
      {
        title: "Consistent, reliable service",
        desc:  "Same team, same time each week. No wondering whether we will show up — we do."
      },
      {
        title: "Chemically balanced, always",
        desc:  "We test and balance the water on every visit so it is always safe to swim in and the equipment does not corrode."
      },
      {
        title: "We fix problems before they grow",
        desc:  "We spot equipment wear, algae early and surface damage before they become expensive problems."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 6 verified Google reviews.",
    reviews: [
      {
        body:   "Pool has never looked better. Consistent weekly service, always on time and the water is always balanced. Very happy.",
        name:   "Karen H.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Came out to repair our pump — diagnosed it quickly, sourced the parts and had it running the same day. Great service.",
        name:   "David L.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Had our pool replastered — excellent quality work and finished on time. Now it looks brand new.",
        name:   "Yolanda S.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Pool service questions.",
    faqLead:  "What most pool owners want to know.",
    faq: [
      {
        q: "How often should a pool be serviced?",
        a: "Weekly is ideal for most home pools. In summer or heavy use, twice a week may be needed. We advise based on your pool size and usage."
      },
      {
        q: "Why does my pool keep going green?",
        a: "Usually low chlorine combined with high phosphates or algae. We will test the water, shock-treat and balance the chemicals to get it clear."
      },
      {
        q: "My pump is making a noise — do I need a new one?",
        a: "Not always. Air in the lines, worn seals or debris in the impeller can all cause noise. We diagnose first and repair where possible."
      },
      {
        q: "How long does replastering take?",
        a: "Typically 3–5 days including curing and refilling. We will advise exactly based on your pool size and plaster condition."
      },
      {
        q: "Do you supply chemicals on the contract?",
        a: "Yes — all chemicals are included in the service contract so you do not need to stock anything yourself."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your pool.",
    contactLead:  "Let us know the size, what is going on, and what service you are after. We will reply quickly.",
    contactPlaceholder: "e.g. 8x4m pool, needs weekly cleaning and chemicals, pump making noise"
  }
};
