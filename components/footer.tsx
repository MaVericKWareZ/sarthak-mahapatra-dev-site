import { Coffee } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Sarthak Mahapatra
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              Senior Software Engineer
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="#about"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#content"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Content
              </Link>
              <Link
                href="#contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sarthak Mahapatra. All rights
            reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2 md:mt-0 flex items-center gap-1">
            Built with
            <Coffee className="h-4 w-4 text-amber-700 animate-steam" />
          </p>
        </div>
      </div>
    </footer>
  );
}
