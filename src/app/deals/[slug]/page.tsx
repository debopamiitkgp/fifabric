import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getArticleSlugs, getAllArticles } from "@/lib/articles";
import { GeoBadge } from "@/components/GeoBadge";
import { RecommendationBox } from "@/components/RecommendationBox";
import { PhiFabricFootnote } from "@/components/PhiFabricFootnote";
import { DataCallout } from "@/components/DataCallout";
import { ArticleCard } from "@/components/ArticleCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import type { Metadata } from "next";

const mdxComponents = {
  RecommendationBox,
  PhiFabricFootnote,
  DataCallout,
};

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.meta.title,
    description: article.meta.excerpt,
    openGraph: {
      title: article.meta.title,
      description: article.meta.excerpt,
      type: "article",
      publishedTime: article.meta.date,
      authors: [article.meta.author],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const { meta, content } = article;
  const allArticles = getAllArticles();

  // Get related articles
  const related = meta.related
    ? allArticles.filter((a) => meta.related!.includes(a.slug)).slice(0, 2)
    : allArticles.filter((a) => a.slug !== meta.slug).slice(0, 2);

  return (
    <article className="py-12">
      {/* Header */}
      <header className="max-w-content mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <GeoBadge geo={meta.geo} />
          {meta.category && (
            <span className="text-meta" style={{ color: "var(--text-muted)" }}>
              {meta.category}
            </span>
          )}
        </div>

        <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--text)" }}>
          {meta.title}
        </h1>

        {meta.subtitle && (
          <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
            {meta.subtitle}
          </p>
        )}

        <div className="flex items-center gap-4 text-meta" style={{ color: "var(--text-muted)" }}>
          <span className="font-medium" style={{ color: "var(--text)" }}>
            {meta.author}
          </span>
          <span>&middot;</span>
          <span>{meta.date}</span>
          <span>&middot;</span>
          <span>{meta.readingTime}</span>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 prose-fifabric">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* PhiFabric footnote */}
      {meta.phifabric && (
        <div className="max-w-content mx-auto px-6">
          <PhiFabricFootnote
            title={meta.phifabric.title}
            description={meta.phifabric.description}
            href={meta.phifabric.href}
          />
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-mid mx-auto px-6 mt-16">
          <h2 className="font-headline text-xl font-semibold mb-6" style={{ color: "var(--text)" }}>
            Related Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <ArticleCard
                key={r.slug}
                slug={r.slug}
                title={r.title}
                excerpt={r.excerpt}
                geo={r.geo}
                date={r.date}
                readingTime={r.readingTime}
              />
            ))}
          </div>
        </section>
      )}

      {/* Subscribe */}
      <section className="max-w-content mx-auto px-6 text-center mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
        <h2 className="font-headline text-xl font-semibold mb-3" style={{ color: "var(--text)" }}>
          Stay current
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          New analysis delivered when published.
        </p>
        <SubscribeForm />
      </section>
    </article>
  );
}
