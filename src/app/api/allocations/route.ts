import { NextResponse } from "next/server";
import { allocations } from "@/lib/sampleData";

export async function GET() {
  return NextResponse.json({ allocations });
}
