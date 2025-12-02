"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-15 bg-purple-700 flex justify-between px-6 items-center text-white shadow-md">
      {/* Logo */}
      <div className="logo font-bold text-3xl text-white">BitLinks</div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/shorten">URL Shortener</Link>
        </li>

        {/* Buttons */}
        <li>
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg font-bold text-black shadow-lg px-4 py-2 hover:bg-purple-400 transition">
              Try Now
            </button>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-purple-500 rounded-lg font-bold text-black shadow-lg px-4 py-2 hover:bg-purple-400 transition">
              Github
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
