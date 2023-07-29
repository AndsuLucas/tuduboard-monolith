import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import ColumnComponent from "@/Components/Column/ColumnComponent";
import { Board } from "@/types/board/board";
import { onDropingColumnTaskTrade } from "@/useCases/board/change-task-column";
import { columnContext } from '../../types/board/board';

type CommonViewData =  {
  auth: { user: object | null | undefined },
  errors: object,
  ziggy: object
}

type BoardViewData = {
    currentBoardState: Board[]
} & CommonViewData

function BoardView(viewData: BoardViewData): JSX.Element {

  const [boardState, setBoardState] = useState(viewData.currentBoardState);

  const columns = () => {
    return boardState.map((column: Board) =>
      <columnContext.Provider value={boardState} key={column.id}>
        <ColumnComponent columnId={column.id} />
      </columnContext.Provider>
    );
  }

  const taskDroping = (result: DropResult) => {
    const newBoardState = onDropingColumnTaskTrade(result, boardState);
    setBoardState(newBoardState);
  }

  return (
    <section className="board" style={boardStyle}>
      <header>
        <h1>menu board (?)</h1>
      </header>
      <main className="boardMainStyle" style={boardMainStyle}>
        <DragDropContext onDragEnd={taskDroping}>
          {columns()}
        </DragDropContext>
      </main>
    </section>
  );
}

const boardStyle: React.CSSProperties = {
  maxWidth: "100%",
}

const boardMainStyle: React.CSSProperties = {
  margin: "5px",
  paddingTop: "20px",
  display: "flex",
  height: "800px",
  justifyContent: "space-evenly"
}

export default BoardView;
