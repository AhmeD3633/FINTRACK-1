import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center">
      {" "}
      {/* Center the button within the div */}
      <button className="btn btn-outline w-full sm:w-[188px] h-[52px] rounded-full text-[#8B6FC4] 2xl:text-[#5070D1]  font-semibold text-[18px] leading-4 hover:text-white 2xl:hover:bg-[#5070D1] hover:bg-[#8B6FC4] ml-10 2xl:ml-0">
        Hire Me
      </button>
    </div>
  ); 
};

export default Button;
