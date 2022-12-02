import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
  margin-left: 16px;
  margin-top: 26px;
  cursor: pointer;
  width: 131px;
  height: 32px;
`;

const Logo = () => <StyledImg src='/icons/bordio-logo.svg' alt="logo" />;

export default Logo;
