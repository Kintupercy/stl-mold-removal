import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Black Mold in St. Louis: What Homeowners Need to Know (2026)",
  description:
    "Black mold (Stachybotrys) is the most dangerous mold in St. Louis homes. Learn how to identify it, what health risks it poses, and how professional remediation works.",
  alternates: { canonical: "https://stlmoldremoval.com/blog/black-mold-st-louis-homeowners-guide" },
  openGraph: {
    title: "Black Mold in St. Louis: What Homeowners Need to Know (2026)",
    description: "How to identify black mold, understand the health risks, and get it properly removed — a guide for St. Louis homeowners.",
    url: "https://stlmoldremoval.com/blog/black-mold-st-louis-homeowners-guide",
    images: [{ url: "/hero-bg.png", width: 1200, height: 800 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Black Mold in St. Louis: What Homeowners Need to Know in 2026",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: { "@type": "Organization", name: "STL Mold Removal" },
  publisher: {
    "@type": "Organization",
    name: "STL Mold Removal",
    logo: { "@type": "ImageObject", url: "https://stlmoldremoval.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stlmoldremoval.com/blog/black-mold-st-louis-homeowners-guide" },
  description: "A complete guide to black mold identification, health risks, and professional remediation for St. Louis homeowners.",
};

const PHONE_HREF = "tel:+13147790000";
const PHONE = "(314) 779-0000";

export default function BlackMoldGuide() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-[#9c9fa5] text-[13px] hover:text-white transition-colors">← Blog</Link>
            <span className="text-[#626260]">·</span>
            <span className="bg-[#1a6b3c]/30 text-[#2d8a50] text-[11px] font-semibold px-2.5 py-1 rounded-full">Health &amp; Safety</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Black Mold in St. Louis: What Homeowners Need to Know in 2026
          </h1>
          <p className="text-[#9c9fa5] text-[14px]">April 15, 2026 · 7 min read · STL Mold Removal</p>
        </div>
      </section>

      <section className="py-12 bg-[#f5f1ec]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none">

            <p className="text-[17px] text-[#111111] leading-relaxed mb-6 font-medium">
              Black mold is the most dangerous mold type found in St. Louis homes — and the most misunderstood. Homeowners either panic unnecessarily or ignore it until the problem is serious. This guide gives you the facts.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">What Is Black Mold, Exactly?</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              &ldquo;Black mold&rdquo; usually refers to <em>Stachybotrys chartarum</em>, a greenish-black mold that produces mycotoxins — toxic compounds that can cause serious health problems with prolonged exposure. However, not all dark-colored mold is Stachybotrys. Several common mold species appear black or dark green, including <em>Cladosporium</em> and <em>Aspergillus niger</em>.
            </p>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              Only laboratory testing (air sampling or tape lift samples sent to an AIHA-accredited lab) can confirm which species you&apos;re dealing with. This is why professional inspection matters — a visual inspection alone cannot tell you whether you have a serious problem or a manageable one.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Where Black Mold Grows in St. Louis Homes</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              Stachybotrys requires more prolonged moisture than most mold species — it thrives in areas that stay wet, not just damp. In St. Louis homes, that means:
            </p>
            <ul className="space-y-2 mb-6 text-[#626260] text-[15px]">
              {[
                "Basement walls and floor joists after foundation water intrusion",
                "Drywall behind leaking pipes (often inside walls)",
                "Ceiling tiles after roof leaks or HVAC condensation",
                "Crawl spaces with poor vapor control and standing water",
                "Flooded areas where materials weren't fully dried within 48 hours",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a6b3c] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              St. Louis&apos;s climate — hot humid summers, frequent spring flooding, and clay-heavy soils that hold moisture — makes basements and crawl spaces particularly vulnerable. If your home has had any flooding, even minor, and you haven&apos;t had a mold inspection, you should schedule one.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Health Effects of Black Mold Exposure</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              Symptoms from black mold exposure range from mild to severe depending on duration, concentration, and individual sensitivity. Common symptoms include:
            </p>
            <ul className="space-y-2 mb-4 text-[#626260] text-[15px]">
              {[
                "Persistent coughing, sneezing, and nasal congestion",
                "Respiratory irritation and shortness of breath",
                "Skin rashes and eye irritation",
                "Chronic fatigue and headaches",
                "Memory problems and difficulty concentrating (with prolonged exposure)",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a6b3c] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-6">
              Children, the elderly, and individuals with asthma, allergies, or compromised immune systems face the greatest risk. A key diagnostic sign: symptoms that improve when you leave the home and return when you come back.
            </p>

            <div className="bg-[#fff8f0] border-l-4 border-[#e04c2f] rounded-r-xl p-5 mb-8">
              <p className="text-[#111111] font-semibold text-[15px] mb-1">Important: Don&apos;t Use Bleach</p>
              <p className="text-[#626260] text-[14px]">
                Bleach kills surface mold but cannot penetrate porous materials like drywall, wood, and grout. The mycelia (root structure) remains embedded and regrows within weeks. Bleach on black mold is a temporary cosmetic fix, not remediation.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">How Professional Black Mold Removal Works</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              IICRC S520-compliant black mold remediation follows a strict protocol:
            </p>
            <ol className="space-y-3 mb-6 text-[#626260] text-[15px]">
              {[
                "Containment — 6-mil poly barriers seal the affected area; negative air pressure prevents spores from spreading to clean areas",
                "HEPA air filtration — air scrubbers run throughout the job, capturing airborne spores",
                "Material removal — contaminated porous materials (drywall, insulation, wood framing) are removed and bagged per EPA guidelines",
                "Surface treatment — all remaining surfaces are HEPA-vacuumed and treated with EPA-registered antimicrobials",
                "Post-clearance testing — independent air sampling confirms spore counts have returned to acceptable levels before containment is removed",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a6b3c] text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">How Much Does Black Mold Removal Cost in St. Louis?</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              Cost depends primarily on the square footage of affected material and whether drywall or structural wood needs replacement. General ranges for St. Louis jobs:
            </p>
            <div className="bg-white border border-[#d3cec6] rounded-xl p-5 mb-6 space-y-2 text-[14px]">
              {[
                ["Small area (bathroom, window frame)", "$500–$1,500"],
                ["Moderate (basement wall section, crawl space)", "$1,500–$3,500"],
                ["Large (full basement, attic, multiple rooms)", "$3,500–$8,000+"],
                ["Average St. Louis residential job", "~$2,200"],
              ].map(([scope, cost]) => (
                <div key={scope} className="flex justify-between items-center border-b border-[#f0ece6] pb-2 last:border-0 last:pb-0">
                  <span className="text-[#626260]">{scope}</span>
                  <span className="font-bold text-[#1a6b3c]">{cost}</span>
                </div>
              ))}
            </div>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-6">
              Always get a written, flat-rate estimate before work begins. Be wary of companies that quote low then add costs mid-job. Learn more about{" "}
              <Link href="/mold-remediation#inspection" className="text-[#1a6b3c] hover:underline">mold inspection and testing costs</Link>.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">What to Do Right Now</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              If you see dark mold growth or smell a persistent musty odor in your St. Louis home:
            </p>
            <ol className="space-y-2 mb-8 text-[#626260] text-[15px]">
              {[
                "Don't disturb it — scrubbing or spraying releases spores into the air",
                "Don't try to clean it with household products",
                "Schedule a professional inspection — a certified inspector will sample, identify, and scope the problem",
                "Fix the moisture source at the same time — remediation without fixing the cause always results in recurrence",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#e8f5ee] border border-[#1a6b3c] text-[#1a6b3c] flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

          </div>

          {/* Internal links */}
          <div className="bg-white border border-[#d3cec6] rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[15px] text-[#111111] mb-3">Related Reading</h3>
            <ul className="space-y-2 text-[14px]">
              {[
                ["How to Get a Free Mold Inspection in St. Louis", "/blog/free-mold-inspection-st-louis"],
                ["Why DIY Mold Removal Makes Things Worse", "/blog/diy-mold-removal-mistakes"],
                ["Basement Mold Remediation in St. Louis", "/mold-remediation#basement"],
                ["Mold Removal FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#1a6b3c] hover:underline">{label} →</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#1a6b3c] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Suspect Black Mold in Your St. Louis Home?</h2>
            <p className="text-[#a7d9bc] mb-5">Get a free inspection from a certified IICRC remediator. We respond within 1 hour.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="bg-white text-[#1a6b3c] font-bold px-6 py-3 rounded-lg hover:bg-[#f5f1ec] transition-colors">📞 {PHONE}</a>
              <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">Request Free Inspection →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
