import React from "react";
import Copyright from "../components/Copyright";
import Logo from "../components/Logo";
import SocialMedia from "../components/SocialMedia";
const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#293140] rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      <Copyright></Copyright>
      <Logo></Logo>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Footer;
