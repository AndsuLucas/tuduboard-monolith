import React, { useContext } from "react";
import TaskComponent from "../Board/BoardTask";
import { StrictModeDroppable } from "../../StrictModeDroppable";
import { Board, ColumnProps } from "@/types/board/board";
import { columnContext } from "@/types/board/board";
import { Task } from "@/types/task/task";

function ColumnComponent(props: ColumnProps): JSX.Element {

  const columnid = props.columnId;
  const context = useContext(columnContext);

  const currentColumn = context.
    find((column: Board) => column.id == columnid);

  if (!currentColumn) {
    return <></>;
  }


  const currentTasks = (): React.ReactNode => {
    return currentColumn.tasks.map((task: Task, index) =>
      <TaskComponent task={task} index={index} key={task.id} />
    )
  }

  return (
    <StrictModeDroppable droppableId={currentColumn.id} key={currentColumn.id}>
      {provided => (
        <div style={boardColumnStyle} {...provided.droppableProps} ref={provided.innerRef}>
          <div>
            <h1>{currentColumn.presentationName}</h1>
          </div>
          {currentTasks()}
          {provided.placeholder}
        </div>
      )}
    </StrictModeDroppable>
  );
}

const boardColumnStyle: React.CSSProperties = {
  border: "1px solid green",
  borderRadius: "5px",
  flexGrow: 1,
  maxWidth: "30%",
  display: "flex",
  flexDirection: "column",
  padding: "5px"
}

export default ColumnComponent;
