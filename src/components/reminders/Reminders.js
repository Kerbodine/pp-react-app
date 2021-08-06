import React, { useState } from "react";
import ReminderSidebar from "./ReminderSidebar";
import TaskItem from "./TaskItem";
import { v4 as uuidv4 } from "uuid";
import { BiListUl } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { BiCalendarExclamation } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

export default function Reminders({ darkMode }) {
  const allLists = [
    {
      id: uuidv4(),
      title: "Reminder List 1",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 1",
          completed: false,
          dueDate: Date.now(),
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
        },
        {
          id: uuidv4(),
          title: "Task 2",
          completed: false,
          dueDate: Date.now(),
          description: "",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Reminder List 2",
      amount: "10",
      color: "bg-yellow-400",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 3",
          completed: false,
          dueDate: Date.now(),
        },
        {
          id: uuidv4(),
          title: "Task 4",
          completed: false,
          dueDate: Date.now(),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-purple-400",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 5",
          completed: false,
          dueDate: Date.now(),
          description: "",
        },
        {
          id: uuidv4(),
          title: "Task 6",
          completed: false,
          dueDate: Date.now(),
          description: "",
        },
      ],
    },
  ];

  const [currentList, setCurrentList] = useState(allLists[0]);

  const categories = [
    {
      id: uuidv4(),
      title: "Today",
      amount: "10",
      color: "bg-blue-400",
      icon: <BiSun />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Priority",
      amount: "10",
      color: "bg-red-400",
      icon: <BiCalendarExclamation />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Starred",
      amount: "10",
      color: "bg-yellow-400",
      icon: <BiStar />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "All",
      amount: "10",
      color: "bg-green-400",
      icon: <BiArchive />,
      tasks: [],
    },
  ];

  const selectListHandler = (id) => {
    setCurrentList(
      allLists.filter((obj) => {
        return obj.id === id;
      })[0]
    );
  };

  const [colorDropdown, setColorDropdown] = useState(false);

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const taskList = currentList.tasks.map((task) => (
    <div key={task.id}>
      <TaskItem
        id={task.id}
        title={task.title}
        completed={task.completed}
        color={task.color}
        dueDate={task.dueDate}
      />
    </div>
  ));

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex bg-primary dark:bg-primary-800 transition-colors">
        <div className="mt-20 mb-4 mr-4 lg:mr-0 w-full">
          <div className="h-full rounded-2xl flex overflow-hidden">
            <div className="h-full">
              <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 transition-colors h-full">
                <ReminderSidebar
                  darkMode={darkMode}
                  allLists={allLists}
                  categories={categories}
                  selectList={selectListHandler}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="bg-primary-100 dark:bg-primary-600 transition-colors h-full">
                <div className={`w-full h-12 ${currentList.color}`}></div>
                <div className="h-12 m-8 flex flex-row items-center">
                  <input
                    className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                    autoComplete="off"
                    value={currentList.title}
                    type="text"
                    aria-label="list title"
                  ></input>
                  <div
                    className={`relative w-8 h-8 rounded-full ${currentList.color} text-white text-2xl flex items-center justify-center hover:bg-red-400/80`}
                  >
                    <BiChevronDown onClick={handleColorDropdown} />
                    <div
                      className={`${
                        colorDropdown ? "opacity-100" : "opacity-0"
                      } absolute top-10 -left-2 w-12 bg-white rounded-md shadow-md transition-opacity`}
                    >
                      <div className="w-8 h-8 m-2 rounded-full bg-red-400 hover:bg-red-400/80"></div>
                      <div className="w-8 h-8 m-2 rounded-full bg-yellow-400 hover:bg-yellow-400/80"></div>
                      <div className="w-8 h-8 m-2 rounded-full bg-green-400 hover:bg-green-400/80"></div>
                      <div className="w-8 h-8 m-2 rounded-full bg-blue-400 hover:bg-blue-400/80"></div>
                      <div className="w-8 h-8 m-2 rounded-full bg-purple-400 hover:bg-purple-400/80"></div>
                    </div>
                  </div>
                </div>
                <div className="mx-8">
                  <div className="overflow-y-auto no-scrollbar h-full flex flex-col gap-2 pb-16">
                    {taskList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
