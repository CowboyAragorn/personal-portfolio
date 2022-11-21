import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: black;
  color: white;
`;

const Contact = (props) => {
  return (
    <FooterWrapper ref={props.reference}>
      <h1>Contact Me</h1>
      <p>Contact Form</p>
      <div>
        <p>GH</p>
        <p>Linkedin</p>
      </div>
    </FooterWrapper>
  );
};

export default Contact;
