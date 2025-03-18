import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Footer } from "./Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/8870122866?text=${whatsappMessage}`, "_blank");

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
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
          Let's Connect! 🌟
        </motion.h1>
        <p>We're here to help. Reach out for inquiries, collaborations, or feedback.</p>
      </Header>

      {/* Contact Layout */}
      <ContactLayout>
        {/* Contact Form */}
        <ContactForm theme={theme} onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here"
              rows="5"
              required
            />
          </FormGroup>
          <SubmitButton type="submit" theme={theme}>
            <FaWhatsapp size={20} /> Send via WhatsApp
          </SubmitButton>
        </ContactForm>

        {/* Contact Information */}
        <ContactInfo theme={theme}>
          <h2>Contact Information</h2>
          <ContactCard theme={theme} onClick={() => window.open("tel:+8870122866", "_blank")}>
            <FaPhoneAlt size={30} />
            <h4>Call Us</h4>
            <p>+91 8870122866</p>
          </ContactCard>
          <ContactCard theme={theme} onClick={() => window.open("mailto:info@yourcompany.com", "_blank")}>
            <FaEnvelope size={30} />
            <h4>Email Us</h4>
            <p>info@yourcompany.com</p>
          </ContactCard>
          <ContactCard theme={theme}>
            <FaMapMarkerAlt size={30} />
            <h4>Visit Us</h4>
            <p>123 Startup Street, Tech City, World</p>
          </ContactCard>
        </ContactInfo>
      </ContactLayout>

      {/* Map Integration */}
      <MapContainer>
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8837957064825!2d77.7232846709458!3d8.702584174912563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041214b8cfaca1%3A0xd1d2c0cd7d61ccd7!2sTirunelveli%20New%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1742292683986!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
        
      </MapContainer>

      <Footer />
    </Container>
  );
};

export default ContactPage;

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

const ContactLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactForm = styled.form`
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px 50px 30px 30px;
  border-radius: 15px;
  width: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.308);
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.text}100; // 50% opacity
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primaryHover};
      box-shadow: 0 0 5px ${({ theme }) => theme.primaryHover};
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s ease-in-out;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

const ContactInfo = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px;
  border-radius: 15px;
  width: 40%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.contactCardBackground};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  h4 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    color: white;

    h4, p {
      color: white;
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 50px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;