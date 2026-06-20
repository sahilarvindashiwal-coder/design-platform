import BrandRibbons from "./BrandRibbons";
import { DIVIDER_CENTER_PRODUCTS } from "../data/ribbonProducts";

export default function SectionDivider({ id }) {
  const centerProduct = DIVIDER_CENTER_PRODUCTS[id];

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      data-testid={id || "section-divider"}
    >
      <BrandRibbons
        centerProduct={centerProduct}
        height="clamp(320px, 72vw, 400px)"
        parallax
      />
    </section>
  );
}
