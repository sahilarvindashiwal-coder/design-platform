import BrandRibbons from "./BrandRibbons";

export default function SectionDivider({ id }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      data-testid={id || "section-divider"}
    >
      <BrandRibbons
        height="clamp(260px, 60vw, 340px)"
        parallax
      />
    </section>
  );
}
