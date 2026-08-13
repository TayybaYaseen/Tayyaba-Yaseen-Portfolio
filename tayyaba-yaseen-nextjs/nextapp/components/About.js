import Reveal from "./Reveal";

const TAGS = [
  "Graphic Design",
  "Canva Design",
  "AI Content Creation",
  "AI Photo & Video",
  "UGC Ad Creation",
  "Social Media Marketing",
  "Video Editing",
  "2D & 3D Animation",
  "Whiteboard Videos",
  "Short-form Content",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <Reveal className="about-visual">
          <div className="about-card">
            <div className="about-card-inner">
              <img className="profile-photo" src="/images/profile.jpg" alt="Tayyaba Yaseen" />
              <b>Tayyaba Yaseen</b>
              <span>Creative Designer &amp; Digital Content Creator, based online — working with international clients.</span>
            </div>
          </div>
          <div className="about-badge">
            <b className="gradient-text">6</b>
            <span>
              Specialized
              <br />
              Skill Areas
            </span>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={1}>
          <span className="eyebrow">About Me</span>
          <h2>
            Turning Ideas Into <span className="gradient-text">Visual Impact</span>
          </h2>
          <p>
            Tayyaba is a creative designer and digital content creator focused on transforming ideas into professional
            visual content. She partners with businesses, brands and entrepreneurs to build a consistent, premium
            digital presence — from a single social post to a full campaign.
          </p>
          <p>
            Her work spans graphic design, AI-assisted content, and video — always grounded in clarity, brand
            consistency and results that clients can measure.
          </p>
          <div className="about-tags">
            {TAGS.map((tag) => (
              <span className="about-tag" key={tag}>
                <span className="dot"></span>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
