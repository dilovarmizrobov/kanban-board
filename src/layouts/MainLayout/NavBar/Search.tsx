import React from 'react';
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  margin: 26px 16px 0;
`;

const StyledInput = styled.input`
  width: calc(100% - 44px);
  border: 0;
  border-radius: 4px;
  padding: 9px 34px 9px 10px;
  outline: none;
  background: #2D4071;
  color: #8C939F;
`;

const StyledSearchIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  padding: 2px;
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
