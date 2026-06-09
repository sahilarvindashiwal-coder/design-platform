import { motion } from "framer-motion";

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
      className="relative py-6 sm:py-10 border-y border-white/5 bg-black overflow-hidden"
      data-testid="brand-marquee"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-2 sm:gap-4">
        <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40">
          Faithfully reproducing
        </span>
        <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40">
          240+ references in stock
        </span>
      </div>
      <div className="marquee whitespace-nowrap">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <motion.span
            key={i}
            whileHover={{ color: "#d4af37" }}
            className="serif italic text-white/30 text-xl sm:text-3xl md:text-5xl mx-5 sm:mx-10 flex-shrink-0"
            data-testid={`brand-name-${i}`}
          >
            {b}
            <span className="text-[#d4af37] mx-5 sm:mx-10">✦</span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
