import React from "react";
import img1 from "../../assets/media/Web Development.png";
import img2 from "../../assets/media/Api Development.png";
import img3 from "../../assets/media/Consulting.png";
import img4 from "../../assets/media/Freelancing.png";
import SideDiv from "../DesignAccessories/SideDiv";

const Services = () => {
  const Services = [
    {
      title: "Web Development",
      description:
        "Building custom web applications tailored to your specific needs and goals.",
      img: img1,
    },
    {
      title: "API Development",
      description:
        "Creating efficient and scalable APIs to connect your applications and data.",
      img: img2,
    },
    {
      title: "Consulting",
      description:
        "Providing expert advice and guidance on web development projects.",
      img: img3,
    },
    {
      title: "Freelancing",
      description:
        "Offering flexible and collaborative freelance services for your project needs.",
      img: img4,
    },
  ];

  return (
    <section id="services" className="w-full space-y-10 px-4 md:px-8 lg:px-16">
      {/* TEXT HERE */}
      <div className="text-center space-y-6">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl ">
          Services<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal text-gray-500 leading-6">
          I Delivered 5+ high-quality web applications and APIs for clients.,
          Contributed to projects reaching over 1.5 million users. Continuously
          learning and staying updated with the latest trends and technologies.
        </p>
      </div>

      {/* GRID HERE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {Services.map(({ title, description, img }, index) => (
          <div
            key={index}
            className="w-full h-auto md:h-52 bg-[rgb(244,_248,_255)] bg-[linear-gradient(180deg,_rgba(244,_248,_255,_0.6250875350140056)_0%,_rgba(255,_255,_255,_1)_76%)] flex flex-col justify-between items-center p-6 rounded-3xl border-t-2 border-[#e0ecff]"
          >
            <div className=" w-full flex justify-start items-center text-lg md:text-xl font-medium space-x-4">
              <div className="border-[1px] border-gray-200 rounded-lg p-[10px] md:p-[18px]">
                <img src={img} alt={title} />
              </div>
              <h2 className="text-lg md:text-xl font-medium">{title}</h2>
            </div>
            <div className="w-full text-[14px] md:text-[18px] font-normal text-gray-500 leading-6 md:leading-9">
              {description}
            </div>
          </div>
        ))}
        <SideDiv position={"left"} top={"top-[2400px]"} left={"left-[1000px]"} />
        <SideDiv position={"right"} top={"top-[2200px]"} left={"left-[-1500px]"} />

      </div>
    </section>
  );
};

export default Services;
