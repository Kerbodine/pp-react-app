import React, { useEffect, useState } from "react";
import {
  BiSun,
  BiStar,
  BiTrash,
  BiCaretUpCircle,
  BiCaretDownCircle,
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
}) {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDate, setTaskDate] = useState(dueDate);
  const [taskComplete, setTaskComplete] = useState(completed);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskToday, setTaskToday] = useState(today);
  const [taskImportant, setTaskImportant] = useState(important);
  const [taskStarred, setTaskStarred] = useState(starred);
  const [taskDropDown, setTaskDropdown] = useState(expanded);

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
      taskDropDown
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
  ]);

  const completeHandler = () => {
    setTaskComplete(!completed);
  };

  return (
    <div className="w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md">
      <i
        className="text-2xl ml-2 w-6 h-6 my-1 rounded-full flex items-center justify-center text-gray-600"
        onClick={toggleDetailsDropdown}
      >
        {taskDropDown ? <BiCaretUpCircle /> : <BiCaretDownCircle />}
      </i>
      <div className="mx-2">
        <input
          type="checkbox"
          defaultChecked={taskComplete}
          value={taskComplete}
          onChange={completeHandler}
          className={`w-6 h-6 my-1 border border-primary-300 border-[2px] dark:bg-primary-600 checked:border-none rounded-md checkbox checked:bg-accent-400`}
        ></input>
      </div>
      <div className="text-black dark:text-white mx-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <input
            type="text"
            value={taskTitle}
            onChange={titleChangeHandler}
            className={`w-0 text-lg h-8 flex-auto mr-4 truncate bg-transparent outline-none ${
              taskComplete ? "line-through" : "no-underline"
            }`}
          ></input>
          <div className="mr-2">
            <DatePicker
              selected={taskDate}
              onChange={(date) => setTaskDate(date)}
              className="bg-gray-100 w-24 h-8 text-center px-2 rounded outline-none"
              dateFormat="dd/MM/yyyy"
              placeholderText="Add date"
            />
          </div>
          <div className="flex">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-l-md bg-primary-300 text-black hover:bg-primary-400 transition-colors text-2xl ${
                today ? "!bg-blue-400 text-white" : ""
              }`}
              onClick={toggleTodayHandler}
            >
              <BiSun />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center bg-primary-300 text-black transition-colors text-2xl ${
                important ? "!bg-red-400 text-white" : ""
              }`}
              onClick={toggleImportantHandler}
            >
              <HiOutlineExclamationCircle />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-r-md bg-primary-300 text-black transition-colors text-2xl ${
                starred ? "!bg-yellow-400 text-white" : ""
              }`}
              onClick={toggleStarredHandler}
            >
              <BiStar />
            </button>
          </div>
        </div>
        <div
          className={`${
            taskDropDown ? "visible" : "hidden"
          } w-full h-auto mt-2`}
        >
          <textarea
            placeholder="add a description..."
            value={taskDescription}
            onChange={descriptionChangeHandler}
            className="text-sm bg-transparent w-full h-auto outline-none resize-none text-gray-600"
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <button
          className="w-8 h-8 mx-2 flex items-center justify-center rounded-full bg-primary-300 hover:bg-red-400 text-black hover:text-white transition-colors text-2xl"
          aria-label="delete task"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
}
