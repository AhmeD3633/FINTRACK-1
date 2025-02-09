import React from "react";
import Icon1 from "../../assets/media/Layer_1.png";
import Icon2 from "../../assets/media/Group 7.png";
import Icon3 from "../../assets/media/Group 8.png";

const AboutBusinuss = () => {
  const businessData = [
    {
      title: "Business Growth",
      description:
        "We've seen a 40% monthly user growth, boosted by partnerships with top gold companies for secure savings options.",
      icon: Icon1,
    },
    {
      title: "Business Focus",
      description:
        "We prioritize delivering an easy and secure way for users to manage their finances, while helping them safeguard their savings from inflation.",
      icon: Icon2,
    },
    {
      title: "Business Goal",
      description:
        "Our goal is to help 1 million users in the next two years by offering tools to safeguard their savings and achieve financial security.",
      icon: Icon3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
      {businessData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-dark p-5 md:p-6 rounded-2xl gap-5 text-center shadow-[0px_0px_20px_5px_rgba(201,141,21,0.5)] md:shadow-[0px_0px_30px_10px_rgba(201,141,21,0.2)]"
        >
          <img src={item.icon} alt="icon" className="" />
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            {item.title}
          </h3>
          <p className="text-sm md:text-base font-normal text-gray-400 leading-8">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutBusinuss;
