import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Footer } from "./Footer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Amiya",
    role: "Former Intern, Frontend Development",
    feedback:
      "Interning here was a game-changer for me. I got to work on real projects and learned so much about React and modern web development. Highly recommend!",
  },
  {
    id: 2,
    name: "Reyansh",
    role: "Former Intern, Machine Learning",
    feedback:
      "The mentorship I received during my internship was incredible. I worked on building ML models and gained hands-on experience with Python and TensorFlow.",
  },
  {
    id: 3,
    name: "Abhiprithi",
    role: "Former Intern, Embedded & IoT",
    feedback:
      "This internship helped me bridge the gap between hardware and software. I worked on exciting IoT projects and learned a lot about embedded systems.",
  },
];

const TestimonialsPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  return (
    <Container theme={theme}>
      {/* Header Section */}
      <Header theme={theme}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What People Say About Us 🌟
        </motion.h1>
        <p>Hear from our interns, clients, and collaborators.</p>
      </Header>

      {/* Testimonials Grid */}
      <TestimonialsGrid>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            theme={theme}
            whileHover={{ scale: 1.05 }}
          >
            <QuoteIcon>
              <FaQuoteLeft size={24} />
            </QuoteIcon>
            <Feedback>{testimonial.feedback}</Feedback>
            <QuoteIcon>
              <FaQuoteRight size={24} />
            </QuoteIcon>
            <Name>{testimonial.name}</Name>
            <Role>{testimonial.role}</Role>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      <Footer />
    </Container>
  );
};

export default TestimonialsPage;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 85px 50px;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Header = styled.div`
  margin-bottom: 50px;

  h1 {
    color: ${({ theme }) => theme.primary};
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px;
  border-radius: 15px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 15px;
`;

const Feedback = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const Name = styled.h4`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 5px;
`;

const Role = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;