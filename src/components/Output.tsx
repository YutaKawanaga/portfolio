import { outputs } from "../data/portfolio";
import { GitHubIcon, ZennIcon, QiitaIcon } from "./icons";

const iconFor = {
  zenn: ZennIcon,
  qiita: QiitaIcon,
  github: GitHubIcon,
} as const;

export function Output() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Output</p>
        <h2 className="h2">アウトプット</h2>
        <hr className="rule" />
        <div className="outs">
          {outputs.map((out) => {
            const Icon = iconFor[out.key];
            return (
              <a
                className="out"
                href={out.url}
                key={out.key}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
                <span className="out-svc">{out.svc}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
