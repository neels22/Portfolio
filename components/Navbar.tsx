"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="px-4 py-2 bg-transparent text-white font-bold shadow-lg backdrop-blur-md z-20 mb-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl">
          <Link href="#home" className="hover:text-blue-400">
            Hi, I'm 
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:static lg:bg-transparent absolute top-full left-0 w-full bg-neutral-800 lg:w-auto lg:py-0 py-4 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="#home" className="block py-2 px-4 hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="block py-2 px-4 hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="block py-2 px-4 hover:text-blue-400">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="block py-2 px-4 hover:text-blue-400"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="block py-2 px-4 hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-2 px-4 hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
