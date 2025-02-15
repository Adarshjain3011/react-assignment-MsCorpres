import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#6153CD", // Used for buttons and highlights
    secondary: "#F5F5F5", // Light gray background
    accent: "#6153CD", // Alternative purple shade (button bg)
    textPrimary: "#2D3748", // Dark text (headings)
    textSecondary: "#47536B", // navy blue text (paragraphs)
    headColor:"#0F0049", // extra dark color for headings
    // textSecondary: "#4F4F4F", // Lighter text (paragraphs)
    background: "#FFFFFF", // White background
    cardBg: "#FAFAFA", // Card background (e.g., project stats)
    border: "#E0E0E0", // Light border for separation
  },
  fonts: {
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },
  spacing: {
    xs: "4px",
    small: "8px",
    medium: "16px",
    large: "24px",
    xl: "32px",
    lg:"1rem",
  },

  borderRadius: {
    small: "6px",
    medium: "12px",
    large: "50px",
  },
  shadows: {
    card: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light card shadow
    button: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Button shadow
  },
};

export default theme;
