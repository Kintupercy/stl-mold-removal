import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact STL Mold Removal | Free Mold Inspection St. Louis, MO",
  description:
    "Request a free mold inspection in St. Louis, MO. Call (314) 779-0000 or fill out our quick form — we'll contact you within 1 hour during business hours.",
  alternates: { canonical: "https://stlmoldremoval.com/contact" },
};

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Request Your Free Mold Inspection in St. Louis
          </h1>
          <p className="text-[#9c9fa5] text-[17px]">
            Call us or fill out the form below — we'll contact you within 1 hour during business hours.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 bg-[#f5f1ec]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10">
          {/* Form */}
          <div className="md:col-span-2 bg-white border border-[#d3cec6] rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Inspection Request Form</h2>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                    placeholder="Jennifer"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                    placeholder="Mitchell"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                  placeholder="(314) 000-0000"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                  placeholder="jennifer@email.com"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                  placeholder="63017"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">What&apos;s the issue?</label>
                <select
                  name="issueType"
                  className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                >
                  <option value="">Select one…</option>
                  <option value="black-mold">Visible black mold</option>
                  <option value="musty-smell">Musty smell</option>
                  <option value="recent-flooding">Recent flooding or water damage</option>
                  <option value="buying-selling">Buying or selling a home</option>
                  <option value="inspection-only">Inspection only</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Brief description</label>
                <textarea
                  name="description"
                  rows={4}
                  className="w-full border border-[#d3cec6] rounded-md px-3.5 py-2.5 text-[14px] text-[#111111] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors resize-none"
                  placeholder="Tell us where the mold is, how long you've noticed it, and any recent water events…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-semibold py-3.5 rounded-md transition-colors text-[15px]"
              >
                Get My Free Inspection →
              </button>

              <p className="text-[#7b7b78] text-[12px] text-center">
                We respond within 1 hour during business hours. Mon–Sat 7 AM–7 PM.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#1a6b3c] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-[16px] mb-3">Call Us Directly</h3>
              <a href={PHONE_HREF} className="text-2xl font-bold text-white hover:text-[#a7d9bc] transition-colors block mb-2">
                {PHONE}
              </a>
              <p className="text-[#a7d9bc] text-[13px]">Mon–Sat: 7 AM – 7 PM<br />Emergency response available</p>
            </div>

            <div className="bg-white border border-[#d3cec6] rounded-xl p-6">
              <h3 className="font-semibold text-[15px] mb-3">What to Expect</h3>
              <ul className="space-y-3 text-[13px] text-[#626260]">
                {[
                  "1-hour callback guarantee (business hours)",
                  "Free same-day or next-day inspection",
                  "Written flat-rate estimate before any work",
                  "No surprises — ever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#1a6b3c] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#d3cec6] rounded-xl p-6">
              <h3 className="font-semibold text-[15px] mb-3">Service Area</h3>
              <p className="text-[13px] text-[#626260]">
                We serve all of the greater St. Louis metro — St. Louis City, St. Louis County, St. Charles County, Jefferson County, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
