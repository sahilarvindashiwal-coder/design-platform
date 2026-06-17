import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import TrustBar from "./TrustBar";
import { BRAND_COLORS } from "../constants/theme";
import { WHATSAPP_URL } from "../data";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex flex-col overflow-hidden bg-transparent"
      data-testid="hero-section"
    >
      <div
        className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,235,59,0.06) 0%, rgba(255,235,59,0.02) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px flex-1 bg-white/15" />
            <p
              className="text-[9px] uppercase tracking-[0.35em] font-semibold whitespace-nowrap"
              style={{ color: BRAND_COLORS.yellow }}
              data-testid="hero-eyebrow"
            >
              Super-Clone Timepieces
            </p>
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <h1
            className="text-center display font-black text-white leading-[0.92] tracking-tight text-[2.75rem] uppercase"
            data-testid="hero-headline"
          >
            Luxury Looks.
            <br />
            <span className="text-accent">Smarter Choice.</span>
          </h1>

          <p
            className="mt-5 text-center text-white/85 text-sm leading-relaxed max-w-xs mx-auto"
            data-testid="hero-subline"
          >
            Hand-finished super-clone replicas of the world&apos;s most coveted
            timepieces — delivered discreetly, worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 hover:brightness-110 text-black px-6 py-4 text-[10px] uppercase tracking-[0.22em] font-bold transition-all"
              style={{ backgroundColor: BRAND_COLORS.yellow }}
              data-testid="hero-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              <span>Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/80 hover:text-[#FFEB3B] transition-colors py-1"
              data-testid="hero-explore-cta"
            >
              Explore Collection
              <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-4 gap-2">
            <Stat n="14k+" label="Collectors" />
            <Stat n="48h" label="Pre-Ship QC" />
            <Stat n="1yr" label="Warranty" />
            <Stat n="38" label="Countries" />
          </div>
        </motion.div>
      </div>

      <TrustBar />
    </section>
  );
}

const Stat = ({ n, label }) => (
  <div className="text-center">
    <div className="display font-black text-lg leading-none" style={{ color: "#FFEB3B" }}>
      {n}
    </div>
    <div className="text-[6px] uppercase tracking-[0.12em] text-white/65 mt-1 font-semibold leading-tight">
      {label}
    </div>
  </div>
);
