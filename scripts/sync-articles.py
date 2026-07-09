"""Sync data/articles.json to static/js/data.js and lib/articles.ts"""
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
articles_path = root / "data" / "articles.json"
articles = json.loads(articles_path.read_text(encoding="utf-8"))

# static/js/data.js
(root / "static" / "js" / "data.js").write_text(
    "const ARTICLES = " + json.dumps(articles, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)

# lib/articles.ts
def esc_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')

def esc_tpl(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

lines = [
    "export interface Article {",
    "  id: string;",
    "  title: string;",
    "  titleJa: string;",
    "  summaryJa: string;",
    "  bodyOriginal: string;",
    "  bodyJa: string;",
    "  source: string;",
    "  sourceUrl: string;",
    "  publishedAt: string;",
    "  category: string;",
    "  imageUrl?: string;",
    "  readTime: number;",
    "}",
    "",
    "export const articles: Article[] = [",
]

for a in articles:
    img = f'\n    imageUrl: "{esc_str(a["imageUrl"])}",' if a.get("imageUrl") else ""
    lines.extend(
        [
            "  {",
            f'    id: "{esc_str(a["id"])}",',
            f'    title: "{esc_str(a["title"])}",',
            f'    titleJa: "{esc_str(a["titleJa"])}",',
            f'    summaryJa: "{esc_str(a["summaryJa"])}",',
            f'    bodyOriginal: `{esc_tpl(a["bodyOriginal"])}`,',
            f'    bodyJa: `{esc_tpl(a["bodyJa"])}`,',
            f'    source: "{esc_str(a["source"])}",',
            f'    sourceUrl: "{esc_str(a["sourceUrl"])}",',
            f'    publishedAt: "{esc_str(a["publishedAt"])}",',
            f'    category: "{esc_str(a["category"])}",{img}',
            f'    readTime: {a["readTime"]},',
            "  },",
        ]
    )

lines.extend(
    [
        "];",
        "",
        "export function getArticleById(id: string): Article | undefined {",
        "  return articles.find((a) => a.id === id);",
        "}",
        "",
        "export function getArticlesByCategory(category?: string): Article[] {",
        '  if (!category || category === "すべて") return articles;',
        "  return articles.filter((a) => a.category === category);",
        "}",
        "",
        "export function getCategories(): string[] {",
        "  const cats = new Set(articles.map((a) => a.category));",
        '  return ["すべて", ...Array.from(cats)];',
        "}",
        "",
        "export function formatDate(iso: string): string {",
        "  const d = new Date(iso);",
        '  return d.toLocaleDateString("ja-JP", {',
        '    year: "numeric",',
        '    month: "long",',
        '    day: "numeric",',
        '    hour: "2-digit",',
        '    minute: "2-digit",',
        "  });",
        "}",
        "",
    ]
)

(root / "lib" / "articles.ts").write_text("\n".join(lines), encoding="utf-8")
