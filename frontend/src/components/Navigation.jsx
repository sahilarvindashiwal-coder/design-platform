import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";

const sectionLinks = [
  { label: "Collection", id: "collection" },
  { label: "Craftsmanship", id: "craft" },
  { label: "Process", id: "process" },
  { label: "Stories", id: "stories" },
  { label: "FAQ", id: "faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isProducts =
    location.pathname === "/products" ||
    location.pathname.startsWith("/products/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToSection = (id) => {
    setOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[430px]"
        data-testid="main-nav"
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-14 flex items-center justify-between px-4 transition-colors duration-300 ${
            scrolled || open
              ? "bg-black/95 backdrop-blur-md border-b border-white/10"
              : "bg-black/40 backdrop-blur-sm"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex-shrink-0"
            data-testid="nav-brand-link"
            aria-label="Designer Vault home"
          >
            <BrandLogo size="sm" />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-end"
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X size={24} style={{ color: BRAND_COLORS.yellow }} />
            ) : (
              <Menu size={24} style={{ color: BRAND_COLORS.yellow }} />
            )}
          </button>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden bg-black/98 backdrop-blur-xl border-b border-white/10"
              data-testid="mobile-menu"
            >
              <nav className="px-4 py-3 flex flex-col">
                <Link
                  to="/products"
                  onClick={() => setOpen(false)}
                  className={`display text-left text-xl uppercase py-3.5 border-b border-white/10 transition-colors ${
                    isProducts ? "text-[#FFEB3B]" : "text-white hover:text-[#FFEB3B]"
                  }`}
                  data-testid="mobile-nav-products-link"
                >
                  Products
                </Link>
                {sectionLinks.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.04 }}
                    onClick={() => scrollToSection(l.id)}
                    className="display text-left text-xl text-white uppercase py-3.5 border-b border-white/10 last:border-b-0 hover:text-[#FFEB3B] transition-colors"
                    data-testid={`mobile-nav-${l.id}-link`}
                  >
                    {l.label}
                  </motion.button>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 mb-1 text-center text-black px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold"
                  style={{ backgroundColor: BRAND_COLORS.yellow }}
                  data-testid="mobile-whatsapp-cta"
                  onClick={() => setOpen(false)}
                >
                  Order Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            data-testid="mobile-menu-backdrop"
          />
        )}
      </AnimatePresence>
    </>
  );
}
