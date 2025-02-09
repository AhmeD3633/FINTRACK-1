// AngledSide.js
import React from "react";

const AngledSide = ({ position, top, bottom, left, right }) => {
  const rotationDegree = position === "left" ? -60 : 240;

  return (
    <div
      className={`absolute ${top || ""} ${bottom || ""} ${left || ""} ${
        right || ""
      } hidden 2xl:block w-[1618px] h-[506px] rounded-full opacity-50`}
      style={{
        zIndex: -1,
        transform: `rotate(${rotationDegree}deg)`,
        background:
          "linear-gradient(94.72deg, rgba(203, 210, 238, 0) 8.33%, rgba(201, 141, 21, 0.4) 57.27%)",
      }}
    ></div>
  );
};

export default AngledSide;
