import { ASSETS } from "./config/assets";

// Phone number for orders — placeholder
export const WHATSAPP_NUMBER = "15551234567";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Designer Vault, I'd like to enquire about your luxury collection."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const BRAND = "Designer Vault";

export const COLLECTION = [
  {
    id: "lv-sling",
    name: "Louis Vuitton",
    model: "Monogram Sling",
    price: "from $289",
    span: "md:col-span-4",
    img: ASSETS.ribbon.bagSling,
    tag: "Best Seller",
  },
  {
    id: "rolex-sub",
    name: "Rolex",
    model: "Submariner Date",
    price: "from $389",
    span: "md:col-span-4",
    img: ASSETS.ribbon.watchBlue,
    tag: "Iconic",
  },
  {
    id: "lv-blue",
    name: "Louis Vuitton",
    model: "Capucines BB",
    price: "from $349",
    span: "md:col-span-4",
    img: ASSETS.ribbon.bagBlue,
    tag: "New Arrival",
  },
  {
    id: "aj1",
    name: "Nike",
    model: "Air Jordan 1 Retro",
    price: "from $189",
    span: "md:col-span-6",
    img: ASSETS.ribbon.shoeBlack,
    tag: "Street Classic",
  },
  {
    id: "ap-royal",
    name: "Audemars Piguet",
    model: "Royal Oak 41mm",
    price: "from $429",
    span: "md:col-span-6",
    img: ASSETS.ribbon.watchGold,
    tag: "Heritage",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "London, UK",
    quote:
      "Ordered the LV sling and a Submariner in one go. The leather grain on the bag is spot-on, and the watch weight feels exactly right. My mates thought I spent a fortune.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "LV Sling + Submariner",
  },
  {
    name: "Daniel K.",
    location: "Dubai, UAE",
    quote:
      "Third order from Designer Vault — bags, sneakers, and eyewear. QC photos before every shipment, and the quality keeps getting better. This is my go-to for the full look.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "Royal Oak + AJ1 Low",
  },
  {
    name: "Hiroshi N.",
    location: "Tokyo, JP",
    quote:
      "Discreet packaging, fast delivery, and a Capucines bag that looks and feels like the boutique piece. Their team answered every question before I paid.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "LV Capucines BB",
  },
  {
    name: "Sofia R.",
    location: "Milan, IT",
    quote:
      "Got the gold watch and white sneakers for my husband's birthday. He wears both daily — the finishing is incredible and nobody can tell the difference.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    purchase: "Datejust + AF1 Low",
  },
];

export const FAQS = [
  {
    q: "How close are your products to the originals?",
    a: "Our Super-Clone tier reproduces each piece at a 1:1 level — same materials, dimensions, hardware, and finishing as the authentic reference. Bags use matched leathers and canvases; watches feature sapphire crystal and Swiss-grade movements; shoes replicate exact panel shapes and sole details. Side-by-side, only a trained expert can tell.",
  },
  {
    q: "Do you send quality-check photos before shipping?",
    a: "Yes. Every order is photographed on our QC bench before dispatch — stitching, hardware, movement timing, sole alignment, or lens clarity depending on the category. You approve before we ship. No surprises.",
  },
  {
    q: "How does shipping work?",
    a: "Discreet, fully tracked, insured worldwide delivery to 38 countries. Unbranded outer packaging, customs-aware declarations, and optional duty pre-pay on request. Most orders arrive within 7–10 working days.",
  },
  {
    q: "What if something isn't right?",
    a: "Every piece carries a 1-year warranty. If anything falls short, send us a short video and we'll arrange a free repair or replacement — backed by a real human team, not a chatbot.",
  },
  {
    q: "How do I order?",
    a: "Tap any Order Now button on this site. Tell us what you want — bag, watch, shoe, or eyewear — share your size or reference, and we'll send a secure payment link. No accounts, no friction.",
  },
  {
    q: "Are payments secure?",
    a: "We accept bank transfer, USDT, and card via a secure Stripe link. Your payment details never touch our systems. Every transaction is protected.",
  },
];
