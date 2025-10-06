import React from "react";
import Topnav from "../topnav/Topnav";
import Header from "./header/Header";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Footer from "../footer/Footer";
import Divider from "../divider/Divider";

const Resume = () => {
  return (
    <>
      <div className="topnav">
        <Topnav />
      </div>
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
