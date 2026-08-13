"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let saved = "light";
    try {
      saved = localStorage.getItem("ty-theme") || "light";
    } catch (e) {}
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ty-theme", next);
    } catch (e) {}
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-name">Tayyaba Yaseen</span>
          <span className="brand-label">CREATIVE DESIGNER &amp; CREATOR</span>
        </div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
            <span className="knob">{theme === "dark" ? "✨" : "🌙"}</span>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Start a Project
          </a>
          <button
            className={`nav-toggle-mobile${menuOpen ? " open" : ""}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
