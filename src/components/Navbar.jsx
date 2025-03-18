import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaBook,
  FaUser,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaUserGraduate ,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode, theme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavContainer theme={theme}>
      {/* Logo */}
      <Logo theme={theme} whileHover={{ scale: 1.1 }}>
        🚀 TechnoFoasters
      </Logo>

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={toggleMobileMenu} theme={theme}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>

      {/* Nav Links */}
      <NavLinks isMobileMenuOpen={isMobileMenuOpen} theme={theme}>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={location.pathname === "/" ? "active" : ""}
          theme={theme}
          onClick={closeMobileMenu}
        >
          <Link to="/">
            <FaHome size={20} aria-label="Home" /> Home
          </Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={location.pathname === "/courses" ? "active" : ""}
          theme={theme}
          onClick={closeMobileMenu}
        >
          <Link to="/courses">
            <FaBook size={20} aria-label="Courses" /> Courses
          </Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={location.pathname === "/internship" ? "active" : ""}
          theme={theme}
          onClick={closeMobileMenu}
        >
          <Link to="/internship">
            <FaUserGraduate size={20} aria-label="Internship" /> Internships
          </Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={
            location.pathname === "/project-consultancy" ? "active" : ""
          }
          theme={theme}
          onClick={closeMobileMenu}
        >
          <Link to="/project-consultancy">
            <FaUser size={20} aria-label="Profile" /> Consultancy
          </Link>
        </NavItem>

        {/* Dark Mode Toggle inside Mobile Menu */}
        <MobileDarkModeToggle
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          theme={theme}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </MobileDarkModeToggle>
      </NavLinks>

      {/* Dark Mode Toggle for Desktop */}
      <DesktopDarkModeToggle
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        theme={theme}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </DesktopDarkModeToggle>
    </NavContainer>
  );
};

export default Navbar;

// Styled Components
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  position: fixed;
  width: 95%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  // background: ${({ theme }) => theme.navBackground};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
  z-index: 1000;
  transition: background 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px 20px 15px 20px;
  }
`;

const Logo = styled(motion.h1)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    // align-items: center;
    position: absolute;
    top: 60px;
    left: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "-110%")};
    width: 85%;
    background: ${({ theme }) => theme.navBackground};
    backdrop-filter: blur(10px);
    padding: 20px 20px 30px 20px;
    transition: left 0.3s ease-in-out;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(motion.div)`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-2px);
    }
  }

  &.active a {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const DesktopDarkModeToggle = styled(motion.div)`
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.toggleBackground};
  backdrop-filter: blur(5px);
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.toggleHoverBackground};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileDarkModeToggle = styled(motion.div)`
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.toggleBackground};
  backdrop-filter: blur(5px);
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.toggleHoverBackground};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
    margin-right: 25px;
  }
`;
