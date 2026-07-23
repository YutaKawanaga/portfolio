# サイト掲載用コンテンツ下書き

職務経歴書 (2026-07-01版) を Web 掲載用に再構成した下書き。
書類そのままではなく「公開サイトに載せる粒度」に調整している。
**社内数値 (工数削減率・人数など) は公開しない方針で確定** (2026-07-23)。

## 1. Hero

- 名前: 川永 勇多 (かわなが ゆうた)
- 肩書き: リードエンジニア @ PLAINER株式会社
- コピー: (plan.md §2 の案から選定)
- アイコン: オリジナル白黒線画イラスト (`assets/icon.png`)
- リンク: GitHub / Zenn / Qiita

## 2. Highlights (選抜3実績)

### ① 開発組織のAIネイティブ化

レビュー・リリース・障害対応・組織運用・採用補助といった人が担っていた業務を、
AIエージェント前提のフローへ再構築。職種ごとに Claude Code と Slack Bot を
使い分けつつコンテキストを共通化し、別のエージェントが利用シグナルから
コンテキストとルールを自動更新し続ける仕組みで、属人的メンテナンスなしに
品質を維持。

- 成果: セキュリティチェック対応や問い合わせ対応の工数を大幅に削減 (具体数値は非公開方針)
- 技術: Claude / OpenAI / MCP / Slack Bot / GitHub Actions

### ② プロダクト全面リプレース (無停止)

ピボットを繰り返してカオス化したプロダクトを、現行顧客の稼働を止めずに
アーキテクチャから刷新。Python/Django/AWS → Kotlin/Ktor/GCP へ言語・
インフラごと移行し、バックエンド・フロントエンド・ブラウザ拡張を横断して実装。
新旧併用期間を設け顧客ごとに段階移行。

- 成果: 開発速度の向上、N+1 解消による品質改善、インフラ安定性の向上
- 技術: Kotlin / Ktor / React / TypeScript / GCP / ブラウザ拡張

### ③ 1人目エンジニアとして SaaS を 0→1

担当者が Dropbox 上の Excel を手作業で加工して提供していた属人フローを、
ユーザー自身がデータを取得できる SaaS として事業化。仕様検討から実装・
リリース、AWS 環境構築 (Control Tower によるマルチアカウント + SSO) までを
1人で担当。

- 成果: 手作業ゼロ化、事業としてスケールする形へ転換
- 技術: Python / Django (DRF) / React / AWS

## 3. 職務経歴 (タイムライン)

### PLAINER株式会社 (2023年7月〜現在) — リードエンジニア

SaaS の画面をノーコードで複製・カスタマイズし、デモの作成・配信・アクセス解析が
できるプラットフォーム。

- 開発組織のAIネイティブ化 (Highlights ①)
- プロダクト全面リプレース (Highlights ②)
- 社内管理画面の全面刷新: MPA の旧画面を無停止で段階移行。IAP ベース認証、
  TypeSpec/OpenAPI からの型・クライアント自動生成で不整合を構造的に防止
- 運用フェーズ: 業務委託エンジニアのマネジメント (人数は非公開方針)、
  FDE 的な顧客対話、AI-DLC×アジャイルのカンバン設計・導入

### TRUSTART株式会社 (2023年1月〜6月) — Webエンジニア

不動産関連 SaaS。1人目エンジニア。

- 不動産登記情報ダウンロード SaaS の 0→1 (Highlights ③)
- AWS 本番環境構築 (Control Tower / マルチアカウント / SSO / IAM Identity Center)
- OCR オペレーション自動化 (S3 アップロード起点で ECS タスク自動起動、Slack 通知)

### Shelfy株式会社 (2019年1月〜2022年12月) — Webエンジニア

建設業界向け SaaS。

- 工程管理 SaaS: クリーンアーキテクチャでバックエンド全 API を実装。
  UUID 起点の楽観的 UI
- 調整業務効率化 SaaS: 複雑な調整ルールの UI 化、debounce による変更履歴の
  パフォーマンス設計。PoC 到達
- 安全書類作成 SaaS: PyPDF2 / reportlab / OpenPyxl で紙と一致する帳票を Web 化。
  Lambda での画像リサイズ。現在も主力事業として継続

### ハンズラボ株式会社 (2018年4月〜12月) — Webエンジニア (新卒)

フランチャイズ店舗向け POS システムの機能開発・テスト (Django REST framework)。

## 4. 個人開発: iegoto

家族専用 Web カレンダー。スマホを持たない子どもも「プロフィール」として
予定の主体になれる。

- Vercel Hobby + Neon Free の 0円構成で本番運用
- モノレポでクリーンアーキテクチャの依存方向をパッケージ境界で強制
  (web/api → db → domain、domain は依存ゼロ)
- RRULE 展開エンジンを純関数で実装、設計判断を docs/design に記録する運用
- 技術: Vite / React 19 / Hono / tRPC v11 / Prisma / Playwright
- リンク: https://iegoto-drab.vercel.app / リポジトリ

## 5. スキル (実績紐付けグルーピング)

- **Backend**: Kotlin / Ktor, Python / Django (DRF), PostgreSQL, Redis, JOOQ, Flyway
- **Frontend**: React / TypeScript, Jotai, React Query, SWR, shadcn/ui, Chakra UI, Vite
- **Infrastructure**: GCP (Cloud Run, Pub/Sub, IAP, Secret Manager, Cloud CDN, Memorystore),
  AWS (App Runner, Aurora PostgreSQL, ECS, Lambda, S3, Control Tower, IAM Identity Center),
  Docker, Terraform
- **AI / 開発自動化**: Claude / Claude Code, OpenAI / Codex, Gemini, MCP
- **API / テスト**: TypeSpec / OpenAPI / orval, Playwright, Kotest
- **設計**: クリーンアーキテクチャ, DDD, bulletproof-react, ブラウザ拡張開発, 帳票生成

## 6. アウトプット

- Zenn: https://zenn.dev/yutakawanaga
- Qiita: https://qiita.com/YutaKawanaga
- GitHub: https://github.com/YutaKawanaga

## 7. 自己PR (要約版)

2018年からスタートアップで、実装に加えて企画・組織づくり・効果計測まで
領域を限定せず手を動かしてきた。個人の生産性以上に、採用や仕組みづくりを通じて
チーム全体の生産性を引き上げることに関心がある。近年は AI を開発プロセスそのものに
組み込み、人が担ってきた仕事を AI 前提のフローへ作り替えることに取り組んでいる。

## 8. 連絡先

- メールアドレスは公開しない (決定)
- GitHub: https://github.com/YutaKawanaga
