import React from 'react';
import styled from "styled-components";

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Account = () => {
    return <StyledImage src="/images/user.svg" alt="user"/>
};

export default Account;
