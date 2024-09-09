import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
