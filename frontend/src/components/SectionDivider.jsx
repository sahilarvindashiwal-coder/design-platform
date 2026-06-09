import { motion } from "framer-motion";

/**
 * Section divider — two PARALLEL diagonal stripes (NOT crossing).
 *   • TIMEPIECES — TOP, tilted -12deg (left→right ascending)
 *   • SHOP NOW   — BOTTOM, tilted +12deg (right→left ascending)
 * Stripes are separated vertically; a faded "ONYX" wordmark sits behind.
 * Mobile-first: tighter padding, smaller text, contained heights.
 */
export default function SectionDivider({ id }) {
  const stripeText = (label, count = 6) => (
    <div className="flex items-center gap-3 sm:gap-6 whitespace-nowrap">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="flex items-center gap-3 sm:gap-6">
          <span className="serif italic text-[#d4af37] font-black tracking-tight text-base sm:text-2xl md:text-4xl lg:text-5xl leading-none">
            {label}
          </span>
          <span className="text-[#d4af37] text-xs sm:text-lg">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0a] min-h-[220px] sm:min-h-[320px] md:min-h-[400px]"
      data-testid={id || "section-divider"}
    >
      {/* Faded ONYX wordmark behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="serif italic text-white/[0.05] text-[34vw] sm:text-[24vw] md:text-[18vw] leading-none tracking-tighter">
          ONYX
        </div>
      </div>

      {/* TIMEPIECES — TOP stripe */}
      <motion.div
        initial={{ x: "-30%", opacity: 0, rotate: -10 }}
        whileInView={{ x: 0, opacity: 1, rotate: -10 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-8%] right-[-8%] top-[16%] sm:top-[18%] z-20"
      >
        <div className="bg-white py-1.5 sm:py-2.5 md:py-3.5 px-3 sm:px-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.25)]">
          <div className="marquee">
            {stripeText("TIMEPIECES")}
            {stripeText("TIMEPIECES")}
          </div>
        </div>
      </motion.div>

      {/* SHOP NOW — BOTTOM stripe (parallel, same direction) */}
      <motion.div
        initial={{ x: "30%", opacity: 0, rotate: -10 }}
        whileInView={{ x: 0, opacity: 1, rotate: -10 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-8%] right-[-8%] bottom-[16%] sm:bottom-[18%] z-10"
      >
        <div className="bg-white py-1.5 sm:py-2.5 md:py-3.5 px-3 sm:px-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.25)]">
          <div className="marquee" style={{ animationDirection: "reverse" }}>
            {stripeText("SHOP NOW")}
            {stripeText("SHOP NOW")}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
