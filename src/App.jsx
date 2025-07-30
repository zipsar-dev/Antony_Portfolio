import Navbar from "./Components/Common/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
