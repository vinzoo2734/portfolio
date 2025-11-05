import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout"; // your Navbar + Footer wrapper

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {/* ✅ Your Layout wraps page content */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
