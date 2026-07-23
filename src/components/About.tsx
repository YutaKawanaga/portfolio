import { about } from "../data/portfolio";
import { Highlight } from "./Highlight";

export function About() {
  return (
    <section className="section about">
      <div className="wrap">
        <p className="eyebrow">About</p>
        <h2 className="h2">やってきたこと</h2>
        <hr className="rule" />
        {about.map((para, i) => (
          <p className="prose" key={i}>
            <Highlight text={para} />
          </p>
        ))}
      </div>
    </section>
  );
}
