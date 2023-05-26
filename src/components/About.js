import React from "react";
import styled from "styled-components";
import greatLookingGuy from "../assets/images/Handsome Man (ME).jpg";
//import greatLookingGuy from "../assets/images/greatLookingGuy.jpg";

const Icons = [
  { className: "devicon-javascript-plain", name: "Javascript" },
  { className: "devicon-react-original", name: "React" },
  { className: "devicon-python-plain", name: "Python" },
  { className: "devicon-selenium-original", name: "Selenium" },
  { className: "devicon-redux-original", name: "Redux" },
  { className: "devicon-typescript-plain", name: "Typescript" },
];
const ContactWrapper = styled.div`
  //this has to be 90vh to prevent scrolling through bottom of page
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: ${(props) => props.theme.colors.gainsboro};
  color: ${(props) => props.theme.colors.jet};
  text-align: left;
  padding-top: ${(props) => props.theme.size.headerHeight};
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  //800px at 16px font
  max-width: 50rem;
  //this margin is the same as contact form container margin
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: ${(props) => props.theme.spacing.marginLR};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: ${(props) => props.theme.spacing.marginTabletLeft};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    //margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
  }
`;
const SectionHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sectionHeader};
  align-self: left;
  //font-weight: bold;
  color: ${(props) => props.theme.colors.jet};
  font-family: ${(props) => props.theme.font.header};
  font-weight: normal;
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-left: ${(props) => props.theme.spacing.marginLR};
  margin-right: ${(props) => props.theme.spacing.marginLR};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-left: ${(props) => props.theme.spacing.marginTabletLeft};
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    //margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
    margin-left: 0;
    margin-right: 0;
    align-items: center;
    justify-content: center;
  }
`;
const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${(props) => props.theme.colors.jet};
  font-size: ${(props) => props.theme.fontSize.text};
  //62.5 rem 1000px
  max-width: 62.5rem;
  min-width: 37.5rem;
  min-height: 22rem;
  line-height: 1.5;
  letter-spacing: 0.5px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    //min-width: 32.5rem;
    min-width: 23rem;
    max-width: 33rem;
    font-size: ${(props) => props.theme.fontSize.text};
  }
`;
const FollowingP = styled.p``;
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.ming};
`;

const TechIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  max-width: 31rem;
  margin-top: 1.5rem;
  gap: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    align-self: center;
  }
`;

const IconFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.div`
  color: ${(props) => props.theme.colors.ming};
  border: none;
  text-decoration: none;
  font-size: 3rem;
`;
const IconLabel = styled.p`
  font-size: 1rem;
`;
const PersonalPhoto = styled.img`
  max-width: 37.5rem;
  object-fit: contain;
  align-self: flex-start;
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    //align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 30rem;
    align-self: center;
  }
`;

const About = (props) => {
  return (
    <ContactWrapper ref={props.reference}>
      <HeaderContainer>
        <SectionHeader>About Me</SectionHeader>
      </HeaderContainer>
      <AboutContainer>
        <AboutTextContainer>
          <p>My name is Jacob, and I create web applications.</p>
          <FollowingP>
            In my free time, I like to program, read fiction and history, and
            play strategy games (both the computer and board varieties.) I
            graduated from the <StyledSpan>University of Florida</StyledSpan> in
            2019 with a bachelor's degree in history and minor in English.
          </FollowingP>
          <FollowingP>
            I have been a volunteer developer with the Gainesville, FL brigade
            of <StyledSpan>Code for America </StyledSpan> since July 2022.
            CodeGNV is an organization dedicated to expanding access to services
            for Gainesville residents through technological solutions. We are
            currently working on several projects with community organizations,
            local schools, and the city government. You can visit our webpage
            here:{" "}
            <a
              href="https://www.codegnv.org/"
              alt="Link to CodeGNV website"
              target={"_blank"}
              rel="noreferrer"
            >
              https://www.codegnv.org/
            </a>
          </FollowingP>
          <p>Here are a few of the technologies I have been using recently:</p>
          <TechIconsContainer>
            {Icons.map((icon) => {
              return (
                <IconFlexContainer>
                  <Icon className={icon.className} />
                  <IconLabel>{icon.name}</IconLabel>
                </IconFlexContainer>
              );
            })}
          </TechIconsContainer>
        </AboutTextContainer>
        <PersonalPhoto
          src={greatLookingGuy}
          alt="photo of Jacob Potter, very handsome"
        ></PersonalPhoto>
      </AboutContainer>
    </ContactWrapper>
  );
};

export default About;
