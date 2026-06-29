import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import TrustBar from "./TrustBar";
import WhatsAppCTA from "./WhatsAppCTA";
import Collection from "./Collection";
import { ASSETS } from "../config/assets";
import { SITE_SECTIONS } from "../config/siteSections";
import { BRAND_COLORS } from "../constants/theme";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden bg-transparent"
      data-testid="hero-section"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full pt-header px-2 bg-transparent"
      >
        <img
          src={ASSETS.heroBanner}
          alt="Designer Vault luxury collection — bags, watches, shoes and eyewear"
          className="w-full h-auto object-contain object-center mx-auto"
          data-testid="hero-banner-image"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col px-5 pt-6 pb-8 -mt-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px flex-1 bg-white/15" />
            <p
              className="text-[9px] uppercase tracking-[0.35em] font-semibold whitespace-nowrap"
              style={{ color: BRAND_COLORS.yellow }}
              data-testid="hero-eyebrow"
            >
              Bags · Watches · Shoes · Eyewear
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
            Premium 1:1 super-clones of the world&apos;s most coveted designer
            bags, timepieces, sneakers, and eyewear — hand-inspected and delivered
            discreetly worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <WhatsAppCTA testId="hero-whatsapp-cta" />
          </div>

          <Collection embedded />

          <Link
            to="/products"
            className="mt-6 inline-flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/80 hover:text-[#FFEB3B] transition-colors py-1 w-full"
            data-testid="hero-explore-cta"
          >
            Shop The Collection
            <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>

          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-4 gap-2">
            <Stat n="14k+" label="Happy Clients" />
            <Stat n="48h" label="Pre-Ship QC" />
            <Stat n="1yr" label="Warranty" />
            <Stat n="38" label="Countries" />
          </div>
        </motion.div>
      </div>

      {SITE_SECTIONS.showTrustBar && <TrustBar />}
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
