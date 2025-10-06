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
    </>
  );
};

export default App;
