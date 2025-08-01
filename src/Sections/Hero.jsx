/* eslint-disable no-unused-vars */
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-screen w-full flex items-center justify-center bg-[#FE4A23] px-4"
    >
      <div className="w-[80%] mx-auto py-12 md:py-20">
        {/* Header row: Name on left, LinkedIn on right */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div className="w-full md:w-1/2">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-primary font-bold leading-tight"
            >
              Antony
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-primary font-bold leading-tight"
            >
              Dinu K
            </motion.h1>
          </div>

          {/* LinkedIn aligned to right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-4 md:gap-5 mt-6 md:mt-0"
          >
            <div className="p-2 bg-black rounded-md">
              <Linkedin color="#FE4A23" />
            </div>
            <h1 className="font-secondary text-white text-sm md:text-base lg:text-lg">
              @antonycorera
            </h1>
          </motion.div>
        </div>

        {/* White separator line */}
        <div className="border-t border-white my-10 w-full" />

        {/* Description */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="font-secondary text-black space-y-2"
        >
          <p className="text-sm md:text-base lg:text-xl">
            Innovation Ecosystems - Europe, Entrepreneur in Residence,
          </p>
          <p className="text-sm md:text-base lg:text-xl">
            Core Team: Vadodara Startup Studio-Gujarat, National étudiant
          </p>
          <p className="text-sm md:text-base lg:text-xl">
            entrepreneur (2014 to 17) - Pépite PON, Paris France.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
