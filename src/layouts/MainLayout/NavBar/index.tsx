import React from "react";
import styled from "styled-components";
import {navigations} from './navigations';
import Logo from "./Logo";
import Search from "./Search";
import Workspace from "./Workspace";
import NavList from "./NavList";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  overflow-y: auto;
  background: #0F1D40;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar: React.FC = () => {
    return (
        <Wrapper>
            <Root>
                <Logo/>
                <Search/>
                <Workspace/>
                {
                    navigations.map((nav, index) => <NavList config={nav} key={index}/>)
                }
            </Root>
        </Wrapper>
    )
};

export default NavBar;
