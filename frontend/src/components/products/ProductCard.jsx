import { Link } from "react-router-dom";
import { BRAND_COLORS } from "../../constants/theme";
import {
  getProductImages,
  productWhatsAppUrl,
} from "../../data/productsCatalog";
import ProductImageGallery from "./ProductImageGallery";

export default function ProductCard({ product }) {
  const images = getProductImages(product);

  return (
    <div
      className="group bg-black/95 border border-white/15 overflow-hidden hover:border-[#FFEB3B]/50 transition-colors flex flex-col"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-square bg-black/80 overflow-hidden">
        {product.tag && (
          <span
            className="absolute top-2 left-2 z-10 text-[7px] uppercase tracking-[0.15em] font-bold px-2 py-1 text-black"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
          >
            {product.tag}
          </span>
        )}
        <ProductImageGallery
          images={images}
          alt={`${product.brand} ${product.name}`}
          variant="card"
          productId={product.id}
          className="h-full"
          imageClassName="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-3"
          testId={`product-card-image-${product.id}`}
        />
      </div>
      <div className="p-3 flex flex-col flex-1 border-t border-white/10">
        <Link to={`/products/${product.id}`} className="flex flex-col flex-1">
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
        </Link>
        <a
          href={productWhatsAppUrl(product)}
          target="_blank"
          rel="noreferrer"
          className="mt-auto pt-2 inline-flex items-center justify-center text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-2 text-black hover:brightness-110 transition-all"
          style={{ backgroundColor: BRAND_COLORS.yellow }}
          data-testid={`product-order-now-${product.id}`}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
