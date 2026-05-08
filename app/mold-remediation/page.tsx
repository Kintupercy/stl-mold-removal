import type { Metadata } from "next";
import Link from "next/link";
import InlineLeadForm from "@/components/InlineLeadForm";

export const metadata: Metadata = {
  title: "Mold Remediation Services St. Louis, MO",
  description:
    "Full-service mold remediation in St. Louis: black mold removal, basement & crawl space treatment, air testing, and post-flood response. Free inspection. Call now.",
  alternates: { canonical: "https://stlmoldremoval.com/mold-remediation" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

// SVG icon components for service cards
const SvgAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);
const SvgSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z" />
  </svg>
);
const SvgHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  </svg>
);
const SvgGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);
const SvgRoof = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
  </svg>
);
const SvgWater = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-[#1a6b3c]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const services = [
  {
    id: "black-mold",
    icon: <SvgAlert />,
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
    icon: <SvgSearch />,
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
    icon: <SvgHome />,
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
    icon: <SvgGrid />,
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
    icon: <SvgRoof />,
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
    icon: <SvgWater />,
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-start">
            <div>
              <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">Services</p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
                Mold Remediation Services<br />in St. Louis, MO
              </h1>
              <p className="text-[#9c9fa5] text-[17px] max-w-2xl mb-8">
                From black mold to post-flood emergencies, we handle every type of mold situation across the St. Louis metro. Licensed, insured, and IICRC-certified.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-block bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-semibold px-8 py-4 rounded-md transition-colors text-[15px]"
              >
                Call {PHONE} — Free Inspection
              </a>
            </div>
            <div className="hidden md:block">
              <InlineLeadForm
                heading="Schedule Your Free Inspection"
                subheading="Same-day availability · We call within 1 hour"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form */}
      <section className="md:hidden bg-[#f5f1ec] px-4 py-8">
        <InlineLeadForm
          heading="Schedule Your Free Inspection"
          subheading="Same-day availability · We call within 1 hour"
        />
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
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-lg flex items-center justify-center flex-shrink-0">
                {s.icon}
              </div>
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

      {/* Bottom CTA with inline form */}
      <section className="bg-[#f5f1ec] py-16 border-t border-[#d3cec6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Ready to Schedule Your Free Inspection?
              </h2>
              <p className="text-[#626260] text-[16px] mb-6">
                Same-day scheduling available across all of greater St. Louis. We locate all mold, give you a flat-rate written estimate, and complete the job in 1–3 days.
              </p>
              <ul className="space-y-2 text-[14px] text-[#626260]">
                {["✓ IICRC S520 Certified", "✓ Licensed & Fully Insured", "✓ Post-clearance air testing", "✓ Written flat-rate estimate"].map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <InlineLeadForm
                heading="Get Your Free Inspection"
                subheading="Fill out the form — we respond within 1 hour"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
