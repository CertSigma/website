export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services-header">
        <div className="section-label">Our Services</div>
        <h2 className="section-title" id="services-heading">Everything between you and your certificate</h2>
        <p className="section-body">
          We don&apos;t hand you a framework document and walk away. We build your controls, write your policies, prepare your evidence, and sit in the audit room with you.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card" id="vciso-retainer">
          <span className="service-num">01</span>
          <div className="service-icon ic-blue" aria-hidden="true">🧭</div>
          <h3>vCISO Retainer</h3>
          <p>Your fractional Chief Information Security Officer. We plug into your team and provide ongoing, board-level security leadership — without the full-time hire cost. Your investors, prospects, and auditors see a company that takes security seriously.</p>
          <ul className="service-list" aria-label="vCISO Retainer deliverables">
            <li>Monthly security strategy and roadmap sessions</li>
            <li>Board and investor-level security reporting</li>
            <li>Vendor and third-party risk management</li>
            <li>Security questionnaire response (RFPs, DDQs)</li>
            <li>Incident response planning and oversight</li>
            <li>Security awareness programme design</li>
          </ul>
        </article>

        <article className="service-card" id="controls">
          <span className="service-num">02</span>
          <div className="service-icon ic-green" aria-hidden="true">🔧</div>
          <h3>Security Control Implementation</h3>
          <p>The most critical — and most underestimated — part of any audit engagement. We design and implement the controls, policies, and technical configurations that auditors actually test. Not templated documents; real, operating controls.</p>
          <ul className="service-list" aria-label="Control Implementation deliverables">
            <li>Control gap analysis and framework mapping</li>
            <li>Policy and procedure authoring (60+ policy templates)</li>
            <li>Technical control configuration (AWS, GCP, Azure)</li>
            <li>Identity and access management review</li>
            <li>Evidence collection systems and workflows</li>
            <li>Control testing, walkthroughs, and validation</li>
          </ul>
        </article>

        <article className="service-card" id="soc2">
          <span className="service-num">03</span>
          <div className="service-icon ic-amber" aria-hidden="true">🔐</div>
          <h3>SOC 2 Compliance Programme</h3>
          <p>End-to-end SOC 2 Type I and Type II readiness for SaaS and technology companies. We&apos;ve run this process dozens of times. We know exactly what AICPA-licensed auditors look for — and we build your programme to pass, not to guess.</p>
          <ul className="service-list" aria-label="SOC 2 deliverables">
            <li>Trust Service Criteria scoping (Security, Availability, Confidentiality, PI, Privacy)</li>
            <li>System and Organisation Controls description authoring</li>
            <li>Control design, implementation, and testing</li>
            <li>Type I → Type II observation period management</li>
            <li>Auditor selection and relationship management</li>
            <li>Security questionnaire library for sales team</li>
          </ul>
        </article>

        <article className="service-card" id="iso27001">
          <span className="service-num">04</span>
          <div className="service-icon ic-purple" aria-hidden="true">🌐</div>
          <h3>ISO 27001 Implementation</h3>
          <p>Full lifecycle ISO 27001:2022 implementation — from scoping and risk assessment to certification audit support. The global gold standard for information security. Required by enterprise customers in the UK, EU, Middle East, and APAC.</p>
          <ul className="service-list" aria-label="ISO 27001 deliverables">
            <li>ISMS scope definition and context analysis</li>
            <li>Information security risk assessment and treatment</li>
            <li>Statement of Applicability (SoA) — all 93 Annex A controls</li>
            <li>Internal audit programme and management review</li>
            <li>Certification body selection, liaison, and audit support</li>
            <li>Surveillance and recertification planning</li>
          </ul>
        </article>

        <article className="service-card" id="hipaa">
          <span className="service-num">05</span>
          <div className="service-icon ic-red" aria-hidden="true">🏥</div>
          <h3>HIPAA Compliance Programme</h3>
          <p>For healthtech platforms, digital health companies, and Indian technology businesses processing US protected health information. We implement the Security Rule, Privacy Rule, and Breach Notification Rule — practically, not just on paper.</p>
          <ul className="service-list" aria-label="HIPAA deliverables">
            <li>HIPAA Security Rule gap assessment</li>
            <li>Technical safeguards: encryption, audit logs, access controls</li>
            <li>Administrative safeguards: policies, training, workforce management</li>
            <li>Physical safeguards for data centre and office environments</li>
            <li>Business Associate Agreement (BAA) templates</li>
            <li>Breach response and notification procedures</li>
          </ul>
        </article>

        <article className="service-card" id="gdpr">
          <span className="service-num">06</span>
          <div className="service-icon ic-teal" aria-hidden="true">🇪🇺</div>
          <h3>GDPR & Privacy Compliance</h3>
          <p>For Indian companies with EU/UK users or customers. GDPR compliance is not optional — it&apos;s a legal obligation with fines up to 4% of global annual turnover. We make it manageable, practical, and audit-proof.</p>
          <ul className="service-list" aria-label="GDPR deliverables">
            <li>Data mapping, data flows, and Records of Processing Activities (RoPA)</li>
            <li>Lawful basis identification for all processing activities</li>
            <li>Privacy notices, cookie policies, and consent management</li>
            <li>Data Processing Agreements (DPA) and SCCs for cross-border transfers</li>
            <li>Data subject rights workflows (DSAR, erasure, portability)</li>
            <li>India DPDP Act 2023 alignment and gap assessment</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
