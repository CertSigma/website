const frameworks = [
  "SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR",
  "ISO 42001", "VAPT", "DPDP Act", "HITRUST", "NIST CSF",
];

export default function FrameworkStrip() {
  return (
    <div className="framework-strip">
      {frameworks.map((fw, i) => (
        <span key={fw}>
          {fw}
          {i < frameworks.length - 1 && (
            <span className="sep" style={{ marginLeft: "2rem" }}>·</span>
          )}
        </span>
      ))}
    </div>
  );
}
