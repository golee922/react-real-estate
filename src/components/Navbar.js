import React from "react";
import Styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = Styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
	position: fixed;
    width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = Styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

const MenuBars = Styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: white;
        height: 25px;
        width: 25px;
        cursor: fixed;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-80%, 65%);
    }
`;

const NavMenu = Styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = Styled(Link)`
${NavLink}
`;

const NavBtn = Styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    };
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          to="/contact"
          primary="true"
          css={`
            max-width: 160px;
          `}
        >
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
