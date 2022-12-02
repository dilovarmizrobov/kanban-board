import React from 'react';
import {BoardContainer, BoardHeader, BoardHeaderTitle, BoardHeaderBadge, BoardListContainer,
    BoardList} from "./styles";
import BoardCard from "./BoardCard";
import {BoardInterface} from "../../pages/kanban/boards";
import {useDropBoard} from "./hooks";

const Board: React.FC<{board: BoardInterface}> = ({board}) => {
    const ref = useDropBoard(board.type);

    return (
        <BoardContainer>
            <BoardHeader>
                <BoardHeaderTitle>{board.title}</BoardHeaderTitle>
                <BoardHeaderBadge>{board.cards.length}</BoardHeaderBadge>
            </BoardHeader>
            <BoardListContainer ref={ref}>
                <BoardList>
                    {board.cards.map((card, index) =>
                        <BoardCard card={card} boardType={board.type} key={index} />)}
                </BoardList>
            </BoardListContainer>
        </BoardContainer>
    );
};

export default Board;
