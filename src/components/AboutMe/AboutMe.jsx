import React from "react";
import aboutMePic from "../../assets/media/19362653 1.png";
import Button from "../Button";
// import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import SideDev from "../DesignAccessories/SideDiv";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full min-h-[80vh] px-4 lg:px-0 md:space-y-16"
    >
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
        About Us<span className="text-primary">.</span>
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-start mt-8 lg:mt-0">
        <motion.img
          src={aboutMePic}
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-lg mb-6 lg:mb-0 lg:mr-8"
          alt="About Me"
          whileHover={{ scale: 1.05 }}
          animate={{
            y: ["-2%", "2%", "-2%"],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <div className="space-y-4 md:space-y-7 text-center lg:text-left max-w-xl">
          <p className="tracking-normal font-medium text-gray-200 sm:text-lg md:text-xl leading-6 sm:leading-9 md:leading-[38px]">
            At FinTrack, we are dedicated to providing innovative financial
            solutions tailored to the needs of everyday users in Egypt.
          </p>
          <p className="tracking-normal font-medium text-gray-200 sm:text-lg md:text-xl leading-6 sm:leading-9 md:leading-[38px]">
            Our app is designed to help individuals take control of their
            finances by tracking expenses, setting budgets, and securing savings
            against inflation.{" "}
          </p>
          <p className="tracking-normal font-medium text-gray-200 sm:text-lg md:text-xl leading-6 sm:leading-9 md:leading-[38px]">
            By integrating local market needs and offering smart,
            inflation-protected savings solutions, we empower users to achieve
            financial stability and make informed decisions. We aim to build
            trust through security, accessibility, and personalized financial
            guidance, ensuring a seamless and reliable experience for all our
            users.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/resume.pdf" download>
              <Button title="Download CV" />
            </a>
          </div>
        </div>
      </div>
      <SideDev position={"right"} top={"top-[1600px]"} left={"right-[780px]"} />
    </section>
  );
};

export default AboutMe;
