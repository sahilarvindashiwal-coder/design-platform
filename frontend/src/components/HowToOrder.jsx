import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, PackageCheck } from "lucide-react";
import WhatsAppCTA from "./WhatsAppCTA";
import { BRAND_COLORS } from "../constants/theme";

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Tell Us What You Want",
    desc: "Share the bag, watch, shoe, or eyewear you're after — or send a photo. We'll quote availability and price on the spot.",
  },
  {
    n: "02",
    icon: ShoppingBag,
    title: "Confirm & Pay Securely",
    desc: "We send a secure payment link (card, bank transfer, or USDT). Your order enters our QC bench within hours of payment.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Approve QC & Receive",
    desc: "We send pre-ship photos for your approval. Then tracked, insured delivery in discreet packaging — usually 7–10 working days.",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="process"
      className="relative py-12 bg-transparent"
      data-testid="process-section"
    >
      <div className="px-4">
        <div className="text-center mb-8 content-panel px-5 py-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            How to Order
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="process-heading"
          >
            Three Steps.
            <br />
            <span className="text-accent">Zero Friction.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative content-panel p-5 hover:bg-black transition-colors duration-500"
              data-testid={`order-step-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="display text-4xl font-black"
                  style={{ color: BRAND_COLORS.yellow }}
                >
                  {s.n}
                </span>
                <s.icon
                  className="w-6 h-6 text-white/60 group-hover:text-[#FFEB3B] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="display text-white text-lg mb-2 leading-tight uppercase">
                {s.title}
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-[#FFEB3B] transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <WhatsAppCTA
            testId="process-whatsapp-cta"
            variant="large"
            buttonClassName="px-8 py-4 text-[10px] uppercase tracking-[0.25em]"
          />
        </motion.div>
      </div>
    </section>
  );
}
