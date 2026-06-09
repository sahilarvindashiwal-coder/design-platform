// Phone number for WhatsApp orders - placeholder
export const WHATSAPP_NUMBER = "15551234567";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Atelier Onyx, I'd like to enquire about your timepieces."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const BRAND = "Atelier Onyx";

export const COLLECTION = [
  {
    id: "rolex",
    name: "Rolex",
    model: "Submariner Date",
    price: "from $389",
    span: "md:col-span-7 md:row-span-2",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Iconic Diver",
  },
  {
    id: "ap",
    name: "Audemars Piguet",
    model: "Royal Oak 41mm",
    price: "from $429",
    span: "md:col-span-5 md:row-span-1",
    img: "https://images.unsplash.com/photo-1611243705491-71487c2ed137?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Octagonal Heritage",
  },
  {
    id: "patek",
    name: "Patek Philippe",
    model: "Nautilus 5711",
    price: "from $479",
    span: "md:col-span-5 md:row-span-1",
    img: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Holy Grail",
  },
  {
    id: "omega",
    name: "Omega",
    model: "Speedmaster Moonwatch",
    price: "from $329",
    span: "md:col-span-6 md:row-span-1",
    img: "https://images.unsplash.com/photo-1662384197911-e82189f4dc60?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Lunar Legend",
  },
  {
    id: "rm",
    name: "Richard Mille",
    model: "RM 11-03",
    price: "from $549",
    span: "md:col-span-6 md:row-span-1",
    img: "https://images.unsplash.com/photo-1495856458515-0637185db551?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Avant-Garde",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "London, UK",
    quote:
      "I bought the Nautilus and honestly, my watch-collector mates couldn't tell the difference. The weight, the bracelet flex, the dial sunburst — it's all there.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "Patek Nautilus 5711",
  },
  {
    name: "Daniel K.",
    location: "Dubai, UAE",
    quote:
      "Third piece from Atelier Onyx. The Royal Oak's tapisserie dial is mesmerising and the movement keeps perfect time. Worth every dollar.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "AP Royal Oak 15400",
  },
  {
    name: "Hiroshi N.",
    location: "Tokyo, JP",
    quote:
      "Discreet shipping, no customs trouble, and a Submariner that wears beautifully. Their WhatsApp team answered every question I had.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "Rolex Submariner 126610",
  },
  {
    name: "Sofia R.",
    location: "Milan, IT",
    quote:
      "Got the Daytona for my husband's anniversary. He hasn't taken it off in six months. The chronograph pushers feel incredibly tactile.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "Rolex Daytona",
  },
];

export const FAQS = [
  {
    q: "How close are these to the originals?",
    a: "Our Super-Clone tier reproduces the original at a 1:1 level — same case dimensions, same dial layout, sapphire crystal, ceramic bezel inserts, and a Swiss-grade automatic movement. Side-by-side, only a trained watchmaker can tell.",
  },
  {
    q: "What movement do you use?",
    a: "Depending on the reference, we use ETA/Sellita base calibres or Asian Super-Clone movements that mirror the original's architecture (e.g., 3235 clone for Submariner Date). All are tested for 48 hours before dispatch.",
  },
  {
    q: "How does shipping work?",
    a: "Discreet, fully tracked, insured worldwide shipping. We declare appropriately and pre-pay duties on request. Most parcels arrive within 7–10 working days.",
  },
  {
    q: "What if I receive a defective piece?",
    a: "Every watch carries a 1-year mechanical warranty. If something is off, send us a short video on WhatsApp and we'll arrange a free repair or replacement.",
  },
  {
    q: "How do I order?",
    a: "Tap any WhatsApp button on this page. Tell us the reference you want, share your address, and we'll send a payment link. That's it — no accounts, no friction.",
  },
  {
    q: "Are payments secure?",
    a: "We accept bank transfer, USDT, and card via a secure Stripe link. No card details ever touch our systems.",
  },
];
