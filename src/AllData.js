import { BiFile, BiListUl } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const allData = [
  {
    id: uuidv4(),
    type: "reminders",
    title: "Reminder List 1",
    color: "red",
    icon: <BiListUl />,
    creationDate: Date.now(),
    tasks: [
      {
        id: uuidv4(),
        title: "Task 1",
        creationDate: Date.now(),
        dueDate: Date.now(),
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
        today: true,
        important: false,
        starred: false,
        expanded: true,
        pinned: true,
      },
      {
        id: uuidv4(),
        title: "Task 2",
        creationDate: Date.now(),
        dueDate: Date.now(),
        description: "",
        today: false,
        important: false,
        starred: true,
        expanded: true,
        pinned: false,
      },
    ],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    type: "reminders",
    title: "Reminder List 2",
    color: "amber",
    icon: <BiListUl />,
    creationDate: Date.now(),
    tasks: [
      {
        id: uuidv4(),
        title: "Task 3",
        creationDate: Date.now(),
        dueDate: Date.now(),
        description: "desc 3",
        today: false,
        important: false,
        starred: false,
        expanded: false,
        pinned: true,
      },
      {
        id: uuidv4(),
        title: "Task 4",
        creationDate: Date.now(),
        dueDate: Date.now(),
        description: "desc 4",
        today: false,
        important: false,
        starred: false,
        expanded: false,
        pinned: false,
      },
    ],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    type: "reminders",
    title: "Reminder List 3",
    color: "blue",
    icon: <BiListUl />,
    creationDate: Date.now(),
    tasks: [],
    completed: [
      {
        id: uuidv4(),
        title: "Task 3",
        creationDate: Date.now(),
        dueDate: Date.now(),
        description: "desc 3",
        today: false,
        important: false,
        starred: false,
        expanded: false,
        pinned: true,
      },
    ],
    showCompleted: false,
  },
  {
    type: "notes",
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 1",
    color: "red",
    creationDate: Date.now(),
    content: "<h3>Notepad 1 default value</h3>",
    tags: [],
    today: false,
    important: false,
    starred: false,
    pinned: false,
  },
  {
    type: "notes",
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 2",
    color: "amber",
    creationDate: Date.now(),
    content: "<h3>Notepad 2 default value</h3>",
    tags: [],
    today: false,
    important: false,
    starred: false,
    pinned: false,
  },
  {
    type: "notes",
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 3",
    color: "blue",
    creationDate: Date.now(),
    content: "<h3>Notepad 3 default value</h3>",
    tags: [],
    today: false,
    important: false,
    starred: false,
    pinned: false,
  },
];
