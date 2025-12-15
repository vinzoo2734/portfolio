import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";
import Image from "next/image";

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
      <body className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 text-gray-900 antialiased min-h-screen">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image src="/globe.svg" alt="Globe background" width={300} height={300} className="absolute top-0 right-0 opacity-10" />
          <Image src="/window.svg" alt="Window background" width={200} height={200} className="absolute bottom-0 left-0 opacity-10" />
        </div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
