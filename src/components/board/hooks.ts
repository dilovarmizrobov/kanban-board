import {useDrag, useDrop} from "react-dnd";
import {BoardCardDragInterface} from "../../pages/kanban/boards";
import {BoardTypeEnum, DnDType} from "../../utils/enums";
import {useRef} from "react";
import {useAppDispatch} from "../../app/hooks";
import {dropCardToBoard, moveCardBetweenBoards} from "../../app/reducers/boardSlice";

export const useDragAndDropBoardCard = (item: BoardCardDragInterface) => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const [, drag] = useDrag<BoardCardDragInterface, void, unknown>({
        type: DnDType.CARD,
        item: () => item,
    });
    const [, drop] = useDrop<BoardCardDragInterface, void, unknown>({
        accept: DnDType.CARD,
        drop: (dragItem) => {
            dispatch(moveCardBetweenBoards({dragItem, dropItem: item}))
        }
    });

    drag(drop(ref));

    return ref;
};

export const useDropBoard = (boardType: BoardTypeEnum) => {
    const dispatch = useAppDispatch();
    const [, ref] = useDrop<BoardCardDragInterface, void, never>({
        accept: DnDType.CARD,
        drop: (dragItem, monitor) => {
            monitor.canDrop() && dispatch(dropCardToBoard({boardDestination: boardType, dragItem}))
        },
    });

    return ref;
}
