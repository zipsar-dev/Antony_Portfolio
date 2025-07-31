import React from "react";

const Footer = () => {
  return (
    <div className="font-secondary">
      <div className="bg-[#FE4A23] text-white min-h-[40vh]">
        {/* Social Links Section */}
        <div className="flex justify-center items-center w-full py-5">
          <div className="w-1/2 hidden lg:block"></div>
          <div className="w-full lg:w-1/2  flex justify-center lg:justify-start">
            <ul className="flex justify-between items-center gap-4 sm:gap-6 lg:gap-10 w-[90%] max-w-md lg:w-[80%]">
              <li className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline">
                Linked In
              </li>
              <li className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline">
                Facebook
              </li>
              <li className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline">
                X
              </li>
              <li className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline">
                Github
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start mt-6 lg:mt-10 px-4 lg:px-0">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-20 mb-8 lg:mb-0">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[40%] leading-tight">
              We Would love to hear from you
            </h1>
            <p className="w-full sm:w-[80%] lg:w-[60%] mt-4 lg:mt-5 text-sm sm:text-base leading-relaxed">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <p className="mt-4 lg:mt-5 text-sm sm:text-base">Become a client</p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl break-all sm:break-normal">
              example@gmail.com
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 mt-6 lg:mt-10">
              <div>
                <p className="text-sm sm:text-base">+91 12345 67890</p>
              </div>
              <ul className="flex flex-col gap-2 lg:gap-3">
                <li className="cursor-pointer hover:underline text-sm sm:text-base">
                  Home
                </li>
                <li className="cursor-pointer hover:underline text-sm sm:text-base">
                  About
                </li>
                <li className="cursor-pointer hover:underline text-sm sm:text-base">
                  Experience
                </li>
                <li className="cursor-pointer hover:underline text-sm sm:text-base">
                  Service
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full flex justify-center items-center py-3 mt-8 lg:mt-5">
          <p className="text-xs sm:text-sm">&#169; ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
