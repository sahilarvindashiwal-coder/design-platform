import { BRAND_COLORS } from "../constants/theme";

/** DESIGNER (white) + VAULT (red) logo */
export default function BrandLogo({ className = "", size = "default" }) {
  const sizes = {
    sm: "text-base",
    default: "text-lg",
    lg: "text-2xl",
  };

  return (
    <span
      className={`display font-black italic tracking-tight uppercase leading-none ${sizes[size]} ${className}`}
      data-testid="brand-logo"
    >
      <span style={{ color: BRAND_COLORS.white }}>DESIGNER </span>
      <span style={{ color: BRAND_COLORS.red }}>VAULT</span>
    </span>
  );
}
