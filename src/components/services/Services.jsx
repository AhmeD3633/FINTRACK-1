import React from "react";
import { motion } from "framer-motion";
import SideDiv from "../DesignAccessories/SideDiv";
import Icon1 from "../../assets/media/Layer_1 (1).png";
import Icon2 from "../../assets/media/Group 11.png";
import Icon3 from "../../assets/media/Group 12.png";
import Icon4 from "../../assets/media/Group 11.png";

const Services = () => {
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const features = [
    {
      title: "Effortless Expense Tracking",
      description:
        "Automatically track your daily spending and get instant insights to help manage your money effectively.",
      icon: Icon1,
    },
    {
      title: "Personalized Budgeting Tools",
      description:
        "Create and maintain personalized budgets that align with your financial goals.",
      icon: Icon2,
    },
    {
      title: "Inflation-Protected Savings",
      description:
        "Safeguard your savings by investing in stable assets like gold, protecting you from inflation.",
      icon: Icon3,
    },
    {
      title: "Shared Expense Management",
      description:
        "Simplify group savings and expense sharing, making it easy to manage household or group finances.",
      icon: Icon4,
    },
  ];

  return (
    <section
      id="services"
      className="w-full space-y-10 px-4 md:px-8 lg:px-16 h-auto pt-10"
    >
      {/* TEXT HERE */}
      <div className="text-center space-y-6 mt-5">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white ">
          Our Services<span className="text-primary">.</span>
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal text-gray-500 leading-6">
          Providing top-notch services to help bring your ideas to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {features.map((features, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className="w-full h-auto md:h-52 bg-dark  flex flex-col justify-between items-center p-6 rounded-3xl border-t-2 border-primary shadow-[0px_0px_20px_5px_rgba(201,141,21,0.03)]"
          >
            <div className="w-full flex justify-start items-center text-lg md:text-xl font-medium space-x-4 ">
              <div className="border-[1px] border-primary rounded-lg p-[10px] md:p-[18px]">
                <img src={features.icon} alt={features.title} />
              </div>
              <h2 className="text-lg md:text-xl font-medium text-white">
                {features.title}
              </h2>
            </div>
            <div className="w-full text-[14px] md:text-[18px] font-normal text-gray-300 leading-6 md:leading-9">
              {features.description}
            </div>
          </motion.div>
        ))}
        <SideDiv
          position={"left"}
          top={"top-[2400px]"}
          left={"left-[980px]"}
        />

      </div>
    </section>
  );
};

export default Services;
