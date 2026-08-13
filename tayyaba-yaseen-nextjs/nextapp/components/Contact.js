"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { MailIcon, WhatsAppIcon, PhoneIcon, PinIcon, InstagramIcon, LinkedInIcon, FacebookIcon, BehanceIcon } from "@/lib/icons";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL, EMAIL } from "@/lib/config";

export default function Contact() {
  const [showNote, setShowNote] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowNote(true);
    e.target.reset();
    setTimeout(() => setShowNote(false), 5000);
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal className="contact-side">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s Work Together</h2>
          <p>Tell me a little about your project and I&apos;ll get back to you shortly with next steps.</p>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MailIcon />
            </div>
            <div>
              <b>Email</b>
              <span>{EMAIL}</span>
            </div>
          </div>

          <a
            className="contact-info-item"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="contact-info-icon" style={{ color: "#25D366" }}>
              <WhatsAppIcon />
            </div>
            <div>
              <b>WhatsApp</b>
              <span>+92 301 4227123</span>
            </div>
          </a>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <PhoneIcon />
            </div>
            <div>
              <b>Availability</b>
              <span>Open for new projects worldwide</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <PinIcon />
            </div>
            <div>
              <b>Based</b>
              <span>Working remotely, international clients</span>
            </div>
          </div>

          <div className="social-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Behance">
              <BehanceIcon />
            </a>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" delay={1} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" type="email" placeholder="you@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label htmlFor="cf-type">Project Type</label>
              <select id="cf-type">
                <option>Canva Design</option>
                <option>AI Photo &amp; Video / UGC Ads</option>
                <option>Social Media Marketing</option>
                <option>2D &amp; 3D Animation</option>
                <option>Whiteboard Video</option>
                <option>Reels &amp; Short Video Editing</option>
                <option>Something else</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" placeholder="Tell me about your project..." required></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Send Message
          </button>
          <p className={`form-note${showNote ? " show" : ""}`}>
            Thanks — your message has been noted. I&apos;ll get back to you soon!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
