import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../components/Logo";
Logo
const Header = () => {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <header className="border-b-1 fixed left-0 top-0 z-50 h-[60px] w-full border-b border-gray-500 bg-[#1F2937] text-white shadow-lg lg:h-[80px]">
      <nav className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-10 text-white">
        <Logo></Logo>
        <div className="rounded-full border-[1px] border-gray-800 bg-[#0E1828] p-2 shadow-2xl md:hidden">
          <CiMenuFries
            className="text-2xl font-extrabold text-white"
            onClick={() => {
              setShowMenu((showMenu = showMenu === false ? true : false));
            }}
          />
        </div>

        <ul className="hidden gap-10 text-xl font-bold md:flex">
          <li className="group relative hover:text-[#0AE928]">
            <a
              href=""
              className="transition-opacity duration-300 before:absolute before:top-[-6px] before:h-[5px] before:w-[100%] before:bg-white before:opacity-0 after:right-[-1rem] hover:before:content-[''] group-hover:before:opacity-100"
            >
              Home
            </a>
          </li>

          <li className="">
            <a href="">About</a>
          </li>
          <li className="">
            <a href="">Projects</a>
          </li>
          <li className="">
            <a href="">Skills</a>
          </li>
          <li className="">
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>

      <nav
        className={`absolute mx-auto h-[100vh] w-full bg-[#0E1828] p-5 text-white transition-all duration-300 md:hidden ${showMenu ? "left-[0] top-[90px]" : "-left-[100%] top-[90px]"}`}
      >
        <ul className="flex flex-col items-center gap-10 text-xl font-bold">
          <li className="group relative hover:text-[#0AE928]">
            <a
              href=""
              className="transition-opacity duration-300 before:absolute before:top-[-6px] before:h-[5px] before:w-[100%] before:bg-white before:opacity-0 after:right-[-1rem] hover:before:content-[''] group-hover:before:opacity-100"
            >
              Home
            </a>
          </li>

          <li className="">
            <a href="">About</a>
          </li>
          <li className="">
            <a href="">Projects</a>
          </li>
          <li className="">
            <a href="">Skills</a>
          </li>
          <li className="">
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
