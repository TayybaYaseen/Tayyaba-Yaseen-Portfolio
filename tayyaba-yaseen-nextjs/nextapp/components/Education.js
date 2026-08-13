import Reveal from "./Reveal";
import { EduIcon } from "@/lib/icons";
import { EDUCATION } from "@/lib/education";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education &amp; Learning</span>
          <h2>
            Built On <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p>A foundation in design paired with ongoing, hands-on training in the tools that power modern digital content.</p>
        </Reveal>

        <div className="edu-timeline">
          {EDUCATION.map((item, i) => (
            <Reveal className="edu-item" delay={i === 0 ? undefined : Math.min(i, 3)} key={item.title}>
              <div className="edu-dot">
                <EduIcon name={item.icon} />
              </div>
              <div className="edu-content">
                <span className="edu-year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
