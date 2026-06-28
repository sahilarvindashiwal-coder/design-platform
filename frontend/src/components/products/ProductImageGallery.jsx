import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BRAND_COLORS } from "../../constants/theme";

function GalleryDots({ count, selectedIndex, onSelect }) {
  if (count <= 1) return null;

  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show image ${index + 1}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onSelect(index);
          }}
          className={`h-1.5 rounded-full transition-all ${
            index === selectedIndex ? "w-4" : "w-1.5 bg-white/40"
          }`}
          style={
            index === selectedIndex
              ? { backgroundColor: BRAND_COLORS.yellow }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default function ProductImageGallery({
  images,
  alt,
  variant = "card",
  productId,
  className = "",
  imageClassName = "",
  testId,
}) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const handleNavigate = () => {
    if (productId) {
      navigate(`/products/${productId}`);
    }
  };

  if (images.length <= 1) {
    const image = (
      <img
        src={images[0]}
        alt={alt}
        className={imageClassName}
        loading="lazy"
        data-testid={testId}
      />
    );

    if (variant === "card" && productId) {
      return (
        <button
          type="button"
          onClick={handleNavigate}
          className={`w-full h-full flex items-center justify-center ${className}`}
        >
          {image}
        </button>
      );
    }

    return (
      <div className={`flex items-center justify-center ${className}`}>
        {image}
      </div>
    );
  }

  const isDetail = variant === "detail";
  const controlClass = isDetail
    ? "h-9 w-9 bg-black/70 border border-white/20 text-white hover:border-[#FFEB3B]/50"
    : "h-7 w-7 bg-black/80 border border-white/15 text-white/90 hover:border-[#FFEB3B]/50";

  return (
    <div
      className={`relative w-full h-full ${className}`}
      data-testid={testId}
    >
      <div ref={emblaRef} className="overflow-hidden w-full h-full">
        <div className="flex h-full">
          {images.map((src, index) => (
            <div
              key={src}
              className="min-w-0 shrink-0 grow-0 basis-full h-full flex items-center justify-center"
            >
              {variant === "card" && productId ? (
                <button
                  type="button"
                  onClick={handleNavigate}
                  className="w-full h-full flex items-center justify-center p-3"
                >
                  <img
                    src={src}
                    alt={`${alt} ${index + 1}`}
                    className={imageClassName}
                    loading={index === 0 ? "lazy" : "lazy"}
                  />
                </button>
              ) : (
                <img
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  className={imageClassName}
                  loading={index === 0 ? "lazy" : "lazy"}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center transition-colors ${controlClass}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          emblaApi?.scrollPrev();
        }}
      >
        <ChevronLeft className={isDetail ? "w-5 h-5" : "w-4 h-4"} strokeWidth={2} />
      </button>

      <button
        type="button"
        aria-label="Next image"
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center transition-colors ${controlClass}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          emblaApi?.scrollNext();
        }}
      >
        <ChevronRight className={isDetail ? "w-5 h-5" : "w-4 h-4"} strokeWidth={2} />
      </button>

      <GalleryDots
        count={images.length}
        selectedIndex={selectedIndex}
        onSelect={scrollTo}
      />
    </div>
  );
}
