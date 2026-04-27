import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title:
    "NayaJob — The govt + money checklist no one told you about when you started your first job",
  description:
    "30+ things every fresh hire in India needs to do — UAN, PAN-Aadhaar, HRA, ITR, health insurance — sorted by what's urgent for you. Free 12-month roadmap in 60 seconds.",
  metadataBase: new URL("https://nayajob.in"),
  openGraph: {
    title: "NayaJob",
    description:
      "The govt + money checklist for India's first-time earners. 60 seconds, free.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NayaJob",
    description:
      "The govt + money checklist for India's first-time earners.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans bg-bg text-ink paper-grain min-h-screen">
        {children}
      </body>
    </html>
  );
}
