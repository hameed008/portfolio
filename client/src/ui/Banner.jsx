import React from "react";
import Button from "../components/Button";
import { Typewriter } from "react-simple-typewriter";

const Banner = ({ setShowAbout }) => {
  return (
    <>
      <div className="absolute left-[50%] top-[50%] mx-auto w-[90%] min-w-[80%] -translate-x-[50%] -translate-y-[50%] lg:-translate-y-[40%] px-[10px] text-white lg:px-[100px] 2xl:px-[300px]">
        <div className="flex items-center justify-center">
          <div>
            <div className="font-concert-one">
              <p className="text-4xl md:text-5xl lg:text-8xl">
                <span>Hi I'm</span>
                <span className="text-red-500">
                  {" "}
                  Hameed
                  <span className="ml-1">
                    <img
                      src="waving-hand-sign.svg"
                      alt=""
                      className="inline-block w-[25px] animate-rotate pb-2 md:w-[40px] lg:w-[70px] lg:pb-4"
                    />
                  </span>
                </span>
              </p>

              <div className="text-2xl md:text-3xl">
                <span>and I'm a</span>

                <span className="ml-2 text-2xl text-[#0AE928] md:text-4xl">
                  <Typewriter
                    words={[
                      "MERN Stack Developer",
                      "React Developer",
                      "Frontend Enthusiast",
                      "Dedicated Programmer",
                      "Team Person",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={110}
                    deleteSpeed={130}
                    cursorBlinking={false}
                  />
                </span>
              </div>
            </div>

            <div className="mt-7 text-justify text-lg md:mt-10 md:text-2xl">
              <p>
                A passionate Full Stack Web Developer 🚀 having a special
                interest in Frontend technologies and experience of building Web
                applications JavaScript / Reactjs / Nodejs and some other cool
                libraries and frameworks.
              </p>
            </div>
          </div>
        </div>
        <Button setShowAbout={setShowAbout}></Button>
      </div>
    </>
  );
};

//   const handleDone = () => {
//     console.log(`Done after 5 loops!`);
//   };

//   return (
//     <div className="App">
//       <h1
//         style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
//       >
//         Life is simple{" "}
//         <span style={{ color: "red", fontWeight: "bold" }}>
//           {/* Style will be inherited from the parent element */}
//           <Typewriter
//             words={["Eat", "Sleep", "Code", "Repeat!"]}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={30}
//             deleteSpeed={30}
//             delaySpeed={1000}
//             onLoopDone={handleDone}
//             cursorBlinking={false}
//           />
//         </span>
//       </h1>
//     </div>
//   );
// };

export default Banner;
