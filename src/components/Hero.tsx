import { profile, links } from "../data/portfolio";
import { GitHubIcon, ZennIcon, QiitaIcon } from "./icons";
import iconUrl from "../assets/icon.png";

export function Hero() {
  const [a, b, c, d] = profile.headlineParts;
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 className="hero-h1">
            <span className="hl">{a}</span>
            {b}
            <br />
            <span className="hl">{c}</span>
            {d}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-name">
            {profile.name}
            <span className="kana">{profile.kana}</span>
          </p>
          <nav className="hero-links" aria-label="外部リンク">
            <a className="lbtn" href={links.github}>
              <GitHubIcon />
              GitHub
            </a>
            <a className="lbtn" href={links.zenn}>
              <ZennIcon />
              Zenn
            </a>
            <a className="lbtn" href={links.qiita}>
              <QiitaIcon />
              Qiita
            </a>
          </nav>
        </div>
        <img
          className="avatar"
          src={iconUrl}
          width={180}
          height={180}
          alt={`${profile.name}のイラスト`}
        />
      </div>
    </header>
  );
}
