import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";

export default function FaqAndCTA() {
  return (
    <section
      id="faq"
      className="relative py-12 bg-transparent"
      data-testid="faq-section"
    >
      <div className="px-4">
        <div className="content-panel px-5 py-6 mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Frequently Asked
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="faq-heading"
          >
            Questions,
            <br />
            <span className="text-accent">Answered Honestly.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-white/85 text-sm leading-relaxed"
          >
            Still unsure? Message us anytime — a real specialist will reply
            within minutes, not days.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="content-panel px-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/15 last:border-b-0"
                data-testid={`faq-accordion-item-${i}`}
              >
                <AccordionTrigger className="py-4 text-left text-white hover:no-underline hover:text-[#FFEB3B] text-sm group font-semibold">
                  <span className="flex items-start gap-3 pr-3">
                    <span className="display text-[#FFEB3B]/70 text-xs pt-0.5">
                      0{i + 1}
                    </span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pb-4 pr-3 text-white/85 text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-10 content-panel px-5 py-8 text-center"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Your Wardrobe Upgrade
          </span>
          <h2
            className="mt-4 display font-black text-white text-4xl leading-[0.92] tracking-tight uppercase"
            data-testid="final-cta-heading"
          >
            Find Your
            <br />
            <span className="shimmer-text">Forever Piece.</span>
          </h2>
          <p className="mt-5 text-white/85 text-sm leading-relaxed">
            One message. One conversation. The bag, watch, sneaker, or shades
            you&apos;ve been eyeing — arriving discreetly at your door.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center justify-center gap-3 hover:brightness-110 text-black px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all w-full"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
            data-testid="final-whatsapp-cta"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            Order Now
            <ArrowUpRight
              className="w-5 h-5 group-hover:rotate-45 transition-transform"
              strokeWidth={2}
            />
          </a>
          <p className="mt-4 text-white/50 text-[9px] uppercase tracking-[0.2em]">
            Reply guaranteed within 5 minutes · 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
