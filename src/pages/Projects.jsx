import React from "react";
import Topnav from "../components/topnav/Topnav";
import Footer from "../components/footer/Footer";
import NeighborhoodMap from "../components/projects/NeighborhoodMap";
import ProjectsPageTitle from "../components/projects/title/ResumePageTitle";

const Projects = () => {
  return (
    <div>
      <div className="topnav">
        <Topnav />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="header-container">
        <ProjectsPageTitle />
      </div>
      <div className="container">
        <NeighborhoodMap />
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

export default Projects;
