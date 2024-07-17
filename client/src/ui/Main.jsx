import React from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
Contact

const Main = () => {
  return (
    <div className="blurred-border-top relative w-full p-5 pb-16">
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Main;
