import React from "react";
import styled, { css, keyframes } from "styled-components";
import treeBackground from "../assets/images/treeBackground.webp";
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

const SectionHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sectionHeader};
  margin: 0;
  align-self: left;
  //font-weight: bold;
  color: ${(props) => props.theme.colors.jet};
  font-family: ${(props) => props.theme.font.header};
  font-weight: normal;
`;
const StyledP = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.smallText};
  text-align: left;
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const ContactFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1pt solid black;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  //background-color: ${(props) => props.theme.colors.ming};
  padding: 35px;
  padding-left: 0;
  padding-right: 0;
  border: none;
  border-radius: 15px;
  margin-left: 145px;

  ${(props) => {
    if (props.toggle) {
      console.log("I got here");
      return css`
        animation-name: ${shake};
        animation-duration: 1s;
        animation-iteration-count: 1;
      `;
    }
  }}
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

const LabelAndErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //set minheight to 2 rem so that it isn't displaced when teh checkmark shows up
  min-height: 2rem;
`;
const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.text};
  color: ${(props) => props.theme.colors.jet};
`;
const InputError = styled.p`
  text-align: right;
  ${(props) => {
    if (props.toggle.length === 1) {
      return `
        font-size: 2rem;
        color: ${props.theme.colors.jet}
      `;
    } else {
      return `
      font-size:  ${(props) => props.theme.fontSize.smallText};;
      color: red;
      `;
    }
  }}
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  min-width: 500px;
  font-size: ${(props) => props.theme.fontSize.smallText};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.jet};
  border: none;
  border-bottom: 1pt solid white;
  padding: 15px;
  padding-left: 10px;
  border-radius: 15px;
  &::placeholder {
    color: ${(props) => props.theme.colors.jet};
    opacity: 0.5;
  }
  transition: transform 1s;
  &:focus {
    transform: scale(1.1);
  }
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  min-height: 170px;
  min-width: 500px;
  font-size: ${(props) => props.theme.fontSize.smallText};
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border: 1pt solid white;
  color: ${(props) => props.theme.colors.jet};
  resize: none;
  border-radius: 15px;
  &::placeholder {
    ${(props) => props.theme.colors.jet};
    opacity: 0.5;
  }
  transition: transform 1s;
  &:focus {
    transform: scale(1.05);
  }
`;

//TODO: make checkoutBtn an importable styled component for contact, payment container, and shop
const SubmitFormBtn = styled.button`
  padding: 14px;
  font-size: ${(props) => props.theme.fontSize.smallText};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  text-decoration: none;
  width: 25%;
  transition: transform 1s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }
`;
//don't want to make this an actual form that submits because
//not implementing cookies, don't want to lose state on reload
//would actually make this a form with validation otherwise
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [error, setError] = useState(false);
  const userCollectionRef = collection(db, "messageData");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validCheck = submitValidation();
    if (validCheck === false) {
      console.log("form invalid");
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 1000);

      return;
    }
    //these four lines are only for testing
    console.log("form is valid");
    setName("");
    setEmail("");
    setMessage("");
    // //submits to form and resets form
    // addDoc(userCollectionRef, {
    //   name: name,
    //   email: email,
    //   message: message,
    //   sent: Timestamp.now(),
    // }).then(() => {
    //   alert("form submitted successfully");
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // });
  };

  //if the form is empty or if any error messages are displayed, display false
  const submitValidation = () => {
    if (name === "" || email === "" || message === "") {
      if (nameError === "") {
        setNameError("*Fill in name field");
      }
      if (emailError === "") {
        setEmailError("*Fill in email field");
      }
      if (messageError === "") {
        setMessageError("*Fill in message field");
      }
      return false;
    } else if (
      nameError.length > 1 ||
      emailError.length > 1 ||
      messageError.length > 1
    ) {
      return false;
    }

    // //if any of the inputs are invalid, the form will fail to submit and display the relevant error message//
    // let validity = true;
    // //name
    // if (name.length <= 0) {
    //   validity = false;
    //   setNameError("*Name must be at least 1 character*");
    // }
    // //if the error was previously displayed, but shouldn't be any longer
    // else if (nameError !== "") {
    //   setNameError("");
    // }
    // //email
    // if (email.length <= 0) {
    //   validity = false;
    //   setEmailError("*Name must be at least 1 character*");
    // } else if (emailError !== "") {
    //   setEmailError("");
    // }
    // //messages
    // if (message.length <= 0) {
    //   validity = false;
    //   setMessageError("*Please type a message*");
    // } else if (messageError !== "") {
    //   setMessageError("");
    // }
    // return validity;
  };

  const nameValidator = (e) => {
    let currentInput = e.target.value;
    if (currentInput === "") {
      setNameError("*Name must be at least 1 character");
    } else if (currentInput.length > 20) {
      setNameError("*Name must be less than 20 characters");
    } else {
      setNameError("???");
    }
  };

  const emailValidator = (e) => {
    const regex =
      /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*/;
    let currentInput = e.target.value;
    if (regex.test(currentInput)) {
      setEmailError("???");
    } else if (!regex.test(currentInput)) {
      setEmailError("*Must be at least 5 characters and include @");
    }
  };

  const messageValidator = (e) => {
    let currentInput = e.target.value;
    if (currentInput === "") {
      setMessageError("*Message must be at least 1 character");
    } else if (currentInput.length > 400) {
      setMessageError("*Message must be less than 400 characters");
    } else {
      setMessageError("???");
    }
  };

  return (
    <ContactWrapper ref={props.reference}>
      <HeaderContainer>
        <SectionHeader>Talk To Me</SectionHeader>
        <StyledP>
          I am currently pounding the pavement, on the hunt, grinding. I am
          looking for a job.
        </StyledP>
        <StyledP>
          If you wish to discuss an opportunity, write a message down below or
          connect on Linkedin.
        </StyledP>
      </HeaderContainer>

      <ContactFormContainer id="form" toggle={error}>
        <InputFieldContainer>
          <LabelAndErrorContainer>
            <StyledLabel htmlFor="name">Name *</StyledLabel>
            <InputError toggle={nameError}>{nameError}</InputError>
          </LabelAndErrorContainer>
          <StyledInput
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={(e) => nameValidator(e)}
            required
          ></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <LabelAndErrorContainer>
            <StyledLabel htmlFor="email">Email *</StyledLabel>
            <InputError toggle={emailError}>{emailError}</InputError>
          </LabelAndErrorContainer>
          <StyledInput
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => emailValidator(e)}
            placeholder="ExampleMail@mail.com"
          ></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <LabelAndErrorContainer>
            <StyledLabel htmlFor="message">Message *</StyledLabel>
            <InputError toggle={messageError}>{messageError}</InputError>
          </LabelAndErrorContainer>
          <StyledTextArea
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={(e) => {
              messageValidator(e);
            }}
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
