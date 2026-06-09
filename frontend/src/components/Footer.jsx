import { Instagram, Twitter, Facebook, MessageCircle, Mail } from "lucide-react";
import { BRAND, WHATSAPP_URL } from "../data";

const COLS = [
  {
    label: "Maisons",
    items: ["Rolex", "Patek Philippe", "Audemars Piguet", "Omega", "Richard Mille"],
  },
  {
    label: "Help",
    items: ["WhatsApp Order", "Shipping", "Warranty", "Authentication", "FAQ"],
  },
  {
    label: "Atelier",
    items: ["Our Story", "Craftsmanship", "Press", "Reviews", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-black border-t border-white/5 pt-20 pb-8"
      data-testid="footer"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Brand col */}
          <div className="md:col-span-5">
            <div className="serif text-3xl text-white mb-6">
              {BRAND.split(" ")[0]}
              <span className="text-[#d4af37]">.</span>
              <span className="italic font-light"> {BRAND.split(" ")[1]}</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">
              Faithful tributes to horology&apos;s most coveted icons — hand-finished,
              ETA-powered, shipped discreetly to 38 countries.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#d4af37] hover:bg-white text-black px-6 py-3 text-xs uppercase tracking-[0.25em] font-semibold transition-all"
              data-testid="footer-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
              Chat now
            </a>
          </div>

          {/* Link cols */}
          {COLS.map((c, i) => (
            <div
              key={c.label}
              className="md:col-span-2"
              data-testid={`footer-col-${i}`}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-6">
                {c.label}
              </div>
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-1 flex md:flex-col items-start gap-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-2">
              Follow
            </div>
            <div className="flex md:flex-col gap-4">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 hover:border-[#d4af37] hover:bg-[#d4af37] flex items-center justify-center group transition-all"
                  data-testid={`footer-social-${i}`}
                >
                  <Icon
                    className="w-4 h-4 text-white/60 group-hover:text-black"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Huge brand mark */}
        <div className="border-t border-white/5 pt-12 pb-8">
          <div className="serif italic text-white/[0.04] text-[20vw] leading-none tracking-tighter text-center select-none">
            {BRAND}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/30">
          <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Shipping
            </a>
          </div>
          <div className="uppercase tracking-[0.25em]">
            Made with obsession · Geneva
          </div>
        </div>
      </div>
    </footer>
  );
}
