import React from "react";
import styled from "styled-components";
import projects from "../projectsObj";
import githubSVG from "../assets/github-original.svg";
import compassSVG from "../assets/compassSVG.svg";

const ProjectsWrapper = styled.main`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: ${(props) => props.theme.colors.gainsboro};
  //has to have padding equal to headersize for scroll to align smoothly
  padding-top: ${(props) => props.theme.size.headerHeight};
`;

const SectionHeader = styled.h2`
  font-size: 3rem;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //this ensures buttons on bottom and title are lined up, may have to limit sentence length to fix for real
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 510px;
  min-height: 400px;
  gap: 15px;
  padding: 25px 30px 25px 30px;
  background-color: ${(props) => props.theme.colors.indigoDye};
  color: ${(props) => props.theme.colors.white};
`;

const ProjectHeader = styled.h2`
  font-size: 3rem;
`;
const ProjectText = styled.p`
  font-size: 1.5rem;
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
      <SectionHeader>Projects</SectionHeader>
      <TotalContainer>
        {projects.map((project) => {
          return (
            <ProjectContainer>
              <ProjectHeader>{project.name}</ProjectHeader>
              <Icon href={project.liveURL} target="_blank" rel="noreferrer">
                <StyledScreenshot
                  src={project.screenshot}
                  alt={project.description}
                />
              </Icon>
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
