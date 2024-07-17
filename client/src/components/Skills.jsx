import React from "react";
import skillsData from "../constant/skillsData";
import Heading from "./Heading";
const Skills = () => {
  return (
    <>
      <div className="mx-auto max-w-[1280px] mt-5">
        <Heading heading="Skills"></Heading>
        <div className="grid w-full grid-cols-3 gap-5  lg:grid-cols-4 mt-10 mb-16">
          {skillsData.map((img, index) => {
            return (
              <div
                className="mx-auto flex h-[100px] w-[100px] flex-col items-center justify-center gap-3 rounded-md bg-[#31333B] text-white shadow-xl duration-150 hover:scale-[1.1] md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px]"
                key={index}
              >
                <img
                  className="w-[30px] md:w-[60px]"
                  src={img.url}
                  loading="eager"
                  alt=""
                  aria-hidden={index >= 12 ? "true" : "false"}
                />
                <h4 className="text-[12px] md:text-[20px]">{img.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
