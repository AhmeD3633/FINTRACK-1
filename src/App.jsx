import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllData } from "./api";
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await fetchAllData();
        setData(allData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-[#8B6FC4]"></span>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div className="relative mx-auto 2xl:max-w-[60vw] font-Poppins pt-0 flex flex-col items-center 2xl:space-y-10 space-y-12 lg:space-y-0 px-3 2xl:px-0 ">
        <Nav />
        <Hero heroData={data.heroData} />
        <ToolAndSkills
          socialMediaData={data.socialMediaData}
          toolsAndSkillsData={data.toolsAndSkillsData}
        />
        <AboutMe technicalSkills={data.technicalSkills} />
        <Services services={data.services} />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <Footer socialMediaData={data.socialMediaData} />
    </div>
  );
}

export default App;
