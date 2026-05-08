import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface Lead {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  area: string;
  issue: string | null;
  message: string | null;
  source: string;
  sent_to_client: boolean;
}

// Lazy singleton — only initialised when first called (not at module load / build time)
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error("Supabase env vars not set (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)");
    }
    _client = createClient(url, key);
  }
  return _client;
}

// Convenience proxy — safe to import anywhere; throws only if actually called without env vars
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as never)[prop];
  },
});
