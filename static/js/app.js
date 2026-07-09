let activeCategory = "すべて";

function renderCategories() {
  const bar = document.getElementById("category-bar");
  const categories = getCategories();
  bar.innerHTML = categories
    .map(
      (cat) =>
        `<button class="cat-btn${cat === activeCategory ? " active" : ""}" data-category="${escapeHtml(cat)}" role="tab" aria-selected="${cat === activeCategory}">${escapeHtml(cat)}</button>`
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
  const filtered = getArticlesByCategory(activeCategory);

  if (filtered.length === 0) {
    container.innerHTML =
      '<p style="text-align:center;color:#64748b;padding:3rem 0">該当する記事がありません。</p>';
    return;
  }

  const [featured, ...rest] = filtered;
  let html = "";

  if (featured) {
    html += `
      <a href="article.html?id=${encodeURIComponent(featured.id)}" class="featured-card" style="margin-bottom:0.75rem;display:block">
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
            <span>${escapeHtml(featured.source)}</span>
            <span>·</span>
            <span>${formatDate(featured.publishedAt)}</span>
            <span>·</span>
            <span>${featured.readTime}分で読める</span>
          </div>
        </div>
      </a>`;
  }

  if (rest.length > 0) {
    html += '<div class="articles-list">';
    html += rest
      .map(
        (a) => `
      <a href="article.html?id=${encodeURIComponent(a.id)}" class="article-card">
        <div class="card-thumb">
          <img src="${a.imageUrl}" alt="${escapeHtml(a.titleJa)}" loading="lazy" />
        </div>
        <div class="card-content">
          <span class="badge badge-light">${escapeHtml(a.category)}</span>
          <h3 class="card-title">${escapeHtml(a.titleJa)}</h3>
          <p class="card-summary" style="-webkit-line-clamp:2;margin-top:0.25rem">${escapeHtml(a.summaryJa)}</p>
          <div class="card-meta">
            <span>${escapeHtml(a.source)}</span>
            <span>·</span>
            <span>${formatDate(a.publishedAt)}</span>
          </div>
        </div>
      </a>`
      )
      .join("");
    html += "</div>";
  }

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderArticles();
});
