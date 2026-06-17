import { Gem, Truck, ShieldCheck, Headphones } from "lucide-react";
import { BRAND_COLORS } from "../constants/theme";

const ITEMS = [
  { icon: Gem, label: "Premium Quality" },
  { icon: Truck, label: "Free Shipping" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function TrustBar({ className = "" }) {
  return (
    <div
      className={`border-y border-white/10 content-panel ${className}`}
      data-testid="trust-bar"
    >
      <div className="px-4 py-3.5">
        <div className="grid grid-cols-2 gap-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2"
              data-testid={`trust-bar-item-${i}`}
            >
              <item.icon
                className="w-4 h-4 flex-shrink-0"
                style={{ color: BRAND_COLORS.yellow }}
                strokeWidth={1.8}
              />
              <span className="text-[8px] uppercase tracking-[0.12em] text-white font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
