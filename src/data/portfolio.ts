/*
  サイトに表示するコンテンツは全てここに集約している。
  文言の調整はこのファイルだけを編集すればよい (コンポーネント側は触らない)。
*/

export const profile = {
  eyebrow: "Portfolio — Kawanaga Yuta",
  // ヒーローコピーは仮置き。確定したら差し替える。
  headlineParts: ["実装", "から、", "組織づくり", "まで。"] as const,
  role: "リードエンジニア @ PLAINER株式会社",
  name: "川永 勇多",
  kana: "かわなが ゆうた",
} as const;

export const links = {
  github: "https://github.com/YutaKawanaga",
  zenn: "https://zenn.dev/yutakawanaga",
  qiita: "https://qiita.com/YutaKawanaga",
} as const;

export const about: string[] = [
  "2018年からスタートアップに身を置き、フロントエンド・バックエンド・インフラを横断して手を動かしてきました。__1人目エンジニアとしての0→1__も、__稼働中プロダクトの無停止フルリプレース__も経験しています。",
  "個人の生産性を上げること以上に、採用や仕組みづくりを通じて__チーム全体の生産性を引き上げる__ことに関心があります。直近は、人が担ってきた業務をAIエージェント前提のフローへ作り替える「開発組織のAIネイティブ化」に取り組んでいます。",
];

export type CareerEntry = {
  period: string;
  company: string;
  role: string;
  chips: string[];
  summary: string;
  bullets: string[];
};

export const career: CareerEntry[] = [
  {
    period: "2023.07 — 現在",
    company: "PLAINER株式会社",
    role: "リードエンジニア",
    chips: ["組織×AI", "無停止リプレース"],
    summary:
      "SaaSの画面をノーコードで複製・カスタマイズし、デモの作成・配信・アクセス解析ができるプラットフォーム。",
    bullets: [
      "開発組織のAIネイティブ化 — レビュー・リリース・障害対応・採用補助をAIエージェント前提のフローへ再構築。エージェントがコンテキストとルールを自動更新し続ける仕組みで、属人的メンテナンスなしに品質を維持",
      "プロダクト全面リプレース — Django/AWS から Kotlin/GCP へ、現行顧客の稼働を止めずにアーキテクチャから刷新。バックエンド・フロントエンド・ブラウザ拡張を横断して実装",
      "社内管理画面の全面刷新 — IAPベース認証、TypeSpec/OpenAPIからの型自動生成",
      "業務委託エンジニアのマネジメント、FDE的な顧客対話、AI-DLC×アジャイルのカンバン設計・導入",
    ],
  },
  {
    period: "2023.01 — 2023.06",
    company: "TRUSTART株式会社",
    role: "Webエンジニア",
    chips: ["0→1", "1人目エンジニア"],
    summary: "不動産関連のSaaS事業。",
    bullets: [
      "不動産登記情報ダウンロードSaaSを0→1で事業化 — 手作業のExcel加工で提供していた属人フローを、ユーザー自身がデータを取得できるSaaSへ転換。仕様検討から実装・リリースまで1人で担当",
      "AWS本番環境構築 — Control Tower / マルチアカウント / SSO",
      "OCRオペレーション自動化 — S3起点でECSタスク自動起動、Slack通知",
    ],
  },
  {
    period: "2019.01 — 2022.12",
    company: "Shelfy株式会社",
    role: "Webエンジニア",
    chips: ["建設×SaaS"],
    summary: "建設業界向けSaaSの開発・提供。",
    bullets: [
      "工程管理SaaS — クリーンアーキテクチャで全API実装、UUID起点の楽観的UI",
      "調整業務効率化SaaS — 複雑な調整ルールのUI化、パフォーマンス設計",
      "安全書類作成SaaS — 紙と一致する帳票のWeb化。現在も主力事業として継続",
    ],
  },
  {
    period: "2018.04 — 2018.12",
    company: "ハンズラボ株式会社",
    role: "Webエンジニア (新卒)",
    chips: [],
    summary:
      "小売向けシステム開発。フランチャイズ店舗向けPOSシステムの機能開発・テスト。",
    bullets: [],
  },
];

export const work = {
  name: "iegoto",
  chip: "家族で運用中",
  paragraphs: [
    "スマホを持たない子どもも「プロフィール」として予定の主体になれる、家族専用のWebカレンダー。Vercel Hobby + Neon Free の0円構成で本番運用中。",
    "モノレポでクリーンアーキテクチャの依存方向をパッケージ境界で強制し、RRULE展開エンジンを純関数で実装。設計判断は docs/design に記録する運用。",
  ],
  tech: "Vite / React 19 / Hono / tRPC v11 / Prisma / Playwright",
  url: "https://iegoto-drab.vercel.app",
} as const;

export type SkillGroup = {
  label: string;
  items: { name: string; hot?: boolean }[];
};

export const skills: SkillGroup[] = [
  {
    label: "BACKEND / FRONTEND",
    items: [
      { name: "Kotlin / Ktor", hot: true },
      { name: "React / TypeScript", hot: true },
      { name: "Python / Django" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Jotai" },
      { name: "React Query" },
      { name: "shadcn/ui" },
      { name: "Vite" },
    ],
  },
  {
    label: "INFRA",
    items: [
      { name: "GCP", hot: true },
      { name: "AWS", hot: true },
      { name: "Cloud Run" },
      { name: "IAP" },
      { name: "ECS" },
      { name: "Lambda" },
      { name: "Control Tower" },
      { name: "Docker" },
      { name: "Terraform" },
    ],
  },
  {
    label: "AI / 設計",
    items: [
      { name: "Claude / Claude Code", hot: true },
      { name: "MCP", hot: true },
      { name: "OpenAI / Codex" },
      { name: "TypeSpec / OpenAPI" },
      { name: "Playwright" },
      { name: "Kotest" },
      { name: "クリーンアーキテクチャ" },
      { name: "DDD" },
      { name: "ブラウザ拡張" },
    ],
  },
];

export const outputs = [
  { key: "zenn", svc: "Zenn", desc: "技術記事を書いています", url: links.zenn },
  { key: "qiita", svc: "Qiita", desc: "昔の記事はこちら", url: links.qiita },
  {
    key: "github",
    svc: "GitHub",
    desc: "コードはこちら (iegoto も)",
    url: links.github,
  },
] as const;
