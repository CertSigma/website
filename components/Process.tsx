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
          <h3>Free Discovery Call</h3>
          <p>A 30-minute call where we listen. We learn your stack, your team, your deadlines, and your target frameworks. You leave knowing exactly what&apos;s required of you — not a sales pitch.</p>
          <span className="step-time">Day 1</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">02</span>
          <div className="step-icon" aria-hidden="true">🗺️</div>
          <h3>Gap Assessment</h3>
          <p>We audit your current security posture against your target framework. You receive a plain-English gap report — every missing control identified, prioritised by audit risk, with a clear remediation roadmap.</p>
          <span className="step-time">Week 1–3</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">03</span>
          <div className="step-icon" aria-hidden="true">🔧</div>
          <h3>Control Build-Out</h3>
          <p>We implement. Policies written, technical controls configured, evidence systems set up, team trained. We work directly with your engineering and operations teams — you don&apos;t need to translate anything.</p>
          <span className="step-time">Weeks 4–10</span>
        </div>
        <div className="process-step">
          <span className="step-number" aria-hidden="true">04</span>
          <div className="step-icon" aria-hidden="true">🏆</div>
          <h3>Audit & Certification</h3>
          <p>Mock audit, auditor selection and coordination, real-time support during fieldwork. We handle auditor questions, manage evidence requests, and stay available for the entire audit window. Your certificate arrives.</p>
          <span className="step-time">Months 3–12</span>
        </div>
      </div>
    </section>
  );
}
