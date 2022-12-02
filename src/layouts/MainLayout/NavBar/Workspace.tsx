import React from 'react';
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-top: 19px;
  margin-bottom: 13px;
  background: #2D4071;
  padding: 0 16px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  margin: 6px 8px 6px 0;
  width: 22px;
  height: 22px;
`;

const StyledText = styled.span`
  color: #FFFFFF;
`

const Workspace = () => {
    return (
        <Root>
            <StyledImage src="/images/user.svg" alt="user"/>
            <StyledText>My workspace</StyledText>
        </Root>
    );
};

export default Workspace;
