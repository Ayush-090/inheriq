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
  title: "Inheriq — AI Workforce Operating System for Startups and SMBs",
  description:
    "Build your AI workforce with specialized AI employees that help your business sell, support, and scale while keeping people in control.",
  keywords: [
    "AI workforce",
    "AI workforce operating system",
    "AI employees",
    "AI agents",
    "business automation",
    "AI sales agent",
    "AI customer support",
    "AI HR",
    "AI finance",
    "Inheriq",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inheriq — AI Workforce Operating System for Startups and SMBs",
    description:
      "Bring specialized AI employees into your workflows, assign tasks, and keep people in control.",
    url: SITE_CONFIG.url,
    siteName: "Inheriq",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Inheriq AI workforce operating system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inheriq — AI Workforce Operating System for Startups and SMBs",
    description:
      "AI teammates that help your business sell, support, and scale.",
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
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('inheriq-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#FDFEFE] text-[#0A1128] dark:bg-[#070B18] dark:text-[#F8FAFC] transition-colors duration-200"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
