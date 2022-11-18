import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.header`
  min-height: 100vh;
  background-color: black;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledP>Jacob Potter's Portfolio</StyledP>
    </HeroWrapper>
  );
};

export default Hero;
