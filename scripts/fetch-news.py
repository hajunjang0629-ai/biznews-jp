"""
Fetch business news from RSS, translate to Japanese, merge into data/articles.json.
Designed to run on GitHub Actions (PC can be off).
"""
from __future__ import annotations

import hashlib
import json
import re
import time
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

import feedparser
import trafilatura
from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_PATH = ROOT / "data" / "articles.json"
MAX_ARTICLES = 40
MAX_NEW_PER_RUN = 8
TRANSLATOR = GoogleTranslator(source="auto", target="ja")

FEEDS = [
    {
        "url": "https://feeds.bbci.co.uk/news/business/rss.xml",
        "source": "BBC",
        "category": "マクロ経済",
    },
    {
        "url": "https://www.cnbc.com/id/100003114/device/rss/rss.html",
        "source": "CNBC",
        "category": "テクノロジー",
    },
    {
        "url": "https://feeds.marketwatch.com/marketwatch/topstories/",
        "source": "MarketWatch",
        "category": "金融政策",
    },
    {
        "url": "https://feeds.bbci.co.uk/news/world/rss.xml",
        "source": "BBC",
        "category": "貿易",
    },
]

CATEGORY_KEYWORDS = {
    "エネルギー": r"\boil\b|\bopec\b|\benergy\b|\bgas\b|\bcrude\b|\brefiner",
    "金融政策": r"\bfed\b|\brate\b|\bbank\b|\binflation\b|\becb\b|\bboj\b|\btreasury\b|\binterest rate",
    "テクノロジー": r"\bai\b|\bchip\b|\bnvidia\b|\bapple\b|\bgoogle\b|\bmicrosoft\b|\bamazon\b|\btech\b|\bsoftware\b",
    "自動車": r"\btesla\b|\bev\b|\bautomaker\b|\bvehicle\b|\bcar\b",
    "貿易": r"\btariff\b|\btrade\b|\bexport\b|\bimport\b|\bwto\b",
    "マクロ経済": r"\bgdp\b|\beconomy\b|\brecession\b|\bgrowth\b|\bjobs\b|\bunemployment\b",
}

DEFAULT_IMAGES = {
    "金融政策": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    "テクノロジー": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "エネルギー": "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    "自動車": "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    "貿易": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    "マクロ経済": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
}


def load_articles() -> list[dict]:
    if ARTICLES_PATH.exists():
        return json.loads(ARTICLES_PATH.read_text(encoding="utf-8"))
    return []


def save_articles(articles: list[dict]) -> None:
    ARTICLES_PATH.parent.mkdir(exist_ok=True)
    ARTICLES_PATH.write_text(
        json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8"
    )


def slug_id(title: str, url: str) -> str:
    base = re.sub(r"[^a-z0-9]+", "-", title.lower())[:40].strip("-")
    h = hashlib.md5(url.encode()).hexdigest()[:8]
    return f"{base}-{h}" if base else h


def parse_date(entry) -> str:
    for attr in ("published", "updated"):
        raw = getattr(entry, attr, None) or entry.get(attr)
        if not raw:
            continue
        try:
            return parsedate_to_datetime(raw).astimezone(timezone.utc).isoformat()
        except Exception:
            pass
    return datetime.now(timezone.utc).isoformat()


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", "", text or "").strip()


def extract_image(entry) -> str | None:
    if getattr(entry, "media_thumbnail", None):
        return entry.media_thumbnail[0].get("url")
    if getattr(entry, "media_content", None):
        for m in entry.media_content:
            if m.get("medium") == "image" and m.get("url"):
                return m["url"]
    return None


def extract_body(url: str, fallback: str) -> str:
    try:
        downloaded = trafilatura.fetch_url(url, no_ssl=True)
        if downloaded:
            text = trafilatura.extract(downloaded, include_comments=False, include_tables=False)
            if text and len(text) > 200:
                return text.strip()
    except Exception:
        pass
    return fallback.strip()


