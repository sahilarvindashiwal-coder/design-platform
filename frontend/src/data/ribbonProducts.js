import { ASSETS } from "../config/assets";

/** Product catalog for center display on section dividers */
export const DIVIDER_CATALOG = [
  { id: "bag-sling", category: "bag", label: "Sling bag", src: ASSETS.ribbon.bagSling },
  { id: "bag-blue", category: "bag", label: "Blue bag", src: ASSETS.ribbon.bagBlue },
  { id: "bag-gold", category: "bag", label: "Gold bag", src: ASSETS.ribbon.bagGold },
  { id: "watch-blue", category: "watch", label: "Blue dial watch", src: ASSETS.ribbon.watchBlue },
  { id: "watch-gold", category: "watch", label: "Gold watch", src: ASSETS.ribbon.watchGold },
  { id: "watch-silver", category: "watch", label: "Silver watch", src: ASSETS.ribbon.watchSilver },
  { id: "shoe-black", category: "shoe", label: "Black sneaker", src: ASSETS.ribbon.shoeBlack },
  { id: "shoe-white", category: "shoe", label: "White sneaker", src: ASSETS.ribbon.shoeWhite },
];

const byId = (id) => DIVIDER_CATALOG.find((p) => p.id === id);

/** Center product on Trust section ribbons (before first SectionDivider) */
export const TRUST_SECTION_PRODUCT = byId("bag-sling");

/**
 * Center product per section divider — no two bags or watches adjacent in page order.
 */
export const DIVIDER_CENTER_PRODUCTS = {
  "divider-after-trust": byId("watch-silver"),
  "divider-after-collection": byId("bag-blue"),
  "divider-after-craft": byId("shoe-black"),
  "divider-after-process": byId("watch-gold"),
  "divider-after-stories": byId("bag-gold"),
};
