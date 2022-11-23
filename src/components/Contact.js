import React from "react";
import styled from "styled-components";
import treeBackground from "../assets/treeBackground.jpg";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

const ContactWrapper = styled.footer`
  //this has to be 90vh to prevent scrolling through bottom of page
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  min-height: 90vh;
  background-image: linear-gradient(
      to left,
      rgba(217, 217, 217, 0),
      rgba(217, 217, 217, 1) 30%,
      rgb(217, 217, 217)
    ),
    url(${treeBackground});
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.gainsboro};
  color: ${(props) => props.theme.colors.jet};
  text-align: left;
  padding-top: ${(props) => props.theme.size.headerHeight};
  box-shadow: 1px 1vh 8px ${(props) => props.theme.colors.gainsboro} inset;
  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 800px;
  gap: 15px;
  //this margin is the same as contact form container margin
  margin-left: 145px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const StyledHeader = styled.header`
  font-size: 4rem;
  margin: 0;
  align-self: center;
`;
const StyledP = styled.p`
  text-align: center;
  font-size: 1.3rem;
  text-align: left;
`;
const ContactFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1pt solid black;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.ming};
  padding: 25px;
  border: none;
  border-radius: 15px;
  margin-left: 145px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  min-width: 500px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.jet};
  border: none;
  border-bottom: 1pt solid white;
  padding: 12px;
  padding-left: 10px;
  &::placeholder {
    color: ${(props) => props.theme.colors.jet};
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  min-height: 170px;
  min-width: 500px;
  font-size: 15px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border: 1pt solid white;
  font-size: 1.2rem;
  resize: none;
  &::placeholder {
    ${(props) => props.theme.colors.jet};
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
`;

//TODO: make checkoutBtn an importable styled component for contact, payment container, and shop
const SubmitFormBtn = styled.button`
  padding: 14px;
  font-size: 1.3rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  text-decoration: none;
  width: 25%;
  &:hover {
    cursor: pointer;
  }
`;
//don't want to make this an actual form that submits because
//not implementing cookies, don't want to lose state on reload
//would actually make this a form with validation otherwise
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "messageData");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
      sent: Timestamp.now(),
    }).then(() => {
      alert("form submitted successfully");
      setName("");
      setEmail("");
      setMessage("");
    });
    //window.location.reload();
  };

  return (
    <ContactWrapper ref={props.reference}>
      <HeaderContainer>
        <StyledHeader>Talk To Me</StyledHeader>
        <StyledP>
          I am currently pounding the pavement, on the hunt, grinding. I am
          looking for a job.
        </StyledP>
        <StyledP>
          If you wish to discuss an opportunity write a message down below or
          connect on Linkedin.
        </StyledP>
      </HeaderContainer>

      <ContactFormContainer>
        <InputFieldContainer>
          <StyledLabel htmlFor="name">Name *</StyledLabel>
          <StyledInput
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <StyledLabel htmlFor="email">Email *</StyledLabel>
          <StyledInput
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ExampleMail@gmail.com"
          ></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <StyledLabel htmlFor="message">Message *</StyledLabel>
          <StyledTextArea
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          ></StyledTextArea>
        </InputFieldContainer>
        <SubmitFormBtn
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </SubmitFormBtn>
      </ContactFormContainer>
    </ContactWrapper>
  );
};

export default Contact;
