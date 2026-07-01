const fs = require("fs");
const path = require("path");

const base = path.join(__dirname, "../public/images");
const out = path.join(__dirname, "../src/data/productsCatalog.js");

const CATEGORY_MAP = {
  Bags: { id: "bags", price: 450 },
  Shoes: { id: "shoes", price: 450 },
  Jewellery: { id: "jewelry", price: 350 },
  sunglasses: { id: "sunglasses", price: 350 },
  watches: { id: "watches", price: 950 },
};

const BRANDS = [
  "LOUIS VUITTON",
  "AUDEMARS PIGUET",
  "PATEK PHILLIPPE",
  "VAN CLEEF",
  "GUCCI",
  "DIOR",
  "HERMES",
  "CARTIER",
  "ROLEX",
].sort((a, b) => b.length - a.length);

function stripExt(filename) {
  return filename
    .replace(/\.(png|jpg)\.webp$/i, "")
    .replace(/\.webp$/i, "")
    .replace(/\.(png|jpg)$/i, "");
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function titleCaseBrand(brand) {
  return brand
    .split(" ")
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
}

function extractBrand(fullName) {
  const upper = fullName.toUpperCase();
  for (const b of BRANDS) {
    if (upper.startsWith(`${b} `) || upper === b) {
      return {
        brand: titleCaseBrand(b),
        name: fullName.slice(b.length).trim(),
      };
    }
  }
  const first = fullName.split(" ")[0];
  return {
    brand: titleCaseBrand(first),
    name: fullName.slice(first.length).trim(),
  };
}

function getGroupKey(fullTitle) {
  const dashIndex = fullTitle.lastIndexOf(" - ");
  if (dashIndex === -1) return fullTitle;

  const base = fullTitle.slice(0, dashIndex);
  const suffix = fullTitle.slice(dashIndex + 3);
  const normalizedSuffix = suffix.replace(/\d+$/, "");

  if (normalizedSuffix !== suffix) {
    return normalizedSuffix
      ? `${base} - ${normalizedSuffix}`
      : base;
  }

  return fullTitle;
}

function variantSortKey(fullTitle) {
  const dashIndex = fullTitle.lastIndexOf(" - ");
  if (dashIndex === -1) return 0;

  const suffix = fullTitle.slice(dashIndex + 3);
  const match = suffix.match(/(\d+)$/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

const products = [];

for (const [folder, meta] of Object.entries(CATEGORY_MAP)) {
  const dir = path.join(base, folder);
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|png|jpg)/i.test(f))
    .sort();

  const groups = new Map();

  for (const file of files) {
    const fullTitle = stripExt(file);
    const groupKey = getGroupKey(fullTitle);
    const imagePath = `/images/${folder}/${file}`;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }

    groups.get(groupKey).push({ fullTitle, imagePath });
  }

  for (const [groupKey, variants] of groups.entries()) {
    variants.sort(
      (a, b) => variantSortKey(a.fullTitle) - variantSortKey(b.fullTitle)
    );

    const images = variants.map((v) => v.imagePath);
    const { brand, name } = extractBrand(groupKey);

    products.push({
      id: slugify(groupKey),
      category: meta.id,
      name: name || groupKey,
      brand,
      price: meta.price,
      priceLabel: `$${meta.price}`,
      image: images[0],
      images,
    });
  }
}

products.sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return a.name.localeCompare(b.name);
});

function formatProduct(p) {
  const imagesField =
    p.images.length > 1
      ? `\n    images: ${JSON.stringify(p.images)},`
      : "";

  return `  {
    id: ${JSON.stringify(p.id)},
    category: ${JSON.stringify(p.category)},
    name: ${JSON.stringify(p.name)},
    brand: ${JSON.stringify(p.brand)},
    price: ${p.price},
    priceLabel: ${JSON.stringify(p.priceLabel)},
    image: ${JSON.stringify(p.image)},${imagesField}
  }`;
}

const content = `/**
 * Designer Vault — Products Catalog
 * Generated from product images in public/images/
 */
import { WHATSAPP_NUMBER } from "../data";

export const CATEGORIES = [
  { id: "bags", label: "Bags" },
  { id: "watches", label: "Watches" },
  { id: "shoes", label: "Shoes" },
  { id: "jewelry", label: "Jewelry" },
  { id: "sunglasses", label: "Sunglasses" },
];

export const PRODUCTS = [
${products.map(formatProduct).join(",\n\n")}
];

export function getProductImages(product) {
  return product.images?.length ? product.images : [product.image];
}

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
  const brand = product.brand || (product.model ? product.name : "");
  const name = product.brand ? product.name : (product.model || product.name || "Product");
  const fullName = brand ? \`\${brand} \${name}\` : name;
  const category = product.category || "Item";
  const price = product.priceLabel || product.price || "";
  const origin = window.location.origin;
  const imgPath = product.image || product.img || "";
  const imageUrl = imgPath.startsWith("http") ? imgPath : \`\${origin}\${imgPath}\`;

  const text = \`Hi! I'm interested in *\${fullName}* (\${category}) priced at *\${price}*. Could you please share more details? \${imageUrl}\`;
  return \`https://wa.me/\${WHATSAPP_NUMBER}?text=\${encodeURIComponent(text)}\`;
}
`;

fs.writeFileSync(out, content);

const merged = products.filter((p) => p.images.length > 1);
console.log(`Wrote ${products.length} products to ${out}`);
console.log(
  `Merged galleries: ${merged.map((p) => `${p.name} (${p.images.length} images)`).join(", ") || "none"}`
);
