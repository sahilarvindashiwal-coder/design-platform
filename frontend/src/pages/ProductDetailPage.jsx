import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, ArrowRight } from "lucide-react";
import { BRAND_COLORS } from "../constants/theme";
import {
  getProductById,
  getCategoryLabel,
  productWhatsAppUrl,
} from "../data/productsCatalog";
import ProductSpecs from "../components/products/ProductSpecs";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <main className="pt-14 pb-12 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="display text-3xl uppercase text-white">Product Not Found</h1>
        <p className="mt-3 text-white/70 text-sm">
          This item may have been removed or the link is incorrect.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#FFEB3B] transition-colors"
          style={{ color: BRAND_COLORS.yellow }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>
      </main>
    );
  }

  const categoryLabel = getCategoryLabel(product.category);

  return (
    <main className="pt-14 pb-12 bg-transparent" data-testid="product-detail-page">
      <div className="px-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-[#FFEB3B] transition-colors font-semibold mb-6"
          data-testid="back-to-catalog"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative bg-black/80 border border-white/15 aspect-square flex items-center justify-center p-6 mb-6">
            {product.tag && (
              <span
                className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 text-black"
                style={{ backgroundColor: BRAND_COLORS.yellow }}
              >
                {product.tag}
              </span>
            )}
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              className="w-full h-full object-contain max-h-[320px]"
              data-testid="product-detail-image"
            />
          </div>

          <div className="content-panel px-5 py-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-1 border border-white/20 text-white/70">
                {categoryLabel}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
              {product.brand}
            </p>
            <h1
              className="display text-3xl uppercase tracking-tight text-white leading-tight mt-1"
              data-testid="product-detail-name"
            >
              {product.name}
            </h1>
            <p
              className="mt-3 text-2xl font-bold"
              style={{ color: BRAND_COLORS.yellow }}
              data-testid="product-detail-price"
            >
              {product.priceLabel}
            </p>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <ProductSpecs specs={product.specs} />

          <a
            href={productWhatsAppUrl(product)}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 flex items-center justify-center gap-2.5 w-full hover:brightness-110 text-black px-6 py-4 text-[10px] uppercase tracking-[0.22em] font-bold transition-all"
            style={{ backgroundColor: BRAND_COLORS.yellow }}
            data-testid="product-detail-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
