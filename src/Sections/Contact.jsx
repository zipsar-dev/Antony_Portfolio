import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize EmailJS (you'll need to add this script to your HTML)
  useEffect(() => {
    // Load EmailJS script if not already loaded
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.onload = () => {
        // Initialize EmailJS with your public key
        window.emailjs.init("dQ9ILQOvzgBlEk-xI"); // Replace with your actual public key
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS send function
      const result = await window.emailjs.send(
        "service_5s3uku5", // Replace with your EmailJS service ID
        "template_lnc9o9k", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New message from contact form",
          message: formData.message,
          to_email: "yogeshvenugopal22@gmail.com", // Replace with your email
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const getSubmitButtonText = () => {
    if (isSubmitting) return "Sending...";
    if (submitStatus === "success") return "Message Sent!";
    if (submitStatus === "error") return "Please fill required fields";
    return "Let's Talk";
  };

  const getSubmitButtonColor = () => {
    if (submitStatus === "success") return "bg-green-500 hover:bg-green-600";
    if (submitStatus === "error") return "bg-red-500 hover:bg-red-600";
    return "bg-[#FE4A23] hover:bg-[#E63E1C]";
  };

  return (
    <section
      ref={sectionRef}
      id="Contact"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 lg:px-0 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center font-primary text-[#FE4A23] lg:pl-32 text-center lg:text-left">
          <h1
            className={`text-6xl sm:text-7xl lg:text-9xl font-bold transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Share
          </h1>
          <h1
            className={`text-6xl sm:text-7xl lg:text-9xl font-bold lg:ml-15 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Your
          </h1>
          <h1
            className={`text-6xl sm:text-7xl lg:text-9xl font-bold transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Thoughts
          </h1>

          {/* Decorative line animation */}
          <div
            className={`h-1 bg-gradient-to-r from-[#FE4A23] to-transparent mt-8 transition-all duration-1000 delay-800 ${
              isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg">
            {/* Background decoration */}
            <div
              className={`absolute -top-4 -left-4 w-full h-full paper-shape bg-[#FE4A23] opacity-10 transform transition-all duration-1000 delay-300 ${
                isVisible ? "rotate-3 scale-100" : "rotate-0 scale-95"
              }`}
            />

            {/* Main form container */}
            <div
              className={`relative bg-[#FFF2F2] paper-shape shadow-2xl overflow-hidden transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              {/* Studio info section */}
              <div className="px-8 py-6 border-b border-[#FBCCCF]">
                <div className="relative flex justify-end">
                  <div
                    className={`absolute bottom-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-[#FBCCCF] transition-all duration-1000 delay-700 ${
                      isVisible ? "w-[150px] opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                  <p className="text-sm leading-relaxed font-secondary w-[70%]">
                    <span className="text-[#FE4A23]">
                      You can find me in my studio{" "}
                    </span>
                    if you want to take a look at my sculptures, address is via
                    sacra 69, Toulouse, France.
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="p-8 space-y-6 font-secondary">
                <div
                  className={`transform transition-all duration-700 delay-800 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <label className="text-[#FE4A23] font-medium block mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent outline-none border-b-2 border-[#FE4A23] px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-[#FE4A23] transition-all duration-300 focus:shadow-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div
                  className={`transform transition-all duration-700 delay-900 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <label className="text-[#FE4A23] font-medium block mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent outline-none border-b-2 border-[#FE4A23] px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-[#FE4A23] transition-all duration-300 focus:shadow-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div
                  className={`transform transition-all duration-700 delay-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <label className="text-[#FE4A23] font-medium block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-transparent outline-none border-b-2 border-[#FE4A23] px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-[#FE4A23] transition-all duration-300 focus:shadow-lg"
                    placeholder="What's this about?"
                  />
                </div>

                <div
                  className={`transform transition-all duration-700 delay-1100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <label className="text-[#FE4A23] font-medium block mb-2">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-[#FE4A23] outline-none px-3 py-2 text-gray-800 placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <div
                  onClick={isSubmitting ? null : handleSubmit}
                  className={`w-full py-4 text-white text-xl font-light transform transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95 ${
                    isSubmitting
                      ? "cursor-not-allowed opacity-75"
                      : "cursor-pointer"
                  } ${getSubmitButtonColor()} ${
                    isVisible
                      ? "translate-y-0 opacity-100 delay-1200"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {getSubmitButtonText()}
                    {!isSubmitting && (
                      <svg
                        className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    )}
                    {isSubmitting && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
