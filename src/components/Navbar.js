import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Moringa Pathway</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/jobs">Jobs</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #2a2a72;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;
