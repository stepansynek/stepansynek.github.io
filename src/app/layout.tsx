import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/config";
import { seo, skipLink } from "@/content/texts";
import "./globals.css";

// next/font stáhne písma při buildu a servíruje je z vlastní domény.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-mono-jb",
});

const ogImage = { url: "/og.png", width: 1200, height: 630, alt: seo.title };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImage.url],
  },
  // Placeholdery typu [TELEFON] nemají mobilní prohlížeče převádět na odkazy.
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:font-medium"
        >
          {skipLink}
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
