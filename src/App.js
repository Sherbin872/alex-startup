import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import ProductDevelopmentPage from "./components/ProductDevelopmentPage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ProjectConsultancyPage from "./components/ProjectConsultancyPage";
import TeamBuildingPage from "./components/ManufacturingPage";
import CourseDetails from "./components/CourseDetails";
import Internship from "./components/Internship";
import TestimonialsPage from "./components/Testimonials.jsx";
import ContactPage from "./components/ContactPage.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/testimonial" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
