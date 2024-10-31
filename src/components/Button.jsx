import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="btn btn-outline w-[160px] md:w-[188px] h-[44px] md:h-[52px] rounded-full border-none bg-[#8B6FC4] text-white font-semibold text-[16px] md:text-[18px] leading-4 hover:bg-[#8B6FC4] hover:text-white shadow-[0_0_20px_10px_rgba(237,_245,_255,_0.3)] md:shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.5)] transition-all duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
