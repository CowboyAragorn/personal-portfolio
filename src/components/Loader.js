import React from "react";
import styled from "styled-components";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loaderWrapper">
      <div className="spinner-box">
        <div className="circle-border">
          <div class="circle-core"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
