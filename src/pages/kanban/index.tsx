import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import styled from "styled-components";
import Board from "../../components/board";
import NewBoard from "../../components/NewBoard";
import {selectBoards} from "../../app/reducers/boardSlice";
import {useAppSelector} from "../../app/hooks";

const Root = styled.div`
  display: flex;
  overflow-x: auto;
  height: 100%;
`;

const Kanban: React.FC = () => {
    const boards = useAppSelector(selectBoards);

    return (
        <Root>
            <DndProvider backend={HTML5Backend}>
                {boards.map((board, index) => <Board board={board} key={index}/>)}
                <NewBoard/>
            </DndProvider>
        </Root>
    )
}

export default Kanban
