import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.jet};
  min-height: ${(props) => props.theme.size.headerHeight};
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  width: 100%;
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
      <LinksContainer>
        <HeaderLink onClick={props.heroClick}>Jacob Potter</HeaderLink>
        <NavList>
          <li>
            <HeaderLink onClick={props.projectsClick}>Projects</HeaderLink>
          </li>
          <li>
            <HeaderLink onClick={props.contactClick}>Contact</HeaderLink>
          </li>
        </NavList>
      </LinksContainer>
    </HeaderWrapper>
  );
};

export default Header;
