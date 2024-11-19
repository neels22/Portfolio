export default function Navbar() {
  return (
    <nav className="flex justify-center px-4 py-2 bg-gray-400/50 text-black font-sans font-bold rounded-full mx-auto my-4 shadow-lg max-w-3xl backdrop-blur-md sm:px-8">
  <ul className="flex flex-wrap justify-between gap-12 text-base">
    <li>
      <a href="/" className="hover:text-blue-400">Home</a>
    </li>
    <li>
      <a href="/contact" className="hover:text-blue-400">Contact</a>
    </li>
    <li>
      <a href="/projects" className="hover:text-blue-400">Projects</a>
    </li>
    <li>
      <a href="/blog" className="hover:text-blue-400">Blog</a>
    </li>
  </ul>
</nav>

  );
}
