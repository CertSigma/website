export default function FAQ() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-layout">
        <div className="faq-sticky">
          <div className="section-label">FAQ</div>
          <h2 className="section-title" id="faq-heading">Questions we answer every day</h2>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            Not seeing yours? <a href="#contact" style={{ color: "var(--accent-bright)", textDecoration: "none", fontWeight: 500 }}>Ask us directly →</a>
          </p>

          <div style={{ marginTop: "2.5rem", padding: "1.8rem", background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem" }}>
              Not sure which framework you need?
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", marginBottom: "1.2rem" }}>
              Book a free 30-minute call. We&apos;ll tell you exactly which certifications will unblock your sales and satisfy your regulators — with a clear, sequenced roadmap.
            </p>
            <a href="#contact" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.65rem 1.4rem" }}>Book free call →</a>
          </div>
        </div>

        <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">What is a vCISO and why does my company need one?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">A virtual CISO (vCISO) provides senior-level security leadership and hands-on compliance expertise without the ₹2Cr+ annual cost of a full-time Chief Information Security Officer. <strong>You need a vCISO</strong> when enterprise customers require security certifications before signing contracts, when regulators mandate compliance programmes you don&apos;t have, when investors require security governance, or when you need to pass an audit but lack internal security expertise. CertSigma&apos;s vCISO service combines strategic leadership with hands-on implementation — we don&apos;t just advise, we build.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">How long does SOC 2 Type II take?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">SOC 2 Type II requires a <strong>minimum 6-month observation period</strong> — this is mandated by the AICPA and cannot be shortened. However, how prepared your control environment is before the clock starts is entirely controllable. CertSigma typically completes control build-out in 6–10 weeks, then the 6-month window begins. Most clients receive their Type II report 9–12 months from the kickoff call. <strong>SOC 2 Type I</strong>, which has no observation period requirement, can be completed in 10–14 weeks and is often the right first step for companies with an immediate deal deadline.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">Can CertSigma do SOC 2 and ISO 27001 at the same time?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Yes — and for most clients, we recommend it. <strong>SOC 2 and ISO 27001 share approximately 70% of underlying controls.</strong> By architecting a single unified control environment that satisfies both frameworks simultaneously, we reduce total cost by 30–40% compared to sequential engagements. The additional effort of the second framework is roughly 20–25% — not 100%. We build once, certify twice.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">How much do CertSigma vCISO services cost?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Every engagement is scoped individually based on company size, current security maturity, and target frameworks. As a guide: <strong>project-based audit readiness programmes</strong> (SOC 2 or ISO 27001) typically range from <strong>₹8L to ₹20L</strong>. <strong>Monthly vCISO retainers</strong> start from <strong>₹1.5L/month</strong>. Multi-framework programmes (e.g. SOC 2 + ISO 27001 together) are priced to reflect the significant control overlap. All engagements start with a free discovery call and a fixed-price proposal — no hourly billing, no scope creep surprises.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">Do you work with companies that have no existing security programme?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">This is the most common starting point for CertSigma clients. The majority of our engagements begin with companies that have informal security practices, no written policies, and no documentation. We perform a gap assessment to establish exactly where you are, then build the programme from scratch. <strong>Starting from zero is not a disadvantage</strong> — it means we design your control environment correctly from the beginning, rather than retrofitting a poorly designed one.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">We failed our SOC 2 audit. Can CertSigma help?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Yes. Audit failure — whether a qualified opinion, major findings, or deferred certification — is something we remediate regularly. We review your auditor&apos;s findings report, identify the root cause of each deficiency (usually poor control design, inadequate evidence, or undocumented procedures), rebuild the failing controls properly, and prepare you for the re-audit. We&apos;ve never had a client fail their re-audit after CertSigma remediation.</p>
            </div>
          </div>

          <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="faq-q" itemProp="name">Does CertSigma also perform the audit, or only readiness?</h3>
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">CertSigma provides readiness, implementation, and advisory services — we are not an audit firm. This is intentional: <strong>the same firm cannot prepare you for an audit and then audit you</strong> (a conflict of interest prohibited under AICPA and ISO rules). We work with independent, accredited auditors and certification bodies on your behalf — selecting the right auditor for your needs, managing the relationship, and supporting you throughout the audit process. Think of us as your security team; the auditor is the independent referee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
