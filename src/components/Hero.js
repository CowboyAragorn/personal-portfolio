import React from "react";
import styled from "styled-components";
import bearBackground from "../assets/images/bearBackgroundResized.jpg";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-width: 100%;
  gap: 1.5rem;
  //padding-right: 100px;
  //min-height is set at 102 for the blur box-shadow effect,
  //the bottom border blurs into the projects page, removing the harsh edge
  min-height: 102vh;
  background-color: ${(props) => props.theme.colors.jet};
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      65%,
      rgba(255, 255, 255, 1) 83% 100%
    ),
    url(${bearBackground});
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  box-shadow: -3px -1vh 8px ${(props) => props.theme.colors.gainsboro} inset;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        99.9%,
        rgba(255, 255, 255, 1) 100%
      ),
      url(${bearBackground});
    background-size: 100% 100%;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 700px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    //want the background to have an opaque gradient on it, but not show the white transition on mobile
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        99.9%,
        rgba(255, 255, 255, 1) 100%
      ),
      url(${bearBackground});
    background-size: 100% 100%;
    background-position: top;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    margin: 0;
    //background-image: none;
    background-color: ${(props) => props.theme.colors.gainsboro};
    min-height: 350px;
  }
`;

const NameContainer = styled.div`
  /* padding-top: ${(props) => props.theme.size.headerHeight}; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: right;
  margin-right: 6rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
  }
`;

const AboutContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  gap: 1.2rem;
  max-width: 20rem;
  padding: 1.8rem;
  border: 1pt solid black;
  border-radius: 15px 0 0 0;
  //TODO: make shadow more opaque
  box-shadow: 10px 5px 2px ${(props) => props.theme.colors.ming};
  margin-right: 6rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
  }
`;

const StyledName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sectionHeader};
  color: ${(props) => props.theme.colors.jet};
  font-family: ${(props) => props.theme.font.header};
  font-weight: normal;
  /* padding-top: ${(props) => props.theme.size.headerHeight}; */
`;

const StyledTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.subHeader};
  //transparent Ming
  color: rgb(60, 110, 113, 0.6);
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    color: ${(props) => props.theme.colors.jet};
  }
`;
const StyledBoldIntro = styled.h3`
  font-size: ${(props) => props.theme.fontSize.text};
  color: rgb(60, 110, 113, 0.6);
  font-style: italic;
`;
const StyledP = styled.p`
  font-size: ${(props) => props.theme.fontSize.text};
  color: ${(props) => props.theme.colors.jet};
`;

const Hero = (props) => {
  return (
    <HeroWrapper ref={props.reference}>
      <NameContainer>
        <StyledName>Jacob Potter</StyledName>
        <StyledTitle>Web Developer</StyledTitle>
      </NameContainer>
      <AboutContainer>
        <StyledBoldIntro>WELCOME TO MY PAGE.</StyledBoldIntro>
        <StyledP>
          I'm a web developer living in Orlando, Florida. Explore below for more
          about me and my projects.
        </StyledP>
        <StyledBoldIntro>THANKS FOR VISITING!</StyledBoldIntro>
      </AboutContainer>
    </HeroWrapper>
  );
};

export default Hero;
