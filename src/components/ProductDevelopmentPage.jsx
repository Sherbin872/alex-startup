import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
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
        <ProjectCard whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>AI-Powered Analytics</h3>
          <p>
            Transform data into actionable insights with AI-driven solutions.
          </p>
        </ProjectCard>
        <ProjectCard whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>IoT Smart Systems</h3>
          <p>Smart automation to enhance efficiency and reduce costs.</p>
        </ProjectCard>
        <ProjectCard whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram size={50} />
          <h3>Custom Web & App Development</h3>
          <p>Building scalable web and mobile applications tailored to you.</p>
        </ProjectCard>
      </ProjectsGrid>

      {/* Contact Section */}
      <ContactSection>
        <h2>Let's Build Something Amazing Together!</h2>
        <p>Get in touch with us to discuss your project requirements.</p>
        <ContactMethods>
          <ContactCard>
            <FaPhoneAlt size={30} />
            <h4>Call Us</h4>
            <p>+123 456 7890</p>
          </ContactCard>
          <ContactCard>
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
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

const ProjectCard = styled(motion.div)`
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
