import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.main`
  min-height: 100vh;
  background-color: white;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <p>My projects go here</p>
    </ProjectsWrapper>
  );
};

export default Projects;
