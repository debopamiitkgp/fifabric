import Link from "next/link";
import { GeoBadge } from "./GeoBadge";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  geo: string;
  date: string;
  readingTime: string;
  featured?: boolean;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  geo,
  date,
  readingTime,
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/deals/${slug}`} className="block group">
        <article
          className="rounded-lg p-8 border transition-all duration-200 group-hover:border-gold/30"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <GeoBadge geo={geo} />
            <span className="text-nav uppercase tracking-widest font-medium" style={{ color: "var(--accent)" }}>
              Latest Analysis
            </span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4 group-hover:opacity-90 transition-opacity" style={{ color: "var(--text)" }}>
            {title}
          </h2>
          <p className="text-body mb-6 line-clamp-3" style={{ color: "var(--text-muted)" }}>
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-meta" style={{ color: "var(--text-muted)" }}>
              <span>{date}</span>
              <span>&middot;</span>
              <span>{readingTime}</span>
            </div>
            <span className="text-meta font-medium" style={{ color: "var(--accent)" }}>
              Read analysis &rarr;
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/deals/${slug}`} className="block group">
      <article
        className="rounded-lg p-6 border h-full transition-all duration-200 group-hover:border-gold/30"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <div className="mb-3">
          <GeoBadge geo={geo} />
        </div>
        <h3 className="font-headline text-lg font-semibold mb-3 group-hover:opacity-90 transition-opacity" style={{ color: "var(--text)" }}>
          {title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-meta" style={{ color: "var(--text-muted)" }}>
          <span>{date}</span>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
