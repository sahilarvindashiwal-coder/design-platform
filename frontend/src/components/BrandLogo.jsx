import { ASSETS } from "../config/assets";

const sizes = {
  sm: "h-8",
  default: "h-9",
  lg: "h-14",
};

/** Designer Vault logo — PNG from public/images/logo.png */
export default function BrandLogo({ className = "", size = "default" }) {
  return (
    <img
      src={ASSETS.logo}
      alt="Designer Vault"
      className={`w-auto object-contain object-left ${sizes[size]} ${className}`}
      data-testid="brand-logo"
    />
  );
}
