export default function CTA() {
  return (
    <section className="cta-section" id="contact" aria-labelledby="cta-heading">
      <div className="cta-box">
        <h2 id="cta-heading">Ready to unblock your next deal?</h2>
        <p>Book a free 30-minute discovery call. We&apos;ll tell you exactly which certifications you need, how long they&apos;ll take, what they&apos;ll cost, and what to do first — with no sales pressure and no obligations.</p>
        <div className="cta-buttons">
          <a href="mailto:hello@certsigma.com" className="btn-primary">Book a free discovery call →</a>
          <a href="mailto:hello@certsigma.com" className="btn-outline">Email us directly</a>
        </div>
        <div className="cta-meta">
          <div className="cta-meta-item"><div className="check" aria-hidden="true">✓</div> Free 30-min call, no obligations</div>
          <div className="cta-meta-item"><div className="check" aria-hidden="true">✓</div> Fixed-price proposal in 48 hours</div>
          <div className="cta-meta-item"><div className="check" aria-hidden="true">✓</div> Bengaluru-based, globally serving</div>
          <div className="cta-meta-item"><div className="check" aria-hidden="true">✓</div> 100% first-pass audit success rate</div>
        </div>
      </div>
    </section>
  );
}
