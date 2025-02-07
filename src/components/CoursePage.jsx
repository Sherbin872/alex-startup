import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import courses from "../assets/coursesData";
import { Footer } from "./Footer";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Access the current theme
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  // Filter courses based on the search query
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input changes and update the URL
  const handleSearch = (e) => {
    const query = e.target.value;
    const newParams = new URLSearchParams();
    if (query) newParams.set("search", query);
    navigate(`?${newParams.toString()}`, { replace: true });
  };

  return (
    <PageContainer theme={theme}>
      {/* Search Bar */}
      <SearchBar theme={theme}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </SearchBar>

      {/* Course Cards */}
      <CourseGrid>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/course/${course.id}`, { state: { course } })
              }
              theme={theme}
            >
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <Price theme={theme}>{course.price}</Price>
              <EnrollButton whileTap={{ scale: 0.9 }} theme={theme}>
                View Details
              </EnrollButton>
            </CourseCard>
          ))
        ) : (
          <NoResults theme={theme}>No courses found.</NoResults>
        )}
      </CourseGrid>
      <Footer />
    </PageContainer>
  );
};

export default Courses;

// Styled Components
const PageContainer = styled.div`
  padding: 100px 40px 40px 40px;
  text-align: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.searchBackground};
  border-radius: 12px;
  padding: 10px 15px;
  width: 50%;
  margin: 20px auto;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    margin-left: 10px;
    transition: color 0.3s ease-in-out;
  }

  svg {
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CourseCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  max-width: 320px;
  min-width: 280px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    margin: 10px 0;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s ease-in-out;
`;

const EnrollButton = styled(motion.button)`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

const NoResults = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  margin-top: 20px;
  transition: color 0.3s ease-in-out;
`;
