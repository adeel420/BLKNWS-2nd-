import React from "react";
import { Link } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Header = ({
  handleToggleAudio,
  isMuted,
  isHoveringBuffer,
  setIsHoveringBuffer,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-transparent text-white z-50">
      <div className="flex items-center gap-2 bg-transparent sm:gap-4 absolute top-2 left-2 sm:top-3 sm:left-3 md:top-5 md:left-5 ">
        {/* Buffer/Audio Control Container */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHoveringBuffer(true)}
          onMouseLeave={() => setIsHoveringBuffer(false)}
          onClick={handleToggleAudio}
        >
          <img
            src={assets.buffer}
            alt="music buffer"
            className={`h-6 sm:h-7 md:h-9 object-contain transition-opacity duration-200 ${
              isHoveringBuffer ? "opacity-0" : "opacity-100"
            }`}
          />
          {isHoveringBuffer && (
            <div className="absolute inset-0 flex items-center justify-center">
              {isMuted ? (
                <MdVolumeOff className="text-white text-lg sm:text-xl md:text-2xl" />
              ) : (
                <MdVolumeUp className="text-white text-lg sm:text-xl md:text-2xl" />
              )}
            </div>
          )}
        </div>

        <div className="text-white">
          <h1 className="text-[8px] md:text-[14px]">De Onde Vem</h1>
          <h1 className="text-[8px] md:text-[14px] text-[#A6A6A6]">
            Avila Santo
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto flex justify-end items-center px-4 sm:px-0 py-7">
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
          <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/watch"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              WATCH
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              COMMUNITY
            </Link>
            <Link
              to="/credits"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              CREDITS
            </Link>
            <Link
              to="/"
              className="hover:text-gray-300"
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
