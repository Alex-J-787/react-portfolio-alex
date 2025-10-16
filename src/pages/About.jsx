import React from "react";
import Topnav from "../components/topnav/Topnav";
import Footer from "../components/footer/Footer";
import AboutMe from "../components/about/aboutme/AboutMe";
import ProfessionalHeadshot from "../assets/ProfessionalHeadshot.jpeg";

const About = () => {
  return (
    <div>
      <div className="topnav">
        <Topnav />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="header-container">
        <AboutMe />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
