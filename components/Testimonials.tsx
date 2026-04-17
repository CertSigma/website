const testimonials = [
  {
    initials: "RK",
    quote:
      "CertSigma got us SOC 2 Type II ready in under four weeks. Their team knew exactly what enterprise prospects needed to see — and we closed three deals off the back of the report.",
    name: "Rohan Kapoor",
    role: "CTO, FinBridge Technologies",
  },
  {
    initials: "SP",
    quote:
      "We needed ISO 27001 to enter the European market. CertSigma handled the full implementation and audit. Zero findings in our certification audit — first attempt.",
    name: "Sonal Patel",
    role: "CEO, DataHarbour",
  },
  {
    initials: "AJ",
    quote:
      "Their VAPT team found a critical API vulnerability our own security team had missed. Clear reporting, actionable fixes, and followed up to verify. Exactly what you want.",
    name: "Arjun Jain",
    role: "Head of Security, Kira Health",
  },
];

export default function Testimonials() {
  return (
    <section className="page-section testimonials">
      <div className="section-label">Client stories</div>
      <h2 className="section-title">Trusted by fast-growing companies</h2>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="testi-quote">&ldquo;</div>
            <p className="testi-text">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
