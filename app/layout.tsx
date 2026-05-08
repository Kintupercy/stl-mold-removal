import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stlmoldremoval.com"),
  title: {
    default: "Mold Removal St. Louis, MO | Free Inspection | STL Mold Removal",
    template: "%s | STL Mold Removal",
  },
  description:
    "Licensed mold remediation in St. Louis, MO. We remove black mold, test air quality & restore your home. Free inspection. Call (314) 779-0000 today.",
  keywords: [
    "mold removal St. Louis",
    "mold remediation St. Louis",
    "black mold removal St. Louis",
    "mold inspection St. Louis",
    "basement mold removal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stlmoldremoval.com",
    siteName: "STL Mold Removal",
    title: "Mold Removal St. Louis, MO | Free Inspection | STL Mold Removal",
    description:
      "Licensed mold remediation in St. Louis, MO. Free inspection. Call (314) 779-0000.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mold Removal St. Louis, MO | STL Mold Removal",
    description: "Certified mold remediation. Free inspection. Call now.",
  },
  alternates: { canonical: "https://stlmoldremoval.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f5f1ec] text-[#111111]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
