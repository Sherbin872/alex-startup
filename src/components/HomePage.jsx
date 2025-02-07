import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaRocket,
  FaBriefcase,
  FaUsers,
  FaStar,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { Footer } from "./Footer";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import courses from "../assets/coursesData";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);
  const navigate = useNavigate();
  const { darkMode, setDarkMode, theme } = useContext(ThemeContext);
  const filteredCourses = courses.filter((course) =>
    [1, 2, 4].includes(course.id)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${searchQuery.trim()}`);
    }
  };

  return (
    <Container theme={theme}>
      {/* Hero Section */}
      <HeroSection theme={theme}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Startup Skills 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover expert-led courses tailored for entrepreneurs.
        </motion.p>
        <form onSubmit={handleSearch}>
          <SearchBar theme={theme}>
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </SearchBar>
        </form>
      </HeroSection>

      {/* Categories Section */}
      <Categories>
        <CategoryCard theme={theme} whileHover={{ scale: 1.1 }}>
          <Link
            to="/product-development"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaRocket size={40} />
            <h3>Product Development</h3>
            <p>Learn to build scalable products.</p>
          </Link>
        </CategoryCard>
        <CategoryCard theme={theme} whileHover={{ scale: 1.1 }}>
          <Link
            to="/project-consultancy"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaBriefcase size={40} />
            <h3>Project Consultancy</h3>
            <p>Get expert advice for your projects.</p>
          </Link>
        </CategoryCard>

        {/* Team Building Card */}
        <CategoryCard theme={theme} whileHover={{ scale: 1.1 }}>
          <Link
            to="/team-building"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaUsers size={40} />
            <h3>Manufacturing</h3>
            <p> Manufacturing components for our own.</p>
          </Link>
        </CategoryCard>
      </Categories>

      {/* Featured Courses */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🔥 Featured Courses
        </motion.h2>
        <CourseGrid>
          {filteredCourses.map((course) => (
            <CourseCard
              theme={theme}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/course/${course.id}`, {
                  state: { course },
                })
              }
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Badge theme={theme}>{course.badge}</Badge>
            </CourseCard>
          ))}
        </CourseGrid>
      </Section>

      {/* Why Choose Us Section */}
      <WhyChooseUs theme={theme}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <FeaturesGrid>
          <FeatureCard theme={theme}>
            <FaStar size={30} />
            <h3>Expert Instructors</h3>
            <p>Learn from industry leaders with real-world experience.</p>
          </FeatureCard>
          <FeatureCard theme={theme}>
            <FaChartLine size={30} />
            <h3>Practical Learning</h3>
            <p>Hands-on projects to apply your knowledge.</p>
          </FeatureCard>
          <FeatureCard theme={theme}>
            <FaLightbulb size={30} />
            <h3>Innovative Curriculum</h3>
            <p>Cutting-edge content tailored for startups.</p>
          </FeatureCard>
        </FeaturesGrid>
      </WhyChooseUs>

      {/* Testimonials & Stats */}
      <StatsSection>
        <StatCard theme={theme}>
          <h2>1K+</h2>
          <p>Students Enrolled</p>
        </StatCard>
        <StatCard theme={theme}>
          <h2>4.5⭐</h2>
          <p>Average Rating</p>
        </StatCard>
        <StatCard theme={theme}>
          <h2>50+</h2>
          <p>Industry Experts</p>
        </StatCard>
      </StatsSection>

      {/* Call to Action */}
      <CTA theme={theme}>
        <h2>Start Your Learning Journey Today!</h2>
        <Link
          to="/courses"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Explore Courses
          </motion.button>
        </Link>
      </CTA>
      <Footer />
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 70px 50px 50px 50px;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 50px 20px 45px 20px;
  }
`;

const HeroSection = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  backdrop-filter: blur(10px);
  padding: 60px 20px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 40px 15px;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  input {
    padding: 12px;
    width: 100%;
    max-width: 300px;
    border: none;
    border-radius: 5px 0 0 5px;
    background: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
  }

  button {
    padding: 12px;
    background: ${({ theme }) => theme.buttonBackground};
    border: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    color: ${({ theme }) => theme.buttonText};
  }

  @media (max-width: 768px) {
    gap: 10px;

    input {
      width: 80%;
      max-width: none;
      border-radius: 5px;
    }

    button {
      width: 15%;
      border-radius: 5px;
    }
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }
`;

const Section = styled.div`
  margin: 50px 50px;

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CourseCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const WhyChooseUs = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 50px 20px;
  border-radius: 15px;
  margin: 50px 0;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  h3 {
    margin: 15px 0 10px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 120px;
  }
`;

const CTA = styled.div`
  background: linear-gradient(135deg, #ff7043, #ff8a65);
  color: white;
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;

  button {
    background: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    color: #ff7043;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
    margin-left: 30px;
    margin-right: 30px;

    h2 {
      font-size: 1.5rem;
    }

    button {
      font-size: 16px;
    }
  }
`;
