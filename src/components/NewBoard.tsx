import React from 'react';
import styled from "styled-components";
import PlusIcon from "./icons/PlusIcon";

const Wrap = styled.div`
  min-width: 300px;
`;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid #F3F3F3;
  cursor: pointer;
`;

const BoardHeaderIcon = styled.span`
  font-weight: 500;
  margin-right: 10px;
`;

const BoardHeaderTitle = styled.span`
  font-weight: 500;
  color: #8C939F;
  margin-right: 10px;
`;

const NewBoard = () => {
    return (
        <Wrap>
            <Root>
                <BoardHeaderIcon>
                    <PlusIcon color='#8C939F'/>
                </BoardHeaderIcon>
                <BoardHeaderTitle>Create status</BoardHeaderTitle>
            </Root>
        </Wrap>
    );
};

export default NewBoard;
