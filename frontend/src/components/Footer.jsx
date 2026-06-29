import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import BrandLogo from "./BrandLogo";
import TrustBar from "./TrustBar";
import WhatsAppCTA from "./WhatsAppCTA";
import { BRAND, WHATSAPP_URL } from "../data";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/policies";
import { SITE_SECTIONS } from "../config/siteSections";
import { BRAND_COLORS } from "../constants/theme";

const COLS = [
  {
    label: "Categories",
    items: ["Bags", "Watches", "Shoes", "Sunglasses", "New Arrivals"],
  },
  {
    label: "Help",
    items: ["Order on WhatsApp", "Shipping", "Warranty", "QC Photos", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-transparent" data-testid="footer">
      {SITE_SECTIONS.showTrustBar && <TrustBar />}

      <div className="border-t border-white/10 pt-10 pb-8">
        <div className="px-4">
          {SITE_SECTIONS.showFooterAbout && (
            <div className="content-panel p-5 mb-8">
              <BrandLogo size="lg" className="mb-4" />
              <p className="text-white/80 text-sm leading-relaxed">
                Your one-stop vault for mirror-quality designer bags, timepieces,
                sneakers, and eyewear — hand-inspected, QC-verified, and shipped
                discreetly to 38 countries.
              </p>
              <WhatsAppCTA
                testId="footer-whatsapp-cta"
                buttonClassName="mt-5 px-6 py-3 text-[10px] uppercase tracking-[0.2em]"
              />
            </div>
          )}

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
                      {item === "Order on WhatsApp" ? (
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/70 hover:text-white text-xs transition-colors"
                        >
                          {item}
                        </a>
                      ) : item === "FAQ" ? (
                        <Link
                          to="/#faq"
                          className="text-white/70 hover:text-white text-xs transition-colors"
                        >
                          {item}
                        </Link>
                      ) : (
                        <span className="text-white/70 text-xs">{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-4 py-3 mb-8 border border-white/15 hover:border-[#FFEB3B] hover:bg-[#FFEB3B]/10 transition-all group w-full"
            data-testid="footer-social-instagram"
          >
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/15 group-hover:border-[#FFEB3B] group-hover:bg-[#FFEB3B] transition-all">
              <Instagram
                className="w-5 h-5 text-white/70 group-hover:text-black transition-colors"
                strokeWidth={1.5}
              />
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-white/50">
                Follow us
              </span>
              <span className="block text-sm font-semibold text-white group-hover:text-[#FFEB3B] transition-colors">
                {INSTAGRAM_HANDLE}
              </span>
            </span>
          </a>

          <div
            className="flex items-center gap-4 pt-6 border-t border-white/10 text-[9px] text-white/50"
            data-testid="footer-policy-links"
          >
            <Link to="/privacy" className="hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
            <Link to="/returns" className="hover:text-white/80 transition-colors">
              Returns
            </Link>
          </div>

          {SITE_SECTIONS.showFooterLegal && (
            <>
              <div className="border-t border-white/10 pt-8 pb-6 mt-6">
                <div className="display font-black text-white/[0.06] text-[22vw] leading-none tracking-tighter text-center select-none uppercase">
                  {BRAND}
                </div>
              </div>

              <div className="text-[9px] text-white/50">
                © {new Date().getFullYear()} {BRAND}. All rights reserved.
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
