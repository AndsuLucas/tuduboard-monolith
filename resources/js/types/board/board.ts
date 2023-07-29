import { Task } from "../task/task"
//@todo specific directory for contexts
import { createContext } from "react"
export type ColumnProps = {
  columnId: string
}

// TODO: this is not a board, this is a column
export type Board = {
  id: string, // TODO: BETTER TYPE FOR UID
  presentationName: string,
  tasks: Array<Task>,
  tasksOrder: Array<string>
}

export type BoardTaskOrderChanging = {
  oldIndex: number,
  newIndex: number,
  taskId: string
}

const boardData: Board[] = []
export const columnContext = createContext(boardData)
