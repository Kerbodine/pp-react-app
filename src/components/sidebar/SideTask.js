import React, { useState, useEffect } from "react";
import {
  BiCalendarExclamation,
  BiCheck,
  BiDetail,
  BiPin,
  BiStar,
  BiSun,
} from "react-icons/bi";

export default function SideTask({
  id,
  title,
  completed,
  pinned,
  description,
  today,
  important,
  starred,
  dueIn,
  completeTaskHandler,
  updateComponent,
  color,
}) {
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

  return (
    <div className="w-full h-16 bg-primary-200 dark:bg-primary-700 rounded-md flex items-center text-black dark:text-white overflow-hidden">
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
      <div className="flex flex-col">
        <h3 className="text-lg w-32 truncate -mb-1">
          {title ? (
            title
          ) : (
            <span className="text-primary-400 dark:text-primary-500">
              Untitled
            </span>
          )}
        </h3>
        <div className="flex text-primary-500 dark:text-primary-400 items-center">
          {description ? <BiDetail /> : null}
          {today ? <BiSun /> : null}
          {important ? <BiCalendarExclamation /> : null}
          {starred ? <BiStar /> : null}
          <span className="ml-1">{dueIn}</span>
        </div>
      </div>
      <button
        className={`mx-2 w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-primary-300 dark:bg-primary-800 dark:text-white dark:hover:bg-primary-600 text-black text-2xl ${
          taskPinned ? "!bg-primary-400 dark:!bg-primary-500 text-white" : ""
        }`}
        aria-label="pin task"
        onClick={togglePinned}
      >
        <BiPin />
      </button>
    </div>
  );
}
