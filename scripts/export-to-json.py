"""One-time / maintenance: export lib/articles.ts to data/articles.json"""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
ts = (root / "lib" / "articles.ts").read_text(encoding="utf-8")

articles = []
for m in re.finditer(r'\n  \{\n    id: "([^"]+)"', ts):
    start = m.start()
    depth = 0
    end = start
    for i, ch in enumerate(ts[start:], start):
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    b = ts[start:end]

    def str_field(name):
        for pat in (
            rf'{name}:\s*\n?\s*"((?:\\.|[^"\\])*)"',
            rf'{name}:\s*"((?:\\.|[^"\\])*)"',
        ):
            m2 = re.search(pat, b)
            if m2:
                return m2.group(1)
        return ""

    def tpl_field(name):
        m2 = re.search(rf"{name}:\s*`([\s\S]*?)`", b)
        return m2.group(1).strip() if m2 else ""

    def num_field(name):
        m2 = re.search(rf"{name}:\s*(\d+)", b)
        return int(m2.group(1)) if m2 else 0

    articles.append(
        {
            "id": str_field("id"),
            "title": str_field("title"),
            "titleJa": str_field("titleJa"),
            "summaryJa": str_field("summaryJa"),
            "bodyOriginal": tpl_field("bodyOriginal"),
            "bodyJa": tpl_field("bodyJa"),
            "source": str_field("source"),
            "sourceUrl": str_field("sourceUrl"),
            "publishedAt": str_field("publishedAt"),
            "category": str_field("category"),
            "imageUrl": str_field("imageUrl"),
            "readTime": num_field("readTime"),
        }
    )

out_dir = root / "data"
out_dir.mkdir(exist_ok=True)
(out_dir / "articles.json").write_text(
    json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8"
)
