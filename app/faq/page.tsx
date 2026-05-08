import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mold Removal FAQ St. Louis, MO",
  description:
    "Answers to the most common mold removal questions for St. Louis homeowners — cost, health risks, insurance, timeline, and how to choose a remediator.",
  alternates: { canonical: "https://stlmoldremoval.com/faq" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const faqs = [
  {
    q: "How do I know if I have mold in my St. Louis home?",
    a: "Common signs include musty odors, visible dark or greenish stains on walls or ceilings, allergy symptoms that improve when you leave the house, and any history of water damage or flooding. If you've had basement water intrusion after St. Louis rains, schedule an inspection even if you see nothing visible — mold often hides inside wall cavities and under flooring.",
  },
  {
    q: "What is black mold and how dangerous is it?",
    a: "Black mold (Stachybotrys chartarum) produces mycotoxins that can cause respiratory problems, fatigue, headaches, and immune issues — particularly dangerous for children, elderly, and people with asthma. It requires professional removal with full containment. Do not attempt to clean it with bleach — bleach does not kill mold roots and the problem will return.",
  },
  {
    q: "How much does mold remediation cost in St. Louis, MO?",
    a: "Small-area jobs (bathroom grout, window frames): $200–$500. Moderate jobs (basement wall, small crawl space): $1,500–$3,000. Large-scale (multiple rooms, full crawl space, attic): $3,000–$8,000+. We provide written flat-rate estimates before any work begins. The average St. Louis job runs approximately $2,200.",
  },
  {
    q: "Does Missouri homeowner's insurance cover mold removal?",
    a: "Missouri policies typically cover mold remediation if the mold results from a covered peril — a burst pipe, sudden storm water damage. Gradual leaks, high humidity, or long-term neglect are usually excluded. We provide detailed written documentation of cause and scope to support your insurance claim.",
  },
  {
    q: "Can I stay in my home during mold remediation?",
    a: "For small, contained jobs, yes. For large-scale remediation involving multiple rooms or HVAC systems, we recommend staying elsewhere for 1–2 days while containment is in place and air scrubbers are running. We'll advise you specifically based on your home's situation during the free inspection.",
  },
  {
    q: "Will mold come back after remediation?",
    a: "Not if the moisture source is fixed. Mold remediation without addressing the underlying water intrusion, humidity, or leak is a temporary fix. Our process always includes identifying and documenting the moisture source. We won't leave without recommending corrective action for the root cause.",
  },
  {
    q: "How do I choose a mold remediation company in St. Louis?",
    a: "Look for: IICRC certification (the industry standard for remediation), written estimates before work begins, post-clearance testing to prove the mold is gone, and verifiable local reviews. Avoid any company that quotes without a physical inspection — that's a red flag. Also avoid companies that promise '100% mold removal forever' — mold spores exist naturally everywhere and that claim is misleading.",
  },
  {
    q: "How long does mold testing take?",
    a: "An inspection appointment takes 45–90 minutes. Air samples sent to the lab return results in 24–48 hours. You receive a full written report you can share with your real estate agent, insurance company, or landlord.",
  },
  {
    q: "What's the difference between mold removal and mold remediation?",
    a: "'Mold removal' implies eliminating all mold — which isn't actually possible since mold spores exist naturally everywhere. 'Mold remediation' is the accurate term: we reduce mold levels to safe, normal concentrations, remove contaminated materials, treat remaining surfaces, and correct the moisture source. Any company promising complete permanent elimination of all mold is overselling.",
  },
  {
    q: "Do I need a mold inspection when buying a home in St. Louis?",
    a: "We strongly recommend it — especially for homes built before 1990, homes with basements, or any property with visible water stains or a history of flooding. A mold inspection report gives you negotiating leverage and can save you from a five-figure remediation cost after closing. We provide inspection reports accepted by real estate attorneys and lenders.",
  },
  {
    q: "Can mold make you sick?",
    a: "Yes. Mold exposure can cause nasal congestion, throat irritation, coughing, wheezing, eye irritation, and skin rashes. People with mold allergies or asthma can have severe reactions. Long-term exposure to certain mold strains — particularly black mold — can cause more serious respiratory and neurological symptoms. If household members are experiencing unexplained health issues, a mold inspection is worth doing.",
  },
  {
    q: "Do you serve the entire St. Louis metro area?",
    a: "Yes — we cover St. Louis City, St. Louis County, St. Charles County, Jefferson County, and surrounding areas including Chesterfield, Ballwin, Florissant, Kirkwood, O'Fallon, Fenton, Webster Groves, Manchester, Wildwood, Creve Coeur, Mehlville, Oakville, Hazelwood, Maryland Heights, and 20+ additional communities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Mold Removal Questions — Answered for St. Louis Homeowners
          </h1>
          <p className="text-[#9c9fa5] text-[17px]">
            Everything you need to know about mold remediation in the St. Louis area — cost, process, health, and insurance.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-16 bg-[#f5f1ec]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-[#d3cec6] rounded-xl p-6">
                <h2 className="text-[16px] font-semibold mb-3">{f.q}</h2>
                <p className="text-[#626260] text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-[#1a6b3c] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-3">Still Have Questions?</h2>
            <p className="text-[#a7d9bc] mb-6">
              Call us or request a free inspection — we'll answer everything on-site and give you a written estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="bg-white text-[#1a6b3c] font-bold px-6 py-3 rounded-md hover:bg-[#f5f1ec] transition-colors">
                📞 {PHONE}
              </a>
              <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Request Free Inspection →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
