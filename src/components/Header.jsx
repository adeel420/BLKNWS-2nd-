import React from "react";
import { Link } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { assets } from "../assets/assets";

const Header = ({
  handleToggleAudio,
  isMuted,
  isHoveringBuffer,
  setIsHoveringBuffer,
}) => {
  return (
    <header className="w-full bg-transparent text-white z-50 px-4 sm:px-6 py-4">
      {/* Desktop layout (flex row) / Mobile layout (flex col-reverse) */}
      <div className="max-w-7xl mx-auto flex md:flex-row items-left md:items-center justify-between gap-4 md:gap-0">
        {/* Left: Buffer / Audio Control */}
        <div className="flex items-center gap-2 sm:gap-3 relative">
          {/* Buffer Control */}
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

          {/* Track Info */}
          <div className="text-white">
            <h1 className="text-[6px] whitespace-nowrap md:text-[14px] font-semibold">
              De Onde Vem
            </h1>
            <h1 className="text-[6px] md:text-[14px] text-[#A6A6A6]">
              Avila Santo
            </h1>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav
          className="
    flex 
    w-full justify-between items-center text-center  /* full width + space between */
    md:w-auto md:justify-end md:text-right  /* right-aligned on desktop */
    px-0
    gap-1 md:gap-8 
    text-[10px] sm:text-sm md:text-[16px] 
    font-bold
  "
        >
          <Link to="/" className="flex-1 hover:text-gray-300 transition-colors">
            HOME
          </Link>
          <Link
            to="/watch"
            className="flex-1 hover:text-gray-300 transition-colors"
          >
            WATCH
          </Link>
          <Link
            to="/community"
            className="flex-1 hover:text-gray-300 transition-colors"
          >
            COMMUNITY
          </Link>
          <Link
            to="/credits"
            className="flex-1 hover:text-gray-300 transition-colors"
          >
            CREDITS
          </Link>
          <Link
            to="/rsvp"
            className="flex-1 hover:text-gray-300 transition-colors"
          >
            RSVP
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
