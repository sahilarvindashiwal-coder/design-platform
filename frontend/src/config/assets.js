/**
 * Designer Vault — image asset paths
 * ───────────────────────────────────
 * Swap any image by replacing the file in public/images/
 * or changing the path below. No component edits needed.
 */
const publicUrl = process.env.PUBLIC_URL || "";
const ribbon = (name) => `${publicUrl}/images/ribbon/${name}`;

export const ASSETS = {
  /** Full-page repeating background (outlined brand text on black) */
  bgEntire: `${publicUrl}/images/bg-entire.svg`,

  /** Hero section banner (transparent PNG — source: Images/Hero Image.png) */
  heroBanner: `${publicUrl}/images/hero-banner.png`,

  /** Transparent product PNGs for center display on section dividers */
  ribbon: {
    bagSling: ribbon("bag-sling.png"),
    bagBlue: ribbon("bag-blue.png"),
    bagGold: ribbon("bag-gold.png"),
    watchBlue: ribbon("watch-blue.png"),
    watchGold: ribbon("watch-gold.png"),
    watchSilver: ribbon("watch-silver.png"),
    shoeBlack: ribbon("shoe-black.png"),
    shoeWhite: ribbon("shoe-white.png"),
    glasses: ribbon("glasses.png"),
  },
};
