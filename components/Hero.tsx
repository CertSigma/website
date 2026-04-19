export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-watermark" aria-hidden="true">Σ</div>

      <div className="hero-badge">
        <span className="dot" aria-hidden="true"></span>
        India&apos;s Expert vCISO Firm
      </div>

      <h1 id="hero-heading">
        Close enterprise deals.<br />
        <span className="highlight">Pass every audit. First time.</span>
      </h1>

      <p className="hero-sub">
        CertSigma is a specialist vCISO firm that <strong>implements your security controls</strong> and gets you <strong>audit-ready for SOC 2, ISO 27001, GDPR, and HIPAA</strong> — faster and at a fraction of the cost of a full-time CISO hire.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Book a free discovery call →</a>
        <a href="#use-cases" className="btn-outline">See real-world examples</a>
      </div>

      <div className="hero-trust" role="list" aria-label="Key service highlights">
        <div className="trust-item" role="listitem"><div className="trust-check" aria-hidden="true">✓</div> SOC 2 Type I & II</div>
        <div className="trust-item" role="listitem"><div className="trust-check" aria-hidden="true">✓</div> ISO 27001 & 27701</div>
        <div className="trust-item" role="listitem"><div className="trust-check" aria-hidden="true">✓</div> HIPAA & GDPR</div>
        <div className="trust-item" role="listitem"><div className="trust-check" aria-hidden="true">✓</div> DPDP Act 2023</div>
        <div className="trust-item" role="listitem"><div className="trust-check" aria-hidden="true">✓</div> 100% first-pass audit rate</div>
      </div>
    </section>
  );
}
