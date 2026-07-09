"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article, formatDate } from "@/lib/articles";

interface ArticleDetailProps {
  article: Article;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  const paragraphsJa = article.bodyJa.split("\n\n").filter(Boolean);
  const paragraphsOriginal = article.bodyOriginal
    .split("\n\n")
    .filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <Link
        href="/"
        className="hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-6"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        記事一覧に戻る
      </Link>

      {article.imageUrl && (
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-sm">
          <Image
            src={article.imageUrl}
            alt={article.titleJa}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      )}

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-brand-600 text-white text-xs font-medium rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-slate-400">{article.source}</span>
        </div>
        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
          {article.titleJa}
        </h1>
        <p className="text-sm text-slate-500 italic mb-3">{article.title}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span>·</span>
          <span>約{article.readTime}分で読める</span>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-brand-600 rounded-full" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            要約
          </h2>
        </div>
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 border border-brand-100 rounded-2xl p-5 sm:p-6 shadow-sm">
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed sm:leading-loose">
            {article.summaryJa}
          </p>
        </div>
      </section>

      {/* Full Japanese Translation */}
      <section className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-slate-400 rounded-full" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            和訳全文
          </h2>
        </div>
        <div className="article-body bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          {paragraphsJa.map((para, i) => (
            <p key={i} className="text-sm sm:text-base">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Original Text (Collapsible) */}
      <section className="mb-8">
        <button
          onClick={() => setShowOriginal(!showOriginal)}
          className="w-full flex items-center justify-between gap-3 p-4 min-h-[48px] bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors text-left text-base"
          aria-expanded={showOriginal}
        >
          <span className="text-sm font-medium text-slate-700">
            原文（英語）を{showOriginal ? "隠す" : "表示する"}
          </span>
          <svg
            className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${
              showOriginal ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showOriginal && (
          <div className="mt-3 article-body bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
            {paragraphsOriginal.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-slate-600">
                {para}
              </p>
            ))}
          </div>
        )}
      </section>

      <div className="pt-4 border-t border-slate-200 pb-20 sm:pb-0">
        <p className="text-xs text-slate-400">
          出典：
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline ml-1"
          >
            {article.source}
          </a>
        </p>
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <Link
          href="/"
          className="flex items-center justify-center w-full min-h-[48px] bg-brand-600 text-white text-base font-semibold rounded-lg active:bg-brand-700"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </article>
  );
}
