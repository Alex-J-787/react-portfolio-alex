import React from "react";
import Topnav from "./components/topnav/Topnav";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Divider from "./components/divider/Divider";

const App = () => {
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

export default App;
