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
`;

const TotalContainer = styled.div`
  //max widthing to 100% allows to put margins on both sides of the grid while also left aligning the projects header above the first project
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  grid-template-rows: auto;
  justify-items: left;
  //margin-left: 75px;
  //justify-items: center;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ProjectContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  //this ensures buttons on bottom and title are lined up, may have to limit sentence length to fix for real
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 520px;
  min-height: 400px;
  text-decoration: none;
  gap: 15px;
  padding: 25px 35px 25px 35px;
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
`;
const StyledScreenshot = styled.img`
  max-width: 450px;
  max-height: 400px;
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
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
//heights are individually set on SVG, different bc I am making the border on compass invisible
const GithubIcon = styled.img`
  color: white;
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
                loading="lazy"
              />
              <ProjectText>{project.description}</ProjectText>
              <IconContainer>
                <Icon href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon src={githubSVG}></GithubIcon>
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
