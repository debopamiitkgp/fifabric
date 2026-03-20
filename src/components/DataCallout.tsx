export function DataCallout({
  items,
}: {
  items?: { value: string; label: string }[];
}) {
  if (!items || !Array.isArray(items)) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 py-6 border-y" style={{ borderColor: "var(--border)" }}>
      {items.map((item) => (
        <div key={item.label} className="data-callout">
          <span className="value">{item.value}</span>
          <span className="label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
