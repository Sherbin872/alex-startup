import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Footer } from "./Footer";
import { FaCode, FaPython, FaMicrochip } from "react-icons/fa";

const InternshipPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const handleApplyClick = () => {
    window.location.href =
      "mailto:internships@yourcompany.com?subject=Internship Application&body=Please attach your resume and cover letter.";
  };

  return (
    <Container theme={theme}>
      {/* Header Section */}
      <Header theme={theme}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kickstart Your Career with Us! 🚀
        </motion.h1>
        <p>
          Open to college students pursuing any degree. Gain hands-on experience
          and work on real-world projects.
        </p>
      </Header>

      {/* Internship Opportunities */}
      <InternshipGrid>
        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaCode size={50} />
          <h3>Frontend Web Development</h3>
          <p>
            Build responsive and user-friendly web interfaces using modern
            technologies like React, HTML, CSS, and JavaScript.
          </p>
          <Eligibility theme={theme}>
            <strong>Eligibility:</strong> College students pursuing any degree.
          </Eligibility>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>
        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaPython size={50} />
          <h3>Machine Learning using Python</h3>
          <p>
            Develop and deploy machine learning models using Python, TensorFlow,
            and Scikit-learn to solve real-world problems.
          </p>
          <Eligibility theme={theme}>
            <strong>Eligibility:</strong> College students pursuing any degree.
          </Eligibility>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>
        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaMicrochip size={50} />
          <h3>Embedded & IoT</h3>
          <p>
            Work on embedded systems and IoT projects, integrating hardware and
            software for smart solutions.
          </p>
          <Eligibility theme={theme}>
            <strong>Eligibility:</strong> College students pursuing any degree.
          </Eligibility>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>
      </InternshipGrid>

      {/* Why Join Us Section */}
      <WhyJoinSection theme={theme}>
        <h2>Why Join Us?</h2>
        <p>
          At our company, we believe in nurturing talent and providing a platform
          for growth. Here's why you should join us:
        </p>
        <BenefitsList>
          <BenefitItem theme={theme}>
            <h4>Hands-On Experience</h4>
            <p>Work on real projects that impact our business and customers.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <h4>Mentorship</h4>
            <p>Learn from industry experts and grow your skills.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <h4>Networking</h4>
            <p>Connect with professionals and build your career network.</p>
          </BenefitItem>
        </BenefitsList>
      </WhyJoinSection>

      <Footer />
    </Container>
  );
};

export default InternshipPage;

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

const InternshipGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InternshipCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px;
  border-radius: 15px;
  width: 280px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  h3 {
    color: ${({ theme }) => theme.primary};
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`;

const Eligibility = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-top: 15px;
`;

const ApplyButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

const WhyJoinSection = styled.div`
  background: ${({ theme }) => theme.contactBackground};
  color: ${({ theme }) => theme.contactText};
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const BenefitsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitItem = styled.div`
  background: ${({ theme }) => theme.contactCardBackground};
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  text-align: center;
  transition: background 0.3s ease-in-out;

  h4 {
    color: ${({ theme }) => theme.primary};
  }

  p {
    color: ${({ theme }) => theme.contactText};
  }
`;