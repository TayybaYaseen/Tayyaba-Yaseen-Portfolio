"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { CLIENTS } from "@/lib/clients";

function initialsOf(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Feedback() {
  const [activeIdx, setActiveIdx] = useState(null);

  const active = activeIdx !== null ? CLIENTS[activeIdx] : null;

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActiveIdx(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="feedback" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Reviews</span>
          <h2>
            Client Feedback &amp; <span className="gradient-text">Project Results</span>
          </h2>
          <p>Real feedback from amazing clients with actual projects I&apos;ve completed</p>
        </Reveal>

        <div className="feedback-grid">
          {CLIENTS.map((c, i) => (
            <Reveal className="fb-card" as="div" key={c.name}>
              <div className="fb-top">
                <div className="fb-client">
                  <div className="fb-avatar">{initialsOf(c.name)}</div>
                  <div>
                    <b>{c.name}</b>
                    <span>{c.role}</span>
                  </div>
                </div>
                <div className="fb-badge">
                  <div className="fb-badge-icon">
                    <img src={c.iconImg} alt={`${c.category} logo`} />
                  </div>
                  <span>{c.category}</span>
                </div>
              </div>
              <div className="fb-stars">★★★★★</div>
              <p className="fb-quote">&quot;{c.quote}&quot;</p>
              <div className="fb-image-wrap" onClick={() => setActiveIdx(i)}>
                <img src={c.projectImg} alt={c.project} loading="lazy" />
              </div>
              <div className="fb-meta">
                <div className="row">
                  <span className="k">Project</span>
                  <span className="v">{c.project}</span>
                </div>
                <div className="row">
                  <span className="k">Service</span>
                  <span className="v">{c.service}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={`lightbox${active ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && setActiveIdx(null)}>
        <button className="lightbox-close" aria-label="Close" onClick={() => setActiveIdx(null)}>
          ✕
        </button>
        {active && (
          <div className="lightbox-content">
            <div className="lightbox-img-area">
              <img src={active.projectImg} alt={active.project} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="lightbox-info">
              <h4>{active.project}</h4>
              <p>
                {active.service} · Client: {active.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
