import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { assets } from "../assets/assets";
import SignupPopup from "./SignupPopup";

// Global audio instance
let globalAudio = null;

const Header = ({ isHoveringBuffer, setIsHoveringBuffer }) => {
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem("token");
  const [audioStarted, setAudioStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [localHovering, setLocalHovering] = useState(false);

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  // Determine which hovering state to use
  const isHovering = isHomepage ? isHoveringBuffer : localHovering;
  const setIsHovering = isHomepage ? setIsHoveringBuffer : setLocalHovering;

  // Initialize global audio only once
  useEffect(() => {
    if (!globalAudio) {
      globalAudio = new Audio(assets.audio);
      globalAudio.loop = true;
    }
  }, []);

  // Sync state with global audio
  useEffect(() => {
    if (globalAudio) {
      setAudioStarted(globalAudio.paused === false);
      setIsMuted(globalAudio.muted);
    }
  }, [location.pathname]);

  const handleToggleAudio = () => {
    if (!globalAudio) return;

    if (!audioStarted) {
      globalAudio
        .play()
        .then(() => {
          setAudioStarted(true);
          globalAudio.muted = false;
          setIsMuted(false);
        })
        .catch((err) => console.log("Autoplay blocked:", err));
    } else {
      globalAudio.muted = !globalAudio.muted;
      setIsMuted(globalAudio.muted);
    }
  };

  const handleStartAudio = () => {
    if (globalAudio && !audioStarted) {
      globalAudio
        .play()
        .then(() => {
          setAudioStarted(true);
          setIsMuted(false);
        })
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  };

  return (
    <>
      <header
        className="w-full bg-transparent text-white z-50 px-2 sm:px-2 py-4"
        onClick={handleStartAudio}
      >
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-center md:justify-between gap-6">
          {/* Left: Buffer / Audio Control */}
          <div className="flex items-center gap-2 sm:gap-3 relative">
            {/* Buffer Control */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handleToggleAudio}
            >
              <img
                src={assets.buffer}
                alt="music buffer"
                className={`h-6 sm:h-7 md:h-9 object-contain transition-opacity duration-200 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              />
              {isHovering && (
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
              <h1 className="text-[8px] sm:text-[10px] md:text-[14px] font-semibold whitespace-nowrap">
                De Onde Vem
              </h1>
              <h1 className="text-[8px] sm:text-[10px] md:text-[14px] text-[#A6A6A6] whitespace-nowrap">
                Avila Santo
              </h1>
            </div>
          </div>

          {/* Right: Navigation */}
          <nav
            className="
              flex 
              justify-between mr-[-9px] items-center 
              gap-6 sm:gap-6 md:gap-8 
              text-[9px] sm:text-sm md:text-[16px] 
              font-bold
            "
          >
            <Link to="/" className="hover:text-gray-300 transition-colors">
              HOME
            </Link>
            <Link to="/watch" className="hover:text-gray-300 transition-colors">
              WATCH
            </Link>
            <Link
              to={token ? "/community" : `/signup`}
              className="hover:text-gray-300 transition-colors"
            >
              COMMUNITY
            </Link>
            <Link
              to="/credits"
              className="hover:text-gray-300 transition-colors"
            >
              CREDITS
            </Link>
            <Link to="/rsvp" className="hover:text-gray-300 transition-colors">
              RSVP
            </Link>
          </nav>
        </div>

        <div className="z-40">
          {popup && <SignupPopup onClose={() => setPopup(false)} />}
        </div>
      </header>
    </>
  );
};

export default Header;
