import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  position: sticky;
  top: 0;
  min-width: 100%;
  background-color: ${(props) => props.theme.colors.jet};
  min-height: ${(props) => props.theme.size.headerHeight};
  z-index: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  min-width: 100%;
`;
const HeaderLink = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.jet};
  border: none;
  font-size: ${(props) => props.theme.fontSize.headerLink};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.ming};
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 25px;
`;

const IconLink = styled.a`
  color: white;
  border: none;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.headerLink};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.ming};
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <LinksContainer>
        <HeaderLink onClick={props.heroClick}>Jacob Potter</HeaderLink>
        <NavList>
          <li>
            <HeaderLink onClick={props.aboutClick}>About</HeaderLink>
          </li>
          <li>
            <HeaderLink onClick={props.projectsClick}>Projects</HeaderLink>
          </li>
          <li>
            <HeaderLink onClick={props.contactClick}>Contact</HeaderLink>
          </li>
          <li>
            <IconLink
              style={{ color: "white", fontSize: "2rem" }}
              className="devicon-linkedin-plain"
              href={"https://www.linkedin.com/in/cjacobpotter/"}
              target="_blank"
              rel="noreferrer"
            ></IconLink>
          </li>
        </NavList>
      </LinksContainer>
    </HeaderWrapper>
  );
};

export default Header;
