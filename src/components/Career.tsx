import { career } from "../data/portfolio";

export function Career() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Career</p>
        <h2 className="h2">職務経歴</h2>
        <hr className="rule" />
        <ul className="tl">
          {career.map((entry) => (
            <li key={entry.company}>
              <span className="period">{entry.period}</span>
              <div className="tl-head">
                <h3 className="tl-h3">{entry.company}</h3>
                {entry.chips.map((chip) => (
                  <span className="st" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <p className="tl-role">{entry.role}</p>
              <p className="tl-about">{entry.summary}</p>
              {entry.bullets.length > 0 && (
                <ul className="tl-list">
                  {entry.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
