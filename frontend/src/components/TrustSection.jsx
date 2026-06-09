import { motion } from "framer-motion";
import { Gem, Cog, ShieldCheck, Truck } from "lucide-react";

const PILLARS = [
  {
    icon: Gem,
    title: "1:1 Super-Clone Quality",
    desc: "Sapphire crystal, ceramic bezels, brushed-then-polished cases. Every detail matches the original within microns.",
  },
  {
    icon: Cog,
    title: "Swiss-Grade Movements",
    desc: "ETA, Sellita and Asian super-clone calibres. Tested 48 hours pre-dispatch for accuracy and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "1-Year Warranty",
    desc: "Free repair or replacement if anything mechanical falters. Backed by a real human team — not a chatbot.",
  },
  {
    icon: Truck,
    title: "Discreet Worldwide Shipping",
    desc: "Insured, tracked, customs-aware delivery to 38 countries. Most orders land within 7–10 working days.",
  },
];

export default function TrustSection() {
  return (
    <section
      className="relative py-28 md:py-40 bg-[#0a0a0a]"
      data-testid="trust-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left big text */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Why Atelier Onyx
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              data-testid="trust-heading"
            >
              The closest you&apos;ll get to{" "}
              <span className="italic font-light text-[#d4af37]">
                the real thing
              </span>{" "}
              — without the six-figure price tag.
            </motion.h2>
          </div>

          {/* Right copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-5 md:pt-10"
          >
            <p className="text-white/65 text-base md:text-lg leading-relaxed">
              We don&apos;t sell &ldquo;fakes.&rdquo; We engineer faithful tributes to
              horology&apos;s most iconic references — built by the same factories
              that supply Asia&apos;s most exacting collectors. Every piece is hand-
              inspected, weighed, timed and photographed before it ships.
            </p>
            <p className="mt-6 text-white/45 text-sm leading-relaxed">
              No retail markup. No middlemen. No compromises on the parts that
              matter — case, dial, bezel, movement, bracelet end-links.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-[#0a0a0a] p-5 sm:p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors duration-500"
              data-testid={`pillar-${i}`}
            >
              <p.icon
                className="w-7 h-7 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-500"
                strokeWidth={1.3}
              />
              <h3 className="serif text-white text-base sm:text-xl mb-2 sm:mb-3 leading-tight">
                {p.title}
              </h3>
              <p className="text-white/55 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-6 h-px w-8 bg-white/10 group-hover:w-16 group-hover:bg-[#d4af37] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
