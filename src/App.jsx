import React from "react";
import Topnav from "./components/topnav/Topnav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Topnav />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
