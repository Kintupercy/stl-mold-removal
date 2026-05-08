"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

const PHONE = "(314) 779-0000";
const PHONE_HREF = "tel:+13147790000";

const AREAS = [
  "St. Louis City", "Chesterfield", "Ballwin", "Kirkwood", "Webster Groves",
  "Florissant", "O'Fallon", "St. Charles", "Fenton", "Manchester",
  "Wildwood", "Creve Coeur", "Mehlville", "Oakville", "Hazelwood",
  "Maryland Heights", "Other",
];

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", area: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({ ...form, source: "hero" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="w-14 h-14 bg-[#e8f5ee] rounded-full flex items-center justify-center mx-auto mb-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-[#1a6b3c]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">We&apos;ll Call You Shortly!</h3>
        <p className="text-[#626260] text-[14px] mb-5">
          Your free inspection is confirmed. Expect a call within the hour.
        </p>
        <a href={PHONE_HREF} className="text-[#1a6b3c] font-bold text-lg hover:underline">
          {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header strip */}
      <div className="bg-[#1a6b3c] px-6 py-4 text-center">
        <p className="text-white font-bold text-[17px]">Get Your Free Inspection</p>
        <p className="text-[#a7d9bc] text-[12px] mt-0.5">We call within 1 hour · No obligation</p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-3">
        <input
          type="text"
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border border-[#d3cec6] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder-[#9c9fa5] focus:outline-none focus:border-[#1a6b3c] transition-colors"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number *"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-[#d3cec6] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder-[#9c9fa5] focus:outline-none focus:border-[#1a6b3c] transition-colors"
        />
        <select
          value={form.area}
          onChange={e => setForm({ ...form, area: e.target.value })}
          className="w-full border border-[#d3cec6] rounded-lg px-4 py-3 text-[14px] bg-white text-[#111111] focus:outline-none focus:border-[#1a6b3c] transition-colors"
        >
          <option value="">Select your city…</option>
          {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1a6b3c] hover:bg-[#134f2d] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-[16px] transition-colors shadow-md"
        >
          {loading ? "Sending…" : "Schedule Free Inspection →"}
        </button>

        <p className="text-center text-[11px] text-[#9c9fa5]">
          Secure · No spam · Mon–Sat 7 AM–7 PM
        </p>

        <div className="border-t border-[#f0ece6] pt-4 text-center">
          <p className="text-[#9c9fa5] text-[12px] mb-1">Prefer to call?</p>
          <a href={PHONE_HREF} className="text-[#1a6b3c] font-bold text-[17px] hover:text-[#134f2d] transition-colors">
            {PHONE}
          </a>
        </div>
      </form>
    </div>
  );
}
