import React from "react";
import styled from "styled-components";
import bearBackground from "../assets/bear-background.jpg";

const HeroWrapper = styled.div`
  min-height: ${(props) => props.theme.size.sectionHeight};
  background-color: black;
  background-image: url(${bearBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;

const Hero = (props) => {
  return (
    <HeroWrapper ref={props.reference}>
      <StyledP>Jacob Potter's Portfolio</StyledP>
    </HeroWrapper>
  );
};

export default Hero;
