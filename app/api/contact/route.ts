import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { name?: string; email?: string; message?: string } | null;
  if (!body?.name?.trim() || !body.email?.includes("@") || !body.message?.trim()) return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Contact delivery is not configured" }, { status: 503 });
  const delivery = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ source: "smartai-site", ...body }) }).catch(() => null);
  if (!delivery?.ok) return NextResponse.json({ error: "Contact delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
