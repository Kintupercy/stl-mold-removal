import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tour3D — 3D Real Estate Listings",
  description: "Interactive 3D property tours powered by PlayCanvas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="brand">Tour<span>3D</span></Link>
          <Link href="/listings">Listings</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
