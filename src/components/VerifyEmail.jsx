import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const VerifyEmail = () => {
  return (
    <div
      className={`flex min-h-screen flex-col z-40 justify-center bg-black text-black items-center`}
    >
      <div
        className="w-full max-w-sm  sm:max-w-lg md:max-w-2xl relative p-1 sm:p-6 md:p-8 my-2 sm:my-8 z-40"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={assets.backSvg}
          className="hidden md:block relative w-100% object-cover h-[430px] sm:object-contain  md:w-[90%]  "
          alt="background"
        />
        <img
          src={assets.backSvg}
          className="block md:hidden signup-bg relative"
          alt="background"
        />
        <div
          className="absolute  
                        top-4 left-[5%] sm:top-12 md:left-[22%] 
                        w-[100%] sm:w-auto 
                       
                        flex flex-col justify-center sm:justify-start md:w-[500px] md:-ml-11"
        >
          <div className="text-center mb-3 sm:mb-0 md:-ml-14 rsvp-signup-div">
            <h1
              className="text-lg md:-ml-8 sm:text-xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 mb-2 sm:mb-4 item-center justify-center flex mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "clamp(18px, 4vw, 32px)",
                fontStyle: "regular",
              }}
            >
              R S V P
            </h1>
            <p className="text-black text-center text-sm md:text-lg ml-[-5%] ">
              Verify Email
            </p>

            <h4 className="text-xs text-black md:text-sm w-[80%] md:w-[50%] text-center ml-[8%] md:ml-[20%]  mt-3 text-center">
              Please check your email for a 6-digit verification code. Enter it
              below to verify your account.
            </h4>

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
            className="signup-form space-y-2.5 mt-6 sm:space-y-2 flex-1 flex flex-col justify-center z-[40] md:ml-1"
            // onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleInputChange}
              placeholder="ENTER YOUR OTP"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:font-medium placeholder:text-[black] focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <div className="pt-0 sm:pt-0 md:pt-6 w-full flex items-center justify-center">
              <button
                type="submit"
                className="w-[160px] sm:w-[200px] ml-[-40px] bg-black hover:bg-gray-800 text-white h-7 sm:h-7 md:h-12 text-sm sm:text-base md:text-lg font-bold tracking-wider rounded-md cursor-pointer md:-ml-[100px]"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(16px, 4vw, 24px)",
                }}
              >
                VERIFY
              </button>
            </div>
          </form>
          {/* <Link className="text-[#042a91] text-center ml-[-15%] mt-4 " to={""}>
            Forget your password?
          </Link>
          <span className="text-center ml-[-15%] mt-4 ">
            Don't have an account?{" "}
            <Link className="text-[#042a91]" to={"/signup"}>
              Signup
            </Link>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
