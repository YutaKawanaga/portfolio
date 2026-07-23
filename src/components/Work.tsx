import { work } from "../data/portfolio";
import shotCalendar from "../assets/iegoto/screenshot-calendar.png";
import shotToday from "../assets/iegoto/screenshot-today-mobile.png";
import shotShopping from "../assets/iegoto/screenshot-shopping-mobile.png";

export function Work() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Personal Work</p>
        <h2 className="h2">個人開発</h2>
        <hr className="rule" />
        <div className="work">
          <div className="work-shot">
            <img
              className="shot-main"
              src={shotCalendar}
              alt="iegoto カレンダー月表示 (PC)"
              loading="lazy"
            />
            <div className="shot-row">
              <img
                src={shotToday}
                alt="iegoto 今日ビュー (モバイル)"
                loading="lazy"
              />
              <img
                src={shotShopping}
                alt="iegoto 買い物リスト (モバイル)"
                loading="lazy"
              />
            </div>
          </div>
          <div className="work-body">
            <div className="work-head">
              <h3 className="work-h3">{work.name}</h3>
              <span className="work-tagline">{work.tagline}</span>
              <span className="st">{work.chip}</span>
            </div>
            {work.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="tech">{work.tech}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
