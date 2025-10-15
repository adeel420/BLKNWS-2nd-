import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { assets } from "../assets/assets";
import CursorText from "../components/CursorText";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { MdVolumeOff, MdVolumeUp, MdKeyboardArrowDown } from "react-icons/md";

const Home = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef(null);
  const [isHoveringBuffer, setIsHoveringBuffer] = useState(false);
  const [popup, setPopup] = useState(false);

  const audioRef = useRef(null);

  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    // If audio hasn't started yet, start it first
    if (!audioStarted) {
      audioRef.current
        .play()
        .then(() => {
          setAudioStarted(true);
          audioRef.current.muted = false;
          setIsMuted(false);
        })
        .catch((err) => console.log("Autoplay blocked:", err));
    } else {
      // Audio is already playing, toggle mute/unmute
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleStartAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current
        .play()
        .then(() => {
          setAudioStarted(true);
          setIsMuted(false); // make sure it's unmuted once started
        })
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  };

  return (
    <>
      {/* ======================= HERO SECTION ======================= */}
      <div
        className="bg-[black]"
        style={{ zIndex: "-111111111111111111111111111111111111111111111111" }}
        onClick={handleStartAudio}
      >
        <div className="relative w-full h-[100vh] overflow-hidden">
          <audio ref={audioRef} src={assets.audio} loop autoPlay />

          {/* Background Video */}
          <div className="flex items-center justify-center w-full h-full relative">
            <video
              src={assets.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-[380px] h-[380px] md:w-[630px] md:h-[630px] object-cover z-[1]"
            ></video>
            <div
              className="w-[380px] h-[380px] rounded-full md:w-[630px] md:h-[630px] absolute object-cover z-[40] vedio-hero"
              onClick={handleToggleAudio}
              ref={sectionRef}
            ></div>
          </div>

          {/* Header */}
          <div className="absolute inset-0 flex flex-col justify-between z-[3]">
            <Header
              handleToggleAudio={handleToggleAudio}
              isMuted={isMuted}
              isHoveringBuffer={isHoveringBuffer}
              setIsHoveringBuffer={setIsHoveringBuffer}
            />
          </div>

          {/* Cursor Text */}
          <div className="bg-black relative">
            {!popup && <CursorText isMuted={isMuted} sectionRef={sectionRef} />}
          </div>
        </div>
      </div>

      {/* ======================= COMING SOON SECTION ======================= */}
      <section className="bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10 md:py-16">
        {/* Logo */}
        <img
          src={assets.textLogo}
          alt="BLKNWS Logo"
          className="h-[70px] sm:h-[100px] md:h-[130px] object-contain mb-4"
        />

        {/* Title */}
        <p
          className="font-bold text-base sm:text-lg md:text-xl tracking-wide"
          style={{ fontFamily: "VTC Du Bois, sans-serif" }}
        >
          Coming Soon
        </p>

        {/* Description */}
        <p
          className="text-center max-w-[95%] sm:max-w-[600px] md:max-w-[800px] mt-4 text-xs sm:text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "VTC Du Bois, sans-serif" }}
        >
          Adapted from Kahlil Joseph’s renowned video art installation,
          <span className="font-semibold"> BLKNWS: Terms & Conditions </span>
          is a distinctive cinematic experience that mirrors the sonic textures
          of a record album, weaving fiction and history in an immersive journey
          where the fictionalized figures of W. E. B Du Bois and Marcus Garvey
          join artists, musicians, Joseph’s family, and even Twitter chats, in a
          vision for black consciousness.
        </p>

        {/* Promo Video */}
        <div className="w-full max-w-[800px] mt-8 aspect-video rounded-2xl overflow-hidden shadow-lg">
          <video
            src={assets.promo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* popup */}
      <div className="">
        <Popup />
      </div>
    </>
  );
};

export default Home;
