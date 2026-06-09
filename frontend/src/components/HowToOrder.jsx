import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, PackageCheck } from "lucide-react";
import { WHATSAPP_URL } from "../data";

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Message us on WhatsApp",
    desc: "Tell us which reference catches your eye. Share photos if you've seen one elsewhere — we'll quote on the spot.",
  },
  {
    n: "02",
    icon: ShoppingBag,
    title: "Confirm & Pay Securely",
    desc: "We send a payment link (card, bank transfer, or USDT). Funds clear within minutes, your watch enters our QC bench within hours.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Receive — Discreetly",
    desc: "Tracked, insured shipping in unbranded packaging. Most parcels land in 7–10 working days. A real human checks in on day one.",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="process"
      className="relative py-28 md:py-40 bg-[#0a0a0a]"
      data-testid="process-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                How to Order
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              data-testid="process-heading"
            >
              Three taps.
              <span className="italic font-light"> Zero friction.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 text-white/55 text-sm md:text-base leading-relaxed"
          >
            No accounts, no carts, no abandoned-checkout emails. Just a
            conversation with a real horologist on WhatsApp — the way bespoke
            ought to feel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative bg-[#0a0a0a] p-10 md:p-12 hover:bg-[#0f0f0f] transition-colors duration-500"
              data-testid={`order-step-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="serif italic text-[#d4af37] text-6xl">
                  {s.n}
                </span>
                <s.icon
                  className="w-7 h-7 text-white/40 group-hover:text-[#d4af37] transition-colors duration-500"
                  strokeWidth={1.3}
                />
              </div>
              <h3 className="serif text-white text-2xl md:text-3xl mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-8 h-px w-8 bg-white/10 group-hover:w-20 group-hover:bg-[#d4af37] transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-[#d4af37] hover:bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all"
            data-testid="process-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
            Start your order
            <span className="w-6 h-px bg-black group-hover:w-12 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
