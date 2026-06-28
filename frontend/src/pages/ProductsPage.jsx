import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import { BRAND_COLORS } from "../constants/theme";
import {
  CATEGORIES,
  PRODUCTS,
  getProductsByCategory,
} from "../data/productsCatalog";
import CategoryTabs, { ALL_TAB } from "../components/products/CategoryTabs";
import ProductCard from "../components/products/ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 gap-3" data-testid="product-grid">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}

function CategorySection({ category, products }) {
  return (
    <section
      id={`category-${category.id}`}
      className="scroll-mt-32"
      data-testid={`category-section-${category.id}`}
    >
      <h2 className="display text-2xl uppercase tracking-tight text-white mb-4">
        {category.label}
      </h2>
      <ProductGrid products={products} />
    </section>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_TAB);

  const filteredProducts =
    activeCategory === ALL_TAB
      ? null
      : getProductsByCategory(activeCategory);

  return (
    <main className="pt-header pb-12 bg-transparent" data-testid="products-page">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 content-panel px-5 py-6"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Full Catalog
          </span>
          <h1
            className="mt-3 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="products-heading"
          >
            Shop The
            <br />
            <span className="text-accent">Vault.</span>
          </h1>
          <p className="mt-4 text-white/75 text-sm leading-relaxed max-w-xs mx-auto">
            Browse our full range of super-clone bags, watches, shoes, jewelry,
            and eyewear — all available to order in one tap.
          </p>
        </motion.div>

        <CategoryTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-6">
          {activeCategory === ALL_TAB ? (
            <div className="space-y-10">
              {CATEGORIES.map((category) => {
                const categoryProducts = getProductsByCategory(category.id);
                if (!categoryProducts.length) return null;
                return (
                  <CategorySection
                    key={category.id}
                    category={category}
                    products={categoryProducts}
                  />
                );
              })}
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mt-10 flex flex-col items-center justify-center gap-4 p-6 hover:brightness-110 transition-all text-black"
          style={{ backgroundColor: BRAND_COLORS.yellow }}
          data-testid="products-whatsapp-cta"
        >
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-[0.3em] text-black/60 mb-1.5 font-bold">
              Can&apos;t find what you want?
            </div>
            <h3 className="display text-2xl leading-tight uppercase">
              240+ Styles In Stock
            </h3>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Order on WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
        </motion.div>

        <p className="mt-4 text-center text-[10px] text-white/40 uppercase tracking-[0.2em]">
          {PRODUCTS.length} products listed
        </p>
      </div>
    </main>
  );
}
