import React from "react";
import { Star, Gamepad, Coins, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mario-font text-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">
              SUMMER OF PROJECTS 25
            </h3>
            <p>
              The ultimate LEARNING experience for players of all levels. Join us for competitions, power-ups, and some CARZWYYY celebration!
            </p>
          </div>

          {/* Warp Pipes Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">
              WARP PIPES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300 flex items-center">
                  <Gamepad className="h-4 w-4 mr-2 text-red-400" /> Home
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-yellow-300 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" /> WORLD 1-1
                </a>
              </li>
              <li>
                <a href="#powerups" className="hover:text-yellow-300 flex items-center">
                  <Gamepad className="h-4 w-4 mr-2 text-red-400" /> Power-Ups
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-yellow-300 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" /> SCHEDULE
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-yellow-300 flex items-center">
                  <Coins className="h-4 w-4 mr-2 text-yellow-400 coin-animate" /> Highlights
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-yellow-400 pb-2">
              CONTACT US
            </h3>
            <p className="mb-4">
              Reach out at:{" "}
              <a
                href="mailto:ieeeras@bmsit.in"
                className="underline hover:text-yellow-400"
              >
                ieeeras@bmsit.in
              </a>
            </p>

            <div className="flex items-center mb-8 space-x-3">
              <Instagram className="h-6 w-6 text-pink-500" />
              <a
                href="https://instagram.com/RAS_BMSIT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-400"
              >
                @RAS_BMSIT
              </a>
            </div>

            <button className="mario-button w-full py-3 font-bold text-yellow-400">
              REGISTER NOW
            </button>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-4 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} RAS-BMSIT. MADE WITH LOVE BY RAS TEAM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
