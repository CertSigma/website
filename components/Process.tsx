const steps = [
  {
    n: "01",
    icon: "📞",
    title: "Discovery Call",
    body: "We learn your stack, scope, and goals. You get a clear proposal with no hidden fees within 48 hours.",
  },
  {
    n: "02",
    icon: "🗂️",
    title: "Gap Assessment",
    body: "We map your current state against your target framework and produce a prioritized remediation plan.",
  },
  {
    n: "03",
    icon: "🔬",
    title: "Audit Execution",
    body: "Our senior auditors conduct fieldwork, evidence review, and technical testing — you always know the status.",
  },
  {
    n: "04",
    icon: "🏆",
    title: "Report & Certificate",
    body: "Receive your audit report and certificate. We stay on for remediation support and follow-up questions.",
  },
];

export default function Process() {
  return (
    <section className="page-section process" id="process">
      <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <div className="section-label">How it works</div>
        <h2 className="section-title" style={{ maxWidth: "100%" }}>
          From kickoff to certified — fast
        </h2>
      </div>
      <div className="process-steps">
        {steps.map((s) => (
          <div className="process-step" key={s.n}>
            <span className="step-number">{s.n}</span>
            <div className="step-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
