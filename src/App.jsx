import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/ContactForm/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import ToolAndSkills from "./components/Skills/ToolAndSkills";
import Testimonial from "./components/Testimonial/Testimonial";
import Drawer from "./components/header/Drawer";
import AboutBusinuss from "./components/AboutBusinuss";

function App() {
  return (
    <div className="overflow-x-hidden p-2 gap-1 ">
      <div className="relative mx-auto 2xl:max-w-[60vw] font-Poppins pt-0 flex flex-col items-center space-y-12 px-3 2xl:px-0 lg:px-16 lg:space-y-10">
        <Drawer />
        <Hero />
        <AboutBusinuss />
        <ToolAndSkills />
        <AboutMe />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
