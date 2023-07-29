import { DraggableLocation, DropResult } from "react-beautiful-dnd";
import { Board } from "@/types/board/board";
import { boardIndex, replacedTaskOrder } from "@/services/board/board";
import { removeAt, taskAt, taskById } from "@/services/column/column";

type NonNullableDropResult = {
    destination: DraggableLocation,
    source: DraggableLocation,
    draggableId: string
}

/**
 *
 * @todo: CREATE BOARD STATE TYPE
 * @todo: ALL FUNCTIONS IN THIS FILE NEEDS TO REFACTOR
 * @todo: refactor to OOP paradigm.
 */
export const onDropingColumnTaskTrade = (dropResult: DropResult, boardState: Board[]) => {
    const { destination, source} = dropResult;

    if (!destination) {
      return boardState;
    }

    const isSameDropable = destination.droppableId === source.droppableId;
    const isSameIndex = destination.index === source.index;

    if (isSameDropable && isSameIndex) {
      return boardState;
    }

    const {draggableId} = dropResult;
    if (isSameDropable) {
      const newBoardState = changeTaskOrderInSameColumn(
        { destination, source, draggableId }, boardState
      );

      return newBoardState;
    }

    const newBoardState = changeTaskInDifferentColumns(
      { destination, source, draggableId }, boardState
    );

    return newBoardState;
}

const changeTaskOrderInSameColumn = (dropResult: NonNullableDropResult, boardState: Board[]) =>  {
  const { destination, source, draggableId } = dropResult;

  const destinationColumnKeyIndex = boardIndex(destination.droppableId, boardState);
  const destinationColumn =  boardState[destinationColumnKeyIndex];

  const columnWithChangedTaskOrder = replacedTaskOrder({
    oldIndex: source.index,
    newIndex: destination.index,
    taskId: draggableId
  }, destinationColumn);

  const boardWithNewData: Board[] = structuredClone(boardState);
  boardWithNewData[destinationColumnKeyIndex] = columnWithChangedTaskOrder;

  return boardWithNewData;
}

const changeTaskInDifferentColumns = (dropResult: NonNullableDropResult, boardState: Board[]) => {
  const { destination, source, draggableId } = dropResult;

  const destinationColumnKeyIndex = boardIndex(destination.droppableId, boardState);
  const destinationColumn = boardState[destinationColumnKeyIndex];

  const sourceColumnKeyIndex = boardIndex(source.droppableId, boardState);
  const sourceColumn = boardState[sourceColumnKeyIndex];

  const task = taskById(draggableId, sourceColumn);
  if (!task) {
    return boardState;
  }

  const columnWithNewTask = taskAt(task, destination.index,  destinationColumn);
  const sourceColumnWithRemovedTask = removeAt(source.index, sourceColumn);

  const boardWithNewData: Board[] = structuredClone(boardState);

  boardWithNewData[destinationColumnKeyIndex] = columnWithNewTask;
  boardWithNewData[sourceColumnKeyIndex] = sourceColumnWithRemovedTask;

  return boardWithNewData;
}
