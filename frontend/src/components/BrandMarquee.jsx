import { motion } from "framer-motion";
import { BRAND_COLORS } from "../constants/theme";

const BRANDS = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Omega",
  "Richard Mille",
  "Cartier",
  "Hublot",
  "IWC",
  "Tag Heuer",
  "Vacheron Constantin",
];

export default function BrandMarquee() {
  return (
    <section
      className="relative py-4 border-y border-white/10 content-panel overflow-hidden"
      data-testid="brand-marquee"
    >
      <div className="marquee whitespace-nowrap">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <motion.span
            key={i}
            whileHover={{ color: BRAND_COLORS.yellow }}
            className="display text-white/40 text-xl mx-5 flex-shrink-0 uppercase tracking-wide"
            data-testid={`brand-name-${i}`}
          >
            {b}
            <span className="mx-5" style={{ color: BRAND_COLORS.yellow }}>
              ✦
            </span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
