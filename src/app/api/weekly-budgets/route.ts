import { NextResponse } from "next/server";
import { weeklyBudget } from "@/lib/sampleData";

export async function GET() {
  return NextResponse.json({ weeklyBudget });
}
