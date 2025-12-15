// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900/80 border-t border-slate-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Center all content */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Contact Button */}
          <div>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </Link>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-slate-400 text-lg">
              © {new Date().getFullYear()} <span className="gradient-text font-semibold">Vinay Mahale</span>. All rights reserved.
            </p>
          </div>
          
          {/* Built with section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-slate-500 text-sm">Built with</span>
            <div className="flex items-center space-x-3">
              <span className="text-slate-300 font-medium">Next.js</span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-slate-300 font-medium">Tailwind CSS</span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-slate-300 font-medium">Framer Motion</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

