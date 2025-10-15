import React, { useState } from "react";
import Header from "../components/Header";
import { assets } from "../assets/assets";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Watch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.watch})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Content Layer */}
        <div className="relative z-[2] w-full h-full">
          <Header />

          {/* Audio Control + Info */}
          <div className="flex items-center gap-2 sm:gap-4 absolute top-2 left-2 sm:top-3 sm:left-3 md:top-5 md:left-5">
            <div className="relative cursor-pointer">
              <img
                src={assets.buffer}
                alt="music buffer"
                className="h-6 sm:h-7 md:h-9 object-contain transition-opacity duration-200"
              />
            </div>

            <div className="text-white">
              <h1 className="text-[8px] sm:text-[10px] md:text-[14px] font-semibold leading-tight">
                De Onde Vem
              </h1>
              <h1 className="text-[8px] sm:text-[10px] md:text-[14px] text-[#A6A6A6] leading-tight">
                Avila Santo
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">
        {/* Logo */}
        <img
          src={assets.textLogo}
          alt="BLKNWS Logo"
          className="h-[70px] sm:h-[100px] md:h-[130px] object-contain mb-6"
        />

        {/* Secondary Logo / Image */}
        <img
          src={assets.watch2}
          alt="BLKNWS Secondary"
          className="h-[60px] sm:h-[90px] md:h-[100px] w-[240px] sm:w-[300px] md:w-[360px] object-contain mb-6"
        />

        {/* Select Box */}
        <div className="relative inline-block w-full max-w-[320px] mt-4 sm:mt-6">
          <select
            className="w-full border border-white bg-transparent text-white text-center px-6 py-3 sm:py-3.5 md:py-4 rounded-md appearance-none cursor-pointer hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
          >
            <option value="" className="bg-black text-white">
              PRE-ORDER COMING SOON
            </option>
            <option value="" className="bg-black text-white">
              AVAILABLE SOON
            </option>
            <option value="" className="bg-black text-white">
              JOIN WAITLIST
            </option>
            <option value="" className="bg-black text-white">
              EXCLUSIVE ACCESS
            </option>
          </select>

          {/* Dropdown Arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
            {isOpen ? (
              <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            ) : (
              <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            )}
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">
        <img
          src={assets.watch3}
          alt="BLKNWS Secondary"
          className="h-[60px] sm:h-[90px] md:h-[100px] w-[240px] sm:w-[300px] md:w-[560px] object-contain mb-6"
        />
      </div>

      <img src={assets.watch4} alt="BLKNWS Secondary" />

      {/* 3rd section */}
      <div className="bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">
        {/* Image / Logo */}
        <img
          src={assets.watch5}
          alt="BLKNWS Secondary"
          className="h-[60px] sm:h-[90px] md:h-[100px] w-[220px] sm:w-[320px] md:w-[480px] lg:w-[560px] object-contain mb-6 sm:mb-8"
        />

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[600px]">
          {/* Button 1 */}
          <button className="w-full sm:w-auto flex-1 border border-white bg-transparent text-white text-center px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md appearance-none cursor-pointer hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200">
            HOST VIA KINEMA
          </button>

          {/* Button 2 */}
          <button className="w-full sm:w-auto flex-1 border border-white bg-transparent text-white text-center px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md appearance-none cursor-pointer hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200">
            DIRECT ENQUIRY
          </button>
        </div>
      </div>
    </>
  );
};

export default Watch;
