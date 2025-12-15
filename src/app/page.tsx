// /app/page.js
"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src="/me.png"
                  alt="Vinay Mahale"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-indigo-400 text-lg font-medium">Hello, I am</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl"
          >
            {siteConfig.role}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              href={siteConfig.links.github}
              target="_blank"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-effect font-semibold"
            >
              Visit GitHub
            </Link>
            <Link 
              href="/projects"
              className="border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Skills/Technologies Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-700 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 text-sm ml-4">vinay@portfolio:~$</span>
            </div>
            
            <div className="space-y-6 text-left">
              <div className="space-y-3 font-mono">
                <div className="text-green-400 text-lg">$ whoami</div>
                <div className="text-white font-semibold text-lg pl-4">vinay_mahale</div>
              </div>
              
              <div className="space-y-3 font-mono">
                <div className="text-green-400 text-lg">$ cat skills.txt</div>
                <div className="pl-4 space-y-2">
                  <div className="text-cyan-300 font-medium text-base">• Web Development (React, Next.js)</div>
                  <div className="text-cyan-300 font-medium text-base">• Data Analytics & Visualization</div>
                  <div className="text-cyan-300 font-medium text-base">• Business Intelligence</div>
                  <div className="text-cyan-300 font-medium text-base">• Cloud Solutions (AWS, Azure)</div>
                  <div className="text-cyan-300 font-medium text-base">• Database Management</div>
                </div>
              </div>
              
              <div className="space-y-3 font-mono">
                <div className="text-green-400 text-lg">$ ls technologies/</div>
                <div className="pl-4 space-y-2">
                  <div className="text-yellow-400 font-medium">javascript/  typescript/  python/</div>
                  <div className="text-blue-400 font-medium">react/  nextjs/  nodejs/</div>
                  <div className="text-purple-400 font-medium">tailwindcss/  framer-motion/</div>
                  <div className="text-orange-400 font-medium">powerbi/  tableau/  sql/</div>
                </div>
              </div>
              
              <div className="text-green-400 animate-pulse font-mono text-lg pt-4">$ _</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
