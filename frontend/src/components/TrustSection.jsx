import { motion } from "framer-motion";
import { Gem, Cog, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { BRAND_COLORS } from "../constants/theme";
import { WHATSAPP_URL } from "../data";

const PILLARS = [
  {
    icon: Gem,
    title: "1:1 Mirror Quality",
    desc: "Premium leathers, canvases, movements, and sole compounds — every detail matched to the authentic reference.",
  },
  {
    icon: Cog,
    title: "QC Before You Ship",
    desc: "Hand-inspected and photographed on our bench before dispatch. You see exactly what leaves our door.",
  },
  {
    icon: ShieldCheck,
    title: "1-Year Warranty",
    desc: "Free repair or replacement if anything falls short. Backed by a real human team — not a chatbot.",
  },
  {
    icon: Truck,
    title: "Discreet Worldwide Shipping",
    desc: "Insured, tracked, customs-aware delivery to 38 countries. Unbranded packaging. Most orders in 7–10 days.",
  },
];

export default function TrustSection() {
  return (
    <section
      className="relative py-12 bg-transparent"
      data-testid="trust-section"
    >
      <div className="px-4">
        <div className="content-panel px-5 py-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-bold"
              style={{ color: BRAND_COLORS.yellow }}
            >
              Why Designer Vault?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="trust-heading"
          >
            Get The Look.
            <br />
            <span className="text-accent">Keep The Standard.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-white/90 text-sm leading-relaxed"
          >
            We partner with top-tier factories to deliver mirror-quality replicas
            of luxury bags, watches, sneakers, and eyewear. Real materials, real
            QC photos, real prices — no stock images, no scripted replies. What
            you see is what you get.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 hover:brightness-110 text-black px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
          >
            Order Now
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </motion.a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group content-panel p-4 hover:bg-black transition-colors duration-500"
              data-testid={`pillar-${i}`}
            >
              <p.icon
                className="w-6 h-6 mb-4 group-hover:scale-110 transition-transform duration-500"
                style={{ color: BRAND_COLORS.yellow }}
                strokeWidth={1.5}
              />
              <h3 className="display text-white text-sm mb-2 leading-tight uppercase">
                {p.title}
              </h3>
              <p className="text-white/80 text-[11px] leading-relaxed">{p.desc}</p>
              <div className="mt-4 h-px w-6 bg-white/20 group-hover:w-12 group-hover:bg-[#FFEB3B] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
