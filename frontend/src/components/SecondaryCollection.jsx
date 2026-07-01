import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { SECONDARY_COLLECTION } from "../data";
import { BRAND_COLORS } from "../constants/theme";
import { productWhatsAppUrl } from "../data/productsCatalog";

export default function SecondaryCollection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SECONDARY_COLLECTION.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SECONDARY_COLLECTION.length) % SECONDARY_COLLECTION.length);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section
      id="trending"
      className="relative bg-transparent py-6 overflow-hidden"
      data-testid="secondary-collection-section"
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
            Trending Now
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-2 display font-black text-white text-3xl leading-[0.95] tracking-tight uppercase"
            data-testid="secondary-collection-heading"
          >
            Curated
            <br />
            <span className="text-accent">Accessories.</span>
          </motion.h2>
          <Link
            to="/products"
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-bold hover:text-[#FFEB3B] transition-colors"
            style={{ color: BRAND_COLORS.yellow }}
            data-testid="secondary-collection-view-catalog-link"
          >
            View Full Catalog
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </motion.div>

        {/* 3D Coverflow Slider Container */}
        <div className="relative flex flex-col items-center justify-center py-6 min-h-[380px]">
          {/* Main Slider Window */}
          <div className="relative w-full flex items-center justify-center h-[340px] overflow-visible">
            <AnimatePresence initial={false}>
              {SECONDARY_COLLECTION.map((product, index) => {
                // Calculate position relative to active index
                const offset = index - activeIndex;
                const isActive = index === activeIndex;
                
                // Determine styling based on offset
                let x = 0;
                let scale = 1;
                let zIndex = 10;
                let opacity = 1;
                let isVisible = true;

                if (offset === 0) {
                  x = 0;
                  scale = 1.0;
                  zIndex = 10;
                  opacity = 1;
                } else if (offset === -1 || (offset === SECONDARY_COLLECTION.length - 1 && activeIndex === 0)) {
                  // Left card
                  x = -85;
                  scale = 0.82;
                  zIndex = 5;
                  opacity = 0.6;
                } else if (offset === 1 || (offset === -(SECONDARY_COLLECTION.length - 1) && activeIndex === SECONDARY_COLLECTION.length - 1)) {
                  // Right card
                  x = 85;
                  scale = 0.82;
                  zIndex = 5;
                  opacity = 0.6;
                } else {
                  // Hidden cards
                  isVisible = false;
                  opacity = 0;
                  zIndex = 0;
                }

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={product.id}
                    className="absolute w-[240px] h-[320px] cursor-pointer"
                    style={{
                      zIndex,
                    }}
                    animate={{
                      x,
                      scale,
                      opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(index);
                      }
                    }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={handleDragEnd}
                  >
                    <div 
                      className={`w-full h-full flex flex-col bg-black/95 border ${
                        isActive ? "border-[#FFEB3B]/50" : "border-white/10"
                      } overflow-hidden shadow-2xl transition-colors duration-300`}
                      data-testid={`secondary-collection-item-${product.id}`}
                    >
                      <div className="relative aspect-[4/3] bg-black overflow-hidden flex-1">
                        <img
                          src={product.img}
                          alt={`${product.name} ${product.model}`}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                        {/* Semi-transparent overlay for non-active cards */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/25 transition-opacity duration-300" />
                        )}
                      </div>
                      
                      <div className="p-3 border-t border-white/10 bg-black/80 backdrop-blur-md">
                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/50 font-semibold truncate">
                          {product.name}
                        </p>
                        <h3 className="display text-white text-xs uppercase tracking-wide leading-tight mt-0.5 truncate">
                          {product.model}
                        </h3>
                        <div className="mt-2 flex items-center justify-between">
                          <p
                            className="text-xs font-black"
                            style={{ color: BRAND_COLORS.yellow }}
                          >
                            {product.price}
                          </p>
                          {isActive && (
                            <a
                              href={productWhatsAppUrl(product)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[7px] uppercase tracking-[0.15em] font-bold text-white bg-[#FFEB3B]/10 hover:bg-[#FFEB3B]/20 px-2 py-1 border border-[#FFEB3B]/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Order
                              <ChevronRight className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1 z-20 p-2 rounded-full bg-black/80 border border-white/10 text-white hover:text-[#FFEB3B] hover:border-[#FFEB3B]/30 transition-all shadow-lg active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 z-20 p-2 rounded-full bg-black/80 border border-white/10 text-white hover:text-[#FFEB3B] hover:border-[#FFEB3B]/30 transition-all shadow-lg active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex gap-2.5 mt-4 z-10">
            {SECONDARY_COLLECTION.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === activeIndex 
                    ? "w-6 bg-[#FFEB3B]" 
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
