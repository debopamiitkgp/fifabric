import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import Link from "next/link";

const frameworks = [
  {
    name: "Retention Half-Life Index",
    description:
      "Measures the decay rate of acquired talent post-close. Converts vesting cliffs and earnout structures into a single probability-weighted retention score.",
    appliedIn: 2,
  },
  {
    name: "Compute-Adjusted DCF",
    description:
      "Extends standard DCF to account for thermodynamic compute costs in AI-native businesses. Incorporates Landauer\u2019s limit as a theoretical floor.",
    appliedIn: 1,
  },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.find((a) => a.featured) || articles[0];
  const rest = articles.filter((a) => a.slug !== featured?.slug).slice(0, 4);

  return (
    <div className="max-w-outer mx-auto px-6 py-12">
      {/* Hero */}
      <section className="mb-16">
        <p className="text-nav uppercase tracking-widest font-medium mb-8" style={{ color: "var(--accent)" }}>
          Latest Analysis
        </p>

        {featured ? (
          <>
            <ArticleCard
              slug={featured.slug}
              title={featured.title}
              excerpt={featured.excerpt}
              geo={featured.geo}
              date={featured.date}
              readingTime={featured.readingTime}
              featured
            />

            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {rest.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    geo={article.geo}
                    date={article.date}
                    readingTime={article.readingTime}
                  />
                ))}
              </div>
            )}

            {articles.length > 3 && (
              <div className="text-center mt-8">
                <Link
                  href="/deals"
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: "var(--accent)" }}
                >
                  View all analysis &rarr;
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="font-headline text-2xl font-semibold mb-3" style={{ color: "var(--text)" }}>
              First analyses publishing soon.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Deep-tech M&amp;A intelligence. IC-memo format.
            </p>
          </div>
        )}
      </section>

      {/* Frameworks */}
      <section className="mb-16">
        <h2 className="font-headline text-2xl font-semibold mb-8" style={{ color: "var(--text)" }}>
          Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="rounded-lg p-6 border"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <h3 className="font-headline text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
                {fw.name}
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                {fw.description}
              </p>
              <p className="text-meta" style={{ color: "var(--accent)" }}>
                Applied in {fw.appliedIn} {fw.appliedIn === 1 ? "piece" : "pieces"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="text-center py-16 border-t" style={{ borderColor: "var(--border)" }}>
        <h2 className="font-headline text-2xl font-semibold mb-3" style={{ color: "var(--text)" }}>
          Stay current
        </h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          New analysis delivered when published. No schedule, no spam.
        </p>
        <SubscribeForm />
      </section>
    </div>
  );
}
