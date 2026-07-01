import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, MessageCircle } from "lucide-react";
import { FEATURED_PICKS_COLLECTION } from "../data";
import { BRAND_COLORS } from "../constants/theme";
import { productWhatsAppUrl } from "../data/productsCatalog";

export default function FeaturedPicksCollection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="featured-picks-carousel"
      className="relative bg-transparent py-6"
      data-testid="featured-picks-collection-section"
    >
      <div className="px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 content-panel px-5 py-5"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: BRAND_COLORS.yellow }}
          >
            Featured Picks
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-2 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="featured-picks-heading"
          >
            Handpicked
            <br />
            <span className="text-accent">Classics.</span>
          </motion.h2>
          <Link
            to="/products"
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-bold hover:text-[#FFEB3B] transition-colors"
            style={{ color: BRAND_COLORS.yellow }}
            data-testid="featured-picks-view-catalog-link"
          >
            View Full Catalog
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </motion.div>

        {/* Interactive Vertical Accordion Stack */}
        <div className="flex flex-col gap-2.5" data-testid="featured-picks-carousel">
          {FEATURED_PICKS_COLLECTION.map((product, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={product.id}
                layout
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`overflow-hidden bg-black/95 border ${
                  isActive ? "border-[#FFEB3B]/50" : "border-white/10 hover:border-white/20"
                } transition-colors duration-300`}
              >
                {isActive ? (
                  // Expanded State Content
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-[240px]"
                    data-testid={`featured-picks-item-${product.id}`}
                  >
                    {/* Left: Interactive Image */}
                    <div className="w-[140px] h-full overflow-hidden bg-black relative flex-shrink-0">
                      <motion.img
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.05 }}
                        transition={{
                          duration: 8,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        src={product.img}
                        alt={`${product.name} ${product.model}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
                    </div>

                    {/* Right: Product Details & CTA */}
                    <div className="flex-1 p-4 flex flex-col justify-between bg-black/45">
                      <div>
                        <p className="text-[7px] uppercase tracking-[0.2em] text-white/50 font-semibold truncate">
                          {product.name}
                        </p>
                        <h3 className="display text-white text-[15px] uppercase tracking-wide leading-tight mt-1">
                          {product.model}
                        </h3>
                        <p
                          className="mt-2 text-sm font-black"
                          style={{ color: BRAND_COLORS.yellow }}
                        >
                          {product.price}
                        </p>
                      </div>

                      <a
                        href={productWhatsAppUrl(product)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex items-center justify-center gap-1.5 py-2 px-3 text-[8px] uppercase tracking-[0.2em] font-bold text-black hover:brightness-110 transition-all font-semibold"
                        style={{ backgroundColor: BRAND_COLORS.yellow }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
                        WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  // Collapsed State Content
                  <div
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center justify-between p-3.5 cursor-pointer h-[64px]"
                    data-testid={`featured-picks-item-${product.id}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Image Thumbnail */}
                      <div className="w-9 h-9 overflow-hidden bg-black border border-white/10 flex-shrink-0">
                        <img
                          src={product.img}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Product Names */}
                      <div className="min-w-0">
                        <p className="text-[7px] uppercase tracking-[0.15em] text-white/50 font-medium truncate leading-none">
                          {product.name}
                        </p>
                        <h3 className="display text-white text-[11px] uppercase tracking-wider mt-1 truncate">
                          {product.model}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-semibold text-white/60 tracking-wider">
                        {product.price}
                      </span>
                      <div className="p-1 rounded-full border border-white/10 text-white/60 group-hover:text-white group-hover:border-white/20 transition-all">
                        <Plus className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
