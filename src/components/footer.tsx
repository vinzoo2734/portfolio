// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative bg-slate-900/80 border-t border-slate-800 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © {new Date().getFullYear()} <span className="gradient-text font-semibold">Vinay Mahale</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-500 text-sm">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-slate-300">Next.js</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Tailwind CSS</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

