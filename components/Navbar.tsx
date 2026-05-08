"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const links = [
  { href: "/mold-remediation", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#d3cec6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-[#111111]">
          <Image src="/logo.png" alt="STL Mold Removal Logo" width={36} height={36} className="rounded-lg object-contain" />
          STL Mold Removal
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-[#626260] hover:text-[#111111] transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="text-[14px] font-semibold text-[#1a6b3c] hover:text-[#134f2d] transition-colors"
          >
            {PHONE}
          </a>
          <a
            href="/contact"
            className="bg-[#1a6b3c] text-white text-[14px] font-medium px-4 py-2 rounded-md hover:bg-[#134f2d] transition-colors"
          >
            Free Inspection
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#626260]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d3cec6] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-[#111111] font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="text-[15px] font-bold text-[#1a6b3c]"
          >
            {PHONE}
          </a>
          <a
            href="/contact"
            className="bg-[#1a6b3c] text-white text-center text-[14px] font-medium px-4 py-2.5 rounded-md"
            onClick={() => setOpen(false)}
          >
            Free Inspection
          </a>
        </div>
      )}
    </header>
  );
}
