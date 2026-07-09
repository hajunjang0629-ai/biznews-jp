"""Bundle static site into a single HTML file for file:// / Chrome paste."""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
css = (root / "static" / "css" / "style.css").read_text(encoding="utf-8")
data = (root / "static" / "js" / "data.js").read_text(encoding="utf-8")
utils = (root / "static" / "js" / "utils.js").read_text(encoding="utf-8")

app_js = r"""
let activeCategory = "すべて";

function navigate(hash) {
  if (hash) location.hash = hash;
  else {
    history.pushState(null, "", location.pathname + location.search);
    location.hash = "";
  }
  render();
  window.scrollTo(0, 0);
}

function updateMobileBar(show) {
  const bar = document.getElementById("mobile-back-bar");
  document.body.classList.toggle("has-mobile-bar", show);
  if (bar) bar.classList.toggle("hidden", !show);
}

function getRoute() {
  const h = location.hash.replace(/^#/, "");
  if (h.startsWith("article/")) {
    return { page: "article", id: decodeURIComponent(h.slice(8)) };
  }
  return { page: "home" };
}

function renderHome() {
  document.title = "BizNews JP | ビジネスニュース和訳";
  updateMobileBar(false);
  const main = document.getElementById("app");
  main.className = "main-content";
  main.innerHTML = `
    <section>
      <h1 class="page-title">ビジネスニュース</h1>
      <p class="page-desc">世界の主要メディアから厳選。要約と全文和訳付き。</p>
    </section>
    <div class="category-bar" id="category-bar" role="tablist" aria-label="カテゴリ"></div>
    <div id="articles-container"></div>
    <div class="info-box">
      <strong>記事の読み方：</strong>
      各記事を開くと、まず全文の要約（日本語）が表示されます。その下に和訳全文を掲載しています。原文は折りたたみで確認できます。
    </div>`;
  renderCategories();
  renderArticles();
}

function renderCategories() {
  const bar = document.getElementById("category-bar");
  if (!bar) return;
  const categories = getCategories();
  bar.innerHTML = categories
    .map(
      (cat) =>
        `<button type="button" class="cat-btn${cat === activeCategory ? " active" : ""}" data-category="${escapeHtml(cat)}" role="tab">${escapeHtml(cat)}</button>`
    )
    .join("");
  bar.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderArticles();
    });
  });
}

function renderArticles() {
  const container = document.getElementById("articles-container");
  if (!container) return;
  const filtered = getArticlesByCategory(activeCategory);
  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#64748b;padding:3rem 0">該当する記事がありません。</p>';
    return;
  }
  const [featured, ...rest] = filtered;
  let html = "";
  if (featured) {
    html += `
      <a href="#article/${encodeURIComponent(featured.id)}" class="featured-card" style="margin-bottom:0.75rem;display:block">
        <div class="featured-img-wrap">
          <img src="${featured.imageUrl}" alt="${escapeHtml(featured.titleJa)}" loading="lazy" />
          <div class="featured-overlay"></div>
          <div class="featured-overlay-text">
            <span class="badge">${escapeHtml(featured.category)}</span>
            <h2 class="featured-title">${escapeHtml(featured.titleJa)}</h2>
          </div>
        </div>
        <div class="card-body">
          <p class="card-summary">${escapeHtml(featured.summaryJa)}</p>
          <div class="card-meta">
            <span>${escapeHtml(featured.source)}</span><span>·</span>
            <span>${formatDate(featured.publishedAt)}</span><span>·</span>
            <span>${featured.readTime}分で読める</span>
          </div>
        </div>
      </a>`;
  }
  if (rest.length) {
    html += '<div class="articles-list">' + rest.map((a) => `
      <a href="#article/${encodeURIComponent(a.id)}" class="article-card">
        <div class="card-thumb"><img src="${a.imageUrl}" alt="${escapeHtml(a.titleJa)}" loading="lazy" /></div>
        <div class="card-content">
          <span class="badge badge-light">${escapeHtml(a.category)}</span>
          <h3 class="card-title">${escapeHtml(a.titleJa)}</h3>
          <p class="card-summary" style="-webkit-line-clamp:2;margin-top:0.25rem">${escapeHtml(a.summaryJa)}</p>
          <div class="card-meta">
            <span>${escapeHtml(a.source)}</span><span>·</span>
            <span>${formatDate(a.publishedAt)}</span>
          </div>
        </div>
      </a>`).join("") + "</div>";
  }
  container.innerHTML = html;
}

function renderArticlePage(id) {
  const article = getArticleById(id);
  const main = document.getElementById("app");
  main.className = "main-content article-detail";
  if (!article) {
    document.title = "記事が見つかりません | BizNews JP";
    updateMobileBar(false);
    main.innerHTML = `
      <div class="not-found">
        <h1>記事が見つかりません</h1>
        <p>お探しの記事は存在しないか、削除された可能性があります。</p>
        <a href="#" class="btn-primary" onclick="navigate('');return false;">トップに戻る</a>
      </div>`;
    return;
  }
  updateMobileBar(true);
  document.title = article.titleJa + " | BizNews JP";
  const parasJa = paragraphs(article.bodyJa).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  const parasEn = paragraphs(article.bodyOriginal).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  main.innerHTML = `
    <a href="#" class="back-link" onclick="navigate('');return false;">← 記事一覧に戻る</a>
    <div class="article-hero"><img src="${article.imageUrl}" alt="${escapeHtml(article.titleJa)}" /></div>
    <header class="article-header">
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;margin-bottom:0.75rem">
        <span class="badge">${escapeHtml(article.category)}</span>
        <span style="font-size:0.75rem;color:#94a3b8">${escapeHtml(article.source)}</span>
      </div>
      <h1 class="article-h1">${escapeHtml(article.titleJa)}</h1>
      <p class="article-title-en">${escapeHtml(article.title)}</p>
      <div class="card-meta">
        <time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time>
        <span>·</span><span>約${article.readTime}分で読める</span>
      </div>
    </header>
    <section>
      <div class="section-heading"><div class="section-bar"></div><h2>要約</h2></div>
      <div class="summary-box"><p>${escapeHtml(article.summaryJa)}</p></div>
    </section>
    <section>
      <div class="section-heading"><div class="section-bar gray"></div><h2>和訳全文</h2></div>
      <div class="translation-box">${parasJa}</div>
    </section>
    <section>
      <button type="button" class="toggle-btn" id="toggle-original" aria-expanded="false">
        <span>原文（英語）を表示する</span><span class="arrow">▼</span>
      </button>
      <div class="original-box hidden" id="original-box">${parasEn}</div>
    </section>
    <p class="source-line">出典：<a href="${article.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.source)}</a></p>`;
  const toggleBtn = document.getElementById("toggle-original");
  const originalBox = document.getElementById("original-box");
  toggleBtn.addEventListener("click", () => {
    const isHidden = originalBox.classList.toggle("hidden");
    const isOpen = !isHidden;
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.querySelector("span").textContent = isOpen ? "原文（英語）を隠す" : "原文（英語）を表示する";
  });
}

function render() {
  const route = getRoute();
  if (route.page === "article") renderArticlePage(route.id);
  else renderHome();
}

window.addEventListener("hashchange", render);
window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("mobile-back-btn");
  if (backBtn) backBtn.addEventListener("click", () => navigate(""));
  render();
});
"""

