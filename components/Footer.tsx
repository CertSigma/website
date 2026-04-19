import Image from "next/image";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-top">
        <div>
          <div className="footer-brand" style={{ marginBottom: "1rem" }}>
            <Image
              src="/logos/certsigma_logo1.png"
              alt="CertSigma Logo"
              width={140}
              height={40}
              style={{ width: "140px", height: "auto", display: "block" }}
              className="footer-logo-img"
            />
          </div>
          <p className="footer-desc">India&apos;s expert vCISO and security compliance firm. We implement your controls and get you certified — SOC 2, ISO 27001, HIPAA, GDPR, and beyond.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h5>Services</h5>
            <a href="#vciso-retainer">vCISO Retainer</a>
            <a href="#controls">Control Implementation</a>
            <a href="#soc2">SOC 2 Programme</a>
            <a href="#iso27001">ISO 27001</a>
            <a href="#hipaa">HIPAA Compliance</a>
            <a href="#gdpr">GDPR & Privacy</a>
          </div>
          <div className="footer-col">
            <h5>Frameworks</h5>
            <a href="#frameworks">SOC 2 Type I & II</a>
            <a href="#frameworks">ISO 27001:2022</a>
            <a href="#frameworks">HIPAA</a>
            <a href="#frameworks">GDPR & UK GDPR</a>
            <a href="#frameworks">India DPDP Act</a>
            <a href="#frameworks">PCI DSS v4.0</a>
            <a href="#frameworks">ISO 42001 (AI)</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#why-certsigma">Why CertSigma</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#process">Our Process</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:hello@certsigma.com">Contact Us</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CertSigma. All rights reserved. Bengaluru, India 🇮🇳</span>
        <span>
          <a href="mailto:hello@certsigma.com">hello@certsigma.com</a>
          &nbsp;·&nbsp;
          <a href="/privacy">Privacy</a>
          &nbsp;·&nbsp;
          <a href="/terms">Terms</a>
        </span>
      </div>
    </footer>
  );
}
