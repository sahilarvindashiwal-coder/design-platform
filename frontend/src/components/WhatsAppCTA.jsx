import { MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";

/**
 * WhatsApp order button.
 */
export default function WhatsAppCTA({
  className = "",
  buttonClassName = "",
  testId = "whatsapp-cta",
  fullWidth = true,
  variant = "primary",
  showArrow = true,
  href = WHATSAPP_URL,
  onClick,
}) {
  const baseButton =
    variant === "primary"
      ? "group inline-flex items-center justify-center gap-2.5 hover:brightness-110 text-black px-6 py-4 text-[10px] uppercase tracking-[0.22em] font-bold transition-all"
      : "group inline-flex items-center justify-center gap-3 hover:brightness-110 text-black px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <div
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={`${baseButton} ${widthClass} ${buttonClassName}`}
        style={{ backgroundColor: BRAND_COLORS.yellow }}
        data-testid={testId}
      >
        <MessageCircle className="w-4 h-4" strokeWidth={2} />
        <span>Order on WhatsApp</span>
        {showArrow &&
          (variant === "large" ? (
            <ArrowUpRight
              className="w-5 h-5 group-hover:rotate-45 transition-transform"
              strokeWidth={2}
            />
          ) : (
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={2}
            />
          ))}
      </a>
    </div>
  );
}
