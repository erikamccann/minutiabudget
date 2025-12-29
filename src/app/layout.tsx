import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Minutia Budget",
  description:
    "Production-ready personal finance companion with weekly budgeting, forecasting, and clear audit trails.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">{children}</main>
      </body>
    </html>
  );
}
