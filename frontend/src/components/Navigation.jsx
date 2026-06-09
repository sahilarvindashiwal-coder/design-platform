import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, BRAND } from "../data";

const links = [
  { label: "Collection", id: "collection" },
  { label: "Craftsmanship", id: "craft" },
  { label: "Process", id: "process" },
  { label: "Stories", id: "stories" },
  { label: "FAQ", id: "faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
        data-testid="main-nav"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="serif text-2xl tracking-tight text-white"
            data-testid="nav-brand-link"
          >
            {BRAND.split(" ")[0]}
            <span className="text-[#d4af37]">.</span>
            <span className="font-light italic"> {BRAND.split(" ")[1]}</span>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                data-testid={`nav-${l.id}-link`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#e5c158] text-black px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:gap-3"
              data-testid="nav-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
              WhatsApp Order
            </a>
            <button
              className="lg:hidden text-white"
              onClick={() => setOpen(!open)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black lg:hidden flex flex-col items-center justify-center gap-8"
            data-testid="mobile-menu"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l.id)}
                className="serif text-4xl text-white"
                data-testid={`mobile-nav-${l.id}-link`}
              >
                {l.label}
              </motion.button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 bg-[#d4af37] text-black px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold"
              data-testid="mobile-whatsapp-cta"
            >
              WhatsApp Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
