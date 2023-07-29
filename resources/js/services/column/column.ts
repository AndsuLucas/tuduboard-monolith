import { Task } from "../../task/types/Task";
import { Board } from "../../board/types/Board";

export const taskById = (taskId: string, column: Board) => 
  column.tasks.find((task) => task.id == taskId);


export const taskAt = (task: Task, index: number, column: Board) => {
    let newColumnState: Board = structuredClone(column);

    newColumnState.tasks.splice(index, 0, task);
    newColumnState.tasksOrder.splice(index, 0, task.id)

    return newColumnState;
}

export const removeAt = (index: number, column: Board) => {
  let newColumnState = structuredClone(column)
  
  newColumnState.tasksOrder
    .splice(index, 1);

  newColumnState.tasks
    .splice(index, 1)
    .pop();

  return newColumnState;
}