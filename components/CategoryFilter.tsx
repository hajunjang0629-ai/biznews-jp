"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? "bg-brand-600 text-white shadow-sm"
              : "bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export function useCategoryFilter(categories: string[]) {
  const [active, setActive] = useState("すべて");
  return { active, setActive, categories };
}
