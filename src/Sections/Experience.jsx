import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Experience = ({ onScrollComplete, onScrollStart, onScrolling }) => {
  const scrollContainerRef = useRef(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const details = [
    {
      company: "University of South Florida",
      description:
        "Research Assistant under Prof. Bhuvan Unhelkar (Oct 2022 – Present). Supporting research in digital transformation, BPM, and enterprise architectures.",
    },
    {
      company: "Leo & Sagittarius Consulting (OPC) Pvt. Ltd.",
      description:
        "Entrepreneur in Residence (Sep 2022 – Present). Mentoring startups and contributing to strategic initiatives across innovation and consulting projects.",
    },
    {
      company: "Vadodara Startup Studio, Parul University",
      description:
        "Core Team Member (Aug 2020 – Sep 2022). Incubated 90+ startups; raised ₹1.15Cr Govt. grant; launched startup programs with Reliance Jio.",
    },
    {
      company: "Parul University",
      description:
        "Manager – Entrepreneurship Development (Jan 2020 – Aug 2020). Led social innovation initiatives and state-level entrepreneurship programs.",
    },
    {
      company: "Action For India",
      description:
        "Consultant (Oct 2019 – Jan 2020). Contributed to strategic planning and social entrepreneurship programs.",
    },
    {
      company: "Rustomjee Academy for Global Careers",
      description:
        "Consultant & Regional Head (Jul 2018 – Dec 2018). Enabled Indo-French hospitality programs; launched Ashok Leyland skill project in TN schools.",
    },
    {
      company: "Axcor Green Ventures",
      description:
        "Co-Founder (2015 – 2018). Indo-French venture empowering people via skill training in organic waste & IoT.",
    },
    {
      company: "Europe India Foundation for Excellence (EIFE)",
      description:
        "Project Manager (2015 – 2017). Led EU-India skills projects; organized summits at UNESCO, European Parliament.",
    },
    {
      company: "Pépite France – French Ministry of Higher Education",
      description:
        "Étudiant Entrepreneur (2015 – 2017). Created Indo-French startup; presented PPP-based innovation models.",
    },
    {
      company: "GE Grid Solutions",
      description:
        "Project Trainee (2014 – 2015). Developed tools to track deliverables, performance, and project metrics.",
    },
    {
      company: "RR Donnelley",
      description:
        "Print Analyst (2011 – 2012). Managed print-related risks and U.S. warehouse operations.",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let hasStarted = false;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (!hasStarted && scrollTop > 0) {
        hasStarted = true;
        onScrollStart?.();
      }

      if (scrollTop > 0) {
        onScrolling?.();
      }

      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      if (scrollPercentage >= 0.95 && !isScrollComplete) {
        setIsScrollComplete(true);
        onScrollComplete?.();
        window.dispatchEvent(new CustomEvent("experienceComplete"));
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isScrollComplete, onScrollComplete, onScrollStart, onScrolling]);

  return (
    <section
      id="Experience"
      className="w-full h-screen bg-[#FE4A23] text-white py-8 px-4 sm:px-6 lg:px-0"
    >
      {/* Header */}
      <motion.div
        className="w-full max-w-[85%] mx-auto mb-6"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Experience
        </h2>
        <p className="w-full sm:w-[70%] md:w-[60%] lg:w-[45%] text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
          A brief look at my roles and contributions across startups,
          institutions, and global organizations.
        </p>
      </motion.div>

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        data-scroll-container
        className="h-[calc(100vh-180px)] overflow-y-auto px-2 lg:px-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.4) transparent",
        }}
      >
        <div className="w-full max-w-[85%] mx-auto pb-16">
          {details.map((item, index) => (
            <motion.div
              key={index}
              className="border-t border-white/20 flex flex-col sm:flex-row justify-between items-start py-6 sm:py-8 gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full sm:w-[8%] flex-shrink-0">
                <span className="text-base sm:text-lg font-bold text-white/70">
                  {String(index + 1).padStart(2, "0")}.
                </span>
              </div>

              <div className="w-full sm:w-[30%] flex-shrink-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                  {item.company}
                </h3>
              </div>

              <div className="w-full sm:w-[55%]">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/85">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {isScrollComplete && (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
            </motion.div>
          )}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        div[data-scroll-container]::-webkit-scrollbar {
          width: 8px;
        }
        div[data-scroll-container]::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        div[data-scroll-container]::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 4px;
        }
        div[data-scroll-container]::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Experience;
