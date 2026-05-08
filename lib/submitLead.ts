import { getSupabase } from "./supabase";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  area?: string;
  issue?: string;
  message?: string;
  source: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promises: Promise<any>[] = [];

  // 1. Save to Supabase (if configured)
  const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supaKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supaUrl && supaKey) {
    const client = getSupabase();
    promises.push(
      Promise.resolve(client.from("leads").insert([{
        name: payload.name,
        phone: payload.phone,
        email: payload.email || null,
        area: payload.area || null,
        issue: payload.issue || null,
        message: payload.message || null,
        source: payload.source,
        sent_to_client: false,
      }]))
    );
  }

  // 2. Email via Web3Forms (if configured)
  const w3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (w3Key && w3Key !== "YOUR_WEB3FORMS_KEY") {
    promises.push(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: w3Key,
          subject: `🔴 New Mold Lead — ${payload.name} — ${payload.area || "Unknown area"}`,
          from_name: "STL Mold Removal",
          ...payload,
        }),
      })
    );
  }

  // Fire both in parallel, don't block on either failure
  await Promise.allSettled(promises);
}
