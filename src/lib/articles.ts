import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content", "deals");

export interface ArticleMeta {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  geo: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  featured: boolean;
  published: boolean;
  phifabric?: {
    title: string;
    description: string;
    href: string;
  };
  related?: string[];
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const articles = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || "",
        subtitle: data.subtitle || "",
        excerpt: data.excerpt || "",
        geo: data.geo ?? "global",
        category: data.category ?? "",
        date: data.date || "",
        author: data.author || "Debopam De",
        readingTime: stats.text,
        featured: data.featured || false,
        published: data.published !== false,
        phifabric: data.phifabric || undefined,
        related: data.related || [],
      } satisfies ArticleMeta;
    })
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title || "",
      subtitle: data.subtitle || "",
      excerpt: data.excerpt || "",
      geo: data.geo ?? "global",
      category: data.category ?? "",
      date: data.date || "",
      author: data.author || "Debopam De",
      readingTime: stats.text,
      featured: data.featured || false,
      published: data.published !== false,
      phifabric: data.phifabric || undefined,
      related: data.related || [],
    } satisfies ArticleMeta,
    content,
  };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
