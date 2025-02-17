import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#6153CD", // Main brand color
    primaryHover: "#4F46E5", // Hover state for primary color
    secondary: "#F5F5F5", // Light gray background
    accent: "#6153CD", // Alternative accent color (button bg)
    textPrimary: "#2D3748", // Dark text (headings)ch
    textSecondary: "#47536B", // Navy blue text (paragraphs)
    headColor: "#0F0049", // Extra dark color for headings
    background: "#FFFFFF", // White background
    cardBg: "#FAFAFA", // Card background
    border: "#E0E0E0", // Light border for separation
    navbarBg: "#FFFFFF", // Navbar background
    navbarShadow: "rgba(0, 0, 0, 0.1)", // Subtle shadow for Navbar
  },
  fonts: {
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },
  spacing: {
    none: "0px",        // No spacing
    xs: "4px",          // Extra small spacing
    small: "8px",       // Small spacing
    medium: "16px",     // Medium spacing
    large: "24px",      // Large spacing
    xl: "32px",         // Extra large spacing
    xxl: "1rem",        // (16px) First rem-based value after 32px
    xxxl: "2rem",       // (32px) Next level spacing
    section: "4rem",    // (64px) Ideal for section padding/margins
    container: "6rem"   // (96px) Ideal for max container width padding
},

  fontSizes: {
    small: "0.875rem", // 14px
    medium: "1rem", // 16px
    large: "1.25rem", // 20px
    xLarge: "1.5rem", // 24px
    xxLarge: "2rem", // 32px
  },
  borderRadius: {
    small: "6px",
    medium: "12px",
    large: "50px",
    full: "9999px",
  },
  shadows: {
    card: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light card shadow
    button: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Button shadow
    navbar: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Navbar shadow
  },
};

export default theme;
