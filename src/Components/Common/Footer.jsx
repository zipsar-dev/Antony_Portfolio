import React from "react";

const Footer = () => {
  return (
    <div className="font-secondary">
      <div className="bg-[#FE4A23] text-white min-h-[40vh]">
        {/* Social Links Section */}
        <div className="flex justify-center items-center w-full py-5">
          <div className="w-1/2 hidden lg:block"></div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <ul className="flex justify-between items-center gap-4 sm:gap-6 lg:gap-10 w-[90%] max-w-md lg:w-[80%]">
              <li>
                <a
                  href="https://www.linkedin.com/in/antonycorera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base lg:text-lg cursor-pointer hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              {/* Optional Social Links (commented) */}
            </ul>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start mt-6 lg:mt-10 px-4 lg:px-0">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-20 mb-8 lg:mb-0">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[80%] leading-tight">
              Let’s build something meaningful together.
            </h1>
            <p className="w-full sm:w-[90%] lg:w-[70%] mt-4 lg:mt-5 text-sm sm:text-base leading-relaxed">
              Whether you're scaling a startup, seeking innovation strategy, or
              just want to connect over ideas — I'm always open to
              conversations that create impact.
            </p>
            <p className="mt-4 lg:mt-5 text-sm sm:text-base font-medium">
              Let’s connect & collaborate.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl break-all sm:break-normal">
              dinucorera@gmail.com
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 mt-6 lg:mt-10">
              <div>
                <p className="text-sm sm:text-base">+91 73052 49981</p>
              </div>
              <ul className="flex flex-col gap-2 lg:gap-3">
                <li>
                  <a
                    href="#Home"
                    className="cursor-pointer hover:underline text-sm sm:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="cursor-pointer hover:underline text-sm sm:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Experience"
                    className="cursor-pointer hover:underline text-sm sm:text-base"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="cursor-pointer hover:underline text-sm sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-black w-full py-3 text-center text-white text-xs sm:text-sm">
        <div className="py-3 mt-8 lg:mt-5">
          <p className="text-xs sm:text-sm">
            &#169; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <p className="text-xs sm:text-sm mt-1">
            Developed with ❤️ by <a href="https://zipsar.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Zipsar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
