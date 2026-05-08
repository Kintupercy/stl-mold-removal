import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mold Removal Service Areas | Greater St. Louis, MO",
  description:
    "STL Mold Removal serves all of greater St. Louis — Chesterfield, Kirkwood, O'Fallon, Florissant, St. Charles and 15+ more communities. Free inspection.",
  alternates: { canonical: "https://stlmoldremoval.com/service-areas" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

export const suburbs = [
  { name: "Chesterfield", slug: "chesterfield-mo", county: "St. Louis County", note: "Affluent west county — high avg job value" },
  { name: "Ballwin", slug: "ballwin-mo", county: "St. Louis County", note: "Dense residential, many finished basements" },
  { name: "Kirkwood", slug: "kirkwood-mo", county: "St. Louis County", note: "Older homes = higher mold risk" },
  { name: "Webster Groves", slug: "webster-groves-mo", county: "St. Louis County", note: "Historic housing stock" },
  { name: "Florissant", slug: "florissant-mo", county: "St. Louis County", note: "High-volume north county" },
  { name: "O'Fallon", slug: "ofallon-mo", county: "St. Charles County", note: "Fastest-growing suburb" },
  { name: "St. Charles", slug: "st-charles-mo", county: "St. Charles County", note: "Distinct from city, high volume" },
  { name: "Fenton", slug: "fenton-mo", county: "St. Louis County", note: "Jefferson County edge" },
  { name: "Manchester", slug: "manchester-mo", county: "St. Louis County", note: "Affluent, low competition" },
  { name: "Wildwood", slug: "wildwood-mo", county: "St. Louis County", note: "New homes with crawl space issues" },
  { name: "Creve Coeur", slug: "creve-coeur-mo", county: "St. Louis County", note: "Corporate + residential" },
  { name: "Mehlville", slug: "mehlville-mo", county: "St. Louis County", note: "Dense south county" },
  { name: "Oakville", slug: "oakville-mo", county: "St. Louis County", note: "South county homeowners" },
  { name: "Hazelwood", slug: "hazelwood-mo", county: "St. Louis County", note: "North county volume" },
  { name: "Maryland Heights", slug: "maryland-heights-mo", county: "St. Louis County", note: "West county mixed-use" },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">Service Areas</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Mold Remediation Across Greater St. Louis, MO
          </h1>
          <p className="text-[#9c9fa5] text-[17px] max-w-2xl mx-auto">
            We serve all of St. Louis City, St. Louis County, St. Charles County, Jefferson County, and the surrounding Missouri metro.
          </p>
        </div>
      </section>

      {/* Area grid */}
      <section className="py-16 bg-[#f5f1ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suburbs.map((s) => (
              <Link
                key={s.slug}
                href={`/service-areas/${s.slug}`}
                className="bg-white border border-[#d3cec6] rounded-xl p-5 hover:border-[#1a6b3c] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-[16px] font-semibold group-hover:text-[#1a6b3c] transition-colors">
                    {s.name}, MO
                  </h2>
                  <span className="text-[#1a6b3c] text-lg">→</span>
                </div>
                <p className="text-[#626260] text-[12px]">{s.county}</p>
              </Link>
            ))}
          </div>

          {/* Coverage note */}
          <div className="mt-12 bg-white border border-[#d3cec6] rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Don't See Your City?</h2>
            <p className="text-[#626260] text-[15px] mb-5 max-w-xl mx-auto">
              We cover the entire greater St. Louis metro. If you're within 60 miles of downtown St. Louis, call us — we'll come to you.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
