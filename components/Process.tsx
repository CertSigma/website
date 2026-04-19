export default function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-heading">
      <div className="process-header">
        <div className="section-label">How It Works</div>
        <h2 className="section-title" id="process-heading">From first call to certified — exactly what happens</h2>
      </div>
      <div className="process-steps">
        <div className="process-step">
          <span className="step-number" aria-hidden="true">01</span>
          <div className="step-icon" aria-hidden="true">📞</div>
          <h3>Kick-off Security Scoping</h3>
          <p>We begin with a comprehensive scoping session to understand your infrastructure, goals, and framework requirements. You get a clear roadmap from day one.</p>
          <span className="step-time">Day 1</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">02</span>
          <div className="step-icon" aria-hidden="true">🗺️</div>
          <h3>Gap Assessment & Findings</h3>
          <p>We perform a deep-dive audit of your current security posture against the target framework and provide a detailed gap findings report with a remediation plan.</p>
          <span className="step-time">Week 1</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">03</span>
          <div className="step-icon" aria-hidden="true">🔧</div>
          <h3>Policies, Controls & Evidences</h3>
          <p>We implement the required controls, author tailored policies, set up evidence collection processes, and thoroughly prepare your environment for the actual audit.</p>
          <span className="step-time">Weeks 2–6</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">04</span>
          <div className="step-icon" aria-hidden="true">🏆</div>
          <h3>External Audit & Certification</h3>
          <p>We support you through the independent external audit, handle auditor inquiries, and ensure all controls pass the testing phase to help secure your official certification.</p>
          <span className="step-time">Weeks 6–7</span>
        </div>
      </div>
    </section>
  );
}
