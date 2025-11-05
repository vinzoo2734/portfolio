import { siteConfig } from "@/data/config";
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | {siteConfig.name}</title>
        <meta name="description" content="About Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more." />
        <meta name="keywords" content="Vinay Mahale, about, portfolio, business intelligence, web development, data analytics" />
        <meta property="og:title" content="About | Vinay Mahale" />
        <meta property="og:description" content="About Vinay Mahale: Business Intelligence, Web Development, Data Analytics, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-vercel-domain.vercel.app/about" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 px-8 py-16 bg-gradient-to-br from-white via-blue-50 to-purple-100">
        <div className="flex flex-col items-center">
          <Image src={siteConfig.profileImage} alt={siteConfig.name} width={150} height={150} className="rounded-full shadow-lg mb-6" />
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
    </>
  );
}
