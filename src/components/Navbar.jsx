import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaBook,
  FaUser,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer darkMode={darkMode}>
      {/* Logo */}
      <Logo whileHover={{ scale: 1.1 }}>🚀 TechnoFoasters</Logo>

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>

      {/* Nav Links */}
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
        <NavItem
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/" ? "active" : ""}
        >
          <Link to="/">
            <FaHome size={20} aria-label="Home" /> Home
          </Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/courses" ? "active" : ""}
        >
          <Link to="/courses">
            <FaBook size={20} aria-label="Courses" /> Courses
          </Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.1 }}
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <Link to="/profile">
            <FaUser size={20} aria-label="Profile" /> Consultancy
          </Link>
        </NavItem>
      </NavLinks>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        whileHover={{ scale: 1.1 }}
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </DarkModeToggle>
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
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  z-index: 1000;
  transition: background 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(motion.h1)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "-100%")};
    width: 100%;
    background: ${({ theme }) => theme.navBackground};
    backdrop-filter: blur(10px);
    padding: 20px;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled(motion.div)`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #ff7043;
    }
  }

  &.active a {
    color: #ff7043;
    font-weight: bold;
  }
`;

const DarkModeToggle = styled(motion.div)`
  cursor: pointer;
  margin-right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;
