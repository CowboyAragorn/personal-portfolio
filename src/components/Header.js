import React, { useRef } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding-left: 35px;
  padding-right: 35px;
  background-color: ${(props) => props.theme.colors.jet};
  min-height: ${(props) => props.theme.size.headerHeight};
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
  gap: 25px;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLink onClick={props.heroClick}>Jacob Potter</HeaderLink>
      <NavList>
        <li>
          <HeaderLink onClick={props.projectsClick}>Projects</HeaderLink>
        </li>
        <li>
          <HeaderLink onClick={props.contactClick}>Contact</HeaderLink>
        </li>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
