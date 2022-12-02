import React from 'react';
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  margin-right: 24px;
`;

const StyledInput = styled.input`
  height: 16px;
  width: 130px;
  border: 0;
  border-radius: 50px;
  padding: 12px 34px 12px 16px;
  outline: none;
  background: #F5F8FA;
  color: #8C939F;
`;

const StyledSearchIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 8px;
  padding: 2px;
  cursor: pointer;
  color: #8C939F;
`;

const Search = () => {
    return (
        <Root>
            <StyledInput type="text" placeholder='Search...'/>
            <StyledSearchIcon src='/icons/search.svg' alt='search icon'/>
        </Root>
    );
};

export default Search;
