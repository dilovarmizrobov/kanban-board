import React from "react";
import styled from "styled-components";
import AddButton from "./AddButton";
import Search from "./Search";
import Account from "./Account";
import Notification from "./Notification";
import DropDown from "../../../components/drop-down";

const Wrapper = styled.div`
  height: 40px;
  padding: 20px;
  box-shadow: 0 2px 4px #F0F1F2;
`;

const Root = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const WrapLeftBox = styled.div`
  display: flex;
  & > * {
    margin-right: 16px;
  }
`;

const WrapRightBox = styled.div`
  display: flex;
`;

const TopBar: React.FC = () => {
    return (
        <Wrapper>
            <Root>
                <WrapLeftBox>
                    <AddButton/>
                    <DropDown options={['Kanban', 'Board view', 'Table view']}/>
                    <DropDown options={['Filter', 'Filter2', 'Filter3']}/>
                </WrapLeftBox>
                <WrapRightBox>
                    <Search/>
                    <Notification/>
                    <Account/>
                </WrapRightBox>
            </Root>
        </Wrapper>
    )
}

export default TopBar;
