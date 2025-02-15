import styled from "styled-components";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <Nav>
      <Company>
        <img src="/landing/company-logo.png" alt="Company Logo" />
        <Logo>Digital Agency</Logo>
      </Company>

      <NavItems>
        <NavLinks>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Projects</NavLink>
        </NavLinks>
        <Button variant="primary" onClick={() => console.log("Clicked")}>
          Get in Touch
        </Button>
      </NavItems>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.navbarBg}; // Uses navbar background from theme
  /* box-shadow: ${({ theme }) => theme.shadows.navbar}; // Adds shadow from theme */
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.small}; // Subtle border radius
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large}; // Uses large font size
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading}; // Uses heading font from theme
  color: ${({ theme }) => theme.colors.headColor}; // Uses dark heading color
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small}; // Uses small spacing
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large}; // Uses large spacing
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Uses medium font size
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary}; // Uses primary text color
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover}; // Uses hover color from theme
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl}; // Uses extra-large spacing
`;
