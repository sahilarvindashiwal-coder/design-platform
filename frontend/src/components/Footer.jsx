import { Instagram, Twitter, Facebook, MessageCircle, Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";
import TrustBar from "./TrustBar";
import { BRAND, WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";

const COLS = [
  {
    label: "Maisons",
    items: ["Rolex", "Patek Philippe", "Audemars Piguet", "Omega", "Richard Mille"],
  },
  {
    label: "Help",
    items: ["WhatsApp Order", "Shipping", "Warranty", "Authentication", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-transparent" data-testid="footer">
      <TrustBar />

      <div className="border-t border-white/10 pt-10 pb-8">
        <div className="px-4">
          <div className="content-panel p-5 mb-8">
            <BrandLogo size="lg" className="mb-4" />
            <p className="text-white/80 text-sm leading-relaxed">
              Faithful tributes to horology&apos;s most coveted icons — hand-finished,
              ETA-powered, shipped discreetly to 38 countries.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 hover:brightness-110 text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all w-full justify-center"
              style={{ backgroundColor: BRAND_COLORS.yellow }}
              data-testid="footer-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Chat now
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {COLS.map((c, i) => (
              <div key={c.label} data-testid={`footer-col-${i}`}>
                <div
                  className="text-[9px] uppercase tracking-[0.25em] mb-4 font-bold"
                  style={{ color: BRAND_COLORS.yellow }}
                >
                  {c.label}
                </div>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-xs transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-white/15 hover:border-[#FFEB3B] hover:bg-[#FFEB3B] flex items-center justify-center group transition-all"
                data-testid={`footer-social-${i}`}
              >
                <Icon
                  className="w-4 h-4 text-white/70 group-hover:text-black"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 pb-6">
            <div className="display font-black text-white/[0.06] text-[22vw] leading-none tracking-tighter text-center select-none uppercase">
              {BRAND}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[9px] text-white/50">
            <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/80 transition-colors">Shipping</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
