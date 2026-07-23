import { work } from "../data/portfolio";

export function Work() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Personal Work</p>
        <h2 className="h2">個人開発</h2>
        <hr className="rule" />
        <div className="work">
          {/* スクリーンショット差し替え待ち。img に置き換える場合は className="work-shot" を維持 */}
          <div className="work-shot">
            スクリーンショット
            <br />
            (カレンダー画面)
          </div>
          <div className="work-body">
            <div className="work-head">
              <h3 className="work-h3">{work.name}</h3>
              <span className="st">{work.chip}</span>
            </div>
            {work.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="tech">
              {work.tech} —{" "}
              <a href={work.url}>{work.url.replace(/^https?:\/\//, "")} ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
