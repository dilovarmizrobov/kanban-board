import React from 'react';
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 22px;
  cursor: pointer;
`;

const Badge = styled.div`
  position: absolute;
  left: 8.5px;
  top: 0;
  display: flex;
  align-items: center;
  padding: 4px;
  background: #F21247;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 10px;
  line-height: 10px;
`;

const Notification = () => {
    return (
        <Root>
            <img src='/icons/bxs-bell.svg' alt='icon'/>
            <Badge>99+</Badge>
        </Root>
    );
};

export default Notification;
