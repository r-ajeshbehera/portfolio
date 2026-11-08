import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Called once a day by Vercel Cron so the free Supabase project stays active.
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await createClient(url, key).from("contact_messages").select("id", { head: true, count: "exact" });
  return NextResponse.json({ ok: !error }, { status: error ? 503 : 200 });
}