html = f"""<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
  <meta name="theme-color" content="#1d4ed8" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="BizNews JP" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="description" content="世界のビジネスニュースを日本語で。記事の要約と全文和訳をお届けします。" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%231d4ed8' width='100' height='100' rx='20'/><text x='50' y='62' font-size='44' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'>BN</text></svg>" />
  <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect fill='%231d4ed8' width='180' height='180' rx='36'/><text x='90' y='112' font-size='80' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'>BN</text></svg>" />
  <title>BizNews JP | ビジネスニュース和訳</title>
  <style>
{css}
.logo {{ cursor: pointer; }}
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a href="#" class="logo" onclick="navigate('');return false;">
        <div class="logo-icon">BN</div>
        <div>
          <div class="logo-text">BizNews JP</div>
          <div class="logo-sub">世界のビジネスニュース和訳</div>
        </div>
      </a>
      <nav><a href="#" class="nav-link" onclick="navigate('');return false;">トップ</a></nav>
    </div>
  </header>
  <main id="app" class="main-content"></main>
  <div id="mobile-back-bar" class="mobile-back-bar hidden" aria-hidden="true">
    <button type="button" id="mobile-back-btn">← 記事一覧に戻る</button>
  </div>
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <p class="footer-brand">BizNews JP</p>
        <p class="footer-sub">世界のビジネスニュースを日本語でお届け</p>
      </div>
      <p class="footer-copy">© 2025 BizNews JP. 記事は教育目的の翻訳・要約です。</p>
    </div>
  </footer>
  <script>
{data}
{utils}
{app_js}
  </script>
</body>
</html>
"""

out = root / "biznews.html"
out.write_text(html, encoding="utf-8")

# Deploy folder for GitHub Pages / mobile HTTPS access
web_dir = root / "web"
docs_dir = root / "docs"
web_dir.mkdir(exist_ok=True)
docs_dir.mkdir(exist_ok=True)
(web_dir / "index.html").write_text(html, encoding="utf-8")
(docs_dir / "index.html").write_text(html, encoding="utf-8")

# Write without print to avoid encoding issues on Windows console
