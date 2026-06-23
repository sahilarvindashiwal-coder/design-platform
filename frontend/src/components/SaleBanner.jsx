import useSaleCountdown from "../hooks/useSaleCountdown";
import { BRAND_COLORS } from "../constants/theme";

export default function SaleBanner() {
  const { formatted } = useSaleCountdown();

  return (
    <div
      className="flex items-center justify-center gap-2 px-4 py-2 bg-black/95 border-b border-white/10 backdrop-blur-md"
      data-testid="sale-banner"
    >
      <span
        className="flex-shrink-0 px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] font-bold text-white"
        style={{ backgroundColor: BRAND_COLORS.red }}
      >
        Sale
      </span>
      <span className="text-[9px] uppercase tracking-[0.12em] text-white/75 font-semibold">
        Ends in
      </span>
      <span
        className="text-[10px] font-bold tabular-nums tracking-wider"
        style={{ color: BRAND_COLORS.yellow }}
        data-testid="sale-banner-countdown"
      >
        {formatted}
      </span>
    </div>
  );
}
