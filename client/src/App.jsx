import React, { useState } from "react";
import "./App.css";
import Header from "./ui/Header";
import Banner from "./ui/Banner";
import About from "./components/pages/About";
import Main from "./ui/Main";
import Footer from "./ui/Footer";

import ParticleAnimation from "./components/ParticleAnimation";
const App = () => {
  console.log(import.meta.env)
  const [showAbout, setShowAbout] = useState(false)
  // console.log(showAbout)
  return (
    <>
      <ParticleAnimation />
      <Header />
      <Banner setShowAbout={setShowAbout} />
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
      <Main />
      <Footer />
    </>

  );
};

export default App;
