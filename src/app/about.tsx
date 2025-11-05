import { siteConfig } from "@/data/config";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-16">
      <div className="flex flex-col items-center">
        <Image src={siteConfig.profileImage} alt={siteConfig.name} width={150} height={150} className="rounded-full shadow-lg mb-6" />
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">{siteConfig.about}</p>
        <div className="text-left max-w-2xl">
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
