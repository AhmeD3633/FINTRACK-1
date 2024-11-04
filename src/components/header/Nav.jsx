import React from "react";
import "./Nav.css";
import Button from "./Button";
import logo from "../../assets/media/logoipsum-292 1 (2).png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LuHome } from "react-icons/lu";
import { CgDetailsMore } from "react-icons/cg";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  { title: "Home", href: "#home", icon: LuHome },
  { title: "About me", href: "#about", icon: CgDetailsMore },
  { title: "Services", href: "#services", icon: FaHandHoldingUsd },
  { title: "Projects", href: "#portfolio", icon: FaProjectDiagram },
  { title: "Blog", href: "#", icon: FaBlog },
  { title: "My resume", href: "#", icon: RiProfileLine },
];

const Nav = () => {
  return (
    <Disclosure as="nav" className="w-full sticky top-0 z-50 ">
      <div className="mx-auto absolute inset-x-0 bg-white rounded-3xl">
        {/* NAVIGATION_HERE ON LARGE SCREEN */}
        <div className="relative flex w-full items-center justify-center">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center 2xl:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[#8B6FC4] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-20">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div className="w-full flex flex-1 items-center 2xl:justify-between justify-end pt-2 md:pt-5">
            {/* LOGO_HERE */}
            <div className="flex-shrink-0 flex items-center justify-center space-x-2 z-30">
              <img src={logo} alt="Your Company" className="2xl:h-8 w-auto" />
              <h1 className="font-extrabold text-lg leading-5">
                OmarBendary <span className="text-[#8B6FC4]">.</span>
              </h1>
            </div>

            {/* NAV_LINKS_HERE on 2xl Screens */}
            <div className="hidden 2xl:flex items-center">
              <div className="flex space-x-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="nav-item text-xs 2xl:text-[18px] font-normal text-black rounded-md px-3 py-2 "
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="ml-6">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu on Smaller Screens */}
      <DisclosurePanel className="2xl:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.8)] rounded-xl absolute z-10 inset-x-0 mt-10 w-full bg-white flex flex-col justify-center items-start">
          {links.map((link, index) => (
            <DisclosureButton
              key={index}
              as="a"
              href={link.href}
              className=" rounded-md px-3 py-2 text-base font-medium flex items-center w-full justify-start text-left  "
            >
              <link.icon className="text-xl ml-2 text-[#8B6FC4] mr-4" />
              {link.title}
              <FaArrowRight className="text-[#8B6FC4] ml-auto" />
            </DisclosureButton>
          ))}
          <div className="block mt-2 mx-auto">
            <Button />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Nav;
