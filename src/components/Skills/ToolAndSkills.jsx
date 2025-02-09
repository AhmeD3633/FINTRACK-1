import React from "react";
import Skills from "./Skills";
import Icons from "./Icons";
import Bullets from "../DesignAccessories/Bullets";
import SideDev from "../DesignAccessories/SideDiv";

const ToolAndSkills = () => {
  return (
    <section
      id="skills"
      className="w-full h-auto  md:h-[497px] rounded-3xl lg:rounded-[168px] flex justify-center items-center p-6 md:p-12"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <p className="text-xl md:text-4xl font-semibold text-primary text-center">
          Check out Us
        </p>
        <Icons />
        <p className="text-xl  md:text-4xl font-semibold text-primary text-center">
          Contact Us
        </p>
        <a
          href="mailto:omar.bendary.jr@gmail.com"
          className="text-lg md:text-xl font-semibold text-center text-gray-400 underline"
        >
          fintrack11@gmail.com
        </a>
      </div>
      <Bullets />
      <SideDev position={"left"} top={"top-[700px]"} left={"left-[980px]"} />
    </section>
  );
};

export default ToolAndSkills;
