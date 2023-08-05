import { FormEvent, ChangeEvent, useState } from "react"
import { Task } from '../../types/task/task';

type BoardTaskFormProps = {
  currentTaskState: Task,
  handleSubmit: (task: Task) => void,
  handleChange?: (evt: ChangeEvent, task: Task) => Task
  columns: [
    {
      id: string,
      presentationName: string
    }
  ]
}

function BoardTaskForm(props: BoardTaskFormProps): JSX.Element {
  const [taskState, setTaskState] = useState(props.currentTaskState);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    props.handleSubmit(taskState);
  }

  const handleChange = (evt: ChangeEvent) => {
    let currentTaskState = taskState;
    type NewTaskFormElements = HTMLInputElement & HTMLSelectElement;
    const target = evt.target as NewTaskFormElements;

    if (props.handleChange) {
      currentTaskState = props.handleChange(evt, currentTaskState);
    }

    const key = target.id;
    console.log(target);
    const value = key == 'repeat' ?
      target.checked ? 1 : 0
      : target.value;

    setTaskState({
      ...currentTaskState,
      [key]: value
    });
  }

  return (
    <form onSubmit={handleSubmit} className="createBoardTaskForm" style={createBoardTaskFormStyle}>
      <label htmlFor="title">Title:</label>
      <input id="title" value={taskState.title} onChange={handleChange} required />
      <label htmlFor="notes">Notes:</label>
      <input id="notes" value={taskState.notes} onChange={handleChange} required />
      <label htmlFor="repeat">Repeat?:</label>
      <input type="checkbox" id="repeat" onChange={handleChange} required />
      <label htmlFor="board">Column?:</label>
      <select id="board" onChange={handleChange} required>
        {
          props.columns.map(
            (column) => <option key={column.id} value={column.id}>{column.presentationName}</option>
          )
        }
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}


const createBoardTaskFormStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '50%',
  margin: '0 auto'
}


export default BoardTaskForm;
