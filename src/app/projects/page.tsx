import { siteConfig } from "@/data/config";
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
    <main className="min-h-screen pt-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, data analytics, and business intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {siteConfig.projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 card-hover group"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center border border-slate-600">
                <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.title.includes('Laravel') && (
                  <>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Laravel</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PHP</span>
                  </>
                )}
                {project.title.includes('Analytics') && (
                  <>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Analytics</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Data Viz</span>
                  </>
                )}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button className="border-2 border-slate-600 text-slate-400 px-6 py-3 rounded-full hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300 font-semibold">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12">
            Technologies I <span className="gradient-text">Love</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'Next.js', color: 'from-gray-600 to-gray-800' },
              { name: 'Python', color: 'from-yellow-400 to-blue-600' },
              { name: 'Laravel', color: 'from-red-500 to-orange-600' },
              { name: 'MySQL', color: 'from-blue-600 to-blue-800' },
              { name: 'Tailwind', color: 'from-cyan-400 to-blue-600' },
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 card-hover text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-effect font-semibold"
              >
                Get In Touch
              </a>
              <a 
                href={siteConfig.links.github}
                target="_blank"
                className="border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
