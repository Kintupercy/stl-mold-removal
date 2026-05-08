import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const suburbData: Record<string, {
  name: string;
  county: string;
  blurb: string;
  nearbyAreas: string[];
}> = {
  "chesterfield-mo": {
    name: "Chesterfield",
    county: "St. Louis County",
    blurb: "Chesterfield sits in West St. Louis County near the Missouri River floodplain. Frequent humidity spikes and proximity to the river make Chesterfield basements and crawl spaces especially vulnerable to mold. After heavy rains, water intrusion through foundation cracks can establish mold within 24 hours.",
    nearbyAreas: ["Wildwood", "Ballwin", "Creve Coeur", "Maryland Heights"],
  },
  "ballwin-mo": {
    name: "Ballwin",
    county: "St. Louis County",
    blurb: "Ballwin's dense residential neighborhoods and large percentage of finished basements make it a high-volume area for mold calls. Older clay-drainage systems and flat lots mean water doesn't drain well — and chronic moisture creates the conditions mold needs.",
    nearbyAreas: ["Manchester", "Chesterfield", "Fenton", "Kirkwood"],
  },
  "kirkwood-mo": {
    name: "Kirkwood",
    county: "St. Louis County",
    blurb: "Kirkwood's historic housing stock — many homes built before 1960 — means older foundations, original plumbing, and basement walls that were never waterproofed to modern standards. Mold in Kirkwood homes is often behind original plaster walls and under old hardwood subfloors.",
    nearbyAreas: ["Webster Groves", "Ballwin", "Fenton", "Manchester"],
  },
  "webster-groves-mo": {
    name: "Webster Groves",
    county: "St. Louis County",
    blurb: "Webster Groves is one of the oldest incorporated suburbs in Missouri. Many homes date to the 1920s–1950s with stone foundations, original drainage systems, and cellar-style basements that are chronically damp. We handle both new-growth mold events and long-standing remediation projects in Webster Groves.",
    nearbyAreas: ["Kirkwood", "Fenton", "Mehlville", "Oakville"],
  },
  "florissant-mo": {
    name: "Florissant",
    county: "St. Louis County",
    blurb: "Florissant is one of North St. Louis County's largest communities. Its mix of older post-war ranch homes and some newer construction means mold calls range from attic ventilation problems to full basement remediation. We are the most-requested mold company in north county.",
    nearbyAreas: ["Hazelwood", "Maryland Heights", "St. Charles", "Creve Coeur"],
  },
  "ofallon-mo": {
    name: "O'Fallon",
    county: "St. Charles County",
    blurb: "O'Fallon is the fastest-growing city in Missouri — and new construction doesn't mean mold-proof construction. Vapor barriers improperly installed, crawl spaces with inadequate ventilation, and slab foundations over expansive soil create mold opportunities even in brand-new homes.",
    nearbyAreas: ["St. Charles", "Chesterfield", "Wentzville", "Lake Saint Louis"],
  },
  "st-charles-mo": {
    name: "St. Charles",
    county: "St. Charles County",
    blurb: "St. Charles spans both historic riverfront neighborhoods and modern subdivisions. Older homes near the Missouri River waterfront are particularly prone to mold from flood events. We service all of St. Charles — from the historic district to new construction subdivisions east of I-70.",
    nearbyAreas: ["O'Fallon", "Wentzville", "Florissant", "Maryland Heights"],
  },
  "fenton-mo": {
    name: "Fenton",
    county: "St. Louis County",
    blurb: "Fenton sits at the Jefferson County border and includes a mix of industrial and residential properties. Many Fenton homes sit in low-lying areas near the Meramec River, making post-flood mold response a regular need. We have crews available for same-day emergency response in Fenton.",
    nearbyAreas: ["Ballwin", "Manchester", "Kirkwood", "Oakville"],
  },
  "manchester-mo": {
    name: "Manchester",
    county: "St. Louis County",
    blurb: "Manchester is an affluent west county community with high average home values — which means remediation jobs typically involve finished lower levels and high-quality materials. We are experienced with insurance-documented remediation in Manchester's premium residential market.",
    nearbyAreas: ["Ballwin", "Fenton", "Chesterfield", "Wildwood"],
  },
  "wildwood-mo": {
    name: "Wildwood",
    county: "St. Louis County",
    blurb: "Wildwood is one of St. Louis County's largest municipalities by area, with many homes on large lots with crawl spaces, well water, and significant natural moisture exposure. New construction here often has encapsulation needs — we inspect and remediate across all of Wildwood.",
    nearbyAreas: ["Chesterfield", "Ballwin", "Manchester", "Pacific"],
  },
  "creve-coeur-mo": {
    name: "Creve Coeur",
    county: "St. Louis County",
    blurb: "Creve Coeur's mix of corporate campuses and upscale residential properties means we handle both commercial and residential mold remediation calls. Office buildings with HVAC mold issues are a specialty — we hold commercial liability coverage and can work around business hours.",
    nearbyAreas: ["Chesterfield", "Maryland Heights", "Florissant", "Ballwin"],
  },
  "mehlville-mo": {
    name: "Mehlville",
    county: "St. Louis County",
    blurb: "Mehlville is a dense south county community with many post-war ranch homes that have slab foundations or shallow crawl spaces. Condensation under slabs and poor vapor control in crawl spaces are the most common mold triggers we find in Mehlville properties.",
    nearbyAreas: ["Oakville", "Webster Groves", "Fenton", "Kirkwood"],
  },
  "oakville-mo": {
    name: "Oakville",
    county: "St. Louis County",
    blurb: "Oakville homeowners frequently call us for basement wall mold following the heavy rains that hit south St. Louis County in spring and early summer. The clay-heavy soils here drain slowly and drive moisture through basement walls even when no visible crack exists.",
    nearbyAreas: ["Mehlville", "Fenton", "Webster Groves", "Arnold"],
  },
  "hazelwood-mo": {
    name: "Hazelwood",
    county: "St. Louis County",
    blurb: "Hazelwood's north county location means we cover it as part of our regular north-side coverage area alongside Florissant and Maryland Heights. Many Hazelwood homes share the same post-war construction profile — brick ranch with poured block basements that are prone to moisture intrusion.",
    nearbyAreas: ["Florissant", "Maryland Heights", "St. Charles", "Creve Coeur"],
  },
  "maryland-heights-mo": {
    name: "Maryland Heights",
    county: "St. Louis County",
    blurb: "Maryland Heights sits along the Missouri River and includes significant commercial and industrial real estate alongside residential neighborhoods. Proximity to the river and flood zones makes post-flood mold response a recurring need here. We respond to both residential and commercial calls in Maryland Heights.",
    nearbyAreas: ["Creve Coeur", "Hazelwood", "Florissant", "Chesterfield"],
  },
};

