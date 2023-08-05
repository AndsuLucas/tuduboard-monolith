import { CommonViewData } from "@/types/viewData/common-view-data";
import { Task } from "@/types/task/task";
import { router } from "@inertiajs/react";
import BoardTaskForm from "@/Components/BoardTask/BoardTaskForm";


type NewBoardTaskFormViewData = {
  columns: [
    {
      id: string,
      presentationName: string
    }
  ]
} & CommonViewData

function NewBoardTaskForm(viewData: NewBoardTaskFormViewData): JSX.Element {
  const routes = viewData.ziggy.routes;
  const hasStoreNewTaskRoute = 'task.store' in routes;
  if (!hasStoreNewTaskRoute) {
    return <><h1>TODO: BEUTIFUL ERROR PAGE HERE</h1></>;
  }

  const storeNewTaskRoute: string = '/' + routes["task.store"].uri;
  const emptyTask = {
    id: '',
    title: '',
    notes: '',
    repeat: false,
    board: '',
  };

  const handleSubmit = (task: Task) => {
    router.post(storeNewTaskRoute, task);
  }

  return <BoardTaskForm
    currentTaskState={emptyTask}
    handleSubmit={handleSubmit}
    columns={viewData.columns}
  />

}

export default NewBoardTaskForm;
