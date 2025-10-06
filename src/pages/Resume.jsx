import React from "react";
import Topnav from "../components/topnav/Topnav";
import ResumeTitle from "../components/resume/resumetitle/ResumeTitle";
import Education from "../components/resume/education/Education";
import Projects from "../components/resume/projects/Projects";
import Experience from "../components/resume/experience/Experience";
import Skills from "../components/resume/skills/Skills";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";

const Resume = () => {
  return (
    <>
      <div className="topnav">
        <Topnav />
      </div>
      <div className="header-container">
        <ResumeTitle />
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