def guess_category(title: str, body: str, default: str) -> str:
    text = f"{title} {body}".lower()
    for cat, pattern in CATEGORY_KEYWORDS.items():
        if re.search(pattern, text):
            return cat
    return default


def translate(text: str) -> str:
    text = text.strip()
    if not text:
        return ""
    # Keep Japanese as-is
    if re.search(r"[\u3040-\u30ff\u4e00-\u9fff]", text) and not re.search(
        r"[a-zA-Z]{4,}", text
    ):
        return text

    chunks: list[str] = []
    part = ""
    for paragraph in text.split("\n"):
        if len(part) + len(paragraph) > 4500:
            if part:
                chunks.append(part)
            part = paragraph
        else:
            part = f"{part}\n{paragraph}" if part else paragraph
    if part:
        chunks.append(part)

    translated: list[str] = []
    for chunk in chunks:
        for attempt in range(3):
            try:
                translated.append(TRANSLATOR.translate(chunk))
                time.sleep(0.4)
                break
            except Exception:
                time.sleep(2 * (attempt + 1))
        else:
            translated.append(chunk)
    return "\n".join(translated).strip()


def make_summary_ja(body_ja: str, rss_summary: str) -> str:
    if rss_summary:
        ja = translate(strip_html(rss_summary))
        if len(ja) >= 80:
            return ja[:500]
    paragraphs = [p.strip() for p in body_ja.split("\n") if p.strip()]
    if not paragraphs:
        return ""
    summary = paragraphs[0]
    if len(paragraphs) > 1 and len(summary) < 200:
        summary += paragraphs[1]
    return summary[:500]


def estimate_read_time(text: str) -> int:
    chars = len(text)
    return max(2, min(10, round(chars / 400)))


def fetch_new_entries(existing_urls: set[str]) -> list[dict]:
    new_articles: list[dict] = []

    for feed in FEEDS:
        if len(new_articles) >= MAX_NEW_PER_RUN:
            break
        try:
            parsed = feedparser.parse(feed["url"])
        except Exception:
            continue

        for entry in parsed.entries[:6]:
            if len(new_articles) >= MAX_NEW_PER_RUN:
                break
            link = entry.get("link", "").strip()
            title = strip_html(entry.get("title", "")).strip()
            if not link or not title or link in existing_urls:
                continue

            rss_summary = strip_html(
                entry.get("summary", "") or entry.get("description", "")
            )
            body_original = extract_body(link, rss_summary or title)
            if len(body_original) < 80:
                continue

            category = guess_category(title, body_original, feed["category"])
            title_ja = translate(title)
            body_ja = translate(body_original)
            summary_ja = make_summary_ja(body_ja, rss_summary)

            image = extract_image(entry) or DEFAULT_IMAGES.get(
                category, DEFAULT_IMAGES["マクロ経済"]
            )

            new_articles.append(
                {
                    "id": slug_id(title, link),
                    "title": title,
                    "titleJa": title_ja,
                    "summaryJa": summary_ja,
                    "bodyOriginal": body_original,
                    "bodyJa": body_ja,
                    "source": feed["source"],
                    "sourceUrl": link,
                    "publishedAt": parse_date(entry),
                    "category": category,
                    "imageUrl": image,
                    "readTime": estimate_read_time(body_ja),
                }
            )
            existing_urls.add(link)
            print(f"Added: {title_ja[:50]}...")

    return new_articles


def main() -> None:
    articles = load_articles()
    existing_urls = {a.get("sourceUrl", "") for a in articles}
    new_items = fetch_new_entries(existing_urls)

    if new_items:
        articles = new_items + articles
        seen: set[str] = set()
        deduped: list[dict] = []
        for a in articles:
            url = a.get("sourceUrl", "")
            if url in seen:
                continue
            seen.add(url)
            deduped.append(a)
        articles = sorted(
            deduped, key=lambda x: x.get("publishedAt", ""), reverse=True
        )[:MAX_ARTICLES]
        save_articles(articles)
        print(f"Saved {len(new_items)} new article(s). Total: {len(articles)}")
    else:
        print("No new articles found.")


if __name__ == "__main__":
    main()
