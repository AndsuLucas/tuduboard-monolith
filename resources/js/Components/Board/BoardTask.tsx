import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskProps } from "@/types/task/task";
import { slicedNotes } from "@/services/task/task";

function BoardTask(props: TaskProps): JSX.Element {

  const { index, task } = props;

  return (
    <Draggable draggableId={task.id} index={index} key={task.id}>
      {(provided) => (
        <section
          className="taskCards"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div style={taskCardStyle}>
            <header style={taskHeaderStyle} className="taskCadHeader">
              <h1 style={taskNameStyle} className="taskCardName">{task.title}</h1>
              <span style={taskIdStyle} className="taskCardId">{task.id}</span>
            </header>
            <main>
              {slicedNotes(task.notes)}
            </main>
          </div>
        </section>
      )}
    </Draggable>
  );
}

const taskCardStyle: React.CSSProperties = {
  position: "relative",
  border: "0.1px solid black",
  borderRadius: "10px",
  display: "flex",
  padding: "5px",
  maxHeight: "100%",
  margin: "5px 0px",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "space-between"
}

const taskHeaderStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  margin: "0",
  justifyContent: "space-between"
}

const taskIdStyle: React.CSSProperties = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "end"
}

const taskNameStyle: React.CSSProperties = {
  flexGrow: 2,
}

const taskTopicStyle: React.CSSProperties = {
  position: "absolute",
  alignSelf: "end",
  zIndex: "99999",
  right: "0%",
  margin: "6% 0",
  backgroundColor: "ghostwhite",
  padding: "0"
}


export default BoardTask
