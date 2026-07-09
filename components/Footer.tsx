export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-white text-sm">BizNews JP</p>
            <p className="text-xs mt-1 text-slate-500">
              世界のビジネスニュースを日本語でお届け
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © 2025 BizNews JP. 記事は教育目的の翻訳・要約です。
          </p>
        </div>
      </div>
    </footer>
  );
}
