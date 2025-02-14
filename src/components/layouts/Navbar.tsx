import styled from "styled-components";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <Nav>
      <Logo>🚀 Digital agency</Logo>
      <NavLinks>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Projects</NavLink>
      </NavLinks>
      <Button variant="primary" onClick={()=>{

        console.log("ee");

      }}>Get in Touch</Button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
`;

const NavLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

