import React, { useEffect, useState } from "react";
import {
  BiSun,
  BiStar,
  BiTrash,
  BiCaretUpCircle,
  BiCaretDownCircle,
  BiCheck,
  BiPin,
} from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "./datepicker.css";

export default function TaskItem({
  id,
  title,
  completed,
  dueDate,
  updateComponent,
  today,
  description,
  important,
  starred,
  deleteTask,
  expanded,
  pinned,
}) {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDate, setTaskDate] = useState(dueDate);
  const [taskComplete, setTaskComplete] = useState(completed);
  const [displayComplete, setDisplayComplete] = useState(completed);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskToday, setTaskToday] = useState(today);
  const [taskImportant, setTaskImportant] = useState(important);
  const [taskStarred, setTaskStarred] = useState(starred);
  const [taskDropDown, setTaskDropdown] = useState(expanded);
  const [taskPinned, setTaskPinned] = useState(pinned);

  const titleChangeHandler = (e) => {
    setTaskTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setTaskDescription(e.target.value);
  };

  const toggleTodayHandler = () => [setTaskToday(!taskToday)];
  const toggleImportantHandler = () => [setTaskImportant(!taskImportant)];
  const toggleStarredHandler = () => [setTaskStarred(!taskStarred)];
  const toggleDetailsDropdown = () => [setTaskDropdown(!taskDropDown)];
  const togglePinned = () => [setTaskPinned(!taskPinned)];

  useEffect(() => {
    updateComponent(
      id,
      taskComplete,
      taskTitle,
      taskDate,
      taskDescription,
      taskToday,
      taskImportant,
      taskStarred,
      taskDropDown,
      taskPinned
    );
  }, [
    taskComplete,
    taskTitle,
    taskDate,
    taskDescription,
    taskToday,
    taskImportant,
    taskStarred,
    taskDropDown,
    taskPinned,
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayComplete === true) {
        setTaskComplete(true);
      }
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [displayComplete]);

  return (
    <div className="w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md cursor-pointer">
      <i
        className="text-2xl ml-2 w-6 h-6 my-1 rounded-full flex items-center justify-center text-primary-400 dark:text-primary-500"
        onClick={toggleDetailsDropdown}
      >
        {taskDropDown ? <BiCaretUpCircle /> : <BiCaretDownCircle />}
      </i>
      <div className="mx-2 relative">
        <div
          className="w-6 h-6 my-1 rounded-md border-2 border-primary-400 dark:border-primary-500 flex items-center justify-center"
          onClick={() => setDisplayComplete(!displayComplete)}
        >
          <div
            className={`${
              displayComplete ? "visible" : "hidden"
            } text-2xl text-white bg-accent-400 rounded-md`}
          >
            <BiCheck />
          </div>
        </div>
      </div>
      <div className="text-black dark:text-white mx-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <input
            placeholder="Untitled task"
            type="text"
            value={taskTitle}
            onChange={titleChangeHandler}
            className={`w-0 text-lg h-8 flex-auto mr-4 truncate bg-transparent outline-none ${
              displayComplete ? "line-through" : "no-underline"
            }`}
          ></input>
          <div className="mr-2">
            <DatePicker
              selected={taskDate}
              onChange={(date) => setTaskDate(date)}
              className="bg-primary-100 dark:bg-primary-800 w-24 h-8 text-center px-2 rounded outline-none"
              dateFormat="dd/MM/yyyy"
              placeholderText="Add date"
            />
          </div>
          <div className="flex">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-l-md bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                today ? "!bg-blue-400 text-white" : ""
              }`}
              onClick={toggleTodayHandler}
            >
              <BiSun />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                important ? "!bg-red-400 text-white" : ""
              }`}
              onClick={toggleImportantHandler}
            >
              <HiOutlineExclamationCircle />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-r-md bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                starred ? "!bg-yellow-400 text-white" : ""
              }`}
              onClick={toggleStarredHandler}
            >
              <BiStar />
            </button>
            <button
              className={`w-8 h-8 ml-2 flex items-center justify-center rounded-md bg-primary-100 hover:bg-primary-300 dark:bg-primary-800 dark:text-white dark:hover:bg-primary-600 text-black text-2xl ${
                taskPinned
                  ? "!bg-primary-400 dark:!bg-primary-500 text-white"
                  : ""
              }`}
              aria-label="delete task"
              onClick={togglePinned}
            >
              <BiPin />
            </button>
          </div>
        </div>
        <div
          className={`${
            taskDropDown ? "visible" : "hidden"
          } w-full h-auto mt-2 flex`}
        >
          <textarea
            placeholder="Add a description..."
            value={taskDescription}
            onChange={descriptionChangeHandler}
            className="text-sm bg-transparent flex-auto h-auto outline-none mr-2 resize-y text-primary-600 dark:text-primary-400 max-h-[12rem]"
          ></textarea>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-red-400 dark:bg-primary-800 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl"
            aria-label="delete task"
            onClick={() => {
              deleteTask(id);
            }}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
