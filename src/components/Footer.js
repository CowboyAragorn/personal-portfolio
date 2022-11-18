import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Contact Me</h1>
      <p>Contact Form</p>
      <div>
        <p>GH</p>
        <p>Linkedin</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
