import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaRocket,
  FaBriefcase,
  FaUsers,
  FaStar,
  FaChartLine,
  FaLightbulb,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Startup Skills 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover expert-led courses tailored for entrepreneurs.
        </motion.p>

        <SearchBar>
          <input type="text" placeholder="Search for courses..." />
          <button>
            <FaSearch />
          </button>
        </SearchBar>
      </HeroSection>

      {/* Categories Section */}
      <Categories>
        <CategoryCard whileHover={{ scale: 1.1 }}>
          <Link
            to="/product-development"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaRocket size={40} />
            <h3>Product Development</h3>
            <p>Learn to build scalable products.</p>
          </Link>
        </CategoryCard>
        <CategoryCard whileHover={{ scale: 1.1 }}>
          <Link
            to="/project-consultancy"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaBriefcase size={40} />
            <h3>Project Consultancy</h3>
            <p>Get expert advice for your projects.</p>
          </Link>
        </CategoryCard>

        {/* Team Building Card */}
        <CategoryCard whileHover={{ scale: 1.1 }}>
          <Link
            to="/team-building"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaUsers size={40} />
            <h3>Manufacturing</h3>
            <p> Manufacturing components for our own.</p>
          </Link>
        </CategoryCard>
      </Categories>

      {/* Featured Courses */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🔥 Featured Courses
        </motion.h2>
        <CourseGrid>
          <CourseCard whileHover={{ scale: 1.05 }}>
            <h3>Startup Growth 101</h3>
            <p>Master the fundamentals of scaling your startup.</p>
            <Badge>Best Seller</Badge>
          </CourseCard>
          <CourseCard whileHover={{ scale: 1.05 }}>
            <h3>Fundraising & Investors</h3>
            <p>Learn how to pitch and secure funding.</p>
            <Badge>Trending</Badge>
          </CourseCard>
          <CourseCard whileHover={{ scale: 1.05 }}>
            <h3>Digital Marketing for Startups</h3>
            <p>Strategies to attract and retain customers.</p>
            <Badge>New</Badge>
          </CourseCard>
        </CourseGrid>
      </Section>

      {/* Why Choose Us Section */}
      <WhyChooseUs>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <FeaturesGrid>
          <FeatureCard>
            <FaStar size={30} />
            <h3>Expert Instructors</h3>
            <p>Learn from industry leaders with real-world experience.</p>
          </FeatureCard>
          <FeatureCard>
            <FaChartLine size={30} />
            <h3>Practical Learning</h3>
            <p>Hands-on projects to apply your knowledge.</p>
          </FeatureCard>
          <FeatureCard>
            <FaLightbulb size={30} />
            <h3>Innovative Curriculum</h3>
            <p>Cutting-edge content tailored for startups.</p>
          </FeatureCard>
        </FeaturesGrid>
      </WhyChooseUs>

      {/* Testimonials & Stats */}
      <StatsSection>
        <StatCard>
          <h2>1K+</h2>
          <p>Students Enrolled</p>
        </StatCard>
        <StatCard>
          <h2>4.5⭐</h2>
          <p>Average Rating</p>
        </StatCard>
        <StatCard>
          <h2>50+</h2>
          <p>Industry Experts</p>
        </StatCard>
      </StatsSection>

      {/* Call to Action */}
      <CTA>
        <h2>Start Your Learning Journey Today!</h2>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Explore Courses
          </Link>
        </motion.button>
      </CTA>
      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>About Us</h3>
            <p>
              We are dedicated to helping startups grow through expert-led
              courses and practical learning.
            </p>
          </FooterSection>
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Follow Us</h3>
            <SocialIcons>
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialIcons>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p>
            We hope you have a happy learning experience with TechnoFoasters! 😊
          </p>
        </FooterBottom>
      </Footer>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 70px 50px 50px 50px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: white;
`;

const HeroSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 80px 20px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  input {
    padding: 12px;
    width: 300px;
    border: none;
    border-radius: 5px 0 0 5px;
  }

  button {
    padding: 12px;
    background: white;
    border: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }
`;

const Section = styled.div`
  margin: 50px 0;
`;

const CourseGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const CourseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  position: relative;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff7043;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const WhyChooseUs = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 50px 20px;
  border-radius: 15px;
  margin: 50px 0;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;

  h3 {
    margin: 15px 0 10px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 50px 0;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 30px;
  border-radius: 10px;
  width: 150px;
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
    color: #ff7043;
  }
`;
const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 40px 20px;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #ddd;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #ff7043;
        }
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 35px;

  a {
    margin-top: 20%;
    color: white;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #ff7043;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: 14px;
    color: #ddd;
  }
`;
