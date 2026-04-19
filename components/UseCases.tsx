export default function UseCases() {
  return (
    <section className="usecases-section" id="use-cases" aria-labelledby="usecases-heading">
      <div className="usecases-header">
        <div className="section-label">Real-World Use Cases</div>
        <h2 className="section-title" id="usecases-heading">Exactly what CertSigma fixes — and how</h2>
        <p className="section-body" style={{ maxWidth: "600px" }}>
          These aren&apos;t hypothetical scenarios. They&apos;re the situations our clients arrive in. Here&apos;s how we solve them.
        </p>
      </div>

      <div className="usecases-grid">
        <article className="usecase-row">
          <div className="usecase-left">
            <span className="usecase-scenario">Use Case 01</span>
            <h3>SaaS company blocked from a ₹3Cr enterprise contract</h3>
            <span className="usecase-badge">SOC 2 Type II</span>
          </div>
          <div className="usecase-right">
            <div className="usecase-problem">
              <span className="problem-pill">Problem</span>
              <p>A B2B SaaS company received a vendor security assessment from a Fortune 500 prospect requiring SOC 2 Type II. With no existing security programme, no policies, and no auditor, the deal was in jeopardy. Their engineering team had zero capacity for compliance work.</p>
            </div>
            <div className="usecase-solution">
              <span className="solution-pill">CertSigma</span>
              <p>We scoped the SOC 2 engagement in week one, designed and implemented 30+ controls, authored all policies, configured their cloud environment to pass technical testing, and ran a full mock audit before the real observation period began. We acted as their de facto security team.</p>
            </div>
            <div className="usecase-outcome">
              <span className="outcome-arrow">→</span>
              SOC 2 Type I achieved in 11 weeks. Type II report delivered at month 9. Deal signed at month 10.
            </div>
          </div>
        </article>

        <article className="usecase-row">
          <div className="usecase-left">
            <span className="usecase-scenario">Use Case 02</span>
            <h3>Fintech startup 90 days from ISO 27001 deadline</h3>
            <span className="usecase-badge">ISO 27001</span>
          </div>
          <div className="usecase-right">
            <div className="usecase-problem">
              <span className="problem-pill">Problem</span>
              <p>A Bengaluru fintech company received a 90-day ultimatum from their primary banking partner: achieve ISO 27001 certification or the partnership agreement would not be renewed. They had no ISMS, no risk register, and no internal security expertise.</p>
            </div>
            <div className="usecase-solution">
              <span className="solution-pill">CertSigma</span>
              <p>We performed an emergency gap assessment, built the ISMS from scratch, completed the Statement of Applicability, implemented all Annex A controls, trained their team, ran two internal audits, and coordinated with the certification body — all within the 90-day window.</p>
            </div>
            <div className="usecase-outcome">
              <span className="outcome-arrow">→</span>
              ISO 27001 certification achieved on day 87. Banking partnership renewed. Zero major findings.
            </div>
          </div>
        </article>

        <article className="usecase-row">
          <div className="usecase-left">
            <span className="usecase-scenario">Use Case 03</span>
            <h3>HealthTech platform losing US customers over HIPAA</h3>
            <span className="usecase-badge">HIPAA</span>
          </div>
          <div className="usecase-right">
            <div className="usecase-problem">
              <span className="problem-pill">Problem</span>
              <p>A digital health startup was losing US enterprise deals because they couldn&apos;t demonstrate HIPAA compliance. Three prospects had cited &quot;no Business Associate Agreement and no documented technical safeguards&quot; as the reason for not proceeding.</p>
            </div>
            <div className="usecase-solution">
              <span className="solution-pill">CertSigma</span>
              <p>We performed a HIPAA Security Rule gap assessment, implemented all required technical safeguards (encryption, audit controls, access management), built the HIPAA privacy programme, and produced a full BAA template library and security policies their legal team could use immediately.</p>
            </div>
            <div className="usecase-outcome">
              <span className="outcome-arrow">→</span>
              HIPAA programme live in 8 weeks. Two of three stalled deals re-opened. BAAs signed within 30 days.
            </div>
          </div>
        </article>

        <article className="usecase-row">
          <div className="usecase-left">
            <span className="usecase-scenario">Use Case 04</span>
            <h3>Indian SaaS startup flagged for GDPR non-compliance by EU customer</h3>
            <span className="usecase-badge">GDPR</span>
          </div>
          <div className="usecase-right">
            <div className="usecase-problem">
              <span className="problem-pill">Problem</span>
              <p>A Pune-based SaaS company received a formal notice from a German enterprise customer citing GDPR Article 28 violations — no Data Processing Agreement, no documented lawful basis, and no privacy notice. They were at risk of losing their largest customer.</p>
            </div>
            <div className="usecase-solution">
              <span className="solution-pill">CertSigma</span>
              <p>We conducted a full data mapping exercise, established records of processing activities, identified and documented lawful bases for all processing activities, drafted GDPR-compliant DPAs, updated the privacy policy, and implemented data subject rights workflows for their product.</p>
            </div>
            <div className="usecase-outcome">
              <span className="outcome-arrow">→</span>
              GDPR compliance established in 6 weeks. DPA signed. Customer relationship preserved. Expanded contract followed.
            </div>
          </div>
        </article>

        <article className="usecase-row">
          <div className="usecase-left">
            <span className="usecase-scenario">Use Case 05</span>
            <h3>Startup doing SOC 2 + ISO 27001 simultaneously</h3>
            <span className="usecase-badge">SOC 2 + ISO 27001</span>
          </div>
          <div className="usecase-right">
            <div className="usecase-problem">
              <span className="problem-pill">Problem</span>
              <p>A fast-growing HR-tech SaaS needed both SOC 2 (demanded by US customers) and ISO 27001 (required by their UK enterprise prospects). Two separate consultants had quoted ₹40L+ total, and a 24-month combined timeline. They needed it faster and cheaper.</p>
            </div>
            <div className="usecase-solution">
              <span className="solution-pill">CertSigma</span>
              <p>We architected a single unified control environment satisfying both frameworks simultaneously. Controls built once, evidence collected once, tested twice. The SOC 2 Trust Service Criteria and ISO 27001 Annex A were mapped against each other, eliminating duplicated effort and cutting cost by 38%.</p>
            </div>
            <div className="usecase-outcome">
              <span className="outcome-arrow">→</span>
              Both certifications achieved in 14 months. Total cost: ₹18L. Saved ₹22L+ vs. separate engagements.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
