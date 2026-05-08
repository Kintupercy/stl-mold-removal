import Link from "next/link";
import Image from "next/image";

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const serviceAreas = [
  "Chesterfield", "Ballwin", "Kirkwood", "Webster Groves",
  "Florissant", "O'Fallon", "St. Charles", "Fenton",
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#9c9fa5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-3">
            <Image src="/logo.png" alt="STL Mold Removal Logo" width={32} height={32} className="rounded-lg object-contain" />
            <span className="text-white font-semibold text-base">STL Mold Removal</span>
          </div>
          <p className="text-[13px] leading-relaxed mb-4">
            Certified mold remediation serving St. Louis, MO and surrounding communities. Licensed, insured, and IICRC-trained.
          </p>
          <a href={PHONE_HREF} className="text-[#1a6b3c] font-semibold text-[15px] hover:text-[#2d8a50] transition-colors">
            {PHONE}
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-[13px] font-semibold uppercase tracking-wider mb-4">Services</h3>
          <ul className="space-y-2 text-[13px]">
            {[
              ["Black Mold Removal", "/mold-remediation#black-mold"],
              ["Basement Mold", "/mold-remediation#basement"],
              ["Crawl Space Mold", "/mold-remediation#crawl-space"],
              ["Attic Mold", "/mold-remediation#attic"],
              ["Mold Inspection", "/mold-remediation#inspection"],
              ["Post-Flood Mold", "/mold-remediation#flood"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white text-[13px] font-semibold uppercase tracking-wider mb-4">Service Areas</h3>
          <ul className="space-y-2 text-[13px]">
            {serviceAreas.map((area) => (
              <li key={area}>
                <Link
                  href={`/service-areas/${area.toLowerCase().replace(/['\s]+/g, "-").replace(/[^a-z0-9-]/g, "")}-mo`}
                  className="hover:text-white transition-colors"
                >
                  {area}, MO
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-[#1a6b3c] hover:text-[#2d8a50] transition-colors">
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-[13px] font-semibold uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-2 text-[13px]">
            {[
              ["Blog", "/blog"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
              ["Free Inspection", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-[12px] mb-1">Mon–Sat: 7 AM – 7 PM</p>
            <p className="text-[12px]">Emergency response available</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px]">
          <p>© {new Date().getFullYear()} STL Mold Removal. All rights reserved. Serving Greater St. Louis, MO.</p>
          <p>Licensed · Insured · IICRC Certified</p>
        </div>
      </div>
    </footer>
  );
}
