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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  { title: "Home", href: "#home" },
  { title: "About me", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#portfolio" },
  { title: "Blog", href: "#" },
  { title: "My resume", href: "#" },
];

const Nav = () => {
  return (
    <Disclosure as="nav" className="w-full sticky top-0 z-10">
      <div className="mx-auto absolute inset-x-0 bg-white">
        {/* NAVIGATION_HERE ON LARGE SCREEN */}
        <div className="relative flex w-full items-center justify-center">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[#8B6FC4] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-20">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div className="w-full flex flex-1 items-center lg:justify-between justify-end pt-2 md:pt-5">
            {/* LOGO_HERE */}
            <div className="flex-shrink-0 flex items-center justify-center space-x-2 z-30">
              <img src={logo} alt="Your Company" className="lg:h-8 w-auto" />
              <h1 className="font-extrabold text-lg leading-5">
                OmarBendary <span className="text-[#8B6FC4]">.</span>
              </h1>
            </div>

            {/* NAV_LINKS_HERE on Large Screens */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-1">
                {links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="nav-item text-xs lg:text-[18px] font-normal text-black rounded-md px-3 py-2"
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

      {/* Dropdown Menu on Small Screens */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.8)] rounded-xl absolute z-10 inset-x-0 mt-10 w-full bg-white flex flex-col justify-center items-center">
          {links.map((link) => (
            <DisclosureButton
              key={link.title}
              as="a"
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium"
            >
              {link.title}
            </DisclosureButton>
          ))}
          <div className="block mt-2">
            <Button />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Nav;
