import React, { useState, useEffect } from "react";
import { BiCheck, BiPin } from "react-icons/bi";

export default function SideTask({
  id,
  title,
  completed,
  pinned,
  completeTaskHandler,
  updateComponent,
  color,
}) {
  const [taskTitle, setTaskTitle] = useState(title);
  const [displayComplete, setDisplayComplete] = useState(completed);
  const [taskPinned, setTaskPinned] = useState(pinned);

  const togglePinned = () => [setTaskPinned(!taskPinned)];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!completed && displayComplete) {
        completeTaskHandler(id);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [displayComplete, completed]);

  useEffect(() => {
    updateComponent(id, taskPinned);
  }, [taskPinned]);

  useEffect(() => {
    setTaskTitle(title);
  }, [title]);

  return (
    <div className="w-full h-12 bg-primary-200 dark:bg-primary-700 rounded-md flex items-center text-black dark:text-white overflow-hidden">
      <div className={`bg-${color}-400 w-2 h-full`}></div>
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
      <h3 className="text-lg w-32 truncate">{taskTitle}</h3>
      <button
        className={`mx-2 w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-primary-300 dark:bg-primary-800 dark:text-white dark:hover:bg-primary-600 text-black text-2xl ${
          taskPinned ? "!bg-primary-400 dark:!bg-primary-500 text-white" : ""
        }`}
        aria-label="delete task"
        onClick={togglePinned}
      >
        <BiPin />
      </button>
    </div>
  );
}
