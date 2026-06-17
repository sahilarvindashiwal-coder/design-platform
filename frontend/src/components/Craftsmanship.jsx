import { motion } from "framer-motion";
import { BRAND_COLORS } from "../constants/theme";

const DETAILS = [
  { n: "01", label: "Sapphire Crystal", desc: "Anti-reflective on both sides. Scratch-resistant to 9 Mohs." },
  { n: "02", label: "Ceramic Bezel", desc: "PVD-coated, lume-pearl filled. Indistinguishable from OEM." },
  { n: "03", label: "Hand-Finished Case", desc: "Brushed flanks, polished chamfers — 14 finishing steps per case." },
  { n: "04", label: "Swiss-Grade Movement", desc: "28,800 vph, 38h power reserve, 1-yr regulated tolerance ±5s/day." },
];

export default function Craftsmanship() {
  return (
    <section
      id="craft"
      className="relative bg-transparent overflow-hidden"
      data-testid="craftsmanship-section"
    >
      <div className="px-4 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="content-panel px-5 py-6"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Inside the Case
          </span>
          <h2
            className="mt-3 display font-black text-white text-3xl leading-[0.92] tracking-tight uppercase"
            data-testid="craft-heading"
          >
            Obsession,
            <br />
            <span className="text-accent">Measured</span> In Microns.
          </h2>
          <p className="mt-4 text-white/90 text-sm leading-relaxed">
            Every component is benchmarked against an authentic reference.
            Cases are weighed, dials are colour-matched, movements are timed —
            all before the watch earns the Designer Vault mark.
          </p>
        </motion.div>
      </div>

      <div className="relative px-4 py-6 border-t border-white/10">
        <div className="grid grid-cols-2 gap-3">
          {DETAILS.map((d, i) => (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="content-panel p-4"
            >
              <span
                className="display text-3xl font-black"
                style={{ color: BRAND_COLORS.yellow }}
              >
                {d.n}
              </span>
              <h3 className="display text-white text-sm mt-2 mb-1.5 uppercase leading-tight">
                {d.label}
              </h3>
              <p className="text-white/85 text-[11px] leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
