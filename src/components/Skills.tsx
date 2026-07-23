import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Skills</p>
        <h2 className="h2">スキル</h2>
        <hr className="rule" />
        {skills.map((group) => (
          <div className="pillgroup" key={group.label}>
            <p className="glabel">{group.label}</p>
            <div className="pills">
              {group.items.map((item) => (
                <span
                  className={item.hot ? "pill hot" : "pill"}
                  key={item.name}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
