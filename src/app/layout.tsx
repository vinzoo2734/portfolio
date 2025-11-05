import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Vinay Mahale | Portfolio",
  description: "Portfolio of Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Vinay Mahale | Portfolio</title>
        <meta name="description" content="Portfolio of Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more." />
        <meta name="keywords" content="Vinay Mahale, portfolio, business intelligence, web development, data analytics, projects" />
        <meta property="og:title" content="Vinay Mahale | Portfolio" />
        <meta property="og:description" content="Portfolio of Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-vercel-domain.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 text-gray-900 antialiased min-h-screen">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img src="/globe.svg" alt="Globe background" className="absolute top-0 right-0 w-1/3 opacity-10" />
          <img src="/window.svg" alt="Window background" className="absolute bottom-0 left-0 w-1/4 opacity-10" />
        </div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
