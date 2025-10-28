import React from "react";
import Topnav from "../components/topnav/Topnav";
import ResumePageTitle from "../components/resume/title/ResumePageTitle";
import Education from "../components/resume/education/Education";
import ResumeProjects from "../components/resume/resumeProjects/ResumeProjects";
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
      <br></br>
      <br></br>
      <br></br>
      <div className="header-container">
        <ResumePageTitle />
      </div>
      <div className="container">
        <Divider />
        <Education />
        <Divider />
        <ResumeProjects />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
