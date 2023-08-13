import { Task } from "@/types/task/task";
import { Board } from "@/types/board/board";

export const taskById = (taskId: string, column: Board) => 
  column.tasks.find((task) => task.id == taskId);


export const taskAt = (task: Task, index: number, column: Board) => {
    const newColumnState: Board = structuredClone(column);

    newColumnState.tasks.splice(index, 0, task);
    newColumnState.tasksOrder.splice(index, 0, task.id)

    return newColumnState;
}

export const removeAt = (index: number, column: Board) => {
  const newColumnState = structuredClone(column)
  
  newColumnState.tasksOrder
    .splice(index, 1);

  newColumnState.tasks
    .splice(index, 1)
    .pop();

  return newColumnState;
}