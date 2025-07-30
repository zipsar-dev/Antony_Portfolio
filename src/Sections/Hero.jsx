/* eslint-disable no-unused-vars */
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="Home" className="h-screen w-full flex-end bg-[#FE4A23]">
      <div className="w-[80%] h-[80%]">
        <div className="mt-20">
          <div className="h-full w-full md:w-1/2">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-9xl text-white font-primary font-bold"
            >
              Antony
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-5xl md:text-6xl lg:text-9xl text-white font-primary font-bold"
            >
              Dinu K
            </motion.h1>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-[100%] w-full flex justify-start lg:justify-end gap-5 items-center mt-5 md:mt-0"
          >
            <div className="p-2 bg-black rounded-[6px]">
              <Linkedin color="#FE4A23" />
            </div>
            <h1 className="font-secondary text-white">@antonycorera</h1>
          </motion.div>
        </div>
        <div className="border border-white w-full h-0.5 my-10"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="font-secondary text-black"
        >
          <p className="text-base md:text-xl">
            Innovation Ecosystems - Europe, Entrepreneur in Residence,
          </p>
          <p className="text-base md:text-xl">
            Core Team: Vadodara Startup Studio-Gujarat, National étudiant
          </p>
          <p className="text-base md:text-xl">
            {" "}
            entrepreneur(2014 to 17) - Pépite PON, Paris France.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
