import Image from "next/image";

export default function Team() {
  return (
    <section className="page-section" id="team" aria-labelledby="team-heading" style={{ background: "#fff", padding: "7rem 5%" }}>
      <div style={{ textAlign: "center", margin: "0 auto 4rem", maxWidth: "800px" }}>
        <div className="section-label">Our Team</div>
        <h2 className="section-title" id="team-heading" style={{ margin: "0 auto 1.2rem", maxWidth: "100%" }}>Experts behind your compliance</h2>
        <p className="section-body" style={{ margin: "0 auto", maxWidth: "600px" }}>
          We are a group of seasoned security engineers, and compliance leaders who know exactly what it takes to pass any audit.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {/* Card 1: Shakthivel */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 2rem", textAlign: "center",
          transition: "transform 0.2s"
        }}>
          <div style={{
            position: "relative", width: "95px", height: "95px", margin: "0 auto 1.5rem",
            borderRadius: "50%", overflow: "hidden", border: "3px solid #fff",
            boxShadow: "0 8px 24px rgba(10,20,40,0.08)"
          }}>
            <Image src="https://i.pravatar.cc/200?img=11" alt="Shakthivel" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.2rem" }}>Shakthivel</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "600", marginBottom: "1rem", letterSpacing: "0.03em", textTransform: "uppercase" }}>CEO & Founder</p>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: "1.6" }}>
            Helps SaaS and fintech companies build audit-ready security programmes from scratch, mapping technical controls to framework demands perfectly.
          </p>
        </div>

        {/* Card 2: John Doe */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 2rem", textAlign: "center",
          transition: "transform 0.2s"
        }}>
          <div style={{
            position: "relative", width: "95px", height: "95px", margin: "0 auto 1.5rem",
            borderRadius: "50%", overflow: "hidden", border: "3px solid #fff",
            boxShadow: "0 8px 24px rgba(10,20,40,0.08)"
          }}>
            <Image src="https://i.pravatar.cc/200?img=13" alt="John Doe" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.2rem" }}>John Doe</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--green)", fontWeight: "600", marginBottom: "1rem", letterSpacing: "0.03em", textTransform: "uppercase" }}>Lead Security Engineer</p>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: "1.6" }}>
            Works directly with your developers to implement identity management, encryption, and AWS/GCP security configurations.
          </p>
        </div>

        {/* Card 3: Jane Smith */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 2rem", textAlign: "center",
          transition: "transform 0.2s"
        }}>
          <div style={{
            position: "relative", width: "95px", height: "95px", margin: "0 auto 1.5rem",
            borderRadius: "50%", overflow: "hidden", border: "3px solid #fff",
            boxShadow: "0 8px 24px rgba(10,20,40,0.08)"
          }}>
            <Image src="https://i.pravatar.cc/200?img=47" alt="Jane Smith" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.2rem" }}>Jane Smith</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--gold)", fontWeight: "600", marginBottom: "1rem", letterSpacing: "0.03em", textTransform: "uppercase" }}>Compliance Manager</p>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: "1.6" }}>
            Seasoned compliance professional who authors your policies, runs gap assessments, and brings the auditor&apos;s perspective before testing begins.
          </p>
        </div>

        {/* Card 4: Michael Brown */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 2rem", textAlign: "center",
          transition: "transform 0.2s"
        }}>
          <div style={{
            position: "relative", width: "95px", height: "95px", margin: "0 auto 1.5rem",
            borderRadius: "50%", overflow: "hidden", border: "3px solid #fff",
            boxShadow: "0 8px 24px rgba(10,20,40,0.08)"
          }}>
            <Image src="https://i.pravatar.cc/200?img=59" alt="Michael Brown" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.2rem" }}>Michael Brown</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--accent-bright)", fontWeight: "600", marginBottom: "1rem", letterSpacing: "0.03em", textTransform: "uppercase" }}>Offensive Security Lead</p>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: "1.6" }}>
            Conducts penetration testing and vulnerability assessments to ensure your infrastructure can withstand active attacks, not just pass audits.
          </p>
        </div>

        {/* Card 5: Sarah Taylor */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 2rem", textAlign: "center",
          transition: "transform 0.2s"
        }}>
          <div style={{
            position: "relative", width: "95px", height: "95px", margin: "0 auto 1.5rem",
            borderRadius: "50%", overflow: "hidden", border: "3px solid #fff",
            boxShadow: "0 8px 24px rgba(10,20,40,0.08)"
          }}>
            <Image src="https://i.pravatar.cc/200?img=44" alt="Sarah Taylor" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.2rem" }}>Sarah Taylor</h3>
          <p style={{ fontSize: "0.85rem", color: "#8a4f9e", fontWeight: "600", marginBottom: "1rem", letterSpacing: "0.03em", textTransform: "uppercase" }}>Data Privacy Specialist</p>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: "1.6" }}>
            An expert in GDPR, DPDP Act, and HIPAA who establishes precise data life cycles and workflows to protect sensitive user information at scale.
          </p>
        </div>

      </div>
    </section>
  );
}
