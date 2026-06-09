import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, WHATSAPP_URL } from "../data";

export default function FaqAndCTA() {
  return (
    <section
      id="faq"
      className="relative py-28 md:py-40 bg-[#0a0a0a]"
      data-testid="faq-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          {/* Left intro */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Frequently Asked
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="serif text-white text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight"
              data-testid="faq-heading"
            >
              Questions,
              <br />
              <span className="italic font-light">
                answered honestly.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-white/55 text-base leading-relaxed max-w-md"
            >
              Still unsure? Ping us on WhatsApp — a real horologist will reply
              within minutes, not days.
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-white/10 last:border-b-0"
                  data-testid={`faq-accordion-item-${i}`}
                >
                  <AccordionTrigger className="py-6 text-left text-white hover:no-underline hover:text-[#d4af37] text-base md:text-lg group">
                    <span className="flex items-start gap-6 pr-6">
                      <span className="serif italic text-[#d4af37]/60 text-sm pt-1">
                        0{i + 1}
                      </span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pb-6 pr-6 text-white/60 text-sm md:text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-32 md:mt-48 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
              Begin Your Collection
            </span>
            <span className="h-px w-12 bg-[#d4af37]" />
          </div>
          <h2
            className="serif text-white text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight"
            data-testid="final-cta-heading"
          >
            Find your
            <br />
            <span className="italic font-light shimmer-text">
              forever watch.
            </span>
          </h2>
          <p className="mt-10 text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            One message. One conversation. The watch you&apos;ve always wanted —
            arriving discreetly at your door.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 inline-flex items-center gap-4 bg-[#d4af37] hover:bg-white text-black px-10 py-5 text-sm uppercase tracking-[0.25em] font-semibold transition-all"
            data-testid="final-whatsapp-cta"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.6} />
            Open WhatsApp Now
            <ArrowUpRight
              className="w-5 h-5 group-hover:rotate-45 transition-transform"
              strokeWidth={1.6}
            />
          </a>
          <p className="mt-6 text-white/30 text-xs uppercase tracking-[0.3em]">
            Reply guaranteed within 5 minutes · 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
