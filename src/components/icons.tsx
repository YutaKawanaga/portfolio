type IconProps = { className?: string };

// 各アイコンはブランドカラー用のクラス (icon-github / icon-zenn / icon-qiita) を
// 標準で付ける。色は index.css 側で定義。className を渡せば追加できる。
function cx(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("icon-github", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ZennIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("icon-zenn", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234 0 .468-.117.586-.353z" />
    </svg>
  );
}

// Qiita はブランドロゴのSVGデータが不確実なため、虫眼鏡風の暫定アイコン。
// 色は Qiita ブランドの緑。実装後、公式ロゴ画像への差し替えを検討する。
export function QiitaIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("icon-qiita", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="8.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="M15.5 15.5 22 22l-2.6 1.4-6-6z" />
    </svg>
  );
}
