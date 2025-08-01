/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="w-full h-screen font-secondary relative">
      {/* Top-left About label */}
      <div className="absolute top-6 left-12 lg:top-10 lg:left-16 z-10">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800"
        >
          About
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 lg:px-12 xl:px-16 pt-20 lg:pt-0">
        {/* Left image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/Images/antony.jpg"
            alt="Image"
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-[20px] object-cover shadow-xl"
          />
        </motion.div>

        {/* Right text content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 xl:pl-12">
          <div className="w-full max-w-md lg:max-w-none flex flex-col gap-6 lg:gap-8 xl:gap-10">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-800">
                Hi, This is Antony Dinu.
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-800">
                A Little About Me.
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-700 max-w-prose"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              I'm an innovation consultant, entrepreneur, and ecosystem builder
              with 10+ years of experience across India and Europe. From
              co-founding an Indo-French social enterprise to incubating 90+
              startups at Vadodara Startup Studio, I've led impactful projects
              in startup development, skill-building, and cross-border
              collaboration. Currently, I'm supporting research on digital
              transformation at the University of South Florida.
            </motion.p>

            <motion.a
              href="https://www.linkedin.com/in/antonycorera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-gray-800 text-base sm:text-lg lg:text-xl xl:text-xl rounded-xl font-semibold bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:from-[#FE4A23] hover:to-[#ff6347] hover:text-white hover:border-[#FE4A23] transition-all duration-300 group self-start"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;