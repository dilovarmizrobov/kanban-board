import React from 'react';
import styled from "styled-components";
import PlusIcon from "../../../components/icons/PlusIcon";

const Button = styled.button`
  display: inline-block;
  padding: 8px 20px;
  background: #0094FF;
  color: #FFFFFF;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  & span {
    display: inline-block;
    margin-left: 7px;
  }
`;

const AddButton = () => {
    return (
        <Button>
            <PlusIcon/>
            <span>Add new</span>
        </Button>
    );
};

export default AddButton;
