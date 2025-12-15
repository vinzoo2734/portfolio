import { siteConfig } from "@/data/config";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "About Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more.",
  keywords: "Vinay Mahale, about, portfolio, business intelligence, web development, data analytics",
  openGraph: {
    title: "About | Vinay Mahale",
    description: "About Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more.",
    type: "website",
    url: "https://your-vercel-domain.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-16 bg-gradient-to-br from-white via-blue-50 to-purple-100">
      <div className="flex flex-col items-center">
        <Image 
          src="/me.png" 
          alt="Vinay Mahale" 
          width={150} 
          height={150} 
          className="rounded-full shadow-lg object-cover" 
          priority 
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-700">About Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">{siteConfig.about}</p>
        <div className="text-left max-w-2xl bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="mb-2">Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Links</h2>
          <ul className="list-disc ml-6">
            <li><a href={siteConfig.links.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a></li>
            <li><a href={siteConfig.links.linkedin} target="_blank" className="text-blue-600 hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
