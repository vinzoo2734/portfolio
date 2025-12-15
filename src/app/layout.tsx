import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Vinay Mahale | Portfolio",
  description: "Portfolio of Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more.",
  keywords: "Vinay Mahale, portfolio, business intelligence, web development, data analytics, projects",
  openGraph: {
    title: "Vinay Mahale | Portfolio",
    description: "Portfolio of Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more.",
    type: "website",
    url: "https://your-vercel-domain.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-cyan-900/20 pointer-events-none"></div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
