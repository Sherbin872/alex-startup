import React, { useState } from "react";
import styled from "styled-components";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ToggleButton onClick={() => setDarkMode(!darkMode)} dark={darkMode}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </ToggleButton>
  );
};

export default DarkModeToggle;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background: ${({ dark }) => (dark ? "#111" : "#eee")};
  color: ${({ dark }) => (dark ? "#eee" : "#111")};
`;
