// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text">
          Vinay Mahale
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/projects" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 glow-effect"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-slate-300 hover:text-indigo-400 transition-colors">Home</Link>
            <Link href="/about" className="block text-slate-300 hover:text-indigo-400 transition-colors">About</Link>
            <Link href="/projects" className="block text-slate-300 hover:text-indigo-400 transition-colors">Projects</Link>
            <Link href="/contact" className="block text-slate-300 hover:text-indigo-400 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
