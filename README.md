# portfolio

川永勇多の個人ポートフォリオサイト。転職活動時に「ポートフォリオURL」として提示できる、職務経歴の Web 版ハブ。

## 技術構成

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (デザイントークンは `src/index.css` の CSS 変数)
- 1ページ構成 (ルーターなし)。ホスティングは Vercel Hobby 想定

## コマンド

```bash
pnpm install       # 依存導入
pnpm dev           # 開発サーバ
pnpm build         # 型チェック + 本番ビルド (dist/)
pnpm preview       # ビルド結果をローカルで確認
pnpm typecheck     # 型チェックのみ
```

## 構成

```
src/
  App.tsx              セクションを並べるだけのルート
  index.css            デザイントークン + 全スタイル (モックから移植)
  data/portfolio.ts    表示テキストを集約。文言調整はここだけ触ればよい
  components/          Hero / About / Career / Work / Skills / Output / Footer
  assets/icon.png      アバター画像 (現在は自動生成のプレースホルダー)
public/icon.png        favicon / OGP 用 (同上)
docs/
  plan.md              企画書 (意思決定の記録)
  content.md           掲載コンテンツの元原稿
  design-mock.html     デザインモック (v3。実装の見た目の基準)
```

## 残タスク

- ヒーローコピーの確定 (現在は仮置き。`src/data/portfolio.ts` の `headlineParts`)
- アイコン画像の差し替え (`src/assets/icon.png` と `public/icon.png` を本物のイラストで上書き)
- iegoto のスクリーンショット配置 (`src/components/Work.tsx` の `work-shot`)
- アクセント色の確定 (`src/index.css` の `--a-l` / `--a-d`。候補: 朱/藍/松)
- Vercel へのデプロイ設定
