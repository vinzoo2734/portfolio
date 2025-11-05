// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="flex gap-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/projects" className="hover:underline">Projects</a>
      </div>
    </nav>
  );
}
