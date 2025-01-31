import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaClock,
  FaStar,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";

const CourseDetails = () => {
  return (
    <Container>
      {/* Course Header */}
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mastering Startup Growth 🚀
        </motion.h1>
        <p>
          Learn the strategies to scale and succeed in your startup journey.
        </p>
      </Header>

      {/* Course Overview */}
      <Overview>
        <DetailCard>
          <FaClock size={30} />
          <h4>Duration</h4>
          <p>6 Weeks</p>
        </DetailCard>
        <DetailCard>
          <FaStar size={30} />
          <h4>Rating</h4>
          <p>4.8/5</p>
        </DetailCard>
        <DetailCard>
          <FaChalkboardTeacher size={30} />
          <h4>Instructor</h4>
          <p>John Doe</p>
        </DetailCard>
        <DetailCard>
          <FaBookOpen size={30} />
          <h4>Modules</h4>
          <p>12 Comprehensive Lessons</p>
        </DetailCard>
      </Overview>

      {/* Course Content */}
      <ContentSection>
        <h2>What You Will Learn</h2>
        <ul>
          <li>🚀 Startup fundamentals & strategy</li>
          <li>💰 Fundraising and pitching to investors</li>
          <li>📈 Growth hacking & scaling techniques</li>
          <li>🛠 Product development best practices</li>
          <li>🎯 Market analysis & customer targeting</li>
        </ul>
      </ContentSection>

      {/* Call to Action */}
      <CTA>
        <h2>Enroll Now & Start Your Journey!</h2>
        <button>Join Now</button>
      </CTA>
    </Container>
  );
};

export default CourseDetails;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 70px 50px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

const DetailCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 180px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
`;

const ContentSection = styled.div`
  margin: 50px 0;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    font-size: 18px;
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
  }
`;
