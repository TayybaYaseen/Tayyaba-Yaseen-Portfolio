"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { SKILLS } from "@/lib/skills";

const POSITIONS = [
  { x: 0, y: 0, scale: 1, rotY: 0, op: 1, z: 60, blur: 0 },
  { x: 230, y: 8, scale: 0.8, rotY: -28, op: 0.6, z: 50, blur: 1 },
  { x: 150, y: 26, scale: 0.55, rotY: -35, op: 0.28, z: 20, blur: 2 },
  { x: 0, y: 34, scale: 0.42, rotY: 0, op: 0.14, z: 5, blur: 3 },
  { x: -150, y: 26, scale: 0.55, rotY: 35, op: 0.28, z: 20, blur: 2 },
  { x: -230, y: 8, scale: 0.8, rotY: 28, op: 0.6, z: 50, blur: 1 },
];

export default function Expertise() {
  const n = SKILLS.length;
  const [front, setFront] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const autoTimer = useRef(null);
  const resumeTimer = useRef(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedIndex]);

  function startAuto() {
    stopAuto();
    if (flippedIndex !== null) return;
    autoTimer.current = setInterval(() => {
      setFront((f) => (f + 1) % n);
    }, 2000);
  }

  function stopAuto() {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = null;
  }

  function pauseThenResume() {
    stopAuto();
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setFlippedIndex(null);
      startAuto();
    }, 4000);
  }

  function handleCardClick(i) {
    if (i === front) {
      setFlippedIndex((cur) => (cur === i ? null : i));
    } else {
      setFlippedIndex(null);
      setFront(i);
      pauseThenResume();
    }
  }

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Expertise</span>
          <h2>
            Six Skills, <span className="gradient-text">One Creative Studio</span>
          </h2>
          <p>Click the front card to flip it for details, or click any card in the back to bring it forward.</p>
        </Reveal>
      </div>

      <div className="carousel-wrap">
        <div className="carousel-stage">
          {SKILLS.map((s, i) => {
            const offset = (i - front + n) % n;
            const p = POSITIONS[offset];
            const style = {
              zIndex: p.z,
              opacity: p.op,
              filter: p.blur ? `blur(${p.blur}px)` : "none",
              transform: `translate(-50%,-50%) translate(${p.x}px,${p.y}px) scale(${p.scale}) rotateY(${p.rotY}deg)`,
              left: "50%",
              top: "50%",
              position: "absolute",
            };
            return (
              <div
                key={s.key}
                className={`carousel-card${flippedIndex === i ? " flipped" : ""}`}
                style={style}
                onClick={() => handleCardClick(i)}
              >
                <div className="card-flip">
                  <div className="card-face card-front-face" style={{ "--card-grad": s.grad }}>
                    <div className="card-icon-badge" style={{ background: s.grad }}>
                      <img
                        src={s.iconImg}
                        alt={`${s.name} logo`}
                        style={{ width: "60%", height: "60%", objectFit: "contain", borderRadius: 8, background: "#fff", padding: 4 }}
                      />
                    </div>
                    <div>
                      <h3>{s.name}</h3>
                      <div className="card-jobtitle">{s.jobTitles}</div>
                      <p className="card-tagline">{s.tagline}</p>
                    </div>
                    <div className="flip-hint">↻ Click to flip</div>
                  </div>
                  <div className="card-face card-back-face" style={{ "--card-grad": s.grad, background: s.grad }}>
                    <h4>{s.name}</h4>
                    <div className="back-section-title">Services</div>
                    <div className="card-back-list">{s.services.join(" · ")}</div>
                    <div className="back-section-title">Tools</div>
                    <div className="card-back-list">{s.tools.join(" · ")}</div>
                    <div className="back-section-title">Job Titles</div>
                    <div className="card-back-list">{s.jobTitles}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-dots">
          {SKILLS.map((s, i) => (
            <button
              key={s.key}
              className={i === front ? "active" : ""}
              aria-label={`Show ${s.name}`}
              onClick={() => {
                setFlippedIndex(null);
                setFront(i);
                pauseThenResume();
              }}
            />
          ))}
        </div>
        <p className="carousel-hint">Auto-rotating every few seconds — click a card to explore it</p>
      </div>
    </section>
  );
}
