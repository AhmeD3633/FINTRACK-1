import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import googlePlay from "../../assets/media/Mask Group 51.png";
import appleStore from "../../assets/media/apple-store-icon-png-free-download-fourjayorg-app-store-icon-png-1000_736.png";

const SwiperComponent = ({ projects = [] }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 shadow-[0_0_100px_40px_rgba(237,_245,_255,_0.5)] rounded-3xl relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-4 flex flex-col space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium leading-[56px] mb-2 ">
                  {project.name}
                </h2>
                <h4 className=" text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
                  Description:
                </h4>
                <p className="text-md md:text-lg font-normal ">
                  {project.description}
                </p>
                <h4 className="text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
                  Impact:
                </h4>
                <p className="text-md md:text-lg font-normal">
                  {project.impact}
                </p>
                <h4 className="text-base md:text-lg text-[18px] font-semibold leading-7 text-[#5070D1]">
                  View Live:
                </h4>
                <div className="flex mt-4">
                  <a href={project.ios} className="mr-2">
                    <img src={appleStore} alt="App Store" />
                  </a>
                  <a href={project.android}>
                    <img src={googlePlay} alt="Google Play" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 p-4">
                <img
                  src={project.image}
                  alt="BOGO Plus Mobile App"
                  className="w-full rounded-lg object-fill"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons
        swiper={swiperInstance}
        currentIndex={currentIndex}
        totalSlides={projects.length}
      />
    </div>
  );
};

const SliderButtons = ({ swiper, currentIndex, totalSlides }) => {
  return (
    <div className="">
      <div className="swiper-buttons flex gap-2 md:gap-4 absolute bottom-[-70px] md:bottom-[-90px] left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => swiper?.slidePrev()}
          className={`w-10 h-10 md:w-14 md:h-14 bg-[#8B6FC4] rounded-full text-white text-3xl md:text-5xl font-semibold flex justify-center items-center ${
            currentIndex === 0 ? "opacity-50" : "opacity-100"
          }`}
          disabled={currentIndex === 0}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="20" height="20" rx="10" fill="#8B6FC4" />
            <path
              d="M14 16l-4-4 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className={`w-10 h-10 md:w-14 md:h-14 bg-[#8B6FC4] rounded-full text-white text-3xl md:text-5xl font-semibold flex justify-center items-center ${
            currentIndex === totalSlides - 1 ? "opacity-50" : "opacity-100"
          }`}
          disabled={currentIndex === totalSlides - 1}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="20" height="20" rx="10" fill="#8B6FC4" />
            <path
              d="M10 8l4 4-4 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
