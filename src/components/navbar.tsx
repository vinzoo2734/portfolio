// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>
      <div className="flex gap-6">
        <a href="/" className="hover:underline transition text-blue-200">Home</a>
        <a href="/about" className="hover:underline transition text-blue-200">About</a>
        <a href="/projects" className="hover:underline transition text-blue-200">Projects</a>
      </div>
    </nav>
  );
}
