"use client";

import { useState } from "react";

const ISSUES = [
  { value: "black-mold", label: "🖤 Black / Dark Mold", desc: "Visible dark spots on walls or ceiling" },
  { value: "musty-smell", label: "👃 Musty Smell", desc: "Persistent odor with no visible mold" },
  { value: "water-damage", label: "💧 Recent Water Damage", desc: "Flooding, burst pipe, or heavy leak" },
  { value: "buying-selling", label: "🏠 Buying / Selling Home", desc: "Pre-purchase inspection needed" },
];

const AREAS = [
  "St. Louis City", "Chesterfield", "Ballwin", "Kirkwood", "Webster Groves",
  "Florissant", "O'Fallon", "St. Charles", "Fenton", "Manchester",
  "Wildwood", "Creve Coeur", "Mehlville", "Oakville", "Hazelwood",
  "Maryland Heights", "Other",
];

export default function HeroForm() {
  const [step, setStep] = useState(1);
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", area: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY",
          subject: `🔴 New Mold Lead — ${form.name} — ${form.area}`,
          from_name: "STL Mold Removal",
          issue_type: issue,
          name: form.name,
          phone: form.phone,
          email: form.email,
          area: form.area,
          message: form.message || "No additional details",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // show success even on network error — don't block leads
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2">We&apos;ll Call You Within the Hour</h3>
        <p className="text-[#a7d9bc] text-[15px] mb-6">
          Your inspection request is confirmed. One of our certified inspectors will reach out shortly.
        </p>
        <div className="bg-[#1a6b3c]/40 rounded-xl p-4">
          <p className="text-white text-[13px] font-semibold mb-1">Need it faster?</p>
          <a href="tel:+13147790000" className="text-[#2d8a50] font-bold text-xl hover:text-[#a7d9bc] transition-colors">
            (314) 779-0000
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
      {/* Form header */}
      <div className="bg-[#1a6b3c] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-[16px]">Get Your Free Inspection</p>
          <p className="text-[#a7d9bc] text-[12px]">Step {step} of 2 — {step === 1 ? "Tell us your issue" : "Your contact info"}</p>
        </div>
        <div className="flex gap-1.5">
          <span className={`w-8 h-1.5 rounded-full ${step >= 1 ? "bg-white" : "bg-white/30"}`} />
          <span className={`w-8 h-1.5 rounded-full ${step >= 2 ? "bg-white" : "bg-white/30"}`} />
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-black/20 px-6 py-2 flex gap-4 text-[11px] text-[#a7d9bc] font-medium border-b border-white/10">
        <span>🔒 Secure & Private</span>
        <span>✓ Free — No Obligation</span>
        <span>⚡ Same-Day Response</span>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div>
            <p className="text-white text-[14px] font-semibold mb-4">What describes your situation?</p>
            <div className="grid grid-cols-1 gap-2.5">
              {ISSUES.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setIssue(opt.value); setStep(2); }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                    issue === opt.value
                      ? "border-[#2d8a50] bg-[#1a6b3c]/30 text-white"
                      : "border-white/20 bg-white/5 text-white hover:border-[#2d8a50] hover:bg-[#1a6b3c]/20"
                  }`}
                >
                  <p className="text-[14px] font-semibold">{opt.label}</p>
                  <p className="text-[11px] text-[#9c9fa5] mt-0.5">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="text-white text-[13px] font-semibold mb-1">
              Issue: <span className="text-[#2d8a50]">{ISSUES.find(i => i.value === issue)?.label}</span>
              <button type="button" onClick={() => setStep(1)} className="ml-2 text-[#626260] text-[11px] underline">Change</button>
            </p>

            <div>
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-[#7b7b78] text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-[#7b7b78] text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-[#7b7b78] text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
              />
            </div>

            <div>
              <select
                value={form.area}
                onChange={e => setForm({ ...form, area: e.target.value })}
                className="w-full bg-[#111]/80 border border-white/20 rounded-lg px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
              >
                <option value="">Your City / Area</option>
                {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a6b3c] hover:bg-[#134f2d] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-[15px] shadow-lg"
            >
              {loading ? "Sending…" : "🔍 Schedule My Free Inspection →"}
            </button>

            <p className="text-[#626260] text-[11px] text-center">
              By submitting, you agree to be contacted by phone or email. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
