/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // Show navbar when at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Experience", to: "Experience" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full h-[80px] md:h-[100px] flex-center bg-[#FE4A23] text-white fixed top-0 left-0 z-50"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="w-[80%] flex-between"
      >
        <h1 className="font-semibold text-4xl md:text-6xl font-primary">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-secondary">
          {navItems.map((item) => (
            <li key={item.name} className="text-lg lg:text-xl cursor-pointer">
              <Link
                to={item.to}
                smooth
                spy={true}
                activeClass="border-b-2 border-white pb-1"
                className="hover:border-b-2 hover:border-white hover:pb-1 transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-[80px] left-0 w-full bg-[#FE4A23] shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 font-secondary">
          {navItems.map((item) => (
            <li key={item.name} className="text-xl cursor-pointer py-3">
              <Link
                to={item.to}
                smooth
                spy={true}
                offset={-100}
                activeClass="border-b-2 border-white pb-1"
                className="hover:border-b-2 hover:border-white hover:pb-1 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
