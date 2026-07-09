import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-brand-700 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg text-brand-900 tracking-tight">
                BizNews JP
              </span>
              <span className="hidden sm:block text-xs text-slate-500 -mt-0.5">
                世界のビジネスニュース和訳
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
            >
              トップ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
