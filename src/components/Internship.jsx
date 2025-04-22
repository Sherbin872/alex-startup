import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Footer } from "./Footer";
import {
  FaCode,
  FaPython,
  FaMicrochip,
  FaDatabase,
  FaMobileAlt,
  FaChartLine,
  FaServer,
  FaRobot,
  FaCertificate,
  FaUserTie,
  FaNetworkWired,
  FaHandsHelping
} from "react-icons/fa";

const InternshipPage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    window.location.href =
      "mailto:technofoasters.info@gmail.com?subject=Internship Application&body=Please attach your resume and mention your preferred internship role(s).";
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
          Launch Your Tech Career with Us! 🚀
        </motion.h1>
        <p>
          Open to all college students - no prior experience needed for most roles. 
          We provide training and mentorship to help you succeed.
        </p>
      </Header>

      {/* Internship Opportunities */}
      <InternshipGrid>
        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaCode size={50} />
          <h3>Frontend Development</h3>
          <p>
            Build responsive web interfaces using React, HTML, CSS, and JavaScript.
            Learn modern frameworks and UI/UX principles.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> React or HTML, CSS, and JavaScript
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Frontend Developer, UI Engineer
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaServer size={50} />
          <h3>Backend Development</h3>
          <p>
            Work with Node.js, Express, databases, and APIs. Learn server-side 
            programming and system architecture.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> Node.js/Python
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Backend Engineer, Full Stack Developer
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaMobileAlt size={50} />
          <h3>Mobile App Development</h3>
          <p>
            Develop cross-platform mobile apps using React Native or Flutter.
            Learn mobile UI design and native features.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> React Native or Flutter
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Mobile Developer, App Architect
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaPython size={50} />
          <h3>Machine Learning</h3>
          <p>
            Develop ML models with Python, TensorFlow, and Scikit-learn.
            Work on computer vision and NLP projects.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> Basic Python
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> ML Engineer, Data Scientist
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaRobot size={50} />
          <h3>Mobile Robotics</h3>
          <p>
            Build robots using Arduino, ESP32, ESP8266. Learn embedded systems,
            sensors, and IoT integration.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> Knowledge in electronics
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Robotics Engineer, IoT Specialist
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaDatabase size={50} />
          <h3>Database Management</h3>
          <p>
            Work with SQL, NoSQL, PostgreSQL. Learn database design, optimization,
            and administration.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> Basic data concepts
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Database Admin, Data Engineer
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaChartLine size={50} />
          <h3>Data Visualization</h3>
          <p>
            Create dashboards with PowerBI and web visualizations with React.
            Transform data into insights.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> PowerBI
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Data Analyst, BI Developer
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>

        <InternshipCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaPython size={50} />
          <h3>Image Processing</h3>
          <p>
            Work with OpenCV, YOLO, Roboflow. Learn computer vision techniques
            for real-world applications.
          </p>
          <Eligibility theme={theme}>
            <strong>Skills:</strong> Basic Python
          </Eligibility>
          <CareerPath>
            <strong>Career Path:</strong> Computer Vision Engineer, AI Specialist
          </CareerPath>
          <ApplyButton theme={theme} onClick={handleApplyClick}>
            Apply Now
          </ApplyButton>
        </InternshipCard>
      </InternshipGrid>

      {/* Why Join Us Section */}
      <WhyJoinSection theme={theme}>
        <h2>Why Join Our Internship Program?</h2>
        <p>
          We're committed to helping you launch your tech career with practical 
          experience and professional development opportunities.
        </p>
        <BenefitsList>
          <BenefitItem theme={theme}>
            <FaHandsHelping size={30} />
            <h4>Hands-On Projects</h4>
            <p>Work on real-world projects that add value to your portfolio and our company.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <FaUserTie size={30} />
            <h4>Expert Mentorship</h4>
            <p>Learn directly from industry professionals with 1:1 guidance.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <FaNetworkWired size={30} />
            <h4>Professional Network</h4>
            <p>Connect with tech professionals and fellow interns across domains.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <FaCertificate size={30} />
            <h4>Certification</h4>
            <p>Earn an internship certificate upon successful completion.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <FaUserTie size={30} />
            <h4>Recommendation Letters</h4>
            <p>Top performers receive personalized recommendation letters.</p>
          </BenefitItem>
          <BenefitItem theme={theme}>
            <FaChartLine size={30} />
            <h4>Career Guidance</h4>
            <p>Resume reviews and interview preparation sessions.</p>
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
  padding: 85px 20px;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Header = styled.div`
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const InternshipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 80px;
  margin-bottom: 50px;
  padding: 0 20px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InternshipCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin: 15px 0;
  }

  p {
    color: ${({ theme }) => theme.text};
    margin-bottom: 15px;
    flex-grow: 1;
  }

`;

const Eligibility = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 10px 0;
  text-align: left;
`;

const CareerPath = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin: 10px 0;
  text-align: left;
  font-weight: 500;
`;

const ApplyButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: auto;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }
`;

const WhyJoinSection = styled.div`
  background: ${({ theme }) => theme.contactBackground};
  color: ${({ theme }) => theme.contactText};
  padding: 50px 20px;
  border-radius: 15px;
  margin: 90px auto 50px auto;
  max-width: 1200px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  h2 {
    color: white;
    margin-bottom: 20px;
  }

  p {
    max-width: 800px;
    margin: 0 auto 30px;
    line-height: 1.6;
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  background: ${({ theme }) => theme.contactCardBackground};
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;
  }

  h4 {
    color: white;
    margin-bottom: 12px;
    font-size: 1.2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0;
    font-size: 0.95rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;