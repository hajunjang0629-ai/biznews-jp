import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleById, articles } from "@/lib/articles";
import ArticleDetail from "@/components/ArticleDetail";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleById(params.id);
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: `${article.titleJa} | BizNews JP`,
    description: article.summaryJa,
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleById(params.id);
  if (!article) notFound();
  return <ArticleDetail article={article} />;
}
