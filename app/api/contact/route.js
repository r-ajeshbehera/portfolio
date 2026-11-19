import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const clean = (v, max) => String(v ?? "").trim().slice(0, max);

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

async function save(message) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return false;
  const { error } = await createClient(url, key).from("contact_messages").insert(message);
  if (error) console.error("[contact] Supabase insert failed:", error.message);
  return !error;
}

async function notify(m) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "rajeshbehera.works@gmail.com";
  if (!key || !to) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>",
      to, reply_to: m.email,
      subject: `New enquiry: ${m.service}`,
      text: `Name: ${m.name}\nEmail: ${m.email}\nService: ${m.service}\n\n${m.details}`,
    }),
  });
  if (!res.ok) console.error("[contact] Email failed:", res.status);
  return res.ok;
}

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Bots fill the hidden field or submit instantly. Report success so they don't retry.
  if (body.company || Date.now() - Number(body.startedAt || 0) < 2500) return NextResponse.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Try again in 10 minutes." }, { status: 429 });

  const message = { name: clean(body.name, 100), email: clean(body.email, 200), service: clean(body.service, 100), details: clean(body.details, 5000) };
  if (!message.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email) || !message.service || message.details.length < 10) {
    return NextResponse.json({ error: "Check the form and try again." }, { status: 400 });
  }

  const [saved, emailed] = await Promise.all([save(message), notify(message).catch(() => false)]);
  if (!saved && !emailed) return NextResponse.json({ error: "Message could not be delivered." }, { status: 503 });
  return NextResponse.json({ ok: true });
}
