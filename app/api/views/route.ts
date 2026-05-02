import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const runtime = "edge";

const VISITOR_KEY = "unique_visitors:portfolio";
export async function GET() {
  const count = await redis.get<number>(VISITOR_KEY);

  return NextResponse.json({
    uniqueVisitors: count ?? 0,
  });
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    null;


  if (!ip) {
    await redis.incr(VISITOR_KEY);
    return new NextResponse(null, { status: 200 });
  }

  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip),
  );

  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const uniqueKey = `unique:portfolio:${hash}`;

  const isNew = await redis.set(uniqueKey, "1", {
    nx: true,
    ex: 60 * 60 * 24,
  });

  if (isNew) {
    await redis.incr(VISITOR_KEY);
  }

  return new NextResponse(null, { status: 200 });
}
