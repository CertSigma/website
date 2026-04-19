export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-label">Client Stories</div>
      <h2 className="section-title" id="testimonials-heading">Results our clients talk about</h2>

      <div className="testi-grid">
        <article className="testi-card">
          <div className="testi-quote" aria-hidden="true">&quot;</div>
          <p className="testi-text">We were stuck on a ₹3Cr enterprise deal because the buyer needed SOC 2 Type II. CertSigma had us audit-ready in under three months. The deal closed two weeks after we sent the report.</p>
          <div className="testi-result"><strong>Outcome:</strong> SOC 2 Type II · ₹3Cr deal closed · 11 weeks to Type I</div>
          <div className="testi-author">
            <div className="testi-avatar" aria-hidden="true">RK</div>
            <div>
              <div className="testi-name">Rohan Kapoor</div>
              <div className="testi-role">CTO, FinBridge Technologies · Bengaluru</div>
            </div>
          </div>
        </article>

        <article className="testi-card">
          <div className="testi-quote" aria-hidden="true">&quot;</div>
          <p className="testi-text">Our banking partner gave us 90 days to get ISO 27001 or lose the contract. CertSigma started on day one and we walked into the certification audit on day 83 — zero major findings. I genuinely didn&apos;t think it was possible.</p>
          <div className="testi-result"><strong>Outcome:</strong> ISO 27001 certified in 87 days · Banking contract retained</div>
          <div className="testi-author">
            <div className="testi-avatar" aria-hidden="true">SP</div>
            <div>
              <div className="testi-name">Sonal Patel</div>
              <div className="testi-role">CEO, DataHarbour · Hyderabad</div>
            </div>
          </div>
        </article>

        <article className="testi-card">
          <div className="testi-quote" aria-hidden="true">&quot;</div>
          <p className="testi-text">We needed both SOC 2 and ISO 27001. Two other firms quoted ₹40L and 24 months. CertSigma did both simultaneously for ₹18L in 14 months. The quality of the controls they built has actually improved our security posture — not just our certifications.</p>
          <div className="testi-result"><strong>Outcome:</strong> SOC 2 + ISO 27001 · ₹22L saved · 14 months total</div>
          <div className="testi-author">
            <div className="testi-avatar" aria-hidden="true">AJ</div>
            <div>
              <div className="testi-name">Arjun Jain</div>
              <div className="testi-role">VP Engineering, Kira Health · Pune</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
