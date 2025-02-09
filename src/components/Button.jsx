import React from "react";
import { motion } from "framer-motion";

const Button = ({ title }) => {
  const handleScroll = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      {" "}
      <button
        className="w-[160px] md:w-[188px] h-[44px] md:h-[52px] rounded-full border-none bg-primary text-white font-semibold text-[16px] md:text-[18px] leading-4 hover:bg-primary hover:text-dark transition-all duration-300 ease-in-out shadow-[0px_0px_20px_5px_rgba(201,141,21,0.5)] md:shadow-[0px_0px_30px_10px_rgba(201,141,21,0.25)]"
        onClick={handleScroll}
      >
        {title}
      </button>
    </motion.div>
  );
};

export default Button;
