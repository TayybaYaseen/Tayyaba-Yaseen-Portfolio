import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-box">
          <h2>Let&apos;s Bring Your Ideas to Life</h2>
          <p>Have a project in mind? Let&apos;s create something professional, creative and impactful together.</p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
