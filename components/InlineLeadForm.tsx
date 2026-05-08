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

interface Props {
  defaultArea?: string;
  heading?: string;
  subheading?: string;
  source?: string;
}

export default function InlineLeadForm({
  defaultArea = "",
  heading = "Get Your Free Inspection Today",
  subheading = "We respond within 1 hour. Same-day scheduling available.",
  source = "inline",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", area: defaultArea });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({ ...form, source });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#e8f5ee] border-2 border-[#1a6b3c] rounded-2xl p-8 text-center">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">Request Received!</h3>
        <p className="text-[#626260] text-[14px] mb-4">
          We&apos;ll call you within the hour to schedule your free inspection.
        </p>
        <a href={PHONE_HREF} className="text-[#1a6b3c] font-bold text-lg hover:text-[#134f2d] transition-colors">
          📞 {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-[#1a6b3c] px-6 py-5">
        <p className="text-white font-bold text-[18px]">{heading}</p>
        <p className="text-[#a7d9bc] text-[13px] mt-1">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-3">
        <input
          type="text"
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#7b7b78] text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number *"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#7b7b78] text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
        />
        <select
          value={form.area}
          onChange={e => setForm({ ...form, area: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-white/20 rounded-lg px-4 py-3 text-white text-[14px] focus:outline-none focus:border-[#2d8a50] transition-colors"
        >
          <option value="">Your City / Area</option>
          {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1a6b3c] hover:bg-[#2d8a50] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-[15px] transition-colors shadow-lg mt-1"
        >
          {loading ? "Sending…" : "🔍 Schedule My Free Inspection →"}
        </button>

        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-[#7b7b78] text-[12px] mb-1">Or call us directly</p>
          <a href={PHONE_HREF} className="text-[#2d8a50] font-bold text-[17px] hover:text-white transition-colors">
            {PHONE}
          </a>
          <p className="text-[#626260] text-[11px] mt-0.5">Mon–Sat 7 AM–7 PM</p>
        </div>
      </form>
    </div>
  );
}
