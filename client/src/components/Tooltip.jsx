import React from "react";
const Tooltip = ({
  lang,
  label,
  icon,
  hovered,
  setHovered,
  bgPrimary,
  textPrimary,
  textSecondary,
  afterBg,
}) => {
  return (
    <div className="relative flex justify-center">
      <div
        className={`${bgPrimary} ${textSecondary} tool-tip ${afterBg} absolute flex h-[33px] w-[100px] items-center justify-center rounded-3xl text-[14px] ease-cubic-bezier md:h-[40px] md:w-[120px] md:text-[16px] ${!hovered ? "top-[-10px] opacity-0 duration-300" : "top-[-47px] opacity-100 duration-300 md:top-[-55px]"}`}
      >
        {lang}
      </div>

      <div
        className={`${textPrimary} relative flex w-[60px] flex-col items-center justify-center gap-3`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {icon}
        <h2 className="text-2xl md:text-4xl">{label}</h2>
      </div>
    </div>
  );
};

export default Tooltip;
