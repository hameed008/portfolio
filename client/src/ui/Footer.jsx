import React from "react";
import Copyright from "../components/Copyright";
import Logo from "../components/Logo";
import SocialMedia from "../components/SocialMedia";
const Footer = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-[#293140] rounded-tl-[70px] rounded-tr-[70px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]">
      <Copyright></Copyright>
      <Logo></Logo>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Footer;
