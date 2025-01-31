import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTools, FaIndustry, FaShoppingCart } from "react-icons/fa";

const ManufacturingPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
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
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <FaIndustry size={50} />
          <h3>Precision Manufacturing</h3>
          <p>State-of-the-art technology for high-quality components.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <FaTools size={50} />
          <h3>Custom Solutions</h3>
          <p>Tailored components to meet your specific needs.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <FaShoppingCart size={50} />
          <h3>Online Store (Coming Soon)</h3>
          <p>Browse and purchase components effortlessly.</p>
        </FeatureCard>
      </FeaturesGrid>

      {/* Coming Soon Section */}
      <ComingSoon>
        <h2>🚀 Coming Soon!</h2>
        <p>
          We are working hard to bring our high-quality components to you. Stay
          updated for our launch!
        </p>
      </ComingSoon>
    </Container>
  );
};

export default ManufacturingPage;

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

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 280px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

const ComingSoon = styled.div`
  background: linear-gradient(135deg, #ff7043, #ff8a65);
  color: white;
  padding: 50px;
  border-radius: 15px;
  margin-top: 50px;
`;
