import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { FaPhoneAlt, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const ProjectsPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

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
          We Build Innovative Projects for You 🚀
        </motion.h1>
        <p>Custom solutions tailored to your business needs.</p>
      </Header>

      {/* Projects Showcase */}
      <ProjectsGrid>
        <ProjectCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>AI-Powered Analytics</h3>
          <p>
            Transform data into actionable insights with AI-driven solutions.
          </p>
        </ProjectCard>
        <ProjectCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>IoT Smart Systems</h3>
          <p>Smart automation to enhance efficiency and reduce costs.</p>
        </ProjectCard>
        <ProjectCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>Custom Web & App Development</h3>
          <p>Building scalable web and mobile applications tailored to you.</p>
        </ProjectCard>
      </ProjectsGrid>

      {/* Contact Section */}
      <ContactSection theme={theme}>
        <h2>Let's Build Something Amazing Together!</h2>
        <p>Get in touch with us to discuss your project requirements.</p>
        <ContactMethods>
          <ContactCard theme={theme} onClick={handleCallClick}>
            <FaPhoneAlt size={30} />
            <h4>Call Us</h4>
            <p>+123 456 7890</p>
          </ContactCard>
          <ContactCard theme={theme} onClick={handleMailClick}>
            <FaEnvelope size={30} />
            <h4>Email Us</h4>
            <p>info@yourcompany.com</p>
          </ContactCard>
        </ContactMethods>
      </ContactSection>
    </Container>
  );
};

export default ProjectsPage;

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

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectCard = styled(motion.div)`
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
    color: ${({ theme }) => theme.primary};
  }

  p {
    color: ${({ theme }) => theme.contactText};
  }
`;
