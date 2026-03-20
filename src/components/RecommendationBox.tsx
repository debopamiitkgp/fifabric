export function RecommendationBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg p-6 my-8 border-l-4"
      style={{
        backgroundColor: "var(--bg-card)",
        borderLeftColor: "var(--accent)",
      }}
    >
      <p className="text-nav uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--accent)" }}>
        Recommendation
      </p>
      <div className="text-body" style={{ color: "var(--text)" }}>
        {children}
      </div>
    </div>
  );
}
