import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Nav />
      <Footer />
    </>
  );
};

export default App;
