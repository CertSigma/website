export default function WhyUs() {
  return (
    <section className="why-section" id="why-certsigma" aria-labelledby="why-heading">
      <div className="why-grid">
        <div className="why-visual" aria-hidden="true">
          <div className="stat-row">
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Certifications delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">First-pass audit success</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Frameworks covered</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3wk</div>
              <div className="stat-label">Avg. gap assessment delivery</div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-label">Why CertSigma</div>
          <h2 className="section-title" id="why-heading">We build controls the way auditors test them</h2>
          <ul className="why-points" aria-label="CertSigma differentiators">
            <li className="why-point">
              <div className="point-dot" aria-hidden="true">01</div>
              <div>
                <h4>We come from audit, not just consulting</h4>
                <p>Our team has sat on both sides of the audit table. We know exactly what an AICPA-licensed SOC 2 auditor or ISO certification body will test — and we build your controls to pass those specific tests, not a generic template.</p>
              </div>
            </li>
            <li className="why-point">
              <div className="point-dot" aria-hidden="true">02</div>
              <div>
                <h4>Fixed scope, fixed price, fixed timeline</h4>
                <p>No hourly billing that spirals. No hidden fees when scope expands. Every engagement is quoted with a fixed price and a delivery timeline we commit to — and hold. Your board gets predictable numbers.</p>
              </div>
            </li>
            <li className="why-point">
              <div className="point-dot" aria-hidden="true">03</div>
              <div>
                <h4>Senior experts, not junior analysts on your file</h4>
                <p>Every client engagement is led by a senior certified professional — CISA, CISSP, ISO 27001 Lead Auditor, or CIPP/E. You&apos;re never passed to a first-year analyst after the sales call.</p>
              </div>
            </li>
            <li className="why-point">
              <div className="point-dot" aria-hidden="true">04</div>
              <div>
                <h4>India-native. Globally recognised.</h4>
                <p>We understand Indian SaaS and tech companies from the inside — your infrastructure patterns, your team structures, your budget realities. Our certifications are internationally recognised and accepted by US, EU, and UK enterprise buyers.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
