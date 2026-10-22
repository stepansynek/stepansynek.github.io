import type { Metadata, Viewport } from "next";
import { Special_Gothic } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/config";
import { seo, skipLink } from "@/content/texts";
import "./globals.css";

// next/font stáhne písmo při buildu a servíruje ho z vlastní domény.
// Special Gothic je variabilní i v šířce: titulky zúžené na 75 %, text v plné šířce.
const gothic = Special_Gothic({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-gothic",
  // Next pro Special Gothic nemá metriky náhradního písma; zúžené titulky by s nimi stejně neseděly.
  adjustFontFallback: false,
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
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={gothic.variable}>
      <body>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:font-bold focus:text-white"
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
