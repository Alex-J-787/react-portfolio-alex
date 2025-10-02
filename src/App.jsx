import React from "react";
import Topnav from "./components/topnav/Topnav";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Topnav />
      <Header />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      <div class="btt-background"></div>
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          aria-labelledby="btt-icon-title"
          role="img"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title id="btt-icon-title">Arrow Up</title>
          <path
            data-name="layer2"
            fill="none"
            stroke="#202020"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M32 10v46"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
          <path
            data-name="layer1"
            fill="none"
            stroke="#202020"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M50 20 L32 4 14 20"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <p class="text">To Top</p>
    </>
  );
};

export default App;
