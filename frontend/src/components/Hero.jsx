import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";

/**
 * Hero — bag-reference style, mobile-first.
 * Two PARALLEL diagonal stripes (not crossing):
 *   • TIMEPIECES — ABOVE the watch, tilted -12deg (left→right ascending)
 *   • SHOP NOW   — BELOW the watch, tilted +12deg (opposite direction)
 *   • They are separated vertically; the watch sits in the gap between them.
 * Watch image is shown with mix-blend-mode:lighten so its dark backdrop
 * bleeds into the black hero — giving the impression it's floating.
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
      ref={ref}
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      data-testid="hero-section"
    >
      {/* Top meta bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-30 pt-20 sm:pt-28 md:pt-32 px-4 md:px-12 lg:px-20 flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50"
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
        className="relative z-30 mt-5 sm:mt-8 px-4 md:px-12 lg:px-20 flex items-center justify-center gap-3"
      >
        <span className="h-px w-6 sm:w-12 bg-[#d4af37]" />
        <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#d4af37]">
          Super-Clone Timepieces
        </span>
        <span className="h-px w-6 sm:w-12 bg-[#d4af37]" />
      </motion.div>

      {/* === Bag-style composition: parallel stripes + watch === */}
      <div
        className="relative w-full mt-4 sm:mt-8 md:mt-10"
        style={{ height: "clamp(380px, 58vh, 680px)" }}
        data-testid="hero-composition"
      >
        {/* Faded huge ONYX wordmark behind everything */}
        <motion.div
          style={{ y: wordmarkY }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <div className="serif italic text-white/[0.06] text-[44vw] sm:text-[32vw] md:text-[24vw] leading-[0.85] tracking-tighter">
            ONYX
          </div>
        </motion.div>

        {/* TIMEPIECES — TOP stripe */}
        <motion.div
          initial={{ x: "-30%", opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: -10 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-8%] right-[-8%] top-[10%] sm:top-[12%] z-[2]"
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
          animate={{ x: 0, opacity: 1, rotate: -10 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-8%] right-[-8%] bottom-[10%] sm:bottom-[12%] z-[2]"
        >
          <div className="bg-white py-1.5 sm:py-2.5 md:py-3.5 px-3 sm:px-4 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.25)]">
            <div className="marquee" style={{ animationDirection: "reverse" }}>
              {stripeText("SHOP NOW")}
              {stripeText("SHOP NOW")}
            </div>
          </div>
        </motion.div>

        {/* Watch — floats BETWEEN the parallel stripes */}
        <motion.div
          style={{ y: watchY }}
          initial={{ opacity: 0, y: 40, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-[5] flex items-center justify-center px-5"
        >
          <div className="relative">
            {/* Soft gold radial glow */}
            <div
              className="absolute inset-0 blur-3xl scale-[1.8] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0.1) 40%, rgba(212,175,55,0) 65%)",
              }}
            />
            {/* Watch image — radial-feathered mask makes the rectangular
                product photo organically fade into the black hero, giving
                a true floating appearance. */}
            <img
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?fit=crop&crop=center&w=900&h=900&q=90"
              alt="Luxury timepiece"
              className="relative w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] aspect-square object-cover"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 30%, rgba(0,0,0,0.85) 45%, transparent 72%)",
                maskImage:
                  "radial-gradient(circle at center, black 30%, rgba(0,0,0,0.85) 45%, transparent 72%)",
                filter:
                  "contrast(1.1) saturate(1.1) drop-shadow(0 0 80px rgba(212,175,55,0.4))",
              }}
              data-testid="hero-watch-image"
            />
          </div>
        </motion.div>
      </div>

      {/* === Below composition: headline + CTA === */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-12 md:pt-16 pb-10 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center serif text-white leading-[0.98] tracking-tight text-[2rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-medium"
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
          className="mt-4 sm:mt-6 text-center text-white/65 max-w-md sm:max-w-xl mx-auto text-[13px] sm:text-base md:text-lg leading-relaxed px-2"
          data-testid="hero-subline"
        >
          Hand-finished super-clone replicas of the world&apos;s most coveted
          timepieces — delivered discreetly, worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#d4af37] hover:bg-white text-black px-5 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all"
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
            className="text-[11px] sm:text-sm uppercase tracking-[0.25em] text-white/80 hover:text-[#d4af37] transition-colors border-b border-white/20 hover:border-[#d4af37] pb-1 self-center"
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
          className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8"
        >
          <div className="flex items-center gap-2 text-white/55 order-2 sm:order-1">
            <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" strokeWidth={1.4} />
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs">
              Scroll to discover
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-8 order-1 sm:order-2 w-full sm:w-auto">
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
    <div className="serif text-[#d4af37] text-base sm:text-2xl leading-none">{n}</div>
    <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/45 mt-1 sm:mt-1.5">
      {label}
    </div>
  </div>
);
