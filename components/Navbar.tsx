import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center px-4 py-2 bg-transparent text-white  font-bold rounded-full mx-auto my-4 shadow-lg max-w-3xl backdrop-blur-md sm:px-8 z-20">
  <ul className="flex flex-wrap justify-between gap-12 text-base">
    <li>
      <Link href="/" className="hover:text-blue-400">Home</Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-blue-400">Contact</Link>
    </li>
    <li>
      <Link href="/projects" className="hover:text-blue-400">Projects</Link>
    </li>
    <li>
      <Link href="/blog" className="hover:text-blue-400">Blog</Link>
    </li>
  </ul>
</nav>

  );
}
