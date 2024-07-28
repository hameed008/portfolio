import React, { useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import { SiMongodb, SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
// color = #191919
const About = ({ showAbout, setShowAbout }) => {
  useEffect(() => {
    if (showAbout) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showAbout]);

  const [hoverMongoDB, setHoverMongoDB] = useState(false);
  const [hoverExpress, setHoverExpress] = useState(false);
  const [hoverReact, setHoverReact] = useState(false);
  const [hoverNode, setHoverNode] = useState(false);

  const skills = [
    "javascript",
    "#react.js",
    "#redux",
    "#node.js",
    "#express",
    "#mongoDB",
    "#mongoose",
    "#html",
    "#css",
    "#sass",
    "#bootstrap",
    "#tailwind",
    "#git",
    "#github",
  ];
  return (
    <>
      <div
        className={`fixed left-[50%] top-[50%] z-10 mx-auto w-[90%] -translate-x-[50%] -translate-y-[45%] rounded-md bg-[#31333B] px-[30px] py-[40px] shadow-xl lg:w-[70%] xl:h-[75%] ${showAbout ? "block" : "hidden"} duration-150 ease-in-out`}
      >
        <div
          className="absolute right-[15px] top-[15px] rounded-full border-[1px] border-gray-600 p-[5px] text-white shadow-inner duration-150 hover:bg-white hover:p-[7px] hover:text-black"
          onClick={() => {
            setShowAbout(false);
          }}
        >
          <RxCross1 className="font-bold duration-150 hover:rotate-180" />
        </div>

        <div className="grid text-white xl:grid-cols-2">
          <div className="text-center xl:text-left">
            <h1 className="my-5 text-3xl text-red-500">About Me</h1>
            <p className="my-3 text-justify text-[14px] md:my-5 md:text-[16px]">
              I help business owners and busy web developers to design & develop
              creative websites that fits their vision and attracts the visitors
              to stay for ever. Technologies and tools that I use to create such
              awesome websites.
            </p>
            <div className="mb-[50px] flex flex-wrap gap-2 text-justify">
              {skills.map((skill, index) => (
                <div
                  className="rounded-2xl border-[1px] border-gray-600 px-3 py-1 text-[12px]"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
            <h1 className="mb-[50px] text-3xl text-red-500 md:mb-[55px]">
              Mern Stack
            </h1>
            <div className="text flex justify-center gap-4 md:gap-7 xl:justify-start">
              <Tooltip
                lang="MongoDB"
                label="M"
                icon={<SiMongodb className="text-5xl md:text-6xl" />}
                hovered={hoverMongoDB}
                setHovered={setHoverMongoDB}
                bgPrimary="bg-green"
                textSecondary="text-white"
                textPrimary="text-green"
                afterBg="mongoDB"
              ></Tooltip>

              <Tooltip
                lang="Express.JS"
                label="E"
                icon={<SiExpress className="text-5xl md:text-6xl" />}
                hovered={hoverExpress}
                setHovered={setHoverExpress}
                bgPrimary="bg-white"
                textSecondary="text-black"
                textPrimary="text-white"
                afterBg="express"
              ></Tooltip>

              <Tooltip
                lang="React.JS"
                label="R"
                icon={<FaReact className="text-5xl md:text-6xl" />}
                hovered={hoverReact}
                setHovered={setHoverReact}
                bgPrimary="bg-cyan"
                textSecondary="text-black"
                textPrimary="text-cyan"
                afterBg="react"
              ></Tooltip>

              <Tooltip
                lang="Node.JS"
                label="N"
                icon={<FaNodeJs className="text-5xl md:text-6xl" />}
                hovered={hoverNode}
                setHovered={setHoverNode}
                bgPrimary="bg-lightGreen"
                textSecondary="text-black"
                textPrimary="text-lightGreen"
                afterBg="node"
              ></Tooltip>
            </div>
            <div></div>
          </div>
          <div className="">
            <img
              src="coder.svg"
              alt=""
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-[rgba(0, 0, 0, 0.5)] absolute left-0 top-0 h-[100%] w-[100%] backdrop-blur-[4px] transition-all duration-150 ${showAbout ? "visible opacity-100" : "invisible opacity-0"}`}
      ></div>
    </>
  );
};

export default About;
