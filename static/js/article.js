function renderNotFound() {
  document.getElementById("article-root").innerHTML = `
    <div class="not-found">
      <h1>記事が見つかりません</h1>
      <p>お探しの記事は存在しないか、削除された可能性があります。</p>
      <a href="index.html" class="btn-primary">トップに戻る</a>
    </div>`;
  document.title = "記事が見つかりません | BizNews JP";
}

function renderArticle(article) {
  document.title = `${article.titleJa} | BizNews JP`;

  const parasJa = paragraphs(article.bodyJa)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
  const parasEn = paragraphs(article.bodyOriginal)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  document.getElementById("article-root").innerHTML = `
    <a href="index.html" class="back-link">← 記事一覧に戻る</a>

    <div class="article-hero">
      <img src="${article.imageUrl}" alt="${escapeHtml(article.titleJa)}" />
    </div>

    <header class="article-header">
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;margin-bottom:0.75rem">
        <span class="badge">${escapeHtml(article.category)}</span>
        <span style="font-size:0.75rem;color:#94a3b8">${escapeHtml(article.source)}</span>
      </div>
      <h1 class="article-h1">${escapeHtml(article.titleJa)}</h1>
      <p class="article-title-en">${escapeHtml(article.title)}</p>
      <div class="card-meta">
        <time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time>
        <span>·</span>
        <span>約${article.readTime}分で読める</span>
      </div>
    </header>

    <section>
      <div class="section-heading">
        <div class="section-bar"></div>
        <h2>要約</h2>
      </div>
      <div class="summary-box">
        <p>${escapeHtml(article.summaryJa)}</p>
      </div>
    </section>

    <section>
      <div class="section-heading">
        <div class="section-bar gray"></div>
        <h2>和訳全文</h2>
      </div>
      <div class="translation-box">${parasJa}</div>
    </section>

    <section>
      <button class="toggle-btn" id="toggle-original" aria-expanded="false">
        <span>原文（英語）を表示する</span>
        <span class="arrow">▼</span>
      </button>
      <div class="original-box hidden" id="original-box">${parasEn}</div>
    </section>

    <p class="source-line">
      出典：<a href="${article.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.source)}</a>
    </p>`;

  const toggleBtn = document.getElementById("toggle-original");
  const originalBox = document.getElementById("original-box");
  toggleBtn.addEventListener("click", () => {
    const isHidden = originalBox.classList.toggle("hidden");
    const isOpen = !isHidden;
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.querySelector("span").textContent = isOpen
      ? "原文（英語）を隠す"
      : "原文（英語）を表示する";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) {
    renderNotFound();
    return;
  }
  const article = getArticleById(id);
  if (!article) {
    renderNotFound();
    return;
  }
  renderArticle(article);
});
