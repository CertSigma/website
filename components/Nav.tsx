"use client";

import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="site-nav">
        <a href="#" className="nav-logo" onClick={close}>
          <Image
            src="/logos/certsigma_logo4.png"
            alt="CertSigma Logo"
            width={140}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#frameworks">Frameworks</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <a href="#contact" className="nav-cta nav-cta-desktop">Get a Quote →</a>

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
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#frameworks" onClick={close}>Frameworks</a></li>
          <li><a href="#process" onClick={close}>Process</a></li>
          <li><a href="#about" onClick={close}>About</a></li>
        </ul>
        <a href="#contact" className="nav-cta mobile-cta" onClick={close}>Get a Quote →</a>
      </div>

      {/* Overlay */}
      {open && <div className="drawer-overlay" onClick={close} />}
    </>
  );
}