export async function generateStaticParams() {
  return Object.keys(suburbData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = suburbData[slug];
  if (!data) return {};
  return {
    title: `Mold Removal ${data.name}, MO | STL Mold Removal`,
    description: `Certified mold remediation in ${data.name}, MO. Black mold removal, basement treatment & free inspections. Call (314) 779-0000.`,
    alternates: { canonical: `https://stlmoldremoval.com/service-areas/${slug}` },
  };
}

export default async function SuburbPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = suburbData[slug];
  if (!data) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "STL Mold Removal",
    description: `Certified mold remediation serving ${data.name}, MO. Free inspections.`,
    url: `https://stlmoldremoval.com/service-areas/${slug}`,
    telephone: "+1-314-779-0000",
    areaServed: { "@type": "City", name: data.name, addressRegion: "MO" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">
            {data.county}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Mold Removal &amp; Remediation in {data.name}, MO
          </h1>
          <p className="text-[#9c9fa5] text-[17px] max-w-2xl mx-auto mb-8">
            Certified mold remediation for {data.name} homeowners and businesses. Free inspections, same-day scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-semibold px-6 py-3.5 rounded-md transition-colors">
              📞 Call {PHONE}
            </a>
            <Link href="/contact" className="border-2 border-white/30 text-white font-medium px-6 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              Request Free Inspection →
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#f5f1ec]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white border border-[#d3cec6] rounded-xl p-7">
                <h2 className="text-xl font-semibold mb-4">Mold Removal in {data.name}</h2>
                <p className="text-[#626260] text-[15px] leading-relaxed">{data.blurb}</p>
              </div>

              <div className="bg-white border border-[#d3cec6] rounded-xl p-7">
                <h2 className="text-xl font-semibold mb-5">Services Available in {data.name}</h2>
                <ul className="space-y-3">
                  {[
                    ["Black Mold Removal", "/mold-remediation#black-mold"],
                    ["Mold Inspection & Air Testing", "/mold-remediation#inspection"],
                    ["Basement Mold Remediation", "/mold-remediation#basement"],
                    ["Crawl Space Mold Removal", "/mold-remediation#crawl-space"],
                    ["Attic Mold Remediation", "/mold-remediation#attic"],
                    ["Post-Flood Mold Response", "/mold-remediation#flood"],
                  ].map(([label, href]) => (
                    <li key={href} className="flex items-center gap-2 text-[14px]">
                      <span className="text-[#1a6b3c]">✓</span>
                      <Link href={href} className="text-[#111111] hover:text-[#1a6b3c] transition-colors">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#d3cec6] rounded-xl p-7">
                <h2 className="text-xl font-semibold mb-3">How Much Does Mold Removal Cost in {data.name}?</h2>
                <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
                  Mold remediation in {data.name} typically runs $500–$6,000 depending on the area affected and mold type. Most residential jobs average around $2,200. We always provide a free written estimate before any work begins.
                </p>
                <a href={PHONE_HREF} className="inline-block bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-medium px-5 py-2.5 rounded-md transition-colors text-[14px]">
                  Get a Free Estimate →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-[#1a6b3c] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-[16px] mb-2">Free Inspection for {data.name}</h3>
                <a href={PHONE_HREF} className="text-2xl font-bold block mb-2 hover:text-[#a7d9bc] transition-colors">{PHONE}</a>
                <p className="text-[#a7d9bc] text-[13px]">Mon–Sat: 7 AM – 7 PM</p>
              </div>

              <div className="bg-white border border-[#d3cec6] rounded-xl p-5">
                <h3 className="font-semibold text-[14px] mb-3">Nearby Areas We Serve</h3>
                <ul className="space-y-1.5">
                  {data.nearbyAreas.map((area) => (
                    <li key={area}>
                      <Link
                        href={`/service-areas/${area.toLowerCase().replace(/['\s]+/g, "-").replace(/[^a-z0-9-]/g, "")}-mo`}
                        className="text-[13px] text-[#1a6b3c] hover:text-[#134f2d] transition-colors"
                      >
                        {area}, MO →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#d3cec6] rounded-xl p-5">
                <h3 className="font-semibold text-[14px] mb-2">Licensed &amp; Insured</h3>
                <ul className="space-y-1 text-[13px] text-[#626260]">
                  <li>✓ IICRC S520 Certified</li>
                  <li>✓ Fully insured</li>
                  <li>✓ Post-clearance testing</li>
                  <li>✓ Written estimates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* All areas link */}
          <div className="mt-8 text-center">
            <Link href="/service-areas" className="text-[#1a6b3c] font-semibold hover:text-[#134f2d] transition-colors text-[14px]">
              ← View all service areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
