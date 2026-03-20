const geoStyles: Record<string, { bg: string; text: string; label: string }> = {
  gcc: { bg: "#1a2f28", text: "#2D8B6F", label: "GCC" },
  hk: { bg: "#241f33", text: "#7C5CBF", label: "Hong Kong" },
  sg: { bg: "#1a2f2f", text: "#3A8B8B", label: "Singapore" },
  global: { bg: "#1f2028", text: "#6B7280", label: "Global" },
};

export function GeoBadge({ geo }: { geo: string }) {
  const style = geoStyles[geo.toLowerCase()] || geoStyles.global;
  return (
    <span
      className="inline-block px-2.5 py-1 rounded text-xs font-medium uppercase tracking-wider"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}
