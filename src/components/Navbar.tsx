
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white p-4 sticky top-0 z-10 shadow-lg mario-font text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl flex items-center">
          <span className="text-yellow-300">S</span>
          <span className="text-white ml-1">  OP</span>
          <span className="text-green-400 ml-1"> '25</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 border border-white rounded"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-xs">
          <li>
            <a
              href="#mission"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              WORLD 1-1
            </a>
          </li>
          <li>
            <a
              href="#powerups"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              POWER-UPS
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              href="#leaderboard"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              LEADERBOARD
            </a>
          </li>
          <li>
            <a
              href="#highlights"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              HIGHLIGHTS
            </a>
          </li>
          <li>
            <a
              href="https://ras-bmsit.github.io/"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              JOIN
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-700 py-2">
          <ul className="flex flex-col items-center space-y-2 text-xs">
            <li>
              <a
                href="#mission"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                WORLD 1-1
              </a>
            </li>
            <li>
              <a
                href="#powerups"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                POWER-UPS
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                SCHEDULE
              </a>
            </li>
            <li>
              <a
                href="#leaderboard"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                LEADERBOARD
              </a>
            </li>
            <li>
              <a
                href="#highlights"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                HIGHLIGHTS
              </a>
            </li>
            <li>
              <a
                href="https://ras-bmsit.github.io/"
                className="block px-3 py-1 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                JOIN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
