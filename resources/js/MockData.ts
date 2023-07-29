// import { uid } from "uid";

import { Task } from "./task/types/Task";

const Tasks: Task[] = [];
const TaskOrder: string[] = [];
const mockData =  [
    {
        id: 'to-do',
        presentationName: 'To-do',
        tasks: [
            {id: "task1", title: "title 1", notes: "notes1", board: "to-do", repeat: false },
            {id: "task2", title: "title 2", notes: "notes2", board: "to-do", repeat: false },
            {id: "task3", title: "title 3", notes: "notes3", board: "to-do", repeat: false },
        ],
        tasksOrder: ['task1', 'task2', 'task3']
    },
    {
        id: 'doing',
        presentationName: 'Doing',
        tasks: [
            {id: "task4", title: "title 4", notes: "notes4", board: "doing", repeat: false }
        ],
        tasksOrder: ['task4']
    },
    {
        id: 'closed',
        presentationName: 'Closed',
        tasks: [],
        tasksOrder: []
    },
];


export default mockData;
