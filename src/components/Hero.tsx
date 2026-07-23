import { profile, links } from "../data/portfolio";
import { GitHubIcon, ZennIcon, QiitaIcon } from "./icons";
import { Highlight } from "./Highlight";
import iconUrl from "../assets/icon.png";

export function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 className="hero-h1">
            <Highlight text={profile.headline} />
          </h1>
          <p className="hero-lead">{profile.lead}</p>
          <p className="hero-name">
            {profile.name}
            <span className="kana">{profile.kana}</span>
            <span className="hero-role">{profile.role}</span>
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
