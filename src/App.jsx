import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/ContactForm/Contact";
import Footer from "./components/Footer";
import Nav from "./components/header/Nav";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import ToolAndSkills from "./components/Skills/ToolAndSkills";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <div className="relative mx-auto 2xl:max-w-[60%] font-Poppins pt-0 flex flex-col items-center 2xl:space-y-5 space-y-10 lg:space-y-0 px-3 2xl:px-0 ">
        <Nav />
        <Hero />
        <ToolAndSkills />
        <AboutMe />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
