import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DETAILS = [
  { n: "01", label: "Sapphire Crystal", desc: "Anti-reflective on both sides. Scratch-resistant to 9 Mohs." },
  { n: "02", label: "Ceramic Bezel", desc: "PVD-coated, lume-pearl filled. Indistinguishable from OEM." },
  { n: "03", label: "Hand-Finished Case", desc: "Brushed flanks, polished chamfers — 14 finishing steps per case." },
  { n: "04", label: "Swiss-Grade Movement", desc: "28,800 vph, 38h power reserve, 1-yr regulated tolerance ±5s/day." },
];

export default function Craftsmanship() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      id="craft"
      ref={ref}
      className="relative bg-black overflow-hidden"
      data-testid="craftsmanship-section"
    >
      {/* Full-bleed macro image */}
      <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400"
            alt="Watch movement macro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </motion.div>

        <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Inside the case
              </span>
            </div>
            <h2
              className="serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight"
              data-testid="craft-heading"
            >
              Obsession,
              <br />
              <span className="italic font-light text-[#d4af37]">measured</span>{" "}
              in microns.
            </h2>
            <p className="mt-8 text-white/65 text-base md:text-lg max-w-lg leading-relaxed">
              Every component is benchmarked against an authentic reference.
              Cases are weighed, dials are colour-matched, movements are timed —
              all before the watch earns the Atelier Onyx mark.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Detail grid */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {DETAILS.map((d, i) => (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-testid={`detail-${d.n}`}
            >
              <div className="serif text-[#d4af37] text-5xl mb-4 italic">
                {d.n}
              </div>
              <div className="h-px w-12 bg-white/15 mb-4" />
              <h3 className="serif text-white text-xl md:text-2xl mb-3 leading-tight">
                {d.label}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
