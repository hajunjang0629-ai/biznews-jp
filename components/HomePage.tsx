"use client";

import { useState } from "react";
import { getArticlesByCategory, getCategories } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function HomePage() {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = getArticlesByCategory(
    activeCategory === "すべて" ? undefined : activeCategory
  );
  const [featured, ...rest] = filtered;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <section className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
          ビジネスニュース
        </h1>
        <p className="text-sm text-slate-500">
          世界の主要メディアから厳選。要約と全文和訳付き。
        </p>
      </section>

      <div className="mb-6">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-12">
          該当する記事がありません。
        </p>
      ) : (
        <div className="space-y-6">
          {featured && <ArticleCard article={featured} featured />}
          {rest.length > 0 && (
            <div className="space-y-3">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-brand-50 rounded-xl border border-brand-100">
        <p className="text-sm text-brand-800 leading-relaxed">
          <strong>記事の読み方：</strong>
          各記事を開くと、まず全文の要約（日本語）が表示されます。その下に和訳全文を掲載しています。原文は折りたたみで確認できます。
        </p>
      </div>
    </div>
  );
}
