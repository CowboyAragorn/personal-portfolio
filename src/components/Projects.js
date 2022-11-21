import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.main`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: white;
  //has to have padding equal to headersize for scroll to align smoothly
  padding-top: ${(props) => props.theme.size.headerHeight};
`;

const Projects = (props) => {
  return (
    <ProjectsWrapper ref={props.reference}>
      <p>My projects go here</p>
    </ProjectsWrapper>
  );
};

export default Projects;
