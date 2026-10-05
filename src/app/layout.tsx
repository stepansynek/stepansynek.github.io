import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Effects } from "@/components/Effects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/config";
import { seo, skipLink } from "@/content/texts";
import "./globals.css";

// next/font stáhne písmo při buildu a servíruje ho z vlastní domény.
// Archivo je variabilní i v šířce: nadpisy jsou rozšířené, text normální.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
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
  themeColor: "#f5f6f8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Třída js zapne animace odkrývání; bez JavaScriptu zůstane obsah vidět. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:font-medium"
        >
          {skipLink}
        </a>
        <Header />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
