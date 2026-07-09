function formatDate(iso) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getCategories() {
  const cats = new Set(ARTICLES.map((a) => a.category));
  return ["すべて", ...cats];
}

function getArticleById(id) {
  return ARTICLES.find((a) => a.id === id);
}

function getArticlesByCategory(category) {
  if (!category || category === "すべて") return ARTICLES;
  return ARTICLES.filter((a) => a.category === category);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function paragraphs(text) {
  return text.split("\n\n").filter(Boolean);
}
