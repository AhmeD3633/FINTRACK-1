import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center">
      {" "}
      {/* Center the button within the div */}
      <button className="btn btn-outline w-full sm:w-[188px] h-[52px] rounded-full text-[#5070D1] font-semibold text-[18px] leading-4 hover:text-white hover:bg-[#5070D1]">
        Hire Me
      </button>
    </div>
  ); 
};

export default Button;
