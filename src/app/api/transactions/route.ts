import { NextResponse } from "next/server";
import { transactions } from "@/lib/sampleData";

export async function GET() {
  return NextResponse.json({ transactions });
}
