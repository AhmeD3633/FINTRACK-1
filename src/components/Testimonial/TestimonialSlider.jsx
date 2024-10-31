import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avatar from "../../assets/media/Image (10).png";

const testimonials = [
  {
    name: "Mina Ayman",
    position: "CEO at investmentV.",
    testimonial:
      "We highly recommend the creative agency to anyone who is looking for a team of talented and professional designers and developers. They are always willing to help. ",
    avatar: avatar,
  },
  {
    name: "John Doe",
    position: "Founder at CompanyX.",
    testimonial:
      "We highly recommend the creative agency to anyone who is looking for a team of talented and professional designers and developers. ",
    avatar: avatar,
  },
  {
    name: "John Doe",
    position: "Founder at CompanyX.",
    testimonial:
      "We highly recommend the creative agency to anyone who is looking for a team of talented and professional designers and developers. ",
    avatar: avatar,
  },
  {
    name: "John Doe",
    position: "Founder at CompanyX.",
    testimonial:
      "We highly recommend the creative agency to anyone who is looking for a team of talented and professional designers and developers. ",
    avatar: avatar,
  },
  {
    name: "John Doe",
    position: "Founder at CompanyX.",
    testimonial:
      "We highly recommend the creative agency to anyone who is looking for a team of talented and professional designers and developers. ",
    avatar: avatar,
  },
];

export default function TestimonialSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto relative">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.5)] rounded-[20px]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="w-full shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.5)] h-auto p-6 md:h-64 bg-white rounded-lg flex flex-col justify-center items-center">
              <p className="text-[14px] md:text-[16px] leading-6 font-normal text-[#4C4C4C] mb-4">
                {testimonial.testimonial}
              </p>

              <div className="w-full flex items-center justify-center mt-4 border-t border-[#E5EFFF] pt-4">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="rounded-full w-12 h-12 md:w-16 md:h-16 mr-4"
                />
                <div className="text-start">
                  <h4 className="font-medium text-base md:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideBtn
        swiper={swiperInstance}
        currentIndex={currentIndex}
        totalSlides={testimonials.length}
      />
    </div>
  );
}

const SlideBtn = ({ swiper, currentIndex, totalSlides }) => {
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
