import React from "react";
import styled from "styled-components";
import projects from "../projectsObj";
import githubSVG from "../assets/github-original.svg";
import compassSVG from "../assets/compassSVG.svg";

const ProjectsWrapper = styled.main`
  display: flex;
  justify-content: center;
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: ${(props) => props.theme.colors.gainsboro};
  //has to have padding equal to headersize for scroll to align smoothly
  padding-top: ${(props) => props.theme.size.headerHeight};
`;

const SectionHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sectionHeader};
  grid-column: 1/-1;
  font-family: ${(props) => props.theme.font.header};
  font-weight: normal;
  align-self: end;
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-self: left;
    margin-left: ${(props) => props.theme.spacing.marginTabletLeft};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    justify-self: left;
    margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
  }
`;

const TotalContainer = styled.div`
  width: 100%;
  display: grid;
  //equivalent to 520px at 1920 resolution
  grid-template-columns: repeat(auto-fit, minmax(32.5rem, 1fr));
  grid-template-rows: auto;
  justify-items: left;
  margin-left: ${(props) => props.theme.spacing.marginLR};
  margin-right: ${(props) => props.theme.spacing.marginLR};
  //justify-items: center;
  gap: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    //justify-items: center;
    margin-left: ${(props) => props.theme.spacing.marginTabletLeft};
    margin-right: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    //justify-items: center;
    margin-left: ${(props) => props.theme.spacing.marginMobileLeft};
    margin-right: 0;
  }
`;

const ProjectContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  //this ensures buttons on bottom and title are lined up, may have to limit sentence length to fix for real
  justify-content: space-between;
  box-sizing: border-box;
  //can visually see the boxes resizing on zoom with this in rem
  max-width: 32.5rem;
  min-height: 25rem;
  text-decoration: none;
  gap: 1rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.indigoDye};
  color: ${(props) => props.theme.colors.white};
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectHeader = styled.h3`
  font-size: ${(props) => props.theme.fontSize.subHeader};
  padding: 5px;
  font-style: italic;
  font-weight: normal;
`;
const ProjectText = styled.p`
  font-size: ${(props) => props.theme.fontSize.text};
  min-width: 100%;
`;
const StyledScreenshot = styled.img`
  max-width: 28rem;
  max-height: 25rem;
  border-radius: 15px;
`;
const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  column-gap: 35px;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
//heights are individually set on SVG, different bc I am making the border on compass invisible
const GithubIcon = styled.img`
  color: white;
  text-decoration: none;
  font-size: 5.5rem;
`;

const Projects = (props) => {
  return (
    <ProjectsWrapper ref={props.reference}>
      <TotalContainer>
        <SectionHeader>Projects</SectionHeader>
        {projects.map((project, i) => {
          return (
            <ProjectContainer
              key={i}
              href={project.liveURL}
              target="_blank"
              rel="noreferrer"
            >
              <ProjectHeader>{project.name}</ProjectHeader>
              <StyledScreenshot
                src={project.screenshot}
                alt={project.description}
                loading="auto"
              />
              <ProjectText>{project.description}</ProjectText>
              <IconContainer>
                <Icon href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="devicon-github-original"></GithubIcon>
                </Icon>

                <Icon href={project.liveURL} target="_blank" rel="noreferrer">
                  <GithubIcon src={compassSVG}></GithubIcon>
                </Icon>
                <ProjectText>View Code</ProjectText>
                <ProjectText>Live Page</ProjectText>
              </IconContainer>
            </ProjectContainer>
          );
        })}
      </TotalContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
