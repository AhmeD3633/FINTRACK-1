import React from "react";
import Button from "../Button";
import person from "../../assets/media/Icon.png";
import email from "../../assets/media/Icon (1).png";
import phone from "../../assets/media/Outline.png";

const Message = () => {
  return (
    <div className="w-full h-auto p-8 rounded-3xl border border-[#E5EFFF] shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.3)] grid grid-cols-1 md:grid-cols-2 gap-8 px-3 md:px-8">
      {/* LEFT_SIDE */}
      <div>
        <div className="w-full">
          <form>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-base font-medium mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                id="username"
                type="text"
                placeholder="Enter your name"
              />
              <img
                src={person}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-6"
                alt="Person Icon"
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-base font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <img
                src={email}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-4"
                alt="Email Icon"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-base font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-[52px] py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-base"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
              <img
                src={phone}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 pt-4"
                alt="Phone Icon"
              />
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT_SIDE */}
      <div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-[16px] font-medium mb-2 leading-6"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border-[#E5EFFF] rounded-xl w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="message"
            placeholder="Your Message..."
            rows={4}
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full col-span-full flex justify-center mt-4">
        <Button title={"Send Message"} />
      </div>
    </div>
  );
};

export default Message;
