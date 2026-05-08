"use client";

import Image from "next/image";
import { useState } from "react";

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const ISSUES = [
  "Black / Dark Mold Visible",
  "Musty Smell — No Visible Mold",
  "Recent Flooding or Water Damage",
  "Pre-Purchase Home Inspection",
  "Buying or Selling a Home",
  "Air Quality / Health Concerns",
  "Other",
];

const AREAS = [
  "St. Louis City", "Chesterfield", "Ballwin", "Kirkwood", "Webster Groves",
  "Florissant", "O'Fallon", "St. Charles", "Fenton", "Manchester",
  "Wildwood", "Creve Coeur", "Mehlville", "Oakville", "Hazelwood",
  "Maryland Heights", "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    area: "", issue: "", description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY",
          subject: `🔴 New Mold Lead — ${form.firstName} ${form.lastName} — ${form.area}`,
          from_name: "STL Mold Removal",
          ...form,
        }),
      });
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero bar */}
      <section className="bg-[#111111] text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-[#2d8a50] text-[12px] font-semibold uppercase tracking-widest mb-2">Free Inspection</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Request Your Free Mold Inspection</h1>
          <p className="text-[#9c9fa5] text-[15px] mt-2">We respond within 1 hour during business hours. Same-day inspections available.</p>
        </div>
      </section>

      {/* Main form section */}
      <section className="py-0 bg-[#f5f1ec]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[600px]">

            {/* LEFT — Image + trust */}
            <div className="relative hidden md:block">
              <Image
                src="/hero-bg.png"
                alt="Mold remediation in St. Louis"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-xl font-bold mb-4">What Happens Next</h2>
                <ul className="space-y-3 text-[14px]">
                  {[
                    "We call you within 1 hour",
                    "Schedule your free same-day inspection",
                    "Certified inspector locates all mold",
                    "You get a written flat-rate estimate",
                    "Job completed in 1–3 days",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#1a6b3c] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[#d0d0c8]">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/20">
                  <p className="text-[#7b7b78] text-[12px] mb-1">Or call us directly</p>
                  <a href={PHONE_HREF} className="text-white font-bold text-xl hover:text-[#2d8a50] transition-colors">
                    {PHONE}
                  </a>
                  <p className="text-[#626260] text-[11px] mt-1">Mon–Sat 7 AM–7 PM</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-white px-8 py-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="text-6xl mb-5">✅</div>
                  <h2 className="text-2xl font-bold text-[#111111] mb-3">
                    You&apos;re All Set!
                  </h2>
                  <p className="text-[#626260] text-[15px] mb-6 max-w-xs">
                    We received your request and will call you within the hour to schedule your free inspection.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="bg-[#1a6b3c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#134f2d] transition-colors"
                  >
                    📞 Call {PHONE}
                  </a>
                </div>
              ) : (
                <>
                  <div className="bg-[#e8f5ee] border-2 border-[#1a6b3c] rounded-xl p-4 text-center mb-6">
                    <p className="text-[#1a6b3c] font-bold text-[18px] uppercase tracking-wide">
                      🔍 Free Inspection Request
                    </p>
                    <p className="text-[#626260] text-[12px] mt-1">Enter your info below — we respond in under 1 hour</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[12px] font-semibold text-[#111111] mb-1">First Name *</label>
                        <input
                          type="text" required
                          value={form.firstName}
                          onChange={e => setForm({ ...form, firstName: e.target.value })}
                          placeholder="Jennifer"
                          className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#1a6b3c] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#111111] mb-1">Last Name *</label>
                        <input
                          type="text" required
                          value={form.lastName}
                          onChange={e => setForm({ ...form, lastName: e.target.value })}
                          placeholder="Mitchell"
                          className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#1a6b3c] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#111111] mb-1">Phone Number *</label>
                      <input
                        type="tel" required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="(314) 000-0000"
                        className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#1a6b3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#111111] mb-1">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="jennifer@email.com"
                        className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#1a6b3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#111111] mb-1">Your City / Area *</label>
                      <select
                        required
                        value={form.area}
                        onChange={e => setForm({ ...form, area: e.target.value })}
                        className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                      >
                        <option value="">Select your area…</option>
                        {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#111111] mb-1">What&apos;s the issue? *</label>
                      <select
                        required
                        value={form.issue}
                        onChange={e => setForm({ ...form, issue: e.target.value })}
                        className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#1a6b3c] transition-colors"
                      >
                        <option value="">Select one…</option>
                        {ISSUES.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#111111] mb-1">Additional Details</label>
                      <textarea
                        rows={3}
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        placeholder="Where did you notice the mold? How long ago? Any recent leaks or flooding?"
                        className="w-full border border-[#d3cec6] rounded-lg px-3.5 py-2.5 text-[14px] resize-none focus:outline-none focus:border-[#1a6b3c] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1a6b3c] hover:bg-[#134f2d] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-[16px] transition-colors shadow-md"
                    >
                      {loading ? "Sending…" : "🔍 Get My Free Inspection →"}
                    </button>

                    <div className="flex justify-center gap-5 pt-1">
                      {["🔒 256-bit SSL", "✓ Licensed MO", "✗ No Spam"].map(t => (
                        <span key={t} className="text-[#626260] text-[11px]">{t}</span>
                      ))}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile phone CTA */}
      <div className="md:hidden bg-[#1a6b3c] text-white text-center py-5 px-4">
        <p className="text-[13px] text-[#a7d9bc] mb-1">Prefer to call?</p>
        <a href={PHONE_HREF} className="text-white font-bold text-xl">{PHONE}</a>
        <p className="text-[#7b7b78] text-[11px] mt-1">Mon–Sat 7 AM–7 PM</p>
      </div>
    </>
  );
}
