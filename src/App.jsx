import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/projectsPages/Projects";
import NeighborhoodMapPage from "./pages/projectsPages/NeighborhoodMapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/neighborhoodmap" element={<NeighborhoodMapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
