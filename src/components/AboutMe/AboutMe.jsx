import React from "react";
import aboutMePic from "../../assets/media/19362653 1.png";
import Button from "../Button";
import ProgressBar from "./ProgressBar";

const AboutMe = () => {
  const progressData = [
    { label: "Python", percentage: 80 },
    { label: "Django", percentage: 60 },
    { label: "Django Rest Framework", percentage: 90 },
    { label: "HTML / CSS / Javascript", percentage: 70 },
    { label: "React", percentage: 80 },
  ];

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full min-h-[80vh] px-4 lg:px-0 md:space-y-16"
    >
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        About me<span className="text-[#8B6FC4]">.</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center mt-8 lg:mt-0">
        <img
          src={aboutMePic}
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-lg mb-6 lg:mb-0 lg:mr-8"
          alt="About Me"
        />
        <div className="space-y-4 md:space-y-7 text-center lg:text-left max-w-xl">
          <p className="tracking-normal font-medium text-base sm:text-lg md:text-xl leading-6 sm:leading-9 md:leading-[38px]">
            Hi there, I'm Omar Bendary, a software engineer with a strong
            passion for building innovative and user-friendly web applications.
            My journey began in 2020 with a Bachelor's in Communications and
            Computer Engineering, and ever since, I've been continuously honing
            my skills and exploring the ever-evolving world of web development.
          </p>
          <div>
            {progressData.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                percentage={item.percentage}
              />
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button title="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
