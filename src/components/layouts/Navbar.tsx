import styled from "styled-components";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <Nav>

      <Company>

        <img src="/landing/company-logo.png" alt="" />
        <Logo>Digital agency</Logo>

      </Company>

      <NavItems>

        <NavLinks>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Projects</NavLink>
        </NavLinks>
        <Button variant="primary" onClick={() => {

          console.log("ee");

        }}>Get in Touch</Button>

      </NavItems>


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

  margin-bottom: 6rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
`;


const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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

const NavItems = styled.div`
  
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 2rem;

`;
