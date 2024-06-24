import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="bg-white mx-2 w-20" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dinesh-bhandari-a53598278/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Dineshbhandari2023">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/dineshbhandari_09/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
