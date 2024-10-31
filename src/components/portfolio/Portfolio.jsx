import React from "react";
import SwiperComponent from "./SwiperComponent";

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col justify-center items-center w-full min-h-screen space-y-8 ">
      <div className="flex flex-col justify-center items-center z-10 space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          Portfolio<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-center font-normal text-gray-500 leading-relaxed md:leading-7 max-w-xl lg:max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Facilisis molestie facilisis
          posuere sagittis orci est. Diam in a volutpat libero elit rhoncus
          dolor sit.
        </p>
      </div>
      <SwiperComponent />
    </section>
  );
};

export default Portfolio;
