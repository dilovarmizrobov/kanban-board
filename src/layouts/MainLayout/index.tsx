import React from "react";
import NavBar from "./NavBar";
import ToolBar from "./ToolBar";
import TopBar from "./TopBar";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  height: 100vh;
  font-size: 14px;
`

const WrapMain = styled.div`
  position: relative;
  left: 375px;
  top: 0;
  width: calc(100% - 375px);
  height: 100vh;
  overflow-y: auto;
`

const Main = styled.div`
  height: calc(100vh - 80px);
`;

const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Root>
            <NavBar/>
            <ToolBar/>
            <WrapMain>
                <TopBar/>
                <Main>
                    {children}
                </Main>
            </WrapMain>
        </Root>
    )
}

export default MainLayout
