import { siteConfig } from "@/data/config";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </main>
  );
}
