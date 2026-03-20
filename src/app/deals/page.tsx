import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata = {
  title: "Deal Archive",
  description: "All FiFabric deal analyses and IC memos.",
};

export default function DealsPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-outer mx-auto px-6 py-12">
      <h1 className="font-headline text-3xl md:text-4xl font-semibold mb-3" style={{ color: "var(--text)" }}>
        Deal Archive
      </h1>
      <p className="text-body mb-10" style={{ color: "var(--text-muted)" }}>
        IC-memo format analysis of deep-tech M&amp;A transactions.
      </p>

      {/* Geography filter (visual only for now) */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {["All", "GCC", "Hong Kong", "Singapore", "Global"].map((label) => (
          <button
            key={label}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-80 ${
              label === "All" ? "ring-1" : ""
            }`}
            style={{
              backgroundColor: label === "All" ? "var(--accent)" : "var(--bg-card)",
              color: label === "All" ? "#0A0F1C" : "var(--text-muted)",
              borderColor: "var(--border)",
              ...(label !== "All" ? { border: "1px solid var(--border)" } : {}),
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            First analyses publishing soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
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
    </div>
  );
}
