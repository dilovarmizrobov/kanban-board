import React from 'react';
import {ToolInterface} from "./tools";
import styled from "styled-components";

const Root = styled.div<{active: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 11px 0 11px 10px;
  margin-right: 16px;
  cursor: pointer;
  background: ${p => p.active ? '#FFFFFF' : 'inherit'};
  border-radius: ${p => p.active ? '0 8px 8px 0' : 0};
  & span {
    color: ${p => p.active ? '#0094FF' : '#222222'};
  }
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const ActiveToolBorder = styled.img`
  position: absolute;
  left: 0;
`

const ListItem: React.FC<{tool: ToolInterface}> = ({tool}) => {
    return (
        <Root active={tool.isActive}>
            <Icon src={`/icons/${tool.icon}`} alt='icon'/>
            <span>{tool.title}</span>
            {tool.isActive && <ActiveToolBorder src='/icons/active-tool.svg'/>}
        </Root>
    );
};

export default ListItem;
