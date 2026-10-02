import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
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
};

export const viewport: Viewport = {
  themeColor: "#111317",
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
        {children}
      </body>
    </html>
  );
}
