import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BRAND_COLORS } from "../../constants/theme";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-black/95 border border-white/15 overflow-hidden hover:border-[#FFEB3B]/50 transition-colors flex flex-col"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-square bg-black/80 flex items-center justify-center p-3 overflow-hidden">
        {product.tag && (
          <span
            className="absolute top-2 left-2 z-10 text-[7px] uppercase tracking-[0.15em] font-bold px-2 py-1 text-black"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
          >
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex flex-col flex-1 border-t border-white/10">
        <p className="text-[8px] uppercase tracking-[0.15em] text-white/50 font-semibold truncate">
          {product.brand}
        </p>
        <h3 className="display text-white text-sm uppercase tracking-wide leading-tight line-clamp-2 mt-0.5">
          {product.name}
        </h3>
        <p
          className="mt-1.5 text-sm font-bold"
          style={{ color: BRAND_COLORS.yellow }}
        >
          {product.priceLabel}
        </p>
        <span className="mt-auto pt-2 inline-flex items-center gap-1 text-[8px] uppercase tracking-[0.2em] text-white/70 group-hover:text-[#FFEB3B] transition-colors font-semibold">
          View Details
          <ArrowRight className="w-3 h-3" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
