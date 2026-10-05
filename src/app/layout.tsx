import type { Metadata } from "next";
import {
  Instrument_Serif,
  Hanken_Grotesk,
  JetBrains_Mono,
  Tiro_Devanagari_Hindi,
  Hind,
} from "next/font/google";
import { SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const tiroHindi = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-hindi",
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
  preload: true,
});

const hind = Hind({
  variable: "--font-hind",
  weight: ["400", "500", "600"],
  subsets: ["devanagari", "latin"],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/inheriq-logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
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
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} ${tiroHindi.variable} ${hind.variable} dark antialiased`}
    >
      <body
        className="min-h-screen bg-bg-primary text-text-primary"
        style={{ fontFamily: "var(--font-hanken-grotesk), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
