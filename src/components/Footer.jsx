import React, { useContext, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

export const Footer = () => {
  const { darkMode, setDarkMode, theme } = useContext(ThemeContext);

  return (
    <Foooter theme={theme}>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>
            We are dedicated to helping startups grow through expert-led courses
            and practical learning.
          </p>
        </FooterSection>
        <FooterSection theme={theme}>
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
          <SocialIcons theme={theme}>
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
    </Foooter>
  );
};

const Foooter = styled.footer`
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  padding: 40px 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
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
    color: ${({ theme }) => theme.footerText};
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: ${({ theme }) => theme.footerText};
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
    font-size: 20px;
    transition: color 0.3s;
    color: ${({ theme }) => theme.footerText};
    &:hover {
      color: #ff7043;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.footerText};
  }
`;
