import React from 'react';
import {BoardCardContainer, BoardCardTime, BoardCardTitle} from "./styles";
import {BoardCardDragInterface, BoardCardInterface} from "../../pages/kanban/boards";
import {BoardTypeEnum} from "../../utils/enums";
import {useDragAndDropBoardCard} from "./hooks";

interface BoardCardProps {
    card: BoardCardInterface;
    boardType: BoardTypeEnum;
}

const BoardCard: React.FC<BoardCardProps> = ({card, boardType}) => {
    const dragItem: BoardCardDragInterface = {id: card.id, boardType};
    const ref = useDragAndDropBoardCard(dragItem);
    const isCompleted = boardType === BoardTypeEnum.COMPLETED;

    return (
        <BoardCardContainer ref={ref} bgColor={card.color} isCompleted={isCompleted}>
            <BoardCardTitle isCompleted={isCompleted}>{card.title}</BoardCardTitle>
            <BoardCardTime isCompleted={isCompleted}>{card.time}</BoardCardTime>
        </BoardCardContainer>
    );
};

export default BoardCard;
