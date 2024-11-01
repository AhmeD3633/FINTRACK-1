import React from "react";
import python from "../../assets/media/logos_python.png";
import django from "../../assets/media/vscode-icons_file-type-django.png";
import git from "../../assets/media/Vector (1).png";
import aws from "../../assets/media/aws.png";
import nginx from "../../assets/media/Nginx.png";
import postgresql from "../../assets/media/Postgresql.png";
import bocker from "../../assets/media/Docker.png";
const Skills = () => {
  const skills = [
    { name: "Python", img: python },
    { name: "Django", img: django },
    { name: "Git", img: git },
    { name: "AWS", img: aws },
    { name: "Nginx", img: nginx },
    { name: "PostgreSQL", img: postgresql },
    { name: "Docker", img: bocker },
  ];
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-9">
        {skills.map(({ name, img }, index) => (
          <ul className="flex flex-col space-y-2 font-normal justify-center items-center">
            <li
              key={index}
              className="flex flex-col justify-center items-center bg-[#F8F8F8] w-[45px] h-[45px] lg:w-[72px] lg:h-[72px] rounded-full"
            >
              <img src={img} />
            </li>
            <li className="text-sm lg:text-xl">{name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;
