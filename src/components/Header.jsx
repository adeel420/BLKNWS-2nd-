import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-end items-center px-4 sm:px-0 py-7">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            HOME
          </Link>
          <Link to="/watch" className="hover:text-gray-300 transition-colors">
            WATCH
          </Link>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            COMMUNITY
          </Link>
          <Link to="/credits" className="hover:text-gray-300 transition-colors">
            CREDITS
          </Link>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            RSVP
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white mt-[-10px] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
          <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/watch"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              WATCH
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              COMMUNITY
            </Link>
            <Link
              to="/credits"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              CREDITS
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              RSVP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
