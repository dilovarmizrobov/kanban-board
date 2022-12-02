import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BoardCardDragInterface, boards} from "../../pages/kanban/boards";
import {BoardInterface} from "../../pages/kanban/boards";
import {RootState} from "../store";
import {BoardTypeEnum} from "../../utils/enums";

export interface BoardState {
    boards: BoardInterface[];
}

const initialState: BoardState = {
    boards: boards,
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        moveCardBetweenBoards: (
            state,
            action: PayloadAction<{dragItem: BoardCardDragInterface, dropItem: BoardCardDragInterface}>
        ) => {
            const {dragItem, dropItem} = action.payload;
            const boardDestination = state.boards.find(b => b.type === dropItem.boardType)!
            const dropCardIndex = boardDestination.cards.findIndex(card => card.id === dropItem.id)

            if (dragItem.boardType === dropItem.boardType) {
                const dragCardIndex = boardDestination.cards.findIndex(card => card.id === dragItem.id)
                const dragCard = boardDestination.cards.splice(dragCardIndex, 1)[0]

                boardDestination.cards.splice(dropCardIndex, 0, dragCard);
            } else {
                const boardDragItem = state.boards.find(b => b.type === dragItem.boardType)!;
                const dragCardIndex = boardDragItem.cards.findIndex(card => card.id === dragItem.id)
                const dragCard = boardDragItem.cards.splice(dragCardIndex, 1)[0]

                boardDestination.cards.splice(dropCardIndex, 0, dragCard);
            }
        },
        dropCardToBoard: (
            state,
            action: PayloadAction<{boardDestination: BoardTypeEnum, dragItem: BoardCardDragInterface}>
        ) => {
            const {boardDestination: boardDestinationType, dragItem} = action.payload;

            if (boardDestinationType === dragItem.boardType) return;

            const boardDestination = state.boards.find(b => b.type === boardDestinationType)!;
            const boardDragItem = state.boards.find(b => b.type === dragItem.boardType)!;
            const cardIndex = boardDragItem.cards.findIndex(card => card.id === dragItem.id);

            boardDestination.cards.push(boardDragItem.cards[cardIndex]);
            boardDragItem.cards.splice(cardIndex, 1);
        }
    }
});

export const {moveCardBetweenBoards, dropCardToBoard} = boardSlice.actions;

export const selectBoards = (state: RootState) => state.board.boards;

export default boardSlice.reducer;
