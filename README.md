# BizNews JP

世界のビジネスニュースを日本語でお届けするウェブサイトです。

## 機能

- ビジネスニュース記事の一覧表示
- カテゴリ別フィルター（金融政策、テクノロジー、貿易など）
- 記事詳細ページ
  - **要約**：記事全体の日本語要約を最初に表示
  - **和訳全文**：その下に全文の日本語訳を掲載
  - **原文**：英語原文は折りたたみで確認可能
- モバイルファーストのレスポンシブデザイン

## Google（Chrome）に貼り付けて開く

**`biznews.html`** は1ファイル完結型です。サーバー不要で、Chromeのアドレスバーに貼り付けるだけで開けます。

### 方法1：ワンクリック
`開く.bat` をダブルクリック

### 方法2：アドレスバーに貼り付け
1. `アドレスバーに貼り付け.txt` を開く
2. 中のURLをコピー
3. Google Chrome のアドレスバーに貼り付けて Enter

または、エクスプローラーで `biznews.html` を Chrome にドラッグ＆ドロップしても開けます。

## すぐに使う（フォルダ版）

`static` フォルダの静的サイトをブラウザで開けます。

1. `static/index.html` をダブルクリックして開く
2. または、簡易サーバーで起動：

```bash
cd static
python -m http.server 8080
```

ブラウザで [http://localhost:8080](http://localhost:8080) を開いてください。

## Next.js 版（推奨）

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 本番ビルド

```bash
npm run build
npm start
```

## 技術スタック

- Next.js 14 (App Router) + 静的 HTML 版
- TypeScript
- Tailwind CSS
