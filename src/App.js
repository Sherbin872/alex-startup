import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import ProductDevelopmentPage from "./components/ProductDevelopmentPage";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import ProjectConsultancyPage from "./components/ProjectConsultancyPage";
import TeamBuildingPage from "./components/ManufacturingPage";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses-details" element={<CourseDetails />} />
        <Route
          path="/project-consultancy"
          element={<ProjectConsultancyPage />}
        />
        <Route path="/team-building" element={<TeamBuildingPage />} />
        <Route
          path="/product-development"
          element={<ProductDevelopmentPage />}
        />
      </Routes>
      <DarkModeToggle />
    </Router>
  );
}

export default App;
