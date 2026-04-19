export default function WhoWeHelp() {
  return (
    <section className="pain-section" id="who-needs-this" aria-labelledby="who-heading">
      <div className="pain-intro">
        <div className="section-label">Who We Help</div>
        <h2 className="section-title" id="who-heading">If any of these sound familiar, you need a vCISO</h2>
        <p className="section-body">
          CertSigma works with fast-growing Indian tech companies at the moment security and compliance becomes a growth blocker — not just a risk management exercise.
        </p>
      </div>

      <div className="pain-grid">
        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">🚀</span>
          <h3>The deal-blocked SaaS founder</h3>
          <p>Your biggest enterprise prospect just sent a 200-question security questionnaire and won&apos;t proceed without a SOC 2 report. Your engineering team has no bandwidth and you have no idea where to start.</p>
          <span className="pain-tag">SOC 2 · ISO 27001</span>
        </article>

        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">💳</span>
          <h3>The fintech founder facing regulators</h3>
          <p>Your banking partner or payment network has mandated ISO 27001 or PCI DSS certification. You&apos;re building a product, not a compliance programme — and the deadline is three months away.</p>
          <span className="pain-tag">ISO 27001 · PCI DSS</span>
        </article>

        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">🏥</span>
          <h3>The healthtech team selling into the US</h3>
          <p>Your US healthcare prospects require HIPAA compliance before they&apos;ll even schedule a demo. You handle patient data but have no HIPAA programme — no policies, no BAAs, no technical safeguards.</p>
          <span className="pain-tag">HIPAA · SOC 2</span>
        </article>

        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">🌍</span>
          <h3>The Indian SaaS company going global</h3>
          <p>You&apos;re expanding into the EU or UK and your legal team just told you that you&apos;re processing personal data without GDPR or UK GDPR compliance — and your European enterprise prospects have noticed.</p>
          <span className="pain-tag">GDPR · DPDP · ISO 27701</span>
        </article>

        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">📈</span>
          <h3>The Series A company with investor pressure</h3>
          <p>Your lead investor requires ISO 27001 as a condition of closing. Or your due diligence process has revealed that your security programme doesn&apos;t meet the standard your valuation implies.</p>
          <span className="pain-tag">ISO 27001 · SOC 2</span>
        </article>

        <article className="pain-card">
          <span className="pain-icon" aria-hidden="true">⚠️</span>
          <h3>The team that failed their first audit</h3>
          <p>You went through an audit and received major findings. Your auditor issued a qualified opinion or found control gaps you didn&apos;t know existed. You need someone who builds controls the way auditors test them.</p>
          <span className="pain-tag">Remediation · All Frameworks</span>
        </article>
      </div>
    </section>
  );
}
