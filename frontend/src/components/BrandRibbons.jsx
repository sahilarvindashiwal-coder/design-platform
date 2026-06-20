import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND_COLORS, RIBBON_TEXT } from "../constants/theme";

const RIBBON_HEIGHT = 88;
/** Center product display — spans both ribbons, tilted in front */
const CENTER_PRODUCT_ROTATE = 18;

const stripeText = (label, count = 8) => (
  <div className="flex items-center gap-8 whitespace-nowrap h-full">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="display font-black uppercase tracking-tight leading-none"
        style={{
          color: BRAND_COLORS.black,
          fontSize: "clamp(2.75rem, 10vw, 3.5rem)",
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    ))}
  </div>
);

const ribbonStrip = (
  <>
    {stripeText(RIBBON_TEXT)}
    {stripeText(RIBBON_TEXT)}
  </>
);

/**
 * Two yellow diagonal ribbons with sliding "DESIGNER VAULT" text.
 * Optional center product layered between ribbons (in front; ribbons slide behind).
 */
export default function BrandRibbons({
  centerProduct,
  height = "clamp(340px, 72vw, 480px)",
  animateOnMount = false,
  parallax = false,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  const topMotion = animateOnMount
    ? { initial: { x: "-30%", opacity: 0, rotate: -10 }, animate: { x: 0, opacity: 1, rotate: -10 } }
    : { initial: { x: "-30%", opacity: 0, rotate: -10 }, whileInView: { x: 0, opacity: 1, rotate: -10 }, viewport: { once: true, margin: "-80px" } };

  const bottomMotion = animateOnMount
    ? { initial: { x: "30%", opacity: 0, rotate: 10 }, animate: { x: 0, opacity: 1, rotate: 10 }, transition: { delay: 0.15 } }
    : { initial: { x: "30%", opacity: 0, rotate: 10 }, whileInView: { x: 0, opacity: 1, rotate: 10 }, viewport: { once: true, margin: "-80px" }, transition: { delay: 0.15 } };

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
      data-testid="brand-ribbons"
    >
      {/* Top ribbon — scrolls behind center product */}
      <motion.div
        {...topMotion}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-4%] right-[-4%] top-[6%] z-[1]"
      >
        <div
          className="flex items-center px-2 shadow-[0_12px_40px_-8px_rgba(255,235,59,0.35)] overflow-hidden"
          style={{ backgroundColor: BRAND_COLORS.yellow, height: RIBBON_HEIGHT }}
        >
          <div className="marquee flex items-center h-full">{ribbonStrip}</div>
        </div>
      </motion.div>

      {/* Center product — in front of both sliding ribbons */}
      {centerProduct && (
        <motion.div
          style={parallax ? { y: productY } : undefined}
          className="absolute inset-0 z-[10] flex items-center justify-center px-2 pointer-events-none"
        >
          <img
            src={centerProduct.src}
            alt={centerProduct.label}
            className="relative h-[min(120%,600px)] w-auto max-w-[95%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)]"
            style={{ transform: `rotate(${CENTER_PRODUCT_ROTATE}deg)` }}
            data-testid="ribbon-center-product"
          />
        </motion.div>
      )}

      {/* Bottom ribbon — scrolls behind center product */}
      <motion.div
        {...bottomMotion}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-4%] right-[-4%] bottom-[6%] z-[1]"
      >
        <div
          className="flex items-center px-2 shadow-[0_12px_40px_-8px_rgba(255,235,59,0.35)] overflow-hidden"
          style={{ backgroundColor: BRAND_COLORS.yellow, height: RIBBON_HEIGHT }}
        >
          <div className="marquee marquee-reverse flex items-center h-full">{ribbonStrip}</div>
        </div>
      </motion.div>
    </div>
  );
}
