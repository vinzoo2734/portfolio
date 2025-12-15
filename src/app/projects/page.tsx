import { siteConfig } from "@/data/config";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: "Portfolio projects by Vinay Mahale, including web development, analytics, and more.",
  keywords: "Vinay Mahale, projects, portfolio, web development, analytics, business intelligence",
  openGraph: {
    title: "Projects | Vinay Mahale",
    description: "Portfolio projects by Vinay Mahale, including web development, analytics, and more.",
    type: "website",
    url: "https://your-vercel-domain.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 text-gray-900 px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Image src="/me.png" alt="Vinay Mahale" width={100} height={100} className="rounded-full shadow-lg" />
      </div>
    </main>
  );
}
