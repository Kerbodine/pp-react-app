import { BiFile, BiListUl } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

const allData = [
  {
    id: uuidv4(),
    title: "Reminder List 1",
    color: "red",
    icon: <BiListUl />,
    tasks: [
      {
        id: uuidv4(),
        title: "Task 1",
        dueDate: Date.now(),

        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
        today: false,
        important: false,
        starred: false,
        expanded: false,
        pinned: true,
      },
      {
        id: uuidv4(),
        title: "Task 2",
        dueDate: Date.now(),

        description: "",
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
    title: "Reminder List 2",
    color: "amber",
    icon: <BiListUl />,
    tasks: [
      {
        id: uuidv4(),
        title: "Task 3",
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
    icon: <BiFile />,
    title: "Note 1",
    color: "red",
    content: "<h1>Notepad1 default value</h1>",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 2",
    color: "amber",
    content: "",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 3",
    color: "blue",
    content: "",
    tags: [],
    readOnly: false,
  },
];
