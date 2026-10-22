export const dynamic = "force-dynamic";
export function GET() { return Response.json({ ok: true, v: 1, t: Date.now() }); }
