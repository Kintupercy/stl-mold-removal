"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { Lead } from "@/lib/supabase";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "stlmold2024";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit", hour12: true,
  });
}

function sourceBadge(source: string) {
  const map: Record<string, { label: string; color: string }> = {
    hero: { label: "Hero Form", color: "bg-blue-100 text-blue-700" },
    contact: { label: "Contact Page", color: "bg-purple-100 text-purple-700" },
    inline: { label: "Inline Form", color: "bg-orange-100 text-orange-700" },
    "suburb-hero": { label: "Suburb Hero", color: "bg-teal-100 text-teal-700" },
    "suburb-sidebar": { label: "Suburb Sidebar", color: "bg-teal-100 text-teal-600" },
  };
  const s = map[source] || { label: source, color: "bg-gray-100 text-gray-600" };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${s.color}`}>
      {s.label}
    </span>
  );
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "unsent" | "sent">("all");
  const [search, setSearch] = useState("");
  const [markingId, setMarkingId] = useState<number | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchLeads();
  }, [authed, fetchLeads]);

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  const toggleSent = async (lead: Lead) => {
    setMarkingId(lead.id);
    await supabase
      .from("leads")
      .update({ sent_to_client: !lead.sent_to_client })
      .eq("id", lead.id);
    setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, sent_to_client: !l.sent_to_client } : l));
    setMarkingId(null);
  };

  const exportCSV = () => {
    const rows = [
      ["Date", "Name", "Phone", "Email", "Area", "Issue", "Message", "Source", "Sent to Client"],
      ...filteredLeads.map(l => [
        formatDate(l.created_at), l.name, l.phone, l.email || "", l.area || "",
        l.issue || "", l.message || "", l.source, l.sent_to_client ? "Yes" : "No",
      ]),
    ];
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `stl-mold-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLeads = leads
    .filter(l => {
      if (filter === "unsent") return !l.sent_to_client;
      if (filter === "sent") return l.sent_to_client;
      return true;
    })
    .filter(l => {
      if (!search) return true;
      const q = search.toLowerCase();
      return [l.name, l.phone, l.email, l.area, l.issue].some(v => v?.toLowerCase().includes(q));
    });

  const unsentCount = leads.filter(l => !l.sent_to_client).length;

  // ── Login screen ──
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#f5f1ec] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🔒</div>
            <h1 className="text-2xl font-bold text-[#111111]">Admin Access</h1>
            <p className="text-[#626260] text-[14px] mt-1">STL Mold Removal — Lead Dashboard</p>
          </div>
          <input
            type="password"
            placeholder="Enter password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === "Enter" && login()}
            className={`w-full border rounded-lg px-4 py-3 text-[15px] focus:outline-none transition-colors mb-3 ${
              pwError ? "border-red-400 focus:border-red-500" : "border-[#d3cec6] focus:border-[#1a6b3c]"
            }`}
          />
          {pwError && <p className="text-red-500 text-[13px] mb-3">Incorrect password.</p>}
          <button
            onClick={login}
            className="w-full bg-[#1a6b3c] hover:bg-[#134f2d] text-white font-bold py-3 rounded-xl transition-colors"
          >
            Sign In →
          </button>
        </div>
      </div>
    );
  }

  // ── Dashboard ──
  return (
    <div className="min-h-screen bg-[#f5f1ec]">
      {/* Top bar */}
      <div className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏠</span>
          <div>
            <p className="font-bold text-[16px]">STL Mold Removal — Lead Dashboard</p>
            <p className="text-[#9c9fa5] text-[12px]">{leads.length} total · {unsentCount} unsent</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchLeads}
            className="border border-white/20 text-white text-[13px] px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            ↻ Refresh
          </button>
          <button
            onClick={exportCSV}
            className="bg-[#1a6b3c] hover:bg-[#2d8a50] text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            ↓ Export CSV
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total Leads", value: leads.length, color: "text-[#111111]" },
            { label: "Unsent to Client", value: unsentCount, color: "text-[#e04c2f]" },
            { label: "Sent to Client", value: leads.length - unsentCount, color: "text-[#1a6b3c]" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-[#d3cec6] p-5">
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[#626260] text-[13px] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters + search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex gap-2">
            {(["all", "unsent", "sent"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-colors ${
                  filter === f
                    ? "bg-[#1a6b3c] text-white"
                    : "bg-white border border-[#d3cec6] text-[#626260] hover:border-[#1a6b3c]"
                }`}
              >
                {f === "all" ? "All Leads" : f === "unsent" ? "🔴 Unsent" : "✅ Sent"}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search name, phone, area…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 border border-[#d3cec6] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:border-[#1a6b3c] transition-colors"
          />
        </div>

        {/* Leads table */}
        {loading ? (
          <div className="text-center py-20 text-[#626260]">Loading leads…</div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 text-[#626260]">
            {leads.length === 0 ? "No leads yet — forms will appear here once submitted." : "No leads match this filter."}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#d3cec6] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f5f1ec] border-b border-[#d3cec6]">
                    {["Date", "Name", "Phone", "Email", "Area", "Issue", "Source", "Status", "Action"].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-[#626260] whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, i) => (
                    <tr
                      key={lead.id}
                      className={`border-b border-[#f0ece6] ${i % 2 === 0 ? "bg-white" : "bg-[#faf8f5]"} ${!lead.sent_to_client ? "border-l-4 border-l-[#e04c2f]" : "border-l-4 border-l-[#1a6b3c]"}`}
                    >
                      <td className="px-4 py-3 text-[#626260] whitespace-nowrap">{formatDate(lead.created_at)}</td>
                      <td className="px-4 py-3 font-semibold text-[#111111] whitespace-nowrap">{lead.name}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${lead.phone}`} className="text-[#1a6b3c] hover:underline font-medium">{lead.phone}</a>
                      </td>
                      <td className="px-4 py-3 text-[#626260]">{lead.email || "—"}</td>
                      <td className="px-4 py-3 text-[#626260] whitespace-nowrap">{lead.area || "—"}</td>
                      <td className="px-4 py-3 text-[#626260] max-w-[160px] truncate">{lead.issue || "—"}</td>
                      <td className="px-4 py-3">{sourceBadge(lead.source)}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          lead.sent_to_client ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                          {lead.sent_to_client ? "✅ Sent" : "🔴 Unsent"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleSent(lead)}
                          disabled={markingId === lead.id}
                          className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50 ${
                            lead.sent_to_client
                              ? "bg-[#f5f1ec] text-[#626260] hover:bg-[#ebe7e1]"
                              : "bg-[#1a6b3c] text-white hover:bg-[#134f2d]"
                          }`}
                        >
                          {markingId === lead.id ? "…" : lead.sent_to_client ? "Mark Unsent" : "Mark Sent ✓"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredLeads.length > 0 && (
          <p className="text-[#9c9fa5] text-[12px] mt-4 text-center">
            Showing {filteredLeads.length} of {leads.length} leads
          </p>
        )}
      </div>
    </div>
  );
}
