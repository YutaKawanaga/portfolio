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

必須 (公開前に埋めたい):

- **アイコン画像の差し替え** — `src/assets/icon.png` と `public/icon.png` を本物のイラストで
  上書き (現在は自動生成のプレースホルダー)
- **iegoto のスクリーンショット配置** — `src/components/Work.tsx` の `work-shot`
  (現在は点線のプレースホルダー枠)
- **Vercel デプロイの確認** — main 接続後、本番URLで表示を確認

任意 (余力があれば):

- Qiita アイコンを公式ロゴに差し替え (現在は緑の暫定アイコン)
- カスタムドメインの取得 (まずは `*.vercel.app` で公開可)
- 代表的な Zenn / Qiita 記事のピックアップ掲載

決定済み:

- ヒーローコピー … ビジョン (`src/data/portfolio.ts` の `headline`)。細かい調整は随時
- アクセント色 … 朱 (`src/index.css` の `--a-l` / `--a-d`)
- 連絡先 … GitHub のみ (メール非公開)、フッターなし
