import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { COLLECTION, WHATSAPP_URL } from "../data";

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative py-16 sm:py-28 md:py-40 bg-[#0a0a0a]"
      data-testid="collection-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
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
                The Collection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl"
              data-testid="collection-heading"
            >
              Icons,
              <span className="italic font-light"> rendered</span> with
              obsessive fidelity.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/55 text-sm max-w-sm leading-relaxed"
          >
            Five maisons. Endless silhouettes. Hover any reference for detail —
            tap to enquire on WhatsApp.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[340px] gap-4 md:gap-5">
          {COLLECTION.map((w, i) => (
            <motion.a
              key={w.id}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`group relative overflow-hidden bg-[#111] ${w.span}`}
              data-testid={`collection-item-${w.id}`}
            >
              <motion.img
                src={w.img}
                alt={`${w.name} ${w.model}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Top tag */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 border border-white/20 px-3 py-1 backdrop-blur-md bg-black/30">
                  {w.tag}
                </span>
                <ArrowUpRight
                  className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                  strokeWidth={1.5}
                />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-2">
                  {w.name}
                </div>
                <h3 className="serif text-white text-2xl md:text-3xl leading-tight mb-3">
                  {w.model}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">{w.price}</span>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/80 group-hover:text-[#d4af37] transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Enquire
                  </span>
                </div>
                <div className="mt-4 h-px w-8 bg-white/20 group-hover:w-full group-hover:bg-[#d4af37] transition-all duration-700" />
              </div>
            </motion.a>
          ))}

          {/* CTA tile */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative md:col-span-12 md:row-span-1 bg-[#d4af37] text-black overflow-hidden flex items-center justify-between p-8 md:p-12 hover:bg-[#e5c158] transition-colors"
            data-testid="collection-cta-tile"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-black/60 mb-3">
                Can&apos;t find what you want?
              </div>
              <h3 className="serif text-3xl md:text-5xl leading-tight">
                Ask us — we have 240+
                <span className="italic font-light"> references</span> in stock.
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm uppercase tracking-[0.25em] font-semibold">
              <MessageCircle className="w-5 h-5" strokeWidth={1.6} />
              Enquire on WhatsApp
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" strokeWidth={1.6} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
