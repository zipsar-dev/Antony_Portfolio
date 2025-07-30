/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="w-full h-screen font-secondary">
      <div className="mt-15 overflow-hidden">
        <motion.h1
          className="w-[80%] mx-auto"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ul className="list-disc list-inside">
            <li className="text-3xl">ABOUT</li>
          </ul>
        </motion.h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-center h-[90%] px-4 lg:px-0 overflow-hidden">
        <motion.div
          className="w-full lg:w-1/2 h-1/2 lg:h-full flex-center mb-8 lg:mb-0"
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
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-[15px] object-cover shadow-lg"
          />
        </motion.div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex-center overflow-hidden">
          <div className="w-full lg:w-[60%] col-start gap-6 lg:gap-10 px-4 lg:px-0">
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
              className="overflow-hidden"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Hi, ich bin Daniel.
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Webdesigner aus Nürnberg.
              </h1>
            </motion.div>
            <motion.p
              className="text-sm sm:text-base lg:text-base leading-relaxed text-gray-700 overflow-hidden"
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
              Ich bin ein leidenschaftlicher Webdesigner und Entwickler, der
              Vielfalt liebt – kein Projekt ist wie das andere. Der Austausch
              mit Menschen aus den unterschiedlichsten Branchen macht jede
              Aufgabe spannend. Gemeinsam entwickeln wir kreative Lösungen für
              deine Website.
            </motion.p>
            <motion.button
              className="px-6 py-3 text-lg sm:text-xl lg:text-2xl bg-gray-300/50 rounded-lg hover:bg-gray-300/70 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Profile
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
