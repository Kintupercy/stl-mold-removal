import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";

export const metadata: Metadata = {
  title: "Mold Removal St. Louis, MO | Free Inspection | STL Mold Removal",
  description:
    "Licensed mold remediation in St. Louis, MO. We remove black mold, test air quality & restore your home. Free inspection. Call (314) 779-0000 today.",
  alternates: { canonical: "https://stlmoldremoval.com" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const services = [
  {
    icon: "🖤",
    title: "Black Mold Removal",
    desc: "Full containment and removal of Stachybotrys using EPA-approved protocols. Verified with post-clearance air testing.",
    id: "black-mold",
  },
  {
    icon: "🔍",
    title: "Mold Inspection & Testing",
    desc: "Moisture meters, thermal imaging, and lab-certified air sampling to find hidden mold before it spreads.",
    id: "inspection",
  },
  {
    icon: "🏚️",
    title: "Basement Mold Remediation",
    desc: "We treat concrete walls, wooden joists, and sump areas — then fix the moisture source so it stays gone.",
    id: "basement",
  },
  {
    icon: "🕳️",
    title: "Crawl Space Mold Removal",
    desc: "Full remediation of crawl space mold plus encapsulation recommendations to prevent recurrence.",
    id: "crawl-space",
  },
  {
    icon: "🏠",
    title: "Attic Mold Remediation",
    desc: "Remove attic mold caused by poor ventilation or roof leaks, then restore proper airflow.",
    id: "attic",
  },
  {
    icon: "💧",
    title: "Post-Flood Mold Response",
    desc: "Fast mobilization after flooding or water damage events across the entire St. Louis metro.",
    id: "flood",
  },
];

const steps = [
  { n: "01", title: "Call or Request Online", desc: "We schedule a free same-day or next-day inspection." },
  { n: "02", title: "Certified Inspection", desc: "We locate all affected areas and identify the moisture source." },
  { n: "03", title: "Written Estimate", desc: "Flat-rate price — no surprises before we touch anything." },
  { n: "04", title: "Removal & Treatment", desc: "Contain, remove, treat, and verify with post-clearance testing." },
  { n: "05", title: "Final Clearance", desc: "You receive written documentation confirming your home is mold-free." },
];

const serviceAreas = [
  "Chesterfield", "Ballwin", "Kirkwood", "Webster Groves",
  "Florissant", "O'Fallon", "St. Charles", "Fenton",
  "Manchester", "Wildwood", "Creve Coeur", "Mehlville",
  "Oakville", "Hazelwood", "Maryland Heights",
];

const faqs = [
  {
    q: "How much does mold removal cost in St. Louis?",
    a: "Most jobs range from $500–$6,000 depending on the affected area and mold type. Small bathroom jobs average $500–$1,500. Basement jobs typically run $2,000–$5,000. Free written estimates before any work begins.",
  },
  {
    q: "Is mold covered by homeowner's insurance in Missouri?",
    a: "If mold results from a covered event like a burst pipe, your policy may cover remediation costs. Mold from long-term leaks or humidity usually is not. We provide documentation to support your claim.",
  },
  {
    q: "How long does mold remediation take?",
    a: "Most residential jobs take 1–3 days. We'll give you a specific timeline at your free inspection.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "STL Mold Removal",
  description:
    "Certified mold remediation and black mold removal serving St. Louis, MO and surrounding communities. Free inspections, same-day scheduling.",
  url: "https://stlmoldremoval.com",
  telephone: "+1-314-779-0000",
  email: "info@stlmoldremoval.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. Louis",
    addressRegion: "MO",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: "38.6270", longitude: "-90.1994" },
  areaServed: serviceAreas.map((a) => a + ", MO"),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mold Remediation",
  provider: { "@type": "LocalBusiness", name: "STL Mold Removal", url: "https://stlmoldremoval.com" },
  areaServed: { "@type": "City", name: "St. Louis", addressRegion: "MO" },
  description: "Professional mold remediation including black mold removal, basement & crawl space treatment, mold inspection, and post-flood response.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: { "@type": "PriceSpecification", minPrice: "500", maxPrice: "6000", priceCurrency: "USD" },
    availability: "https://schema.org/InStock",
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[540px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Mold remediation technician inspecting St. Louis basement"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/85 to-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_400px] gap-10 items-center">

            {/* LEFT — tight headline only */}
            <div>
              <h1 className="text-4xl md:text-[54px] font-bold leading-[1.08] tracking-tight mb-4">
                Mold in Your<br />
                <span className="text-[#2d8a50]">St. Louis Home?</span>
              </h1>
              <p className="text-[#b0b0a8] text-[18px] mb-6">
                Free inspection · Same-day · IICRC Certified
              </p>
              <div className="flex gap-6">
                {[
                  { value: "500+", label: "Jobs Done" },
                  { value: "4.9★", label: "Rating" },
                  { value: "$0", label: "Inspection" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[#2d8a50] text-2xl font-bold">{s.value}</p>
                    <p className="text-[#7b7b78] text-[11px] uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="w-full">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#f5f1ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#1a6b3c] text-[13px] font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Mold Remediation Services in St. Louis
            </h2>
            <p className="text-[#626260] text-[17px] max-w-xl mx-auto">
              From black mold to post-flood emergencies — we handle every type of mold situation in the greater St. Louis metro.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="bg-white border border-[#d3cec6] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-[17px] font-semibold mb-2">{s.title}</h3>
                <p className="text-[#626260] text-[14px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/mold-remediation" className="text-[#1a6b3c] font-semibold hover:text-[#134f2d] transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#1a6b3c] text-[13px] font-semibold uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="text-3xl font-semibold tracking-tight">Our 5-Step Remediation Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#e8f5ee] border-2 border-[#1a6b3c] flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#1a6b3c] font-bold text-[13px]">{step.n}</span>
                </div>
                <h3 className="text-[15px] font-semibold mb-1">{step.title}</h3>
                <p className="text-[#626260] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-[#f5f1ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#1a6b3c] text-[13px] font-semibold uppercase tracking-widest mb-2">Where We Work</p>
            <h2 className="text-3xl font-semibold tracking-tight mb-3">Serving Greater St. Louis</h2>
            <p className="text-[#626260] text-[17px]">St. Louis City · St. Louis County · St. Charles County · Jefferson County</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(/['\s]+/g, "-").replace(/[^a-z0-9-]/g, "")}-mo`}
                className="bg-white border border-[#d3cec6] text-[#111111] text-[14px] font-medium px-4 py-2 rounded-full hover:border-[#1a6b3c] hover:text-[#1a6b3c] transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/service-areas" className="text-[#1a6b3c] font-semibold hover:text-[#134f2d] transition-colors">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#1a6b3c] text-[13px] font-semibold uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-3xl font-semibold tracking-tight">Mold Removal FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-[#d3cec6] rounded-xl p-6">
                <h3 className="text-[16px] font-semibold mb-2">{f.q}</h3>
                <p className="text-[#626260] text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#1a6b3c] font-semibold hover:text-[#134f2d] transition-colors">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a6b3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Ready for Your Free Mold Inspection?
          </h2>
          <p className="text-[#a7d9bc] text-[17px] mb-8">
            Don't let mold spread. Get a certified inspector at your St. Louis home within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="bg-white text-[#1a6b3c] font-bold px-8 py-4 rounded-md hover:bg-[#f5f1ec] transition-colors text-[16px]"
            >
              📞 Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-[16px]"
            >
              Request Inspection Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
