import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { SITE_CONFIG } from "@/lib/site-config";
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
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Inheriq — Your AI Workforce. Available 24/7.",
  description:
    "Hire AI employees that work 24/7 — sales, HR, marketing, support, and finance. Built for Indian businesses that want a faster, smarter operation without extra headcount.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inheriq — Your AI Workforce. Available 24/7.",
    description:
      "One dashboard. Five AI employees. Built for Indian businesses that want faster growth with more reliable operations.",
    url: SITE_CONFIG.url,
    siteName: "Inheriq",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Inheriq AI workforce dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inheriq — Your AI Workforce. Available 24/7.",
    description:
      "Hire AI employees that work 24/7. Built for Indian MSMEs and modern service businesses.",
    images: ["/og-image.svg"],
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
