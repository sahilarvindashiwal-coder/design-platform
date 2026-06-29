import { ASSETS } from "./config/assets";

// Phone number for orders
export const WHATSAPP_NUMBER = "61409077106";
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
    price: "$450",
    category: "bags",
    span: "md:col-span-4",
    img: ASSETS.ribbon.bagSling,
    tag: "Best Seller",
  },
  {
    id: "rolex-sub",
    name: "Rolex",
    model: "Submariner Date",
    price: "$950",
    category: "watches",
    span: "md:col-span-4",
    img: ASSETS.ribbon.watchBlue,
    tag: "Iconic",
  },
  {
    id: "lv-blue",
    name: "Louis Vuitton",
    model: "Capucines BB",
    price: "$450",
    category: "bags",
    span: "md:col-span-4",
    img: ASSETS.ribbon.bagBlue,
    tag: "New Arrival",
  },
  {
    id: "aj1",
    name: "Nike",
    model: "Air Jordan 1 Retro",
    price: "$450",
    category: "shoes",
    span: "md:col-span-6",
    img: ASSETS.ribbon.shoeBlack,
    tag: "Street Classic",
  },
  {
    id: "ap-royal",
    name: "Audemars Piguet",
    model: "Royal Oak 41mm",
    price: "$950",
    category: "watches",
    span: "md:col-span-6",
    img: ASSETS.ribbon.watchGold,
    tag: "Heritage",
  },
];

export const SECONDARY_COLLECTION = [
  {
    id: "lv-alma-gold",
    name: "Louis Vuitton",
    model: "Alma BB Gold",
    price: "$450",
    category: "bags",
    img: ASSETS.ribbon.bagGold,
  },
  {
    id: "rolex-datejust-silver",
    name: "Rolex",
    model: "Datejust 41 Silver",
    price: "$950",
    category: "watches",
    img: ASSETS.ribbon.watchSilver,
  },
  {
    id: "dior-b27-white",
    name: "Dior",
    model: "B27 Uptown White",
    price: "$450",
    category: "shoes",
    img: ASSETS.ribbon.shoeWhite,
  },
  {
    id: "lv-waimea-sunglasses",
    name: "Louis Vuitton",
    model: "LV Waimea Sunglasses",
    price: "$350",
    category: "sunglasses",
    img: ASSETS.ribbon.glasses,
  },
];

export const FEATURED_PICKS_COLLECTION = [
  {
    id: "rolex-gmt-master-ii-batman",
    name: "Rolex",
    model: "GMT-Master II Batman",
    price: "$950",
    category: "watches",
    img: "/images/watches/ROLEX GMT MASTER II BATMAN SILVER BLACK DIAL.png.webp",
  },
  {
    id: "van-cleef-alhambra-gold",
    name: "Van Cleef",
    model: "Vintage Alhambra Gold",
    price: "$350",
    category: "jewelry",
    img: "/images/Jewellery/VAN CLEEF VINTAGE ALHAMBRA BRACELET - GOLD.png.webp",
  },
  {
    id: "lv-avenue-mini-slingbag",
    name: "Louis Vuitton",
    model: "Avenue Mini Slingbag",
    price: "$450",
    category: "bags",
    img: "/images/Bags/LOUIS VUITTON AVENUE MINI SLINGBAG PM MENS - BLACK.png.webp",
  },
  {
    id: "dior-b30-sneaker-black",
    name: "Dior",
    model: "B30 Countdown Sneaker",
    price: "$450",
    category: "shoes",
    img: "/images/Shoes/DIOR B30 COUNTDOWN SNEAKER - BLACK.png.webp",
  },
  {
    id: "lv-evidence-sunglasses",
    name: "Louis Vuitton",
    model: "LV Evidence Sunglasses",
    price: "$350",
    category: "sunglasses",
    img: "/images/sunglasses/LOUIS VUITTON LV EVIDENCE SUNGLASSES - PREMIUM.png.webp",
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
    a: "We work with trusted manufacturing partners to deliver premium quality luxury-inspired bags, jewellery, watches, and accessories. Every item is matched to the authentic reference using real materials, canvases, and movements. Side-by-side, only a trained expert can tell.",
  },
  {
    q: "Do you send quality-check photos before shipping?",
    a: "Yes. Every order is photographed on our QC bench before dispatch — stitching, hardware, movement timing, or sole alignment depending on the category. We send these pre-ship photos for your approval. If all checks out, we will send out your order within 24 hours.",
  },
  {
    q: "How does shipping work?",
    a: "We offer free shipping Australia-wide via express post. If you are in Melbourne, you are also welcome to visit our showroom in Tullamarine VIC. For all other orders, we ship tracked and insured directly to your door.",
  },
  {
    q: "What if something isn't right?",
    a: "Every piece carries a 1-year warranty against manufacturing defects under normal use. If anything falls short, send us a short video and we will arrange a free repair or replacement — backed by our team at Tullamarine VIC.",
  },
  {
    q: "How do I order?",
    a: "Tap any Contact Us on WhatsApp button on this site. Tell us what you want — bag, watch, shoe, or eyewear — share your size or reference, and we will send bank details to confirm your order.",
  },
  {
    q: "Are payments secure?",
    a: "We accept bank transfer. Once payment is confirmed, your order gets processed and enters our QC bench within hours of payment. Your transaction is safe and handled directly with our team.",
  },
];
