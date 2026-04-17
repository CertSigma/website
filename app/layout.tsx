import type { Metadata } from "next";
import { Outfit, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CertSigma — Security Audit & Compliance",
  description:
    "CertSigma delivers rigorous, expert-led security audits and compliance certifications — helping you close enterprise deals, satisfy regulators, and build lasting trust.",
  keywords: [
    "SOC 2",
    "ISO 27001",
    "security audit",
    "compliance",
    "VAPT",
    "penetration testing",
    "India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
