import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND_COLORS } from "../../constants/theme";

export default function PolicyPageLayout({ title, lastUpdated, children, testId }) {
  return (
    <main className="pt-header pb-12 bg-transparent" data-testid={testId}>
      <div className="px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-[#FFEB3B] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back to Home
        </Link>

        <div className="content-panel px-5 py-7">
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Legal
          </span>
          <h1 className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase">
            {title}
          </h1>
          <p className="mt-3 text-white/50 text-[10px] uppercase tracking-[0.15em]">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 space-y-8 text-white/85 text-sm leading-relaxed policy-prose">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export function PolicySection({ title, children }) {
  return (
    <section>
      <h2 className="display text-white text-lg uppercase tracking-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
