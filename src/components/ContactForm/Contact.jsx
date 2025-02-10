import React from "react";
import email from "../../assets/media/Group.png";
import phone from "../../assets/media/Vector (4).png";
import Message from "./Message";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col space-y-10 w-[80%] 2xl:h-screen mb-4"
    >
      <div className="flex flex-col justify-center items-center z-10 space-y-12">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white">
          Contact Form<span className="text-primary">.</span>
        </h1>
        <p className="text-[14px] text-center md:text-[16px] font-normal text-gray-300 leading-6 max-w-[560px]">
          Have any questions or need more information? Fill out the form below,
          and our team will get back to you as soon as possible!
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center border border-primary text-white  py-5 px-12 rounded-3xl shadow-sm">
          <a
            href="mailto:omar.bendary.jr@gmail.com"
            className="flex w-full items-center justify-center"
          >
            <span className="mr-4">
              <img
                src={email}
                alt="Email"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(53%) sepia(91%) saturate(372%) hue-rotate(3deg) brightness(97%) contrast(96%)",
                }}
              />
            </span>{" "}
            <span className="flex-1 md:flex-grow-0">Fintrack.eg@gmail.com</span>
          </a>
        </div>
      </div>

      <Message />
    </section>
  );
};

export default Contact;
