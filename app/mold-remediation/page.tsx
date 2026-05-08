import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mold Remediation Services St. Louis, MO",
  description:
    "Full-service mold remediation in St. Louis: black mold removal, basement & crawl space treatment, air testing, and post-flood response. Free inspection. Call now.",
  alternates: { canonical: "https://stlmoldremoval.com/mold-remediation" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const services = [
  {
    id: "black-mold",
    icon: "🖤",
    title: "Black Mold Removal",
    heading: "Black Mold (Stachybotrys) Removal",
    body: `Black mold produces mycotoxins that can cause respiratory problems, fatigue, and serious health issues — especially dangerous for children, elderly, and those with asthma. Stachybotrys chartarum thrives in areas with prolonged moisture exposure: basement walls, bathroom ceilings, HVAC ducts, and drywall behind leaky pipes.

Our black mold removal process follows full IICRC S520 protocols:
• Physical containment with 6-mil poly barriers and negative air pressure
• HEPA-filtered air scrubbers running throughout the job
• Complete removal of contaminated porous materials (drywall, insulation, wood)
• HEPA vacuuming and antimicrobial treatment of all remaining surfaces
• Post-clearance air sampling — third-party lab verified

We do not use bleach as a primary treatment. Bleach kills surface mold but does not penetrate porous materials — the mycelia remain embedded and regrow. We use EPA-registered antimicrobial solutions designed for deep penetration.`,
    cost: "$1,500–$5,000 depending on square footage and material removal required",
  },
  {
    id: "inspection",
    icon: "🔍",
    title: "Mold Inspection & Air Quality Testing",
    heading: "Certified Mold Inspection & Lab-Grade Air Testing",
    body: `Not all mold is visible. Our certified inspectors use a combination of tools to find mold that's already behind walls, under flooring, and inside HVAC systems before it spreads further.

Inspection tools we use:
• Moisture meters — map hidden moisture intrusion in walls, floors, and ceilings
• Infrared thermal imaging — detect temperature differentials caused by moisture
• Borescope inspection — look inside wall cavities without opening drywall
• Air cassette sampling — capture spore counts by room and outside baseline
• Tape lift surface samples — identify mold species on visible growth

All air samples are sent to an AIHA-accredited laboratory and results are returned in 24–48 hours. You receive a full written report detailing spore counts by species, comparison to outdoor baseline, affected areas, and recommended remediation scope.

This report can be used with your insurance company, real estate agent, or mortgage lender.`,
    cost: "$200–$500 for a full inspection and lab report",
  },
  {
    id: "basement",
    icon: "🏚️",
    title: "Basement Mold Remediation",
    heading: "Basement Mold Removal in St. Louis",
    body: `St. Louis basements are the #1 location for mold growth — and the #1 call we get. The combination of high water table, clay-heavy soil that retains moisture, and finished basements with drywall and carpet creates ideal mold conditions.

Common basement mold scenarios we handle:
• Concrete block and poured wall efflorescence + mold
• Wood framing and joists with mold growth from chronic moisture
• Finished drywall ceilings and walls after water intrusion
• Carpet padding and subfloor mold after flooding or slow leaks
• Sump pump pit and floor drain surroundings

Our basement remediation always includes identification and documentation of the moisture source — a crack in the foundation, failed waterproofing, HVAC condensate, or inadequate grading outside. Remediating without fixing the source is just delaying the same call.`,
    cost: "$1,500–$5,000 depending on affected area and materials",
  },
  {
    id: "crawl-space",
    icon: "🕳️",
    title: "Crawl Space Mold Removal",
    heading: "Crawl Space Mold Remediation",
    body: `Crawl spaces are almost always humid, often have standing water seasonally, and are filled with wood framing that mold loves. Most homeowners don't know they have a crawl space mold problem until a home inspector finds it — or they smell it upstairs.

Our crawl space remediation process:
• HEPA vacuum all loose debris and contaminated insulation
• Wire brush and HEPA vacuum wood framing
• Apply EPA-registered antimicrobial encapsulation to joists and subfloor
• Remove and replace compromised insulation
• Identify and seal moisture entry points
• Recommend encapsulation system if appropriate

After remediation, we assess whether the crawl space needs a vapor barrier or full encapsulation system to maintain low humidity going forward.`,
    cost: "$1,000–$4,000 depending on linear footage and materials",
  },
  {
    id: "attic",
    icon: "🏠",
    title: "Attic Mold Remediation",
    heading: "Attic Mold Removal St. Louis",
    body: `Attics are one of the most overlooked mold locations — and one of the most common issues we find during pre-listing inspections. The cause is almost always a ventilation problem: insufficient soffit or ridge vents, blocked ventilation from insulation, or bathroom exhaust fans venting into the attic instead of outside.

Our attic mold remediation:
• Dry ice blasting or media blasting to remove mold from rafters and sheathing
• HEPA vacuum all loose debris
• EPA-registered antimicrobial treatment
• Identify and document the ventilation deficiency

We do not recommend painting over attic mold. Encapsulant coatings do not fix the underlying moisture problem — they just hide it temporarily. We fix the source, then treat the surfaces.`,
    cost: "$1,500–$5,000 depending on attic size and method used",
  },
  {
    id: "flood",
    icon: "💧",
    title: "Post-Flood Mold Remediation",
    heading: "Emergency Mold Response After Flooding",
    body: `After a flood or major water intrusion event, you have a 24–48 hour window before mold begins to establish. After 72 hours, you're in mold remediation territory — not just water damage drying.

Our emergency flood mold response:
• Emergency mobilization across the St. Louis metro
• Moisture mapping of all affected areas
• Coordinated drying and mold containment
• Removal of Category 3 (contaminated) materials per IICRC standards
• Post-drying mold inspection and clearance testing

We work alongside your insurance adjuster and can provide documentation for claims. If you've had water intrusion in the last 30 days and haven't had a mold inspection, call us today.`,
    cost: "Varies by damage extent — free estimate on site",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Mold Remediation Services<br />in St. Louis, MO
          </h1>
          <p className="text-[#9c9fa5] text-[17px] max-w-2xl mx-auto mb-8">
            From black mold to post-flood emergencies, we handle every type of mold situation across the St. Louis metro. Licensed, insured, and IICRC-certified.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-semibold px-8 py-4 rounded-md transition-colors text-[15px]"
          >
            📞 Call {PHONE} — Free Inspection
          </a>
        </div>
      </section>

      {/* Jump links */}
      <section className="bg-white border-b border-[#d3cec6] sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-4 overflow-x-auto text-[13px] font-medium">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-[#626260] hover:text-[#1a6b3c] whitespace-nowrap transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Service sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`rounded-xl p-8 border ${i % 2 === 0 ? "bg-white border-[#d3cec6]" : "bg-[#f5f1ec] border-[#ebe7e1]"}`}
          >
            <div className="flex items-start gap-4 mb-5">
              <span className="text-4xl">{s.icon}</span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
                <p className="text-[#1a6b3c] text-[13px] font-semibold mt-1">Typical cost: {s.cost}</p>
              </div>
            </div>
            <div className="text-[#626260] text-[15px] leading-relaxed whitespace-pre-line">{s.body}</div>
            <div className="mt-6">
              <a
                href={PHONE_HREF}
                className="inline-block bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-medium px-5 py-2.5 rounded-md transition-colors text-[14px]"
              >
                Schedule {s.title} →
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#1a6b3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-3xl font-semibold tracking-tight mb-4">
            Ready to Schedule Your Free Inspection?
          </h2>
          <p className="text-[#a7d9bc] mb-8">Same-day scheduling available across all of greater St. Louis.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="bg-white text-[#1a6b3c] font-bold px-8 py-4 rounded-md hover:bg-[#f5f1ec] transition-colors">
              📞 {PHONE}
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors">
              Request Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
