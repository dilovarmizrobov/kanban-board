import React from 'react';
import {NavigationInterface} from "./navigations";
import styled from "styled-components";
import ArrowDownIcon from "../../../components/icons/ArrowDownIcon";

const Root = styled.div`
  margin: 0 16px;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  margin-bottom: 18px;
`;

const WrapArrowDownIcon = styled.span`
  display: flex;
  margin-left: 7px;
  margin-right: 15px;
`;

const StyledHeader = styled.span`
  color: #FFFFFF;
  cursor: pointer;
`;

const NavItem = styled.div`
  margin-bottom: 18px;
  color: #8C939F;
  cursor: pointer;
`;

const NavList: React.FC<{config: NavigationInterface}> = ({config}) => {
    return (
        <Root>
            <HeaderBox>
                <WrapArrowDownIcon>
                    <ArrowDownIcon/>
                </WrapArrowDownIcon>
                <StyledHeader>{config.header}</StyledHeader>
            </HeaderBox>
            {config.items.map((item, index) => <NavItem key={index}>{item}</NavItem>)}
        </Root>
    );
};

export default NavList;
