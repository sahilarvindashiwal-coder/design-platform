import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
      data-testid="hero-section"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400"
          alt="Luxury timepiece"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
      </motion.div>

      {/* Huge faded background wordmark */}
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="serif italic text-white/[0.045] text-[34vw] sm:text-[26vw] md:text-[22vw] leading-[0.85] tracking-tighter">
          ONYX
        </div>
        <div className="serif text-white/[0.03] text-[24vw] sm:text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter -mt-[6vw]">
          TIME
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-between max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-12"
      >
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50"
        >
          <span data-testid="hero-meta-since">Est. Geneva — 2018</span>
          <span className="hidden md:inline-block" data-testid="hero-meta-time">
            {time.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}{" "}
            GMT
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
              Super-Clone Timepieces · 1:1
            </span>
          </motion.div>

          <h1
            className="serif text-white leading-[0.92] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] font-medium"
            data-testid="hero-headline"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block"
            >
              Time, faithfully
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="block italic font-light"
            >
              re<span className="text-[#d4af37]">·</span>imagined.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 text-white/65 max-w-xl text-base md:text-lg leading-relaxed"
            data-testid="hero-subline"
          >
            Hand-finished super-clone replicas of the world&apos;s most coveted
            timepieces. Indistinguishable craft, accessible price — delivered
            discreetly, worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#d4af37] hover:bg-white text-black px-7 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300"
              data-testid="hero-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
              <span>Order on WhatsApp</span>
              <span className="w-6 h-px bg-black group-hover:w-10 transition-all" />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs uppercase tracking-[0.25em] text-white/80 hover:text-[#d4af37] transition-colors border-b border-white/20 hover:border-[#d4af37] pb-1"
              data-testid="hero-explore-cta"
            >
              Explore the Collection
            </button>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-end justify-between flex-wrap gap-6"
        >
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={1.4} />
            <span className="uppercase tracking-[0.3em] text-xs">
              Scroll to discover
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-white/70">
            <Stat n="14k+" label="Happy Collectors" />
            <Stat n="48h" label="Pre-Ship QC" />
            <Stat n="1 yr" label="Warranty" />
            <Stat n="38" label="Countries" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const Stat = ({ n, label }) => (
  <div className="text-right">
    <div className="serif text-2xl text-[#d4af37]">{n}</div>
    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mt-1">
      {label}
    </div>
  </div>
);
