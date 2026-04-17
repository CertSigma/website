const stats = [
  { number: "50+", label: "Audits completed" },
  { number: "14", label: "Frameworks covered" },
  { number: "3wk", label: "Avg audit cycle" },
  { number: "100%", label: "First-pass success" },
];

const points = [
  {
    n: "01",
    title: "Security-first, not compliance-first",
    body: "We audit with real-world threat context in mind. Compliance is the output, security is the goal — your certificate means something.",
  },
  {
    n: "02",
    title: "Senior auditors, no juniors on your file",
    body: "Every engagement is led by certified senior professionals — CISA, CISSP, ISO 27001 Lead Auditors. Not a training ground.",
  },
  {
    n: "03",
    title: "India-native, globally recognized",
    body: "Built in Bengaluru. Aligned to US, EU, and APAC standards. We help Indian SaaS and fintech companies earn trust globally.",
  },
  {
    n: "04",
    title: "Fixed timelines, no surprises",
    body: "We commit to delivery dates and hold them. You always know exactly where you are in the audit process.",
  },
];

export default function WhyUs() {
  return (
    <section className="page-section why-us" id="about">
      <div className="why-grid">
        <div className="why-visual">
          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-label">Why CertSigma</div>
          <h2 className="section-title">Auditors who think like attackers</h2>
          <ul className="why-points">
            {points.map((p) => (
              <li className="why-point" key={p.n}>
                <div className="point-dot">{p.n}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
