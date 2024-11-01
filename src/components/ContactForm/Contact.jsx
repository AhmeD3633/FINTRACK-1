import React from "react";
import email from "../../assets/media/Group.png";
import phone from "../../assets/media/Vector (4).png";
import Message from "./Message";
import SideDiv from "../DesignAccessories/SideDiv";

const Contact = () => {
  return (
    <section className="flex flex-col space-y-10 w-[80%] 2xl:h-screen mb-4">
      <div className="flex flex-col justify-center items-center z-10 space-y-12">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl ">
          Contact Form<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-[14px] text-center md:text-[16px] font-normal text-gray-500 leading-6">
          Lorem ipsum dolor sit amet consectetur. Facilisis molestie facilisis
          posuere sagittis orci est. Diam in a volutpat libero elit rhoncus
          dolor sit.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="md:w-[80%] grid grid-cols-1 grid-rows-2  md:grid-cols-2 md:grid-rows-1 gap-8 md:text-[14px] text-xs text-gray-600">
          <div className=" space-x-4 flex items-center justify-center border border-[#E5EFFF] p-5 rounded-xl shadow-sm">
            <span>
              <img src={email} />
            </span>{" "}
            <a href="mailto:omar.bendary.jr@gmail.com">
              {" "}
              omar.bendary.jr@gmail.com
            </a>
          </div>
          <div className=" space-x-4 flex items-center justify-center border border-[#E5EFFF] p-5 rounded-xl shadow-sm">
            <span>
              <img src={phone} />
            </span>{" "}
            <a href="tel:+201288153092">+20 128 815 3092</a>
          </div>
        </div>
      </div>

      <Message />
      {/* <SideDiv position={"right"} top={"top-[4600px]"} left={"left-[-1500px]"} /> */}
    </section>
  );
};

export default Contact;
