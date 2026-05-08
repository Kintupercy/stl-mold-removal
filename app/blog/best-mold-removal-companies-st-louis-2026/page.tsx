import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "5 Best Mold Removal Companies in St. Louis, MO (2026)",
  description:
    "We reviewed the top mold remediation companies in the St. Louis metro on certifications, response time, pricing, and reviews. Here's the honest 2026 breakdown.",
  alternates: { canonical: "https://stlmoldremoval.com/blog/best-mold-removal-companies-st-louis-2026" },
  openGraph: {
    title: "5 Best Mold Removal Companies in St. Louis, MO (2026)",
    description: "An honest comparison of the top mold removal companies in St. Louis — certifications, pricing, response time, and what sets each one apart.",
    url: "https://stlmoldremoval.com/blog/best-mold-removal-companies-st-louis-2026",
    images: [{ url: "/hero-bg.png", width: 1200, height: 800 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Best Mold Removal Companies in St. Louis, MO (2026)",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Organization", name: "STL Mold Removal" },
  publisher: {
    "@type": "Organization",
    name: "STL Mold Removal",
    logo: { "@type": "ImageObject", url: "https://stlmoldremoval.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stlmoldremoval.com/blog/best-mold-removal-companies-st-louis-2026" },
  description: "A 2026 roundup of the best mold removal companies in St. Louis, MO with honest reviews on certifications, pricing, and response time.",
};

const PHONE_HREF = "tel:+13147790000";
const PHONE = "(314) 779-0000";

const companies = [
  {
    rank: 1,
    name: "STL Mold Removal",
    url: "https://stlmoldremoval.com",
    tagline: "Best overall — mold-only specialist, free inspections, same-day scheduling",
    cert: "IICRC S520",
    price: "$500–$6,000 · Free inspection",
    response: "Same-day",
    coverage: "All of greater St. Louis metro",
    pros: [
      "Mold-only focus — not a general restoration franchise",
      "Free inspection, no-obligation flat-rate estimate",
      "Same-day scheduling available across the metro",
      "Post-clearance air testing included",
      "Detailed written documentation for insurance claims",
    ],
    cons: ["No multi-city franchise network for property managers needing nationwide coverage"],
    badge: "🏆 Top Pick",
    badgeColor: "bg-[#1a6b3c] text-white",
  },
  {
    rank: 2,
    name: "ServiceMaster Restore (St. Louis)",
    url: null,
    tagline: "Best for insurance-integrated jobs — large franchise, insurer relationships",
    cert: "IICRC (varies by location)",
    price: "Higher — national franchise overhead",
    response: "24–48 hours typically",
    coverage: "St. Louis metro",
    pros: [
      "Strong insurer relationships and established claim processes",
      "Can handle water + mold as a combined restoration project",
      "National brand if you need multi-city vendor coordination",
    ],
    cons: [
      "Significantly higher pricing than local specialists",
      "Mold is one service among many — not the core focus",
      "Quality varies by individual franchise location",
    ],
    badge: "🏢 National Franchise",
    badgeColor: "bg-[#626260] text-white",
  },
  {
    rank: 3,
    name: "Servpro (St. Louis area)",
    url: null,
    tagline: "Large scale capacity — good for major disaster situations",
    cert: "IICRC (varies by franchise)",
    price: "Mid-to-high range",
    response: "24–48 hours typical",
    coverage: "Multiple franchise territories in metro",
    pros: [
      "Large equipment inventory for major flood/mold situations",
      "24/7 emergency line",
      "National insurer preferred vendor status",
    ],
    cons: [
      "Multiple St. Louis franchises with inconsistent reviews",
      "Mold is a secondary service to water and fire restoration",
      "Less price-competitive than local specialists",
    ],
    badge: "🏢 National Franchise",
    badgeColor: "bg-[#626260] text-white",
  },
  {
    rank: 4,
    name: "PuroClean (St. Louis)",
    url: null,
    tagline: "Reliable mid-tier franchise option",
    cert: "IICRC certified",
    price: "Mid range",
    response: "Same-day to 48 hours",
    coverage: "Portions of St. Louis metro",
    pros: [
      "Smaller franchise network — sometimes more attentive service than larger brands",
      "IICRC certified technicians",
      "Handles mold alongside water damage",
    ],
    cons: [
      "Coverage area limited compared to larger franchises",
      "Franchise model means variable quality by owner",
    ],
    badge: "🏢 Franchise",
    badgeColor: "bg-[#626260] text-white",
  },
  {
    rank: 5,
    name: "Independent IICRC-Certified Local Remediators",
    url: "/contact",
    tagline: "Verify certification, get multiple quotes",
    cert: "Varies — verify IICRC S520",
    price: "Varies widely",
    response: "Varies",
    coverage: "Varies by company",
    pros: [
      "Can be highly competitive on price",
      "Small operations may offer more personalized service",
    ],
    cons: [
      "Must verify IICRC certification independently — not all claim it accurately",
      "Post-clearance testing not always included",
      "Less established review history",
    ],
    badge: "🔍 Verify First",
    badgeColor: "bg-[#9c9fa5] text-white",
  },
];

export default function BestMoldCompanies() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-[#9c9fa5] text-[13px] hover:text-white transition-colors">← Blog</Link>
            <span className="text-[#626260]">·</span>
            <span className="bg-[#1a6b3c]/30 text-[#2d8a50] text-[11px] font-semibold px-2.5 py-1 rounded-full">Best Of</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            5 Best Mold Removal Companies in St. Louis, MO (2026)
          </h1>
          <p className="text-[#9c9fa5] text-[14px]">May 7, 2026 · 10 min read · STL Mold Removal</p>
          <p className="text-[#7b7b78] text-[12px] mt-2 italic">
            Disclosure: We are one of the companies reviewed. We&apos;ve tried to be honest about the tradeoffs — use this as a starting point and get multiple quotes.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#f5f1ec]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-[17px] text-[#111111] leading-relaxed font-medium">
              Finding a good mold removal company in St. Louis means looking beyond brand names. We evaluated companies on five factors: IICRC certification, response time, pricing transparency, post-clearance testing, and local St. Louis reviews. Here&apos;s what we found.
            </p>
            <p className="text-[#626260] text-[15px] leading-relaxed mt-4 mb-0">
              <strong>Quick answer:</strong> For most St. Louis homeowners, a mold-only local specialist with IICRC S520 certification beats a general restoration franchise on price and mold expertise. For insurance-integrated large-scale disasters, national franchises have an edge in insurer relationships.
            </p>
          </div>

          <div className="space-y-8 mb-10">
            {companies.map((co) => (
              <div key={co.rank} className={`bg-white border rounded-xl overflow-hidden ${co.rank === 1 ? "border-[#1a6b3c] shadow-md" : "border-[#d3cec6]"}`}>
                <div className={`flex items-center justify-between px-6 py-4 ${co.rank === 1 ? "bg-[#e8f5ee]" : "bg-[#f5f1ec]"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[#626260] text-[13px] font-bold">#{co.rank}</span>
                    <h2 className="text-[18px] font-bold text-[#111111] m-0">{co.name}</h2>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${co.badgeColor}`}>{co.badge}</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[#626260] text-[14px] italic mb-4">{co.tagline}</p>
                  <div className="grid grid-cols-2 gap-3 mb-5 text-[13px]">
                    {[
                      ["Certification", co.cert],
                      ["Pricing", co.price],
                      ["Response", co.response],
                      ["Coverage", co.coverage],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-[#f5f1ec] rounded-lg p-3">
                        <p className="text-[#9c9fa5] text-[11px] font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                        <p className="text-[#111111] font-medium text-[13px]">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
                    <div>
                      <p className="font-semibold text-[#1a6b3c] mb-2">✓ Pros</p>
                      <ul className="space-y-1">
                        {co.pros.map(p => <li key={p} className="text-[#626260]">• {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#e04c2f] mb-2">✗ Cons</p>
                      <ul className="space-y-1">
                        {co.cons.map(c => <li key={c} className="text-[#626260]">• {c}</li>)}
                      </ul>
                    </div>
                  </div>
                  {co.rank === 1 && (
                    <div className="mt-5 pt-4 border-t border-[#d3cec6] flex gap-3">
                      <a href={PHONE_HREF} className="bg-[#1a6b3c] text-white font-bold px-5 py-2.5 rounded-lg text-[13px] hover:bg-[#134f2d] transition-colors">{PHONE}</a>
                      <Link href="/contact" className="border border-[#1a6b3c] text-[#1a6b3c] font-semibold px-5 py-2.5 rounded-lg text-[13px] hover:bg-[#e8f5ee] transition-colors">Free Inspection →</Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">How We Ranked These Companies</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              We weighted five criteria for this ranking:
            </p>
            <ol className="space-y-2 text-[#626260] text-[15px]">
              {[
                "IICRC S520 certification (non-negotiable baseline)",
                "Response time — how quickly can they inspect and start?",
                "Pricing transparency — written flat-rate estimates vs. hourly/variable",
                "Mold specialization — mold-only focus vs. general restoration",
                "Post-clearance testing inclusion — lab confirmation of remediation success",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1a6b3c] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="text-[#626260] text-[15px] leading-relaxed mt-4">
              We did not rank based on size, marketing spend, or brand recognition. A smaller company with IICRC certification and verifiable local reviews ranks higher than a large franchise with inconsistent quality.
            </p>
          </div>

          <div className="bg-white border border-[#d3cec6] rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[15px] text-[#111111] mb-3">Related Reading</h3>
            <ul className="space-y-2 text-[14px]">
              {[
                ["Local vs. National Mold Companies in St. Louis — Full Comparison", "/blog/local-vs-national-mold-removal-st-louis"],
                ["How to Get a Free Mold Inspection in St. Louis", "/blog/free-mold-inspection-st-louis"],
                ["What to Ask Before Hiring a Mold Remediator", "/faq"],
                ["Our Mold Remediation Services", "/mold-remediation"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#1a6b3c] hover:underline">{label} →</Link></li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a6b3c] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Get a Free Estimate from STL Mold Removal</h2>
            <p className="text-[#a7d9bc] mb-5">Free inspection · Same-day · Written flat-rate estimate · No obligation</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="bg-white text-[#1a6b3c] font-bold px-6 py-3 rounded-lg hover:bg-[#f5f1ec] transition-colors">{PHONE}</a>
              <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">Request Free Inspection →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
