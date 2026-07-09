import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        記事が見つかりません
      </h1>
      <p className="text-slate-500 mb-6">
        お探しの記事は存在しないか、削除された可能性があります。
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
      >
        トップに戻る
      </Link>
    </div>
  );
}
