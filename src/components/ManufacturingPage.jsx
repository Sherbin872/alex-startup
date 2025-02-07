import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTools, FaIndustry, FaShoppingCart } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Footer } from "./Footer";

const ManufacturingPage = () => {
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
          High-Quality Components Manufacturing & Sales 🏭
        </motion.h1>
        <p>
          We are bringing top-tier manufacturing solutions to our customers.
          Stay tuned!
        </p>
      </Header>

      {/* Features Section */}
      <FeaturesGrid>
        <FeatureCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaIndustry size={50} />
          <h3>Precision Manufacturing</h3>
          <p>State-of-the-art technology for high-quality components.</p>
        </FeatureCard>
        <FeatureCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaTools size={50} />
          <h3>Custom Solutions</h3>
          <p>Tailored components to meet your specific needs.</p>
        </FeatureCard>
        <FeatureCard theme={theme} whileHover={{ scale: 1.05 }}>
          <FaShoppingCart size={50} />
          <h3>Online Store (Coming Soon)</h3>
          <p>Browse and purchase components effortlessly.</p>
        </FeatureCard>
      </FeaturesGrid>

      {/* Coming Soon Section */}
      <ComingSoon theme={theme}>
        <h2>🚀 Coming Soon!</h2>
        <p>
          We are working hard to bring our high-quality components to you. Stay
          updated for our launch!
        </p>
      </ComingSoon>
      <Footer />
    </Container>
  );
};

export default ManufacturingPage;

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

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled(motion.div)`
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

const ComingSoon = styled.div`
  background: ${({ theme }) => theme.contactBackground};
  color: ${({ theme }) => theme.contactText};
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;
