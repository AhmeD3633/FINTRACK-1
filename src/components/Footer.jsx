import React from "react";
import Icons from "./Skills/Icons";
import logo from "../assets/media/image 1 (1).png";
const Footer = ({ socialMediaData }) => {
  return (
    <footer className="footer footer-center text-base-content rounded p-10 md:p-6 sm:p-4 border-t-2 border-primary">
      <nav className="grid grid-flow-col gap-4">
        <a className="#">
          <img src={logo} />
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Icons socialMediaData={socialMediaData} />
        </div>
      </nav>
      <aside>
        <p className="font-normal md:text-xl text-xs text-gray-300">
          Copyright © {new Date().getFullYear()} FinTrack - All right
          reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
