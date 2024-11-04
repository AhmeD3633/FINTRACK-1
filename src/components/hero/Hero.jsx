import React from "react";
import img1 from "../../assets/media/backend-developer (1).png";
import Button from "../Button";
import { motion } from "framer-motion";
import vector from "../../assets/media/Vector.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center w-full max-h-screen 2xl:h-[77vh] relative px-6 lg:px-0 pt-6 2xl:pt-0"
    >
      {/* LEFT-SIDE */}
      <div className="flex-[0.5] space-y-4 md:space-y-7 text-center md:text-left p-10 rounded-3xl px-2">
        <motion.p
          className="text-lg md:text-xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm
        </motion.p>
        <motion.p
          className="text-2xl md:text-3xl font-semibold text-[#8B6FC4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Omar Bendary
        </motion.p>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experienced
        </motion.h1>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl md:ml-8 whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Software Engineer
        </motion.h1>
        <motion.p
          className="font-normal text-base md:text-xl max-w-[300px] md:max-w-[535px] mx-auto md:mx-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate software engineer with +2 years of experience crafting
          efficient and scalable web solutions.
        </motion.p>
        <div className="flex justify-center md:justify-start">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button title="Hire Me" />
          </motion.div>
        </div>

        {/* DOT */}
        <span className="hidden 2xl:block w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#8B6FC4] absolute top-[70%] md:top-[490px] left-[60%] md:left-[500px]"></span>
      </div>

      {/* RIGHT-SIDE */}
      <div className="hidden flex-[0.5] xl:flex justify-center 2xl:justify-end items-center pt-6 md:pt-8">
        <img
          src={img1}
          alt="Profile"
          className="w-auto 2xl:w-auto 2xl:h-auto"
        />
      </div>

      {/* ARROW */}
      <div className="hidden 2xl:block absolute bottom-[20px] left-[100px]">
        <img src={vector} alt="Arrow" className="" />
      </div>
    </div>
  );
};

export default Hero;
