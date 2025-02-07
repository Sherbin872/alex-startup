import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaClock,
  FaStar,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLanguage,
  FaUsers,
  FaLevelUpAlt,
  FaListAlt,
  FaRupeeSign,
} from "react-icons/fa";
import { Footer } from "./Footer";

const CourseDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { theme } = useContext(ThemeContext); // Access the current theme
  const course = location.state?.course;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  if (!course)
    return <ErrorMessage theme={theme}>Course Not Found</ErrorMessage>;

  return (
    <Container theme={theme}>
      {/* Course Header */}
      <Header theme={theme}>
        <motion.img
          src={course.image}
          alt={course.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {course.title}
        </motion.h1>
      </Header>

      {/* Course Details */}
      <DetailsGrid>
        {[
          {
            icon: <FaClock size={30} />,
            label: "Duration",
            value: course.duration,
          },
          {
            icon: <FaStar size={30} />,
            label: "Rating",
            value: `${course.rating} ⭐`,
          },
          {
            icon: <FaLevelUpAlt size={30} />,
            label: "Level",
            value: course.level,
          },
          {
            icon: <FaLanguage size={30} />,
            label: "Language",
            value: course.language,
          },
          {
            icon: <FaUsers size={30} />,
            label: "Enrollments",
            value: `${course.enrollments} students`,
          },
        ].map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <DetailCard theme={theme}>
              {detail.icon}
              <h4>{detail.label}</h4>
              <p>{detail.value}</p>
            </DetailCard>
          </motion.div>
        ))}
      </DetailsGrid>

      {/* Course Pricing */}
      <PriceTag theme={theme}>
        <FaRupeeSign size={25} />
        <span>{course.price.replace("₹", "")}</span>
      </PriceTag>

      {/* Prerequisites */}
      <Section theme={theme}>
        <h2>Prerequisites</h2>
        <ul>
          {course.prerequisites.map((req, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              theme={theme}
            >
              {req}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* Syllabus */}
      <Section theme={theme}>
        <h2>Syllabus</h2>
        <ul>
          {course.syllabus.map((lesson, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              theme={theme}
            >
              <FaListAlt /> {lesson}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* Call to Action */}
      <CTA theme={theme}>
        <h2>Enroll in {course.title} Now!</h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Join Now
        </motion.button>
      </CTA>
      <Footer />
    </Container>
  );
};

export default CourseDetails;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 120px 50px 50px 50px;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Header = styled.div`
  margin-bottom: 50px;
  img {
    width: 100%;
    max-width: 600px;
    border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-size: 2.5rem;
    margin-top: 20px;
    color: ${({ theme }) => theme.primary};
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
`;

const DetailCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  h4 {
    margin: 15px 0 10px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
  }
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  background: ${({ theme }) => theme.priceBackground};
  padding: 15px 30px;
  border-radius: 15px;
  margin: 20px auto;
  width: fit-content;
  color: ${({ theme }) => theme.priceText};
  gap: 10px;
  box-shadow: 0px 5px 15px rgba(255, 183, 3, 0.3);
`;

const Section = styled.div`
  margin-top: 40px;
  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: ${({ theme }) => theme.listBackground};
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    transition: background 0.3s ease;
    &:hover {
      background: ${({ theme }) => theme.listHoverBackground};
    }
  }
`;

const CTA = styled.div`
  background: ${({ theme }) => theme.ctaBackground};
  padding: 50px;
  border-radius: 20px;
  margin-top: 50px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.ctaText};
  }
  button {
    background: ${({ theme }) => theme.buttonBackground};
    padding: 15px 30px;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.buttonText};
    font-weight: bold;
    transition: background 0.3s ease, color 0.3s ease;
    &:hover {
      background: ${({ theme }) => theme.buttonHoverBackground};
      color: ${({ theme }) => theme.buttonHoverText};
    }
  }
`;

const ErrorMessage = styled.h2`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.primary};
`;
