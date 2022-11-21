import React, { useRef } from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.main`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: white;
`;

const Projects = (props) => {
  const projectsRef = useRef();

  return (
    <ProjectsWrapper ref={props.reference}>
      <p>My projects go here</p>
    </ProjectsWrapper>
  );
};

export default Projects;
