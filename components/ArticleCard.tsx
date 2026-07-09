import Link from "next/link";
import Image from "next/image";
import { Article, formatDate } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({
  article,
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/article/${article.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-brand-200 transition-all"
      >
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-100">
          {article.imageUrl && (
            <Image
              src={article.imageUrl}
              alt={article.titleJa}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 896px"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <span className="inline-block px-2.5 py-0.5 bg-brand-600 text-white text-xs font-medium rounded-full mb-2">
              {article.category}
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white leading-snug line-clamp-2">
              {article.titleJa}
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {article.summaryJa}
          </p>
          <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
            <span>{article.source}</span>
            <span>·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span>{article.readTime}分で読める</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.id}`}
      className="group flex gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-4 border border-slate-200 hover:border-brand-200 hover:shadow-sm transition-all"
    >
      {article.imageUrl && (
        <div className="relative w-24 h-24 sm:w-32 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
          <Image
            src={article.imageUrl}
            alt={article.titleJa}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="128px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <span className="inline-block px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-medium rounded mb-1.5">
          {article.category}
        </span>
        <h3 className="font-semibold text-sm sm:text-base text-slate-900 leading-snug line-clamp-2 group-hover:text-brand-700 transition-colors">
          {article.titleJa}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mt-1 leading-relaxed">
          {article.summaryJa}
        </p>
        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
          <span>{article.source}</span>
          <span>·</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>
      </div>
    </Link>
  );
}
