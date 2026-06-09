import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="stories"
      className="relative py-28 md:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#0d0a05] to-[#0a0a0a] overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Background subtle gold haze */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Collector Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl"
              data-testid="testimonials-heading"
            >
              Trusted by 14,000+
              <span className="italic font-light"> connoisseurs.</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="group w-12 h-12 border border-white/15 hover:border-[#d4af37] hover:bg-[#d4af37] flex items-center justify-center transition-all"
              data-testid="testimonial-prev-btn"
              aria-label="Previous"
            >
              <ArrowLeft
                className="w-4 h-4 text-white group-hover:text-black"
                strokeWidth={1.5}
              />
            </button>
            <button
              onClick={next}
              className="group w-12 h-12 border border-white/15 hover:border-[#d4af37] hover:bg-[#d4af37] flex items-center justify-center transition-all"
              data-testid="testimonial-next-btn"
              aria-label="Next"
            >
              <ArrowRight
                className="w-4 h-4 text-white group-hover:text-black"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Quote side */}
          <div className="md:col-span-7 relative min-h-[400px]">
            <Quote
              className="absolute -top-6 -left-2 w-20 h-20 text-[#d4af37]/15"
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
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>
                <p className="serif text-white text-2xl md:text-3xl lg:text-4xl leading-[1.3] font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-12 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#d4af37]/30"
                  />
                  <div>
                    <div className="text-white text-base">{t.name}</div>
                    <div className="text-white/40 text-xs uppercase tracking-[0.2em] mt-1">
                      {t.location} · {t.purchase}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side stats / nav */}
          <div className="md:col-span-5 md:pl-10 md:border-l md:border-white/5">
            <div className="grid grid-cols-2 gap-y-12">
              <Stat n="4.9" label="Average Rating" />
              <Stat n="14k+" label="Pieces Shipped" />
              <Stat n="98%" label="Repeat Buyers" />
              <Stat n="38" label="Countries Served" />
            </div>
            <div className="mt-12 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-px transition-all duration-500 ${
                    i === idx
                      ? "w-12 bg-[#d4af37]"
                      : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                  data-testid={`testimonial-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Stat = ({ n, label }) => (
  <div>
    <div className="serif text-[#d4af37] text-4xl md:text-5xl">{n}</div>
    <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
      {label}
    </div>
  </div>
);
