import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaComments,
  FaClipboardCheck,
  FaLightbulb,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Footer } from "./Footer";

const ConsultancyPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const handleMailClick = () => {
    window.location.href =
      "mailto:sherbin872@gmail.com?subject=Hello&body=Write your message here:";
  };
  const handleCallClick = () => {
    window.location.href = "tel:+9360680379"; // Replace with your phone number
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
          Expert Project Consultancy for Your Success 🚀
        </motion.h1>
        <p>Guiding you from concept to execution with expert advice.</p>
      </Header>

      {/* Services Section */}
      <ServicesGrid>
        <ServiceCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaLightbulb size={50} />
          <h3>Idea Validation</h3>
          <p>Ensure your project idea is feasible and market-ready.</p>
        </ServiceCard>
        <ServiceCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaClipboardCheck size={50} />
          <h3>Project Planning</h3>
          <p>Develop a strategic roadmap for successful execution.</p>
        </ServiceCard>
        <ServiceCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaComments size={50} />
          <h3>Expert Guidance</h3>
          <p>One-on-one mentorship from industry professionals.</p>
        </ServiceCard>
      </ServicesGrid>

      {/* Contact Section */}
      <ContactSection theme={theme}>
        <h2>Let's Take Your Project to the Next Level!</h2>
        <p>Get in touch with us for personalized consultancy.</p>
        <ContactMethods>
          <ContactCard theme={theme} onClick={handleCallClick}>
            <FaPhoneAlt size={30} />
            <h4>Call Us</h4>
            <p>+91 8122921697</p>
          </ContactCard>
          <ContactCard theme={theme} onClick={handleMailClick}>
            <FaEnvelope size={30} />
            <h4>Email Us</h4>
            <p>technofoasters.info@gmail.com</p>
          </ContactCard>
        </ContactMethods>
      </ContactSection>
      <Footer />
    </Container>
  );
};

export default ConsultancyPage;

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

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled(motion.div)`
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

const ContactSection = styled.div`
  background: ${({ theme }) => theme.contactBackground};
  color: ${({ theme }) => theme.contactText};
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.contactCardBackground};
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  h4 {
    color: white;
  }

  p {
    color: ${({ theme }) => theme.contactText};
  }
`;
