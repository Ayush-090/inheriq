import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inheriq — Your AI Workforce. Available 24/7.",
  description:
    "Hire 5 AI employees that work 24/7 — Sales, HR, Marketing, Support & Finance. Built for Indian MSMEs. One dashboard, no technical skills needed. Start your free trial today.",
  keywords: [
    "AI workforce",
    "Indian MSME",
    "AI agents",
    "business automation",
    "WhatsApp business",
    "AI sales agent",
    "AI HR",
    "AI marketing",
    "Inheriq",
    "small business AI",
  ],
  openGraph: {
    title: "Inheriq — Your AI Workforce. Available 24/7.",
    description:
      "One dashboard. Five AI employees. Built for 63M+ Indian businesses.",
    url: "https://inheriq.com",
    siteName: "Inheriq",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inheriq — Your AI Workforce. Available 24/7.",
    description:
      "Hire 5 AI employees that work 24/7. Built for Indian MSMEs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} dark antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="min-h-screen bg-bg-primary text-text-primary"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
