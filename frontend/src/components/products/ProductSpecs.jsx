export default function ProductSpecs({ specs }) {
  if (!specs?.length) return null;

  return (
    <div className="content-panel px-4 py-4 border border-white/10" data-testid="product-specs">
      <h2 className="display text-lg uppercase tracking-wide text-white mb-4">
        Specifications
      </h2>
      <dl className="space-y-3">
        {specs.map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
          >
            <dt className="text-[10px] uppercase tracking-[0.12em] text-white/50 font-semibold shrink-0">
              {label}
            </dt>
            <dd className="text-sm text-white text-right">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
