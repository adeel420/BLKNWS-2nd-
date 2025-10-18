import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPopup = ({ onClose }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle signup API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
        formData
      );
      setMessage(res.data.message || "Signup successful!");
      setFormData({ name: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen justify-center text-black items-center bg-black`}
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm  sm:max-w-lg md:max-w-2xl relative p-1 sm:p-6 md:p-8 my-2 sm:my-8 "
        style={{ zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={assets.backSvg}
          className="hidden md:block relative w-100% object-cover h-[430px] sm:object-contain  md:w-[90%]  "
          alt="background"
          // onClick={handleStopPropagation}
        />
        <img
          src={assets.backSvg}
          className="block md:hidden signup-bg relative"
          alt="background"
          // onClick={handleStopPropagation}
        />
        <div
          className="absolute  
                        top-4 left-[5%] sm:top-12 md:left-[22%] 
                        w-[100%] sm:w-auto 
                       
                        flex flex-col justify-center sm:justify-start md:w-[500px] md:-ml-11"
          // onClick={handleStopPropagation}
        >
          <div className="text-center mb-3 sm:mb-0 md:-ml-14 rsvp-signup-div">
            <h1
              className="text-lg ml-[-3px] md:-ml-8 sm:text-xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 mb-2 sm:mb-4 item-center justify-center flex mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "clamp(18px, 4vw, 32px)",
                fontStyle: "regular",
              }}
            >
              R S V P
            </h1>
            <p className="text-black text-center text-sm md:text-lg ml-[-5%] ">
              Signup Now
            </p>

            <button
              className="absolute top-[5px] right-25 cursor-pointer hidden md:block"
              onClick={() => navigate("/")}
            >
              x
            </button>

            <button
              className="absolute top-15 right-12 block md:hidden "
              onClick={() => navigate("/")}
            >
              x
            </button>
          </div>

          <form
            className="signup-form space-y-2.5 mt-6 sm:space-y-2 flex-1 flex flex-col justify-center  md:ml-1"
            onSubmit={handleSubmit}
            style={{ zIndex: 9999 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="YOUR NAME"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:text-[black] placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="YOUR EMAIL"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:font-medium placeholder:text-[black] focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="YOUR PASSWORD"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:font-medium placeholder:text-[black] focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <div className="pt-0 sm:pt-0 md:pt-6 w-full flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-[160px] sm:w-[200px] ml-[-40px] bg-black hover:bg-gray-800 text-white h-7 sm:h-7 md:h-12 text-sm sm:text-base md:text-lg font-bold tracking-wider rounded-md cursor-pointer md:-ml-[100px]"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(16px, 4vw, 24px)",
                }}
              >
                {loading ? "Signing up..." : "SIGNUP"}
              </button>
            </div>
          </form>

          {/* ✅ Success or error message */}
          {message && (
            <p className="text-green-600 text-center ml-[-15%] text-sm mt-4">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-600 text-center ml-[-15%] text-sm mt-4">
              {error}
            </p>
          )}

          <span className="text-center ml-[-15%] mt-4 ">
            Already have an account?{" "}
            <Link className="text-[#042a91]" to={"/login"}>
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
