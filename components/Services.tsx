const services = [
  {
    icon: "🔍",
    color: "blue",
    title: "Security Audits",
    description:
      "Rigorous, independent audits against leading international standards. We audit your controls, policies, and technical posture with real-world expertise.",
    tags: ["SOC 2 Type II", "ISO 27001", "HIPAA"],
  },
  {
    icon: "🛡️",
    color: "green",
    title: "Penetration Testing",
    description:
      "Adversarial simulation of real attack techniques against your web apps, APIs, cloud infrastructure, and network to find exploitable vulnerabilities before attackers do.",
    tags: ["VAPT", "Red Team", "Cloud SecTest"],
  },
  {
    icon: "📋",
    color: "amber",
    title: "GRC & Compliance Readiness",
    description:
      "We map your existing practices against frameworks, close gaps, and prepare your team with policies, procedures, and evidence — long before the auditor arrives.",
    tags: ["Gap Assessment", "Policy Design", "DPDP Act"],
  },
  {
    icon: "☁️",
    color: "purple",
    title: "Cloud Security Assessment",
    description:
      "Specialized review of your AWS, Azure, or GCP environment — misconfigurations, IAM posture, network exposure, and alignment to CIS Benchmarks.",
    tags: ["AWS Review", "Azure", "CIS Controls"],
  },
  {
    icon: "🔐",
    color: "red",
    title: "Privacy Compliance",
    description:
      "Navigate data protection laws with confidence. We help you implement GDPR, India's DPDP Act, and HIPAA requirements with practical, audit-ready controls.",
    tags: ["GDPR", "DPDP 2023", "ISO 27701"],
  },
  {
    icon: "🤖",
    color: "teal",
    title: "AI Governance Audits",
    description:
      "As AI proliferates in products, we help you achieve ISO 42001 certification — the global standard for responsible AI management systems.",
    tags: ["ISO 42001", "AI Risk", "NIST AI RMF"],
  },
];

export default function Services() {
  return (
    <section className="page-section services" id="services" style={{ paddingLeft: "8%", paddingRight: "8%" }}>
      <div className="services-header">
        <div className="section-label">What we do</div>
        <h2 className="section-title">End-to-end security assurance services</h2>
        <p className="section-body">
          From gap assessments to certification audits — we own every step of
          your compliance journey so your team can focus on building.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className={`service-icon ${s.color}`}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className="service-tags">
              {s.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
