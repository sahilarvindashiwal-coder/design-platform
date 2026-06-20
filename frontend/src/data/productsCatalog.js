/**
 * Designer Vault — Products Catalog
 * ─────────────────────────────────
 * This is the ONLY file you need to edit to add or update catalog products.
 *
 * TO ADD A NEW PRODUCT:
 * 1. Copy any existing product object in PRODUCTS below
 * 2. Give it a unique `id` (used in URL: /products/your-id)
 * 3. Set `category` to: "bags" | "watches" | "shoes" | "sunglasses"
 * 4. Update name, brand, price, priceLabel, image, description, specs
 * 5. Add image to public/images/ribbon/ and reference via ASSETS.ribbon.*
 *
 * TO CHANGE AN EXISTING PRODUCT:
 * Find its object by `id` and edit any field — changes appear on catalog + detail page.
 */
import { ASSETS } from "../config/assets";
import { WHATSAPP_NUMBER } from "../data";

export const CATEGORIES = [
  { id: "bags", label: "Bags" },
  { id: "watches", label: "Watches" },
  { id: "shoes", label: "Shoes" },
  { id: "sunglasses", label: "Sunglasses" },
];

const { ribbon } = ASSETS;

export const PRODUCTS = [
  // ── Bags (8) ──────────────────────────────────────────────────────────────
  {
    id: "bag-01",
    category: "bags",
    name: "Monogram Sling",
    brand: "Louis Vuitton",
    price: 289,
    priceLabel: "from $289",
    image: ribbon.bagSling,
    tag: "Best Seller",
    description:
      "Compact crossbody sling in coated canvas with adjustable strap and gold-tone hardware. Super-clone finish with precise monogram alignment.",
    specs: [
      { label: "Material", value: "Coated canvas & leather trim" },
      { label: "Dimensions", value: "25 × 15 × 8 cm" },
      { label: "Strap", value: "Adjustable, 90–130 cm" },
      { label: "Hardware", value: "Gold-tone" },
    ],
  },
  {
    id: "bag-02",
    category: "bags",
    name: "Capucines BB",
    brand: "Louis Vuitton",
    price: 349,
    priceLabel: "from $349",
    image: ribbon.bagBlue,
    tag: "New Arrival",
    description:
      "Structured top-handle bag in deep blue Taurillon leather. Iconic LV flap closure with refined interior compartments.",
    specs: [
      { label: "Material", value: "Taurillon leather" },
      { label: "Dimensions", value: "27 × 18 × 9 cm" },
      { label: "Handle Drop", value: "11 cm" },
      { label: "Interior", value: "2 compartments, zip pocket" },
    ],
  },
  {
    id: "bag-03",
    category: "bags",
    name: "Twist PM",
    brand: "Louis Vuitton",
    price: 319,
    priceLabel: "from $319",
    image: ribbon.bagGold,
    description:
      "Evening clutch in metallic gold Épi leather with signature twist-lock closure and chain strap.",
    specs: [
      { label: "Material", value: "Épi leather" },
      { label: "Dimensions", value: "18 × 12 × 7 cm" },
      { label: "Chain", value: "Removable, 110 cm" },
      { label: "Closure", value: "Twist-lock LV" },
    ],
  },
  {
    id: "bag-04",
    category: "bags",
    name: "Neverfull MM",
    brand: "Louis Vuitton",
    price: 279,
    priceLabel: "from $279",
    image: ribbon.bagSling,
    description:
      "Classic open tote with side laces, spacious interior, and removable pochette. Daily carry with timeless monogram appeal.",
    specs: [
      { label: "Material", value: "Coated canvas" },
      { label: "Dimensions", value: "32 × 29 × 17 cm" },
      { label: "Handles", value: "Double, 21 cm drop" },
      { label: "Includes", value: "Removable pochette" },
    ],
  },
  {
    id: "bag-05",
    category: "bags",
    name: "Alma BB",
    brand: "Louis Vuitton",
    price: 299,
    priceLabel: "from $299",
    image: ribbon.bagBlue,
    description:
      "Domed silhouette in blue Vernis leather with padlock detail. Structured shape that holds its form beautifully.",
    specs: [
      { label: "Material", value: "Vernis leather" },
      { label: "Dimensions", value: "24 × 18 × 12 cm" },
      { label: "Strap", value: "Detachable, adjustable" },
      { label: "Base", value: "Protective feet" },
    ],
  },
  {
    id: "bag-06",
    category: "bags",
    name: "Speedy Bandoulière 25",
    brand: "Louis Vuitton",
    price: 269,
    priceLabel: "from $269",
    image: ribbon.bagGold,
    tag: "Popular",
    description:
      "Petite barrel bag in gold-tone leather with crossbody strap. Lightweight and versatile for day-to-night wear.",
    specs: [
      { label: "Material", value: "Smooth leather" },
      { label: "Dimensions", value: "25 × 19 × 15 cm" },
      { label: "Strap", value: "Adjustable bandoulière" },
      { label: "Lining", value: "Microfiber, burgundy" },
    ],
  },
  {
    id: "bag-07",
    category: "bags",
    name: "Pochette Métis",
    brand: "Louis Vuitton",
    price: 329,
    priceLabel: "from $329",
    image: ribbon.bagSling,
    description:
      "Compact satchel with iconic monogram canvas, front flap pocket, and adjustable shoulder strap.",
    specs: [
      { label: "Material", value: "Monogram canvas" },
      { label: "Dimensions", value: "25 × 18 × 7 cm" },
      { label: "Strap", value: "Adjustable, 50 cm drop" },
      { label: "Pockets", value: "Front flap + interior zip" },
    ],
  },
  {
    id: "bag-08",
    category: "bags",
    name: "OnTheGo PM",
    brand: "Louis Vuitton",
    price: 359,
    priceLabel: "from $359",
    image: ribbon.bagBlue,
    description:
      "Roomy tote with dual handle options — top handles and long shoulder straps. Ideal for work or travel.",
    specs: [
      { label: "Material", value: "Monogram Giant canvas" },
      { label: "Dimensions", value: "34 × 27 × 14 cm" },
      { label: "Handles", value: "Double top + shoulder" },
      { label: "Interior", value: "Flat pocket, key holder" },
    ],
  },

  // ── Watches (8) ───────────────────────────────────────────────────────────
  {
    id: "watch-01",
    category: "watches",
    name: "Submariner Date",
    brand: "Rolex",
    price: 389,
    priceLabel: "from $389",
    image: ribbon.watchBlue,
    tag: "Iconic Diver",
    description:
      "Super-clone diver with ceramic bezel, sapphire crystal, and 3235 clone movement. 41mm case with precise dial alignment.",
    specs: [
      { label: "Case Size", value: "41 mm" },
      { label: "Movement", value: "3235 Super-Clone automatic" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Water Resistance", value: "300 m rated" },
    ],
  },
  {
    id: "watch-02",
    category: "watches",
    name: "Royal Oak 41mm",
    brand: "Audemars Piguet",
    price: 429,
    priceLabel: "from $429",
    image: ribbon.watchGold,
    tag: "Heritage",
    description:
      "Octagonal bezel with tapisserie dial in gold tone. Integrated bracelet with seamless taper and super-clone calibre.",
    specs: [
      { label: "Case Size", value: "41 mm" },
      { label: "Movement", value: "3120 clone automatic" },
      { label: "Dial", value: "Grande Tapisserie" },
      { label: "Bracelet", value: "Integrated stainless steel" },
    ],
  },
  {
    id: "watch-03",
    category: "watches",
    name: "Nautilus 5711",
    brand: "Patek Philippe",
    price: 479,
    priceLabel: "from $479",
    image: ribbon.watchSilver,
    tag: "Holy Grail",
    description:
      "Horizontal embossed dial with porthole case design. Ultra-thin profile with exhibition caseback and refined finishing.",
    specs: [
      { label: "Case Size", value: "40 mm" },
      { label: "Movement", value: "324 clone automatic" },
      { label: "Thickness", value: "8.3 mm" },
      { label: "Bracelet", value: "Integrated, fold clasp" },
    ],
  },
  {
    id: "watch-04",
    category: "watches",
    name: "Speedmaster Moonwatch",
    brand: "Omega",
    price: 329,
    priceLabel: "from $329",
    image: ribbon.watchBlue,
    description:
      "Chronograph with black dial, tachymeter bezel, and manual-wind clone movement. Lunar legend on your wrist.",
    specs: [
      { label: "Case Size", value: "42 mm" },
      { label: "Movement", value: "1861 clone manual-wind" },
      { label: "Functions", value: "Chronograph, tachymeter" },
      { label: "Crystal", value: "Hesalite-style domed" },
    ],
  },
  {
    id: "watch-05",
    category: "watches",
    name: "RM 11-03",
    brand: "Richard Mille",
    price: 549,
    priceLabel: "from $549",
    image: ribbon.watchGold,
    tag: "Avant-Garde",
    description:
      "Tonneau case with skeleton dial and flyback chronograph. Lightweight construction with bold architectural design.",
    specs: [
      { label: "Case Size", value: "44 × 49 mm" },
      { label: "Movement", value: "RMAC3 clone automatic" },
      { label: "Material", value: "Titanium case" },
      { label: "Functions", value: "Flyback chronograph, GMT" },
    ],
  },
  {
    id: "watch-06",
    category: "watches",
    name: "Daytona",
    brand: "Rolex",
    price: 419,
    priceLabel: "from $419",
    image: ribbon.watchSilver,
    description:
      "Tri-compax chronograph with tachymeter scale and super-clone column-wheel movement. Racing pedigree, everyday wear.",
    specs: [
      { label: "Case Size", value: "40 mm" },
      { label: "Movement", value: "4130 clone automatic" },
      { label: "Bezel", value: "Ceramic tachymeter" },
      { label: "Power Reserve", value: "72 hours" },
    ],
  },
  {
    id: "watch-07",
    category: "watches",
    name: "Seamaster 300M",
    brand: "Omega",
    price: 349,
    priceLabel: "from $349",
    image: ribbon.watchBlue,
    description:
      "Wave-pattern dial with helium escape valve and ceramic bezel insert. Bond-approved diver with super-clone precision.",
    specs: [
      { label: "Case Size", value: "42 mm" },
      { label: "Movement", value: "8800 clone Co-Axial" },
      { label: "Bezel", value: "Ceramic, unidirectional" },
      { label: "Water Resistance", value: "300 m rated" },
    ],
  },
  {
    id: "watch-08",
    category: "watches",
    name: "Datejust 41",
    brand: "Rolex",
    price: 369,
    priceLabel: "from $369",
    image: ribbon.watchGold,
    description:
      "Fluted bezel with jubilee bracelet and date window at 3 o'clock. The quintessential dress watch, super-clone finished.",
    specs: [
      { label: "Case Size", value: "41 mm" },
      { label: "Movement", value: "3235 clone automatic" },
      { label: "Bracelet", value: "Jubilee, Oysterlock clasp" },
      { label: "Bezel", value: "Fluted white gold tone" },
    ],
  },

  // ── Shoes (7) ─────────────────────────────────────────────────────────────
  {
    id: "shoe-01",
    category: "shoes",
    name: "Air Jordan 1 Retro",
    brand: "Nike",
    price: 189,
    priceLabel: "from $189",
    image: ribbon.shoeBlack,
    tag: "Classic",
    description:
      "High-top silhouette in black and white leather with iconic wings logo. Premium super-clone materials and accurate stitching.",
    specs: [
      { label: "Upper", value: "Full-grain leather" },
      { label: "Sole", value: "Rubber cupsole" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "Black / White" },
    ],
  },
  {
    id: "shoe-02",
    category: "shoes",
    name: "Air Force 1 Low",
    brand: "Nike",
    price: 169,
    priceLabel: "from $169",
    image: ribbon.shoeWhite,
    description:
      "All-white low-top staple with perforated toe box and padded collar. Clean, versatile, and built to last.",
    specs: [
      { label: "Upper", value: "Leather & synthetic" },
      { label: "Sole", value: "Air-sole unit" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "Triple White" },
    ],
  },
  {
    id: "shoe-03",
    category: "shoes",
    name: "Yeezy Boost 350",
    brand: "Adidas",
    price: 199,
    priceLabel: "from $199",
    image: ribbon.shoeBlack,
    tag: "Trending",
    description:
      "Primeknit upper with Boost midsole cushioning. Sock-like fit with distinctive side stripe pattern.",
    specs: [
      { label: "Upper", value: "Primeknit" },
      { label: "Midsole", value: "Boost foam" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "Core Black" },
    ],
  },
  {
    id: "shoe-04",
    category: "shoes",
    name: "Dunk Low",
    brand: "Nike",
    price: 179,
    priceLabel: "from $179",
    image: ribbon.shoeWhite,
    description:
      "Skate-inspired low-top with color-blocked panels and padded tongue. Retro court style for everyday rotation.",
    specs: [
      { label: "Upper", value: "Leather overlays" },
      { label: "Sole", value: "Rubber pivot circle" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "White / Grey" },
    ],
  },
  {
    id: "shoe-05",
    category: "shoes",
    name: "New Balance 550",
    brand: "New Balance",
    price: 159,
    priceLabel: "from $159",
    image: ribbon.shoeBlack,
    description:
      "Retro basketball low with perforated vamp and N logo. Vintage aesthetic with modern comfort.",
    specs: [
      { label: "Upper", value: "Leather & mesh" },
      { label: "Sole", value: "Rubber outsole" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "Black / Grey" },
    ],
  },
  {
    id: "shoe-06",
    category: "shoes",
    name: "Samba OG",
    brand: "Adidas",
    price: 149,
    priceLabel: "from $149",
    image: ribbon.shoeWhite,
    description:
      "T-bar football trainer with gum sole and suede toe overlay. Timeless terrace classic in premium super-clone build.",
    specs: [
      { label: "Upper", value: "Leather & suede" },
      { label: "Sole", value: "Gum rubber" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "White / Green" },
    ],
  },
  {
    id: "shoe-07",
    category: "shoes",
    name: "Travis Scott x AJ1 Low",
    brand: "Nike",
    price: 229,
    priceLabel: "from $229",
    image: ribbon.shoeBlack,
    tag: "Limited",
    description:
      "Reverse swoosh low-top with olive and black palette. Collab details including embossed heel tab and co-branded insole.",
    specs: [
      { label: "Upper", value: "Premium leather" },
      { label: "Sole", value: "Rubber cupsole" },
      { label: "Sizes", value: "EU 39–46 available" },
      { label: "Colorway", value: "Olive / Black" },
    ],
  },

  // ── Sunglasses (7) ────────────────────────────────────────────────────────
  {
    id: "sun-01",
    category: "sunglasses",
    name: "Aviator Classic",
    brand: "Ray-Ban",
    price: 129,
    priceLabel: "from $129",
    image: ribbon.glasses,
    tag: "Best Seller",
    description:
      "Teardrop aviator with gold frame and green G-15 lenses. UV400 protection with super-clone hinge and temple detailing.",
    specs: [
      { label: "Frame", value: "Metal, gold tone" },
      { label: "Lens", value: "G-15 green, UV400" },
      { label: "Size", value: "58 mm lens width" },
      { label: "Includes", value: "Case & cloth" },
    ],
  },
  {
    id: "sun-02",
    category: "sunglasses",
    name: "Wayfarer",
    brand: "Ray-Ban",
    price: 119,
    priceLabel: "from $119",
    image: ribbon.glasses,
    description:
      "Iconic trapezoid acetate frame with dark lenses. Timeless shape that suits every face.",
    specs: [
      { label: "Frame", value: "Acetate, black" },
      { label: "Lens", value: "Dark grey, UV400" },
      { label: "Size", value: "50 mm lens width" },
      { label: "Includes", value: "Case & cloth" },
    ],
  },
  {
    id: "sun-03",
    category: "sunglasses",
    name: "Holbrook",
    brand: "Oakley",
    price: 139,
    priceLabel: "from $139",
    image: ribbon.glasses,
    description:
      "Square profile with O Matter frame and Plutonite lenses. Durable, lightweight, and built for active wear.",
    specs: [
      { label: "Frame", value: "O Matter, matte black" },
      { label: "Lens", value: "Plutonite, UV400" },
      { label: "Size", value: "55 mm lens width" },
      { label: "Includes", value: "Microbag" },
    ],
  },
  {
    id: "sun-04",
    category: "sunglasses",
    name: "GG0061S",
    brand: "Gucci",
    price: 189,
    priceLabel: "from $189",
    image: ribbon.glasses,
    tag: "Luxury",
    description:
      "Oversized square frame with gold GG logo temples and gradient lenses. Statement eyewear with Italian flair.",
    specs: [
      { label: "Frame", value: "Acetate, tortoise" },
      { label: "Lens", value: "Gradient brown, UV400" },
      { label: "Size", value: "54 mm lens width" },
      { label: "Detail", value: "Gold GG temples" },
    ],
  },
  {
    id: "sun-05",
    category: "sunglasses",
    name: "Cat Eye",
    brand: "Saint Laurent",
    price: 199,
    priceLabel: "from $199",
    image: ribbon.glasses,
    description:
      "Angular cat-eye silhouette with slim metal frame and dark lenses. Parisian chic for sun-soaked days.",
    specs: [
      { label: "Frame", value: "Metal, gold tone" },
      { label: "Lens", value: "Dark grey, UV400" },
      { label: "Size", value: "52 mm lens width" },
      { label: "Style", value: "Cat-eye" },
    ],
  },
  {
    id: "sun-06",
    category: "sunglasses",
    name: "Pilot Gradient",
    brand: "Tom Ford",
    price: 219,
    priceLabel: "from $219",
    image: ribbon.glasses,
    description:
      "Double-bridge aviator with gradient lenses and signature T hinge. Understated luxury with impeccable finish.",
    specs: [
      { label: "Frame", value: "Titanium, silver" },
      { label: "Lens", value: "Gradient blue, UV400" },
      { label: "Size", value: "59 mm lens width" },
      { label: "Detail", value: "T-logo hinges" },
    ],
  },
  {
    id: "sun-07",
    category: "sunglasses",
    name: "Square Bold",
    brand: "Off-White",
    price: 179,
    priceLabel: "from $179",
    image: ribbon.glasses,
    tag: "Streetwear",
    description:
      "Chunky square acetate frame with branded temple text. Street-luxury crossover with full UV protection.",
    specs: [
      { label: "Frame", value: "Acetate, black" },
      { label: "Lens", value: "Grey, UV400" },
      { label: "Size", value: "53 mm lens width" },
      { label: "Detail", value: "Branded temples" },
    ],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(categoryId) {
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getCategoryLabel(categoryId) {
  return CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}

export function productWhatsAppUrl(product) {
  const text = encodeURIComponent(
    `Hi Designer Vault, I'd like to enquire about the ${product.brand} ${product.name}.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
