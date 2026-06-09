import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";

/**
 * Hero — bag-reference style, mobile-first.
 * Composition: black bg + faded ONYX wordmark + two crossing diagonal stripes
 * (TIMEPIECES + SHOP NOW) + a centred watch product that floats above the stripes.
 * Headline + CTA sit BELOW the visual composition so nothing overlaps.
 */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watchY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const stripeText = (label, count = 6) => {
    return (
      <div className="flex items-center gap-4 sm:gap-8 whitespace-nowrap">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-8">
            <span className="serif italic text-[#d4af37] font-black tracking-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-none">
              {label}
            </span>
            <span className="text-[#d4af37] text-sm sm:text-xl">✦</span>
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      data-testid="hero-section"
    >
      {/* Top meta bar — outside the composition */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-30 pt-24 sm:pt-28 md:pt-32 px-5 md:px-12 lg:px-20 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50"
      >
        <span data-testid="hero-meta-since">Est. Geneva · 2018</span>
        <span data-testid="hero-meta-time" className="hidden sm:inline-block">
          {time.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}{" "}
          GMT
        </span>
        <span className="sm:hidden text-[#d4af37]">1:1 · Swiss-Grade</span>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-30 mt-6 sm:mt-8 px-5 md:px-12 lg:px-20 flex items-center justify-center gap-3"
      >
        <span className="h-px w-8 sm:w-12 bg-[#d4af37]" />
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37]">
          Super-Clone Timepieces
        </span>
        <span className="h-px w-8 sm:w-12 bg-[#d4af37]" />
      </motion.div>

      {/* === Bag-style composition: stripes + watch === */}
      <div
        className="relative w-full mt-6 sm:mt-8 md:mt-10"
        style={{ height: "clamp(420px, 62vh, 720px)" }}
        data-testid="hero-composition"
      >
        {/* Faded huge ONYX wordmark BEHIND everything */}
        <motion.div
          style={{ y: wordmarkY }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <div className="serif italic text-white/[0.06] text-[44vw] sm:text-[34vw] md:text-[26vw] leading-[0.85] tracking-tighter">
            ONYX
          </div>
        </motion.div>

        {/* Stripe TIMEPIECES (going up-right) */}
        <motion.div
          initial={{ x: "-30%", opacity: 0, rotate: -22 }}
          animate={{ x: 0, opacity: 1, rotate: -22 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-30%] right-[-30%] top-1/2 -mt-[28px] sm:-mt-[40px] md:-mt-[50px] z-[2]"
        >
          <div className="bg-white py-2 sm:py-3 md:py-4 px-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.25)]">
            <div className="marquee">
              {stripeText("TIMEPIECES")}
              {stripeText("TIMEPIECES")}
            </div>
          </div>
        </motion.div>

        {/* Stripe SHOP NOW (going down-right) */}
        <motion.div
          initial={{ x: "30%", opacity: 0, rotate: 22 }}
          animate={{ x: 0, opacity: 1, rotate: 22 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-30%] right-[-30%] top-1/2 -mt-[28px] sm:-mt-[40px] md:-mt-[50px] z-[2]"
        >
          <div className="bg-white py-2 sm:py-3 md:py-4 px-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.25)]">
            <div
              className="marquee"
              style={{ animationDirection: "reverse" }}
            >
              {stripeText("SHOP NOW")}
              {stripeText("SHOP NOW")}
            </div>
          </div>
        </motion.div>

        {/* Watch — floats above stripes (z-10) */}
        <motion.div
          style={{ y: watchY }}
          initial={{ opacity: 0, y: 60, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-10 flex items-center justify-center px-5"
        >
          <div className="relative">
            {/* Soft gold radial glow */}
            <div
              className="absolute inset-0 blur-3xl scale-150 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0) 65%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?crop=entropy&cs=srgb&fm=jpg&q=90&w=1200"
              alt="Luxury timepiece"
              className="relative w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px] h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
              style={{
                filter: "drop-shadow(0 0 80px rgba(212,175,55,0.35))",
              }}
              data-testid="hero-watch-image"
            />
          </div>
        </motion.div>
      </div>

      {/* === Below composition: headline + CTA === */}
      <div className="relative z-20 px-5 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center serif text-white leading-[0.95] tracking-tight text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium"
          data-testid="hero-headline"
        >
          Time, faithfully{" "}
          <span className="italic font-light block sm:inline">
            re<span className="text-[#d4af37]">·</span>imagined.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-5 sm:mt-7 text-center text-white/65 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          data-testid="hero-subline"
        >
          Hand-finished super-clone replicas of the world&apos;s most coveted
          timepieces — delivered discreetly, worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] hover:bg-white text-black px-6 sm:px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all"
            data-testid="hero-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
            <span>Order on WhatsApp</span>
          </a>
          <button
            onClick={() =>
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80 hover:text-[#d4af37] transition-colors border-b border-white/20 hover:border-[#d4af37] pb-1 self-center"
            data-testid="hero-explore-cta"
          >
            Explore Collection
          </button>
        </motion.div>

        {/* Stats + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-white/55 order-2 sm:order-1">
            <ArrowDown
              className="w-3.5 h-3.5 animate-bounce"
              strokeWidth={1.4}
            />
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
              Scroll to discover
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 sm:gap-8 order-1 sm:order-2 w-full sm:w-auto">
            <Stat n="14k+" label="Collectors" />
            <Stat n="48h" label="Pre-Ship QC" />
            <Stat n="1yr" label="Warranty" />
            <Stat n="38" label="Countries" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Stat = ({ n, label }) => (
  <div className="text-center">
    <div className="serif text-[#d4af37] text-lg sm:text-2xl leading-none">
      {n}
    </div>
    <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/45 mt-1.5">
      {label}
    </div>
  </div>
);
