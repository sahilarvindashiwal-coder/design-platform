import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BRAND_COLORS } from "../constants/theme";
import WhatsAppCTA from "../components/WhatsAppCTA";
import ProductImageGallery from "../components/products/ProductImageGallery";
import {
  getProductById,
  getProductImages,
  productWhatsAppUrl,
} from "../data/productsCatalog";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <main className="pt-header pb-12 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
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

  return (
    <main className="pt-header pb-6 bg-transparent" data-testid="product-detail-page">
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
          <div className="relative bg-black/80 border border-white/15 aspect-square mb-6">
            <ProductImageGallery
              images={getProductImages(product)}
              alt={`${product.brand} ${product.name}`}
              variant="detail"
              className="h-full p-6"
              imageClassName="w-full h-full object-contain max-h-[320px]"
              testId="product-detail-image"
            />
          </div>

          <div className="content-panel px-5 py-5 mb-4">
            <h1
              className="display text-3xl uppercase tracking-tight text-white leading-tight"
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
          </div>

          <WhatsAppCTA
            testId="product-detail-whatsapp-cta"
            href={productWhatsAppUrl(product)}
            className="mt-6"
          />
        </motion.div>
      </div>
    </main>
  );
}
