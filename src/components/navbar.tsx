// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline transition text-blue-200">Home</Link>
        <Link href="/about" className="hover:underline transition text-blue-200">About</Link>
        <Link href="/projects" className="hover:underline transition text-blue-200">Projects</Link>
      </div>
    </nav>
  );
}
