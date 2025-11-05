import { siteConfig } from "@/data/config";
import Head from "next/head";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | {siteConfig.name}</title>
        <meta name="description" content="Portfolio projects by Vinay Mahale, including web development, analytics, and more." />
        <meta name="keywords" content="Vinay Mahale, projects, portfolio, web development, analytics, business intelligence" />
        <meta property="og:title" content="Projects | Vinay Mahale" />
        <meta property="og:description" content="Portfolio projects by Vinay Mahale, including web development, analytics, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-vercel-domain.vercel.app/projects" />
      </Head>
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
    </>
  );
}
