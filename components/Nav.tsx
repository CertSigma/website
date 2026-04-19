"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="CertSigma Home" onClick={close}>
          <span className="sigma" aria-hidden="true">Σ</span>
          CertSigma
        </a>
        <ul className="nav-links">
          <li><a href="#who-needs-this">Who We Help</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#frameworks">Frameworks</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#contact" className="nav-cta nav-cta-desktop">Book a free call →</a>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? "is-open" : ""}`}>
        <ul className="mobile-nav-links">
          <li><a href="#who-needs-this" onClick={close}>Who We Help</a></li>
          <li><a href="#use-cases" onClick={close}>Use Cases</a></li>
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#frameworks" onClick={close}>Frameworks</a></li>
          <li><a href="#faq" onClick={close}>FAQ</a></li>
        </ul>
        <a href="#contact" className="nav-cta mobile-cta" onClick={close}>Book a free call →</a>
      </div>

      {/* Overlay */}
      {open && <div className="drawer-overlay" onClick={close} />}
    </>
  );
}
