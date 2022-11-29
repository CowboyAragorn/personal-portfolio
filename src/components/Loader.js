import React from "react";
import styled from "styled-components";
import { ClimbingBoxLoader } from "react-spinners";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gainsboro};
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <ClimbingBoxLoader size="20" color="#3c6e71ff"></ClimbingBoxLoader>
    </LoaderWrapper>
  );
};

export default Loader;
