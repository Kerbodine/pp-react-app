import React, { useState, useEffect } from "react";
import ReminderSidebar from "./ReminderSidebar";
import TaskItem from "./TaskItem";
import { v4 as uuidv4 } from "uuid";
import {
  BiListUl,
  BiSun,
  BiCalendarExclamation,
  BiStar,
  BiArchive,
  BiChevronDown,
  BiPlus,
} from "react-icons/bi";

export default function Reminders({ darkMode }) {
  // Array for all lists
  const [allLists, setAllLists] = useState([
    {
      id: uuidv4(),
      title: "Today",
      amount: "10",
      color: "blue",
      icon: <BiSun />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Priority",
      amount: "10",
      color: "red",
      icon: <BiCalendarExclamation />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Starred",
      amount: "10",
      color: "yellow",
      icon: <BiStar />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "All",
      amount: "10",
      color: "green",
      icon: <BiArchive />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Reminder List 1",
      color: "red",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 1",
          completed: false,
          dueDate: Date.now(),
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
        {
          id: uuidv4(),
          title: "Task 2",
          completed: false,
          dueDate: Date.now(),
          description: "",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Reminder List 2",
      color: "yellow",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 3",
          completed: false,
          dueDate: Date.now(),
          description: "desc 3",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
        {
          id: uuidv4(),
          title: "Task 4",
          completed: false,
          dueDate: Date.now(),
          description: "desc 4",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
      ],
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
          completed: false,
          dueDate: Date.now(),
          description: "desc 5",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
        {
          id: uuidv4(),
          title: "Task 6",
          completed: false,
          dueDate: Date.now(),
          description: "desc 6",
          today: false,
          important: false,
          starred: false,
          expanded: false,
        },
      ],
    },
  ]);

  // Current list state
  const [currentList, setCurrentList] = useState(allLists[0]);

  const updateTaskHandler = (
    id,
    completed,
    title,
    dueDate,
    description,
    today,
    important,
    starred,
    expanded
  ) => {
    const objIndex = currentList.tasks.findIndex((task) => task.id === id);
    let temp = currentList.tasks;
    // temp[objIndex] = {
    //   title: title,
    //   completed: completed,
    //   dueDate: dueDate,
    //   description: description,
    //   today: today,
    //   important: important,
    //   starred: starred,
    //   expanded: expanded,
    // };
    temp[objIndex].title = title;
    temp[objIndex].completed = completed;
    temp[objIndex].dueDate = dueDate;
    temp[objIndex].description = description;
    temp[objIndex].today = today;
    temp[objIndex].important = important;
    temp[objIndex].starred = starred;
    temp[objIndex].expanded = expanded;
    setCurrentList({ ...currentList, tasks: temp });
  };

  const deleteTaskHandler = (id) => {
    let temp = currentList.tasks.filter(function (obj) {
      return obj.id !== id;
    });
    console.log(temp);
    setCurrentList({ ...currentList, tasks: temp });
  };

  // Function to change current list to selected list
  const selectListHandler = (id) => {
    setCurrentList(
      allLists.filter((obj) => {
        return obj.id === id;
      })[0]
    );
  };

  // Color dropdown state
  const [colorDropdown, setColorDropdown] = useState(false);

  // Manage color dropdown state
  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  // Function to update color for current list
  const listColorHandler = (newColor) => {
    setCurrentList({ ...currentList, color: newColor });
    setColorDropdown(false);
  };

  // Function to change list title
  const titleChangeHandler = (e) => {
    setCurrentList({ ...currentList, title: e.target.value });
  };

  const newTaskHandler = () => {
    let temp = currentList;
    temp.tasks.push({
      id: uuidv4(),
      title: "New task",
      completed: false,
      dueDate: null,
      description: "",
    });
    setCurrentList({ ...temp });
  };

  const newListHandler = () => {
    const newList = {
      id: uuidv4(),
      title: "Untitled list",
      color: "gray",
      icon: <BiListUl />,
      tasks: [],
    };
    setAllLists([...allLists, newList]);
    setCurrentList({ ...newList });
  };

  // Updating all lists array after update to current list
  useEffect(() => {
    const objIndex = allLists.findIndex((list) => list.id === currentList.id);
    const temp = allLists;
    temp[objIndex] = currentList;
    setAllLists([...temp]);
  }, [currentList]);

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
                  selectList={selectListHandler}
                  newListHandler={newListHandler}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="bg-primary-100 dark:bg-primary-600 transition-colors h-full">
                <div
                  className={`w-full h-12 bg-${currentList.color}-400`}
                ></div>
                <div className="h-12 m-8 flex flex-row items-center">
                  <input
                    className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                    autoComplete="off"
                    value={currentList.title}
                    onChange={titleChangeHandler}
                    type="text"
                    aria-label="list title"
                  ></input>
                  <div
                    className={`relative w-8 h-8 rounded-full bg-${
                      currentList.color
                        ? `${currentList.color}-400 text-white`
                        : "primary-200 text-black"
                    } text-2xl flex items-center justify-center hover:bg-${
                      currentList.color
                    }-400/80`}
                  >
                    <BiChevronDown onClick={handleColorDropdown} />
                    <div
                      className={`${
                        colorDropdown ? "visible" : "hidden"
                      } absolute top-10 -left-2 w-12 bg-white rounded-md shadow-md`}
                    >
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-red-400 hover:bg-red-400/80"
                        onClick={() => listColorHandler("red")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-yellow-400 hover:bg-yellow-400/80"
                        onClick={() => listColorHandler("yellow")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-green-400 hover:bg-green-400/80"
                        onClick={() => listColorHandler("green")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-blue-400 hover:bg-blue-400/80"
                        onClick={() => listColorHandler("blue")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-purple-400 hover:bg-purple-400/80"
                        onClick={() => listColorHandler("purple")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-gray-400 hover:bg-gray-400/80"
                        onClick={() => listColorHandler("gray")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full border-gray-400 border-2 hover:bg-gray-200"
                        onClick={() => listColorHandler(false)}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mx-8">
                  <div className="overflow-y-scroll no-scrollbar h-full flex flex-col gap-2 pb-16">
                    {currentList.tasks.map((task) => (
                      <div key={task.id}>
                        <TaskItem
                          id={task.id}
                          title={task.title}
                          completed={task.completed}
                          color={currentList.color}
                          dueDate={task.dueDate}
                          description={task.description}
                          today={task.today}
                          important={task.important}
                          starred={task.starred}
                          expanded={task.expanded}
                          updateComponent={updateTaskHandler}
                          deleteTask={deleteTaskHandler}
                        />
                      </div>
                    ))}
                    <div
                      className="w-full border border-gray-400 rounded-md border-[2px] h-10 flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-gray-200 transition-all"
                      onClick={newTaskHandler}
                    >
                      <i className="text-2xl text-gray-600">
                        <BiPlus />
                      </i>
                      <h3 className="text-gray-600">Add new task</h3>
                    </div>
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
