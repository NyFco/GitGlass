import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "GitGlass",
  description:
    "GitGlass - A Next.js application that allows users to log in with their GitHub account, view their repository details, and download repository files.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-6 bg-gradient-to-br from-[#23336e] to-[#801919]">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
