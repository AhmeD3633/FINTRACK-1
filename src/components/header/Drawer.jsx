import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { LuHome } from "react-icons/lu";
import { CgDetailsMore } from "react-icons/cg";
import { FaHandHoldingUsd, FaProjectDiagram } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import logo from "../../assets/media/image 1 (1).png";
import Button from "./Button";
import "./Nav.css";
import ResumeModal from "./ResumeModal";

const Drawer = () => {
  const links = [
    { title: "Home", href: "#home", icon: LuHome },
    { title: "About Us", href: "#about", icon: CgDetailsMore },
    { title: "Services", href: "#services", icon: FaHandHoldingUsd },
    { title: "Contact", href: "#resume", icon: RiProfileLine },
  ];

  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveLink("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (href === "#resume") {
      document.getElementById("my_modal_2").showModal();
    }
    document.getElementById("my-drawer-3").checked = false;

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="drawer fixed top-0 z-50 bg-[#181818] rounded-3xl 2xl:w-[60%]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full flex justify-between py-2 lg:px-16 2xl:px-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3Icon className="h-6 w-6 text-primary" />
            </label>
          </div>
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center justify-center space-x-2 z-30">
            <img src={logo} alt="Your Company" className="2xl:h-8 w-auto" />
          </div>
          <div className="hidden flex-none lg:block">
            <div className="flex items-center">
              <ul className="menu menu-horizontal">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`flex items-center space-x-2 ${
                        activeLink === link.href
                          ? "text-[#C98D15]"
                          : "text-white"
                      } active:text-[#C98D15] focus:text-[#C98D15] underline`}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <span className="text-sm md:text-lg 2xl:text-lg font-normal lg:mb-1">
                        {link.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side fixed top-0 h-screen lg:w-[60%]">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-dark text-gray-800 min-h-full w-80 p-4 space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`flex items-center space-x-2 ${
                  activeLink === link.href ? "text-primary" : "text-white"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {React.createElement(link.icon, { className: "h-5 w-5" })}
                <span className="text-md">{link.title}</span>
              </a>
            </li>
          ))}
          <div>
            <Button />
          </div>
        </ul>
      </div>

      <ResumeModal />
    </div>
  );
};

export default Drawer;
