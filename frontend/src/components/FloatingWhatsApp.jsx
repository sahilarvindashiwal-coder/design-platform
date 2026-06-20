import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL, BRAND } from "../data";
import { BRAND_COLORS } from "../constants/theme";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show || dismissed) return;
    const t = setTimeout(() => setTooltipOpen(true), 1200);
    return () => clearTimeout(t);
  }, [show, dismissed]);

  const dismiss = () => {
    setTooltipOpen(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 z-40 flex items-end gap-3"
          style={{ right: "max(1rem, calc(50% - 199px))" }}
          data-testid="floating-whatsapp"
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex relative items-center bg-white text-black pl-5 pr-3 py-3 max-w-xs shadow-2xl"
                data-testid="floating-whatsapp-tooltip"
              >
                <div className="pr-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-black/50 font-bold">
                    {BRAND}
                  </div>
                  <div className="text-sm mt-1 leading-snug">
                    Hi 👋 Looking for a specific piece? Chat with our stylist now.
                  </div>
                </div>
                <button
                  onClick={dismiss}
                  className="text-black/40 hover:text-black"
                  aria-label="Close"
                  data-testid="floating-whatsapp-tooltip-close"
                >
                  <X className="w-4 h-4" strokeWidth={2} />
                </button>
                <span className="absolute -right-2 bottom-5 w-3 h-3 bg-white rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative w-14 h-14 hover:brightness-110 text-black flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(255,235,59,0.6)] transition-all"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
            data-testid="floating-whatsapp-cta"
            aria-label="Order Now"
          >
            <span
              className="absolute inset-0 animate-ping opacity-30 pointer-events-none"
              style={{ backgroundColor: BRAND_COLORS.yellow }}
            />
            <MessageCircle className="relative w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
