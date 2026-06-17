import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COLLECTION, WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative py-12 bg-transparent"
      data-testid="collection-section"
    >
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 content-panel px-5 py-6"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Our Collection
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="collection-heading"
          >
            Icons, Rendered
            <br />
            <span className="text-accent">With Fidelity.</span>
          </motion.h2>
        </motion.div>

        {/* Horizontal scroll product carousel */}
        <div
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
          data-testid="collection-carousel"
        >
          {COLLECTION.map((w, i) => (
            <motion.a
              key={w.id}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex-shrink-0 w-[148px] snap-start bg-black/95 border border-white/15 overflow-hidden hover:border-[#FFEB3B]/50 transition-colors"
              data-testid={`collection-item-${w.id}`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={w.img}
                  alt={`${w.name} ${w.model}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center border-t border-white/10">
                <h3 className="display text-white text-sm uppercase tracking-wide leading-tight">
                  {w.model}
                </h3>
                <p
                  className="mt-1.5 text-sm font-bold"
                  style={{ color: BRAND_COLORS.yellow }}
                >
                  {w.price}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[8px] uppercase tracking-[0.2em] text-white/70 group-hover:text-[#FFEB3B] transition-colors font-semibold">
                  View Details
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA tile */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group mt-6 flex flex-col items-center justify-center gap-4 p-6 hover:brightness-110 transition-all text-black"
          style={{ backgroundColor: BRAND_COLORS.yellow }}
          data-testid="collection-cta-tile"
        >
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-[0.3em] text-black/60 mb-1.5 font-bold">
              Can&apos;t find what you want?
            </div>
            <h3 className="display text-2xl leading-tight uppercase">
              240+ References In Stock
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Enquire on WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
