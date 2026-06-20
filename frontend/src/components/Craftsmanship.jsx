import { motion } from "framer-motion";
import { BRAND_COLORS } from "../constants/theme";

const DETAILS = [
  { n: "01", label: "Premium Materials", desc: "Matched leathers, canvases, ceramics, and sole compounds sourced to mirror the original." },
  { n: "02", label: "Precision Construction", desc: "Stitching density, case dimensions, panel alignment — benchmarked against authentic references." },
  { n: "03", label: "Hand-Finished Details", desc: "Hardware plating, edge paint, dial indices, and logo placement finished by hand." },
  { n: "04", label: "Pre-Ship QC", desc: "Every piece weighed, photographed, and timed or inspected before it earns the Designer Vault mark." },
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
            Inside Every Piece
          </span>
          <h2
            className="mt-3 display font-black text-white text-3xl leading-[0.92] tracking-tight uppercase"
            data-testid="craft-heading"
          >
            Craft You Can
            <br />
            <span className="text-accent">See & Feel.</span>
          </h2>
          <p className="mt-4 text-white/90 text-sm leading-relaxed">
            From monogram alignment on a handbag to bezel click on a diver — every
            component is compared side-by-side with the real thing. No shortcuts.
            No compromises. Just the look you want, built to last.
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
