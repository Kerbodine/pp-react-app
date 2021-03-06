import { BiSun, BiStar, BiPin, BiArchive, BiListUl } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

export const reminderCategories = [
  {
    id: uuidv4(),
    title: "Today",
    color: "blue",
    icon: <BiSun />,
    tasks: [],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Priority",
    color: "red",
    icon: <HiOutlineExclamationCircle />,
    tasks: [],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Starred",
    color: "amber",
    icon: <BiStar />,
    tasks: [],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Pinned",
    color: "indigo",
    icon: <BiPin />,
    tasks: [],
    completed: [],
    showCompleted: false,
  },
  {
    id: uuidv4(),
    title: "All",
    color: "gray",
    icon: <BiArchive />,
    tasks: [],
    completed: [],
    showCompleted: false,
  },
];

export const remindersInfo = [
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
    title: "Reminder List 3",
    color: "purple",
    icon: <BiListUl />,
    tasks: [
      {
        id: uuidv4(),
        title: "Task 5",
        dueDate: Date.now(),

        description: "desc 5",
        today: false,
        important: false,
        starred: false,
        expanded: false,
        pinned: true,
      },
      {
        id: uuidv4(),
        title: "Task 6",
        dueDate: Date.now(),

        description: "desc 6",
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
];
