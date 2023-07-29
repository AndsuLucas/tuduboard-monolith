import { Board, BoardTaskOrderChanging } from "@/types/board/board";

export const boardIndex = (boardId: string, boardList: Array<Board>): number =>
  boardList.findIndex((board) => board.id == boardId);

export const replacedTaskOrder = (boardChanging: BoardTaskOrderChanging, destinationBoard: Board): Board => {
  const newBoard: Board = structuredClone(destinationBoard);
  const { taskId, oldIndex, newIndex } = boardChanging;

  const oldTaskId = newBoard.tasksOrder
    .splice(newIndex, 1, taskId)
    .pop();

  const oldTask = newBoard.tasks
    .splice(newIndex, 1, newBoard.tasks[oldIndex])
    .pop();

  if (!oldTaskId || !oldTask) {
    return destinationBoard;
  }

  newBoard.tasksOrder.splice(oldIndex, 1, oldTaskId);
  newBoard.tasks.splice(oldIndex, 1, oldTask);

  return newBoard;
}
