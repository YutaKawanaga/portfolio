import { skills, skillsLead } from "../data/portfolio";

export function Skills() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Skills</p>
        <h2 className="h2">スキル</h2>
        <hr className="rule" />
        <p className="skills-lead">{skillsLead}</p>
        {skills.map((group) => (
          <div className="pillgroup" key={group.label}>
            <p className="glabel">{group.label}</p>
            <div className="pills">
              {group.items.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
