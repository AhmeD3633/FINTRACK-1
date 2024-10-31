import React from "react";
import facebook from "../../assets/media/facebook.png";
import linkedIn from "../../assets/media/Linkedin.png";
import github from "../../assets/media/github.png";
import gitlab from "../../assets/media/gitlab.png";
import twitter from "../../assets/media/twitter.png";

const Icons = () => {
  const icons = [
    { img: facebook, alt: "Facebook" },
    { img: linkedIn, alt: "LinkedIn" },
    { img: github, alt: "GitHub" },
    { img: gitlab, alt: "GitLab" },
    { img: twitter, alt: "Twitter" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {icons.map(({ img, alt }, index) => (
        <div key={index} className="flex items-center justify-center">
          <img
            src={img}
            alt={alt}
            className="w-8 h-8 md:w-10 md:h-10 transition-transform transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Icons;
