import { NextResponse } from "next/server";
import { loan } from "@/lib/sampleData";
import { computeLoanPayment } from "@/lib/finance";

export async function GET() {
  return NextResponse.json({ loan, payment: computeLoanPayment(loan) });
}
