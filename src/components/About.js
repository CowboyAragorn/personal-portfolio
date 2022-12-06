import React from "react";
import styled from "styled-components";
import greatLookingGuy from "../assets/images/greatLookingGuy.jpg";

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
    margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
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
    //making page tighter for mobile
    margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
    margin-right: ${(props) => props.theme.spacing.marginMobileLeft};
    justify-content: center;
  }
`;
const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* background-color: ${(props) => props.theme.colors.indigoDye}; */
  color: ${(props) => props.theme.colors.jet};
  font-size: ${(props) => props.theme.fontSize.smallText};
  //62.5 rem 1000px
  max-width: 62.5rem;
  min-width: 37.5rem;
  min-height: 22rem;
  line-height: 1.5;
  letter-spacing: 0.5px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    //min-width: 32.5rem;
    min-width: 25rem;
    max-width: 32.5rem;
  }
`;
const FollowingP = styled.p``;

const TechIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  max-width: 31rem;
  margin-top: 1.5rem;
  gap: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
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
    align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 32.5rem;
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
          <p>
            My name is Jacob, and I create web applications. I have been
            learning and creating projects since the fall 2021. At the time, I
            was a public school teacher in my third year of teaching the same
            material. I was hankering for a new challenge, and web development
            was a natural fit.
          </p>
          <FollowingP>
            I say a new challenge, but my first programming project was not made
            in the fall of 2021. For that you would have to go back to the 8th
            grade, when I was modding Medieval II: Total War in Notepad++ to
            make larger farms lower revolt risk. I thought it was more
            historically accurate. My projects today tend to be a little more
            complex and try to solve (arguably) larger problems.
          </FollowingP>
          <FollowingP>
            I graduated from the University in Florida in 2019 with a bachelor's
            degree in history and minor in English. I am specifically interested
            in the 18th and 19th century, and more recently have been on a
            French Revolution kick. In my free time I enjoy reading,
            weightlifting, spending time with family, and camping.
          </FollowingP>
          <FollowingP>
            Professionally, I have been volunteering as a developer with the
            Gainesville, FL brigade of Code for America since July 2022. We are
            working directly with the city government and are in the final
            stages of developing a "resource finder" application to help
            under-served citizens easily find city resources.
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
