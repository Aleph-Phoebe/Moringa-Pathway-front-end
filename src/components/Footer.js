import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Moringa Pathway. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #2a2a72;
  color: white;
  margin-top: 20px;
`;
