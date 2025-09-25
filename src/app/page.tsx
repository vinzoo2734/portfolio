// /app/page.js
"use client";

import Image from "next/image";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">{siteConfig.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{siteConfig.role}</p>

        <div className="flex gap-4 mt-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl">{siteConfig.about}</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">📩 {siteConfig.email}</p>
      </section>
    </main>
  );
}
