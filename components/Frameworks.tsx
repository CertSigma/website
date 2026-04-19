export default function Frameworks() {
  return (
    <section className="frameworks" id="frameworks" aria-labelledby="frameworks-heading">
      <div className="fw-header">
        <div>
          <div className="section-label">Frameworks We Cover</div>
          <h2 className="section-title" id="frameworks-heading">Every standard your customers and regulators require</h2>
          <p className="section-body">
            SOC 2 and ISO 27001 share ~70% of controls. We build once, certify across multiple frameworks — dramatically reducing cost and timeline for multi-framework programmes.
          </p>
        </div>
        <div>
          <p className="section-body" style={{ marginBottom: "1.3rem" }}>
            Most companies need to start with one framework and expand as they enter new markets. We sequence your compliance roadmap intelligently — so each certification you add costs less than the last.
          </p>
          <a href="#contact" className="btn-primary" style={{ width: "fit-content" }}>Get your compliance roadmap →</a>
        </div>
      </div>

      <div className="frameworks-grid" role="list" aria-label="Supported compliance frameworks">
        <div className="fw-cell" role="listitem"><div className="fw-badge">SOC 2</div><span>Type I & II · Trust Service Criteria</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">ISO 27001</div><span>ISMS · 2022 edition · Annex A</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">HIPAA</div><span>Security, Privacy & Breach Notification Rules</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">GDPR</div><span>EU & UK General Data Protection Regulation</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">DPDP</div><span>India Digital Personal Data Protection Act 2023</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">ISO 27701</div><span>Privacy Information Management System</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">PCI DSS</div><span>Payment Card Industry v4.0</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">NIST CSF</div><span>Cybersecurity Framework 2.0</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">ISO 42001</div><span>AI Management Systems</span></div>
        <div className="fw-cell" role="listitem"><div className="fw-badge">CIS 18</div><span>Critical Security Controls v8</span></div>
      </div>
    </section>
  );
}
