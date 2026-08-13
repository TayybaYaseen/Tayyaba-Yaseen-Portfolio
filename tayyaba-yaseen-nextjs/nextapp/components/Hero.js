import { SparkleIcon } from "@/lib/icons";
import { SKILLS } from "@/lib/skills";

export default function Hero() {
  const [canva, ai, social, anim, board, reels] = SKILLS;

  return (
    <section className="hero" id="home">
      <div className="hero-blob blob-a"></div>
      <div className="hero-blob blob-b"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Available for freelance projects</span>
          <h1>
            I&apos;m <span className="gradient-text">Tayyaba Yaseen</span>
          </h1>
          <p className="hero-headline">
            Creative Designer &amp; Digital Content Creator <span className="headline-sep">·</span> AI Photo &amp; Video
            Generation (UGC Ads) <span className="headline-sep">·</span> AI Automation
          </p>
          <p className="hero-sub">
            I create professional graphics, AI-powered photos and videos, UGC ad creatives, social media content,
            marketing designs and AI automation workflows that turn ideas into impactful digital experiences.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="#expertise" className="btn btn-outline">
              See What I Do
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>6</b>
              <span>Core Services</span>
            </div>
            <div className="hero-stat">
              <b>40+</b>
              <span>Projects Delivered</span>
            </div>
            <div className="hero-stat">
              <b>5.0</b>
              <span>Average Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-center-card">
            <SparkleIcon />
            <b>Creative Studio</b>
            <span>Design · AI · Video</span>
          </div>

          <div className="float-card fc-1">
            <div className="fc-icon">
              <img src={canva.iconImg} alt="Canva Design logo" />
            </div>
            <div className="fc-text">
              <b>Canva Design</b>
              <span>Social &amp; Ads</span>
            </div>
          </div>

          <div className="float-card fc-2">
            <div className="fc-icon">
              <img src={ai.iconImg} alt="AI Photo & Video logo" />
            </div>
            <div className="fc-text">
              <b>AI Photo &amp; Video</b>
              <span>UGC Ads</span>
            </div>
          </div>

          <div className="float-card fc-4">
            <div className="fc-icon">
              <img src={social.iconImg} alt="Social Media logo" />
            </div>
            <div className="fc-text">
              <b>Social Media</b>
              <span>Growth &amp; Reach</span>
            </div>
          </div>

          <div className="float-card fc-5">
            <div className="fc-icon">
              <img src={anim.iconImg} alt="2D/3D Animation logo" />
            </div>
            <div className="fc-text">
              <b>2D/3D Animation</b>
              <span>Motion Graphics</span>
            </div>
          </div>

          <div className="float-card fc-6">
            <div className="fc-icon">
              <img src={reels.iconImg} alt="Reels Editing logo" />
            </div>
            <div className="fc-text">
              <b>Reels Editing</b>
              <span>Short-form</span>
            </div>
          </div>

          <div className="float-card fc-7">
            <div className="fc-icon">
              <img src={board.iconImg} alt="Whiteboard Videos logo" />
            </div>
            <div className="fc-text">
              <b>Whiteboard Videos</b>
              <span>Explainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
