const frameworks = [
  { badge: "SOC 2", desc: "Type I & II" },
  { badge: "ISO 27001", desc: "Information Security" },
  { badge: "ISO 42001", desc: "AI Management" },
  { badge: "PCI DSS", desc: "Payment Card Security" },
  { badge: "HIPAA", desc: "Healthcare Privacy" },
  { badge: "GDPR", desc: "EU Data Protection" },
  { badge: "DPDP", desc: "India Data Act 2023" },
  { badge: "HITRUST", desc: "Health Industry Trust" },
  { badge: "NIST CSF", desc: "Cybersecurity Framework" },
  { badge: "ISO 27701", desc: "Privacy Management" },
  { badge: "VAPT", desc: "Vulnerability & Pen Test" },
  { badge: "CIS 18", desc: "Critical Controls" },
];

export default function Frameworks() {
  return (
    <section className="page-section frameworks" id="frameworks" style={{ paddingLeft: "8%", paddingRight: "8%" }}>
      <div className="section-label">Coverage</div>
      <h2 className="section-title" style={{ maxWidth: "100%" }}>
        Every major framework, one trusted partner
      </h2>
      <p className="section-body" style={{ maxWidth: "100%", margin: "0 auto" }}>
        We cover the standards your customers, investors, and regulators require.
      </p>
      <div className="frameworks-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {frameworks.map((fw) => (
          <div className="fw-cell" key={fw.badge}>
            <div className="fw-badge">{fw.badge}</div>
            <span>{fw.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
