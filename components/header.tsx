"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            sarthakmahapatra.dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#content"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Content
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-4 py-2 space-y-3 bg-gray-800">
          <Link
            href="#about"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#content"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Content
          </Link>
          <Link
            href="#contact"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
