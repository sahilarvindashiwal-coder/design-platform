import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { BRAND_COLORS } from "../constants/theme";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="stories"
      className="relative py-12 bg-transparent overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="relative px-4">
        <div className="content-panel px-5 py-6 mb-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold"
                style={{ color: BRAND_COLORS.yellow }}
              >
                Collector Stories
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
                data-testid="testimonials-heading"
              >
                Trusted By 14,000+
                <br />
                <span className="text-accent">Connoisseurs.</span>
              </motion.h2>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={prev}
                className="group w-10 h-10 border border-white/20 hover:border-[#FFEB3B] hover:bg-[#FFEB3B] flex items-center justify-center transition-all"
                data-testid="testimonial-prev-btn"
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4 text-white group-hover:text-black" strokeWidth={2} />
              </button>
              <button
                onClick={next}
                className="group w-10 h-10 border border-white/20 hover:border-[#FFEB3B] hover:bg-[#FFEB3B] flex items-center justify-center transition-all"
                data-testid="testimonial-next-btn"
                aria-label="Next"
              >
                <ArrowRight className="w-4 h-4 text-white group-hover:text-black" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div className="content-panel p-5 relative min-h-[280px]">
          <Quote
            className="absolute top-3 right-4 w-12 h-12 text-[#FFEB3B]/20"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              data-testid={`testimonial-${idx}`}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FFEB3B] text-[#FFEB3B]"
                  />
                ))}
              </div>
              <p className="text-white text-base leading-relaxed font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FFEB3B]/40"
                />
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/60 text-[9px] uppercase tracking-[0.15em] mt-0.5">
                    {t.location} · {t.purchase}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 content-panel p-5">
          <div className="grid grid-cols-2 gap-y-6">
            <Stat n="4.9" label="Average Rating" />
            <Stat n="14k+" label="Pieces Shipped" />
            <Stat n="98%" label="Repeat Buyers" />
            <Stat n="38" label="Countries Served" />
          </div>
          <div className="mt-6 flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-px transition-all duration-500 ${
                  i === idx ? "w-10 bg-[#FFEB3B]" : "w-5 bg-white/30 hover:bg-white/50"
                }`}
                data-testid={`testimonial-dot-${i}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Stat = ({ n, label }) => (
  <div>
    <div className="display font-black text-2xl" style={{ color: "#FFEB3B" }}>
      {n}
    </div>
    <div className="text-[8px] uppercase tracking-[0.2em] text-white/70 mt-1.5 font-semibold">
      {label}
    </div>
  </div>
);
