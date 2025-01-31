import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardCheck,
  FaLightbulb,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ConsultancyPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Expert Project Consultancy for Your Success 🚀
        </motion.h1>
        <p>Guiding you from concept to execution with expert advice.</p>
      </Header>

      {/* Services Section */}
      <ServicesGrid>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <FaLightbulb size={50} />
          <h3>Idea Validation</h3>
          <p>Ensure your project idea is feasible and market-ready.</p>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <FaClipboardCheck size={50} />
          <h3>Project Planning</h3>
          <p>Develop a strategic roadmap for successful execution.</p>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <FaComments size={50} />
          <h3>Expert Guidance</h3>
          <p>One-on-one mentorship from industry professionals.</p>
        </ServiceCard>
      </ServicesGrid>

      {/* Contact Section */}
      <ContactSection>
        <h2>Let's Take Your Project to the Next Level!</h2>
        <p>Get in touch with us for personalized consultancy.</p>
        <ContactMethods>
          <ContactCard>
            <FaPhoneAlt size={30} />
            <h4>Call Us</h4>
            <p>+123 456 7890</p>
          </ContactCard>
          <ContactCard>
            <FaEnvelope size={30} />
            <h4>Email Us</h4>
            <p>consultancy@mail.com</p>
          </ContactCard>
        </ContactMethods>
      </ContactSection>
    </Container>
  );
};

export default ConsultancyPage;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 85px 50px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 280px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #ff7043, #ff8a65);
  color: white;
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
`;
