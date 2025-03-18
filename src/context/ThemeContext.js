import { createContext, useState, useEffect } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") !== "false" // Persist state in local storage
  );

  const lightTheme = {
    background: "#ffffff",
    text: "#333333",
    searchBackground: "rgba(255, 255, 255, 0.9)",
    cardBackground: "#f9f9f9",
    buttonBackground: "#ff7043",
    buttonText: "#ffffff",
    footerBackground: "#f1f1f1",
    footerText: "#333333",
    navBackground: "rgba(255, 255, 255, 0.9)",
    primary: "#ff7043",
    toggleBackground: "rgba(0, 0, 0, 0.1)",
    toggleHoverBackground: "rgba(0, 0, 0, 0.2)",
    buttonHoverBackground: "#ff512f",
    contactBackground: "#ff7043",
    contactText: "#ffffff",
    contactCardBackground: "rgba(255, 255, 255, 0.2)",
    priceBackground: "#ffb703",
    priceText: "#000000",
    listBackground: "rgba(255, 255, 255, 0.9)",
    listHoverBackground: "rgba(255, 255, 255, 0.8)",
    ctaBackground: "linear-gradient(135deg, #ff7043, #ff5252)",
    ctaText: "#ffffff",
  };

  const darkTheme = {
    background: "#1a1a2e",
    text: "#ffffff",
    searchBackground: "rgba(255, 255, 255, 0.1)",
    cardBackground: "rgba(255, 255, 255, 0.1)",
    buttonBackground: "#ff7043",
    buttonText: "#ffffff",
    footerBackground: "rgba(0, 0, 0, 0.2)",
    footerText: "#ffffff",
    navBackground: "rgba(26, 26, 46, 0.9)",
    primary: "#ff7043",
    toggleBackground: "rgba(255, 255, 255, 0.1)",
    toggleHoverBackground: "rgba(255, 255, 255, 0.2)",
    buttonHoverBackground: "#ff512f",
    contactBackground: "linear-gradient(135deg, #ff7043, #ff8a65)",
    contactText: "#ffffff",
    contactCardBackground: "rgba(255, 255, 255, 0.2)",
    priceBackground: "#ffb703",
    priceText: "#000000",
    listBackground: "rgba(255, 255, 255, 0.1)",
    listHoverBackground: "rgba(255, 255, 255, 0.2)",
    ctaBackground: "linear-gradient(135deg, #ff7043, #ff5252)",
    ctaText: "#ffffff",
    
  };

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.style.background = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
