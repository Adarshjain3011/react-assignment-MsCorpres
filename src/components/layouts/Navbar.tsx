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
  background: ${({ theme }) => theme.colors.navbarBg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.small};
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};

  img {
    width: 30px;
    height: 30px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.headColor};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    align-items: center;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media screen and (max-width: 480px) {
    font-size: calc(${({ theme }) => theme.fontSizes.small} - 0.1rem);
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    width: 100%;
  }
`;
