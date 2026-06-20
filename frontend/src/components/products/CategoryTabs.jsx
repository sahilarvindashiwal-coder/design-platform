import { BRAND_COLORS } from "../../constants/theme";

const ALL_TAB = "all";

export default function CategoryTabs({ categories, activeCategory, onChange }) {
  const tabs = [{ id: ALL_TAB, label: "All" }, ...categories];

  return (
    <div
      className="sticky top-14 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 -mx-4 px-4 py-3"
      data-testid="category-tabs"
    >
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`flex-shrink-0 px-3.5 py-2 text-[9px] uppercase tracking-[0.18em] font-bold transition-colors ${
                isActive
                  ? "text-black"
                  : "text-white/80 border border-white/20 hover:border-[#FFEB3B]/50 hover:text-[#FFEB3B]"
              }`}
              style={isActive ? { backgroundColor: BRAND_COLORS.yellow } : undefined}
              data-testid={`category-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { ALL_TAB };
