import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND_COLORS, RIBBON_TEXT } from "../constants/theme";

const RIBBON_HEIGHT = 64;
const BAND_COUNT = 14;

const stripeText = (count = 6) => (
  <div className="flex items-center gap-10 whitespace-nowrap h-full">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="display font-black uppercase tracking-tight leading-none text-black"
        style={{ fontSize: "clamp(2rem, 8vw, 2.75rem)", lineHeight: 1 }}
      >
        {RIBBON_TEXT}
      </span>
    ))}
  </div>
);

function RibbonPair({ offset }) {
  return (
    <div className="relative h-[280px] w-full shrink-0" style={{ marginTop: offset }}>
      <div
        className="absolute left-[-12%] right-[-12%] top-[18%] -rotate-[12deg] opacity-[0.18]"
        style={{ filter: "blur(0.3px)" }}
      >
        <div
          className="overflow-hidden"
          style={{ backgroundColor: BRAND_COLORS.yellow, height: RIBBON_HEIGHT }}
        >
          <div className="marquee ribbon-bg-marquee flex items-center h-full">
            {stripeText()}
            {stripeText()}
          </div>
        </div>
      </div>
      <div
        className="absolute left-[-12%] right-[-12%] bottom-[18%] rotate-[12deg] opacity-[0.18]"
        style={{ filter: "blur(0.3px)" }}
      >
        <div
          className="overflow-hidden"
          style={{ backgroundColor: BRAND_COLORS.yellow, height: RIBBON_HEIGHT }}
        >
          <div className="marquee marquee-reverse ribbon-bg-marquee flex items-center h-full">
            {stripeText()}
            {stripeText()}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Site-wide subtle yellow ribbon background — scroll parallax, low opacity.
 */
export default function RibbonSiteBackground() {
  const { scrollY } = useScroll();
  const trackY = useTransform(scrollY, [0, 4000], [0, -520]);
  const trackY2 = useTransform(scrollY, [0, 4000], [0, -280]);

  return (
    <div
      className="ribbon-site-bg pointer-events-none"
      aria-hidden="true"
      data-testid="ribbon-site-background"
    >
      <motion.div className="ribbon-site-bg__track ribbon-site-bg__track--a" style={{ y: trackY }}>
        {Array.from({ length: BAND_COUNT }).map((_, i) => (
          <RibbonPair key={`a-${i}`} offset={i % 2 === 0 ? 0 : 40} />
        ))}
      </motion.div>
      <motion.div className="ribbon-site-bg__track ribbon-site-bg__track--b" style={{ y: trackY2 }}>
        {Array.from({ length: BAND_COUNT }).map((_, i) => (
          <RibbonPair key={`b-${i}`} offset={i % 2 === 0 ? 60 : 0} />
        ))}
      </motion.div>
      <div className="ribbon-site-bg__veil" />
    </div>
  );
}
