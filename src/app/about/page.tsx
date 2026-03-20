import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Debopam De and FiFabric.",
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      {/* Profile */}
      <div className="flex items-start gap-6 mb-12">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-headline font-bold"
          style={{ backgroundColor: "var(--bg-card)", color: "var(--accent)", border: "2px solid var(--border)" }}
        >
          D
        </div>
        <div>
          <h1 className="font-headline text-2xl font-bold mb-1" style={{ color: "var(--text)" }}>
            Debopam De
          </h1>
          <p className="text-body" style={{ color: "var(--text-muted)" }}>
            14 years in Corp Dev, M&amp;A, and strategic transactions across systems integrators, financial services, and deep-tech. Currently leading deal origination and execution at a global SI.
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="prose-fifabric mb-12">
        <p>
          FiFabric is where I write about the deals I find most interesting &mdash; the ones at the intersection of AI infrastructure, sovereign capital, and cross-border regulatory arbitrage. Every piece is structured as an IC memo: recommendation upfront, thesis, key risks, and a clear position.
        </p>
        <p>
          I also explore theoretical physics and its surprising connections to technology economics on{" "}
          <a href="https://phifabric.com" target="_blank" rel="noopener noreferrer">
            PhiFabric
          </a>
          , where information theory and thermodynamics meet compute infrastructure.
        </p>
      </div>

      {/* Connect */}
      <section>
        <h2 className="text-nav uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--accent)" }}>
          Connect
        </h2>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/debopamde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "var(--text)" }}
          >
            LinkedIn &rarr;
          </a>
          <a
            href="mailto:debopam@fifabric.com"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "var(--text)" }}
          >
            Email &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
