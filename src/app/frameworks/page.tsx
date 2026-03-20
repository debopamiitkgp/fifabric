import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frameworks",
  description: "Proprietary analytical frameworks used across FiFabric analyses.",
};

const frameworks = [
  {
    name: "Retention Half-Life Index",
    description:
      "Measures the decay rate of acquired talent post-close. Converts vesting cliffs, earnout structures, and cultural integration signals into a single probability-weighted retention score. Inspired by radioactive decay models.",
    appliedIn: ["AI Acqui-Hire Retention Cliff", "Wiz x Google $32B"],
    status: "Active",
  },
  {
    name: "Compute-Adjusted DCF",
    description:
      "Extends standard discounted cash flow to account for thermodynamic compute costs in AI-native businesses. Incorporates Landauer\u2019s limit as a theoretical floor on per-inference energy cost, providing a physics-grounded terminal value assumption.",
    appliedIn: ["HUMAIN JV GCC"],
    status: "Active",
  },
  {
    name: "Sovereign Capital Velocity",
    description:
      "Tracks the speed at which sovereign wealth funds deploy capital into AI infrastructure. Measures time from mandate to disbursement, adjusting for governance layers and co-investment requirements.",
    appliedIn: ["VCC Singapore", "HUMAIN JV GCC"],
    status: "In development",
  },
];

export default function FrameworksPage() {
  return (
    <div className="max-w-outer mx-auto px-6 py-12">
      <h1 className="font-headline text-3xl md:text-4xl font-semibold mb-3" style={{ color: "var(--text)" }}>
        Frameworks
      </h1>
      <p className="text-body mb-10" style={{ color: "var(--text-muted)" }}>
        Proprietary tools developed through deal analysis. Each framework is grounded in real transaction data.
      </p>

      <div className="space-y-6">
        {frameworks.map((fw) => (
          <div
            key={fw.name}
            className="rounded-lg p-8 border"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-headline text-xl font-semibold" style={{ color: "var(--text)" }}>
                {fw.name}
              </h2>
              <span
                className="text-meta px-2.5 py-1 rounded"
                style={{
                  backgroundColor: fw.status === "Active" ? "rgba(45, 139, 111, 0.15)" : "rgba(201, 168, 76, 0.15)",
                  color: fw.status === "Active" ? "#2D8B6F" : "var(--accent)",
                }}
              >
                {fw.status}
              </span>
            </div>
            <p className="text-body mb-4" style={{ color: "var(--text-muted)" }}>
              {fw.description}
            </p>
            <p className="text-meta" style={{ color: "var(--accent)" }}>
              Applied in {fw.appliedIn.length} {fw.appliedIn.length === 1 ? "piece" : "pieces"}:
              {" "}{fw.appliedIn.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
