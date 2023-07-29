// export type ParentBoard = "to-do" | "doing" | "closed";

export type Task = {
  id: string,
  title: string,
  notes: string,
  repeat: boolean,
  board: string
}

export type TaskProps = {
  index: number
  task: Task
}
