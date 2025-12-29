import { NextResponse } from "next/server";
import { events } from "@/lib/sampleData";

export async function GET() {
  return NextResponse.json({ events });
}
