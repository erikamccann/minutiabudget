import { NextResponse } from "next/server";
import { assets } from "@/lib/sampleData";

export async function GET() {
  return NextResponse.json({ assets });
}
