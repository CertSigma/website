export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="dot" />
        India&apos;s precision-grade compliance firm
      </div>
      <h1>
        Security audits that{" "}
        <span className="highlight">earn trust,</span>
        <br />
        not just certificates
      </h1>
      <p className="hero-sub">
        CertSigma delivers rigorous, expert-led security audits and compliance
        certifications — helping you close enterprise deals, satisfy regulators,
        and build lasting trust.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Start your audit ↗</a>
        <a href="#services" className="btn-outline">Explore services</a>
      </div>
      <div className="hero-trust">
        <div className="trust-item"><span>✓</span> ISO 27001 Certified Auditors</div>
        <div className="trust-item"><span>✓</span> SOC 2 Type I &amp; II</div>
        <div className="trust-item"><span>✓</span> Avg. 3-week audit cycle</div>
        <div className="trust-item"><span>✓</span> India-based, globally aligned</div>
      </div>
    </section>
  );
}
