import { motion } from "framer-motion";

/**
 * Crossing diagonal stripes used as a section divider.
 * Two white bands cross each other (X shape), one carrying "TIMEPIECES",
 * the other carrying "SHOP NOW" in bold gold typography.
 *
 * Mobile-first: smaller bands and tighter spacing on small screens,
 * scaling up gracefully for desktop.
 */
export default function SectionDivider({ id }) {
  const stripeText = (label) => {
    // Repeat text enough times to fill the band on all viewports
    const items = Array.from({ length: 8 });
    return (
      <div className="flex items-center gap-6 sm:gap-10 whitespace-nowrap">
        {items.map((_, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10">
            <span className="serif italic text-[#d4af37] font-black tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
              {label}
            </span>
            <span className="text-[#d4af37] text-lg sm:text-2xl">✦</span>
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[380px] md:min-h-[480px]"
      data-testid={id || "section-divider"}
    >
      {/* Faded huge background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="serif italic text-white/[0.04] text-[34vw] sm:text-[26vw] md:text-[20vw] leading-none tracking-tighter">
          ONYX
        </div>
      </div>

      {/* Stripe going up-right (rotate -10deg) — TIMEPIECES */}
      <motion.div
        initial={{ x: "-30%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-15%] right-[-15%] top-[30%] z-20"
        style={{ transform: "rotate(-10deg)" }}
      >
        <div className="bg-white py-2 sm:py-4 md:py-5 px-6 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.2)]">
          <div className="marquee">
            {stripeText("TIMEPIECES")}
            {stripeText("TIMEPIECES")}
          </div>
        </div>
      </motion.div>

      {/* Stripe going down-right (rotate +10deg) — SHOP NOW */}
      <motion.div
        initial={{ x: "30%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-15%] right-[-15%] top-[55%] z-10"
        style={{ transform: "rotate(10deg)" }}
      >
        <div className="bg-white py-2 sm:py-4 md:py-5 px-6 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.2)]">
          <div className="marquee" style={{ animationDirection: "reverse" }}>
            {stripeText("SHOP NOW")}
            {stripeText("SHOP NOW")}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
