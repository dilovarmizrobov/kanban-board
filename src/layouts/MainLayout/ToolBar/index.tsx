import React from "react";
import styled from "styled-components";
import {tools} from "./tools";
import ListItem from "./ListItem";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 220px;
  background: #F5F8FA;
  overflow-y: auto;
  height: 100vh;
  width: 155px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 18px;
  margin: 24px 0 26px 16px;
  color: #222222;
`

const ToolBar: React.FC = () => {
    return (
        <Wrapper>
            <Root>
                <Header>Tools</Header>
                {tools.map((tool, index) => <ListItem tool={tool} key={index}/>)}
            </Root>
        </Wrapper>
    )
}

export default ToolBar
