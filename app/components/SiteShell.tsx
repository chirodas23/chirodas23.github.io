"use client";

import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Chiroshree Das home">
          <span>CD</span>
          Chiroshree Das
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" className={open ? "nav-open" : ""} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="glass-button header-cta" href="mailto:chiroshreedas23@gmail.com">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </header>
      {children}
      <footer className="site-footer">
        <div>
          <a className="wordmark footer-mark" href="/">
            <span>CD</span>
            Chiroshree Das
          </a>
          <p>Global influencer marketing, beauty growth, and cross-cultural brand building.</p>
        </div>
        <div className="footer-links">
          <a href="/work">Selected work</a>
          <a href="/about">About</a>
          <a href="https://www.instagram.com/yeoriyeori_global" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:chiroshreedas23@gmail.com">Email</a>
        </div>
        <p className="footer-note">Seoul, South Korea · Open to global beauty opportunities</p>
      </footer>
    </div>
  );
}
