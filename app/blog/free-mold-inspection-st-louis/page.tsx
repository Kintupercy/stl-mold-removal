import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Get a Free Mold Inspection in St. Louis, MO",
  description:
    "Step-by-step guide to getting a free professional mold inspection in St. Louis. What to look for first, what happens during the inspection, and what comes next.",
  alternates: { canonical: "https://stlmoldremoval.com/blog/free-mold-inspection-st-louis" },
  openGraph: {
    title: "How to Get a Free Mold Inspection in St. Louis, MO",
    description: "A step-by-step guide for St. Louis homeowners: when you need an inspection, what happens during it, and how to schedule yours at no cost.",
    url: "https://stlmoldremoval.com/blog/free-mold-inspection-st-louis",
    images: [{ url: "/hero-bg.png", width: 1200, height: 800 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get a Free Mold Inspection in St. Louis, MO",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "STL Mold Removal" },
  publisher: {
    "@type": "Organization",
    name: "STL Mold Removal",
    logo: { "@type": "ImageObject", url: "https://stlmoldremoval.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stlmoldremoval.com/blog/free-mold-inspection-st-louis" },
  description: "Step-by-step guide to getting a free mold inspection in St. Louis for homeowners.",
};

const PHONE_HREF = "tel:+13147790000";
const PHONE = "(314) 779-0000";

export default function FreeMoldInspection() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-[#9c9fa5] text-[13px] hover:text-white transition-colors">← Blog</Link>
            <span className="text-[#626260]">·</span>
            <span className="bg-[#1a6b3c]/30 text-[#2d8a50] text-[11px] font-semibold px-2.5 py-1 rounded-full">How-To</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            How to Get a Free Mold Inspection in St. Louis, MO
          </h1>
          <p className="text-[#9c9fa5] text-[14px]">April 29, 2026 · 5 min read · STL Mold Removal</p>
        </div>
      </section>

      <section className="py-12 bg-[#f5f1ec]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none">

            <p className="text-[17px] text-[#111111] leading-relaxed mb-6 font-medium">
              Getting a free mold inspection in St. Louis is straightforward — but knowing what to look for beforehand and what to expect during the inspection will help you get the most out of it. Here&apos;s the full process.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 1: Look for These Warning Signs First</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              Before calling, do a quick walkthrough of your home. You don&apos;t need to find visible mold to warrant an inspection — these signs are often the only warning you get:
            </p>
            <ul className="space-y-2 mb-6 text-[#626260] text-[15px]">
              {[
                "Musty odor — especially in basements, crawl spaces, or closed rooms",
                "Dark staining on walls, ceilings, or around windows (may be black, green, or brown)",
                "Visible condensation on windows, pipes, or walls that doesn't dry quickly",
                "Allergy or respiratory symptoms that improve when you leave the house",
                "Recent water damage, flooding, or a plumbing leak in the last 1–2 years",
                "A home inspection report that flagged moisture or mold",
                "Buying or selling a home — mold is a major disclosure item in Missouri",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a6b3c] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 2: Schedule the Inspection</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              STL Mold Removal offers free mold inspections across all of greater St. Louis — St. Louis City, St. Louis County, St. Charles County, and Jefferson County. You can schedule:
            </p>
            <ul className="space-y-2 mb-4 text-[#626260] text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-[#1a6b3c] font-bold mt-0.5">📞</span>
                <span>By phone: <a href={PHONE_HREF} className="text-[#1a6b3c] hover:underline">{PHONE}</a> — Mon–Sat 7 AM–7 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a6b3c] font-bold mt-0.5">💻</span>
                <span>Online: <Link href="/contact" className="text-[#1a6b3c] hover:underline">Request a free inspection</Link> and we call within 1 hour</span>
              </li>
            </ul>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-6">
              Same-day inspections are available in most of our coverage area. Emergency response is available for post-flood situations.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 3: Prepare for the Inspector&apos;s Visit</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              You don&apos;t need to do much. A few things that help the inspector:
            </p>
            <ul className="space-y-2 mb-6 text-[#626260] text-[15px]">
              {[
                "Make sure the inspector has access to your basement, crawl space, attic, and any areas where you've noticed the smell or staining",
                "Don't clean or disturb any visible mold before the inspection — the inspector needs to see it as-is",
                "Know the history: when did the smell start? Any recent leaks or flooding? Has the house flooded before?",
                "Have your homeowner's insurance information handy — if the mold is from a covered event, we provide documentation",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a6b3c] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 4: What Happens During the Inspection</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              A thorough mold inspection covers more than looking at visible staining. Our certified inspectors use:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { tool: "Moisture meter", desc: "Detects moisture levels inside walls, floors, and ceilings without cutting holes. High moisture = mold risk, even if nothing is visible." },
                { tool: "Thermal imaging camera", desc: "Infrared imaging reveals temperature differentials that indicate hidden moisture — cold spots behind drywall often mean water intrusion." },
                { tool: "Borescope", desc: "A tiny camera on a flexible tube that can look inside wall cavities through a small hole — lets us see what's growing without major demolition." },
                { tool: "Air sampling cassettes", desc: "Captures airborne spores from each room for lab analysis. Compared to an outdoor baseline to determine if indoor levels are elevated." },
              ].map(({ tool, desc }) => (
                <div key={tool} className="bg-white border border-[#d3cec6] rounded-xl p-4">
                  <p className="font-semibold text-[#111111] text-[14px] mb-1">{tool}</p>
                  <p className="text-[#626260] text-[13px]">{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 5: Understanding the Inspection Report</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              If air samples are collected (required for lab-confirmed mold identification), results are returned in 24–48 hours. The report includes:
            </p>
            <ul className="space-y-2 mb-6 text-[#626260] text-[15px]">
              {[
                "Spore counts by species — in spores per cubic meter",
                "Comparison to outdoor baseline (normal is similar to or lower than outdoor counts)",
                "Which rooms are affected and at what level",
                "Identified moisture sources and affected materials",
                "Recommended remediation scope",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1a6b3c] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-4">
              <strong>Note on air sampling costs:</strong> The inspection itself is free. If the inspector determines air sampling is warranted, lab testing runs $200–$500 and is paid separately. Not every situation requires lab testing — your inspector will tell you if it&apos;s needed.
            </p>

            <h2 className="text-2xl font-bold text-[#111111] mt-10 mb-4">Step 6: Getting a Written Estimate</h2>
            <p className="text-[#626260] text-[15px] leading-relaxed mb-8">
              If remediation is needed, we provide a written flat-rate estimate before any work begins. No hourly billing, no surprise charges. You decide whether to proceed — there&apos;s no obligation from the inspection. See our <Link href="/mold-remediation" className="text-[#1a6b3c] hover:underline">services page</Link> for typical cost ranges by job type.
            </p>

          </div>

          <div className="bg-white border border-[#d3cec6] rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[15px] text-[#111111] mb-3">Related Reading</h3>
            <ul className="space-y-2 text-[14px]">
              {[
                ["Black Mold in St. Louis: The Complete Guide", "/blog/black-mold-st-louis-homeowners-guide"],
                ["Why DIY Mold Removal Makes Things Worse", "/blog/diy-mold-removal-mistakes"],
                ["Mold Inspection & Air Testing — How It Works", "/mold-remediation#inspection"],
                ["Service Areas — Is My City Covered?", "/service-areas"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#1a6b3c] hover:underline">{label} →</Link></li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a6b3c] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Schedule Your Free Inspection</h2>
            <p className="text-[#a7d9bc] mb-5">We respond within 1 hour. Same-day scheduling available across St. Louis.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="bg-white text-[#1a6b3c] font-bold px-6 py-3 rounded-lg hover:bg-[#f5f1ec] transition-colors">📞 {PHONE}</a>
              <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">Request Online →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
