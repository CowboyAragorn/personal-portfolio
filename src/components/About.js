import React from "react";
import styled from "styled-components";

const Icons = [
  { className: "devicon-javascript-plain", name: "Javascript" },
  { className: "devicon-react-original", name: "React" },
  { className: "devicon-css3-plain", name: "CSS" },
  { className: "devicon-redux-original", name: "Redux" },
  { className: "devicon-firebase-plain", name: "Firebase" },
  { className: "devicon-typescript-plain", name: "Typescript" },
];
const ContactWrapper = styled.div`
  //this has to be 90vh to prevent scrolling through bottom of page
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 90vh;
  background-color: ${(props) => props.theme.colors.gainsboro};
  color: ${(props) => props.theme.colors.jet};
  text-align: left;
  padding-top: ${(props) => props.theme.size.headerHeight};
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  max-width: 800px;
  gap: 15px;
  //this margin is the same as contact form container margin
  margin-bottom: 20px;
  margin-left: 120px;
  @media (max-width: 1000px) {
    margin-left: 50px;
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
const AboutContainer = styled.div`
  display: flex;
`;
const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.colors.indigoDye}; */
  color: ${(props) => props.theme.colors.jet};
  font-size: ${(props) => props.theme.fontSize.smallText};
  max-width: 900px;
  min-height: 350px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin-left: 120px;
  @media (max-width: 1000px) {
    margin-left: 50px;
  }
`;
const FollowingP = styled.p``;

const TechIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  max-width: 500px;
  margin-top: 20px;
  gap: 30px;
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

const About = (props) => {
  return (
    <ContactWrapper ref={props.reference}>
      <HeaderContainer>
        <SectionHeader>About Me</SectionHeader>
      </HeaderContainer>
      <AboutContainer>
        <AboutTextContainer>
          <p>
            My name is Jacob, and I create web applications. I have been
            learning and creating projects since the fall 2021. At the time, I
            was a public school teacher in my third year of teaching the same
            material. I was hankering for a new challenge, and web development
            was a natural fit.
          </p>
          <br></br>
          <FollowingP>
            I say a new challenge, but my first programming project was not made
            in the fall of 2021. For that you would have to go back to the 8th
            grade, when I was modding Medieval II: Total War in Notepad++ to
            make larger farms lower revolt risk. I thought it was more
            historically accurate. My projects today tend to be much more
            complex and try to solve (arguably) larger problems.
          </FollowingP>
          <br></br>
          <FollowingP>
            Professionally, I have been volunteering as a developer with the
            Gainesville, FL brigade of Code for America since July 2022. We are
            working directly with the city government and are in the final
            stages of developing a "resource finder" application to help
            underserved citizens easily find city resources.
          </FollowingP>
          <br></br>
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
      </AboutContainer>
    </ContactWrapper>
  );
};

export default About;
