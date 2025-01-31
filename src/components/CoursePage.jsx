import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "React Mastery",
    instructor: "John Doe",
    price: "$49",
    image: "",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    instructor: "Jane Smith",
    price: "$39",
    image: "",
  },
  {
    id: 3,
    title: "Full Stack Web Dev",
    instructor: "Alex Johnson",
    price: "$79",
    image: "",
  },
  {
    id: 4,
    title: "Game Development",
    instructor: "Mark Brown",
    price: "$99",
    image: "",
  },
];

const Courses = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer darkMode={darkMode}>
      {/* Search Bar */}
      <SearchBar>
        <FaSearch />
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>

      {/* Course Cards */}
      <CourseGrid>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} whileHover={{ scale: 1.05 }}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <Price>{course.price}</Price>
            <EnrollButton whileTap={{ scale: 0.9 }}>Enroll Now</EnrollButton>
          </CourseCard>
        ))}
      </CourseGrid>
    </PageContainer>
  );
};

export default Courses;

// Styled Components
const PageContainer = styled.div`
  padding: 100px 40px 40px 40px;
  text-align: center;
  min-height: 100vh;
  background: ${({ darkMode }) =>
    darkMode ? "#1a1a2e" : "rgba(255, 255, 255, 0.2)"};
  backdrop-filter: blur(10px);
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
  transition: background 0.3s ease-in-out;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 10px 15px;
  width: 50%;
  margin: 20px auto;
  backdrop-filter: blur(10px);
  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    color: white;
    margin-left: 10px;
  }
  svg {
    color: white;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CourseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  img {
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    color: #ddd;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #ffcc00;
`;

const EnrollButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff512f, #dd2476);
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    background: linear-gradient(135deg, #dd2476, #ff512f);
  }
`;

const DarkModeToggle = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border: none;
  color: ${({ dark }) => (dark ? "white" : "black")};
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
`;
