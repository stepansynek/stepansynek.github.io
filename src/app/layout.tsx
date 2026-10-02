import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OG_IMAGE, site } from "@/config/site";
import "./globals.css";

// next/font stáhne Inter při buildu a servíruje ho z vlastní domény.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [OG_IMAGE.url],
  },
  // Placeholdery typu [TELEFON] nemají mobilní prohlížeče převádět na odkazy.
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.variable}>
      <body>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          Přeskočit na obsah
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
