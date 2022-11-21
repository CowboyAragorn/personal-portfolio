import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.main`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: ${(props) => props.theme.colors.gainsboro};
  //has to have padding equal to headersize for scroll to align smoothly
  padding-top: ${(props) => props.theme.size.headerHeight};
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
  max-width: 250px;
  padding-right: 500px;
  min-height: 400px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colors.indigoDye};
`;

const Projects = (props) => {
  return (
    <ProjectsWrapper ref={props.reference}>
      <TotalContainer>
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </TotalContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
