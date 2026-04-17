import Image from "next/image";

const serviceLinks = [
  "Security Audits",
  "Penetration Testing",
  "GRC Readiness",
  "Cloud Security",
  "Privacy Compliance",
  "AI Governance",
];

const frameworkLinks = [
  "SOC 2",
  "ISO 27001",
  "PCI DSS",
  "HIPAA",
  "DPDP Act",
  "ISO 42001",
];

const companyLinks = [
  "About Us",
  "Our Team",
  "Resources",
  "Blog",
  "Contact",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <Image
              src="/logos/certsigma-white-text-logo.png"
              alt="CertSigma Logo"
              width={130}
              height={38}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
          <p className="footer-desc">
            India&apos;s precision-grade security audit and compliance firm.
            Earning trust, one certification at a time.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Services</h5>
            {serviceLinks.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Frameworks</h5>
            {frameworkLinks.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            {companyLinks.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CertSigma Pvt. Ltd. · Bengaluru, India</span>
        <span>
          ISO 27001 Lead Auditor · CISSP · CISA Certified
        </span>
      </div>
    </footer>
  );
}
