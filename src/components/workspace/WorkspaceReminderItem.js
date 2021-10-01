/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  BiSun,
  BiStar,
  BiTrash,
  BiCaretRightCircle,
  BiCaretDownCircle,
  BiCheck,
  BiPin,
  BiGridVertical,
} from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "./datepicker.css";
import ReactTooltip from "react-tooltip";

export default function WorkspaceReminderItem({
  id,
  title,
  description,
  completed,
  creationDate,
  dueDate,
  today,
  important,
  starred,
  pinned,
  expanded,
  updateComponent,
  deleteTask,
  isDragging,
  completeTaskHandler,
  unCompleteTaskHandler,
  dragEnabled,
  selected,
}) {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDate, setTaskDate] = useState(dueDate);
  const [displayComplete, setDisplayComplete] = useState(completed);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskToday, setTaskToday] = useState(today);
  const [taskImportant, setTaskImportant] = useState(important);
  const [taskStarred, setTaskStarred] = useState(starred);
  const [taskDropDown, setTaskDropdown] = useState(expanded);
  const [taskPinned, setTaskPinned] = useState(pinned);
  const [hover, setHover] = useState(false);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const titleChangeHandler = (e) => {
    setTaskTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setTaskDescription(e.target.value);
  };

  useEffect(() => {
    setTaskTitle(title);
  }, [title]);

  useEffect(() => {
    setTaskPinned(pinned);
  }, [pinned]);

  const toggleTodayHandler = () => {
    setTaskToday((prev) => {
      return !prev;
    });
  };
  const toggleImportantHandler = () => {
    setTaskImportant((prev) => {
      return !prev;
    });
  };
  const toggleStarredHandler = () => {
    setTaskStarred((prev) => {
      return !prev;
    });
  };
  const toggleDetailsDropdown = () => {
    setTaskDropdown((prev) => {
      return !prev;
    });
  };
  const togglePinned = () => {
    setTaskPinned((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    updateComponent({
      id: id,
      title: taskTitle,
      creationDate: creationDate,
      dueDate: taskDate,
      description: taskDescription,
      completed: false,
      today: taskToday,
      important: taskImportant,
      starred: taskStarred,
      expanded: taskDropDown,
      pinned: taskPinned,
    });
  }, [
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
      if (completed && !displayComplete) {
        unCompleteTaskHandler(id);
      } else if (!completed && displayComplete) {
        completeTaskHandler(id);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [displayComplete, completed]);

  useEffect(() => {
    const handleNavigation = (event) => {
      if (
        selected &&
        document.activeElement !== titleInput.current &&
        document.activeElement !== descriptionInput.current
      ) {
        switch (event.keyCode) {
          case 13: // mark task as complete [return]
            setDisplayComplete(!displayComplete);
            break;
          case 80: // pin task [p]
            togglePinned();
            break;
          case 46: // delete task [del]
            deleteTask(id);
            break;
          case 49: // toggle my day button [1]
            toggleTodayHandler();
            break;
          case 50: // toggle important button [2]
            toggleImportantHandler();
            break;
          case 51: // toggle starred button [3]
            toggleStarredHandler();
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener("keydown", handleNavigation);
    return () => {
      // un-focus all elements when selected task is changed
      window.removeEventListener("keydown", handleNavigation);
    };
  }, [selected]);

  return (
    <div
      className={`w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md cursor-pointer mb-4 ${
        isDragging ? "shadow-lg" : ""
      } ${selected ? "ring-2" : ""}`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <i
        className={`-ml-2 -mr-1 text-2xl my-1 text-primary-400 dark:text-primary-500 cursor-move ${
          dragEnabled && hover ? "visible" : "invisible"
        }`}
      >
        <BiGridVertical />
      </i>
      <i
        className="text-2xl mr-2 w-6 h-6 my-1 rounded-full flex items-center justify-center text-primary-400 dark:text-primary-500"
        onClick={toggleDetailsDropdown}
      >
        {taskDropDown ? <BiCaretDownCircle /> : <BiCaretRightCircle />}
      </i>
      <div className="mr-2">
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
      <div className="text-black dark:text-white flex-auto flex flex-col">
        <div className="flex items-center h-8 gap-2">
          <input
            ref={titleInput}
            placeholder="Untitled task"
            type="text"
            value={taskTitle}
            onChange={titleChangeHandler}
            className={`text-lg h-8 flex-auto mr-4 truncate bg-transparent outline-none ${
              displayComplete ? "line-through" : "no-underline"
            }`}
          ></input>
          <div className="mx-0">
            <DatePicker
              selected={taskDate}
              onChange={(date) => setTaskDate(date)}
              className="bg-primary-100 dark:bg-primary-800 w-24 h-8 text-center rounded outline-none"
              dateFormat="dd/MM/yyyy"
              placeholderText="Add date"
            />
          </div>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-primary-300 dark:bg-primary-800 dark:text-white dark:hover:bg-primary-600 text-black text-2xl ${
              taskPinned
                ? "!bg-primary-400 dark:!bg-primary-500 text-white"
                : ""
            }`}
            aria-label="delete task"
            onClick={togglePinned}
            data-tip
            data-for="pinTask"
          >
            <BiPin />
          </button>
          <ReactTooltip
            id="pinTask"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            Pin task
          </ReactTooltip>
        </div>
        <div
          className={`${
            taskDropDown ? "visible" : "hidden"
          } w-full h-auto mt-2 flex gap-2`}
        >
          <textarea
            ref={descriptionInput}
            placeholder="Add a description..."
            value={taskDescription}
            onChange={descriptionChangeHandler}
            className="text-sm h-[32px] bg-transparent flex-auto outline-none mr-2 resize-y text-primary-600 dark:text-primary-400 max-h-[12rem]"
          ></textarea>
          <div className="flex">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-l-md bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                today ? "!bg-blue-400 text-white" : ""
              } ${completed && today ? "!bg-blue-400/50 text-white" : ""}`}
              onClick={toggleTodayHandler}
              data-tip
              data-for="today"
            >
              <BiSun />
            </button>
            <ReactTooltip
              id="today"
              effect="solid"
              place="bottom"
              backgroundColor="#4b5563"
            >
              Add to my day
            </ReactTooltip>
            <button
              className={`w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                important ? "!bg-red-400 text-white" : ""
              } ${completed && important ? "!bg-red-400/50 text-white" : ""}`}
              onClick={toggleImportantHandler}
              data-tip
              data-for="priority"
            >
              <HiOutlineExclamationCircle />
            </button>
            <ReactTooltip
              id="priority"
              effect="solid"
              place="bottom"
              backgroundColor="#4b5563"
            >
              Add to priority
            </ReactTooltip>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-r-md bg-primary-100 dark:bg-primary-800 dark:text-white text-black text-2xl ${
                starred ? "!bg-amber-400 text-white" : ""
              } ${completed && starred ? "!bg-amber-400/50 text-white" : ""}`}
              onClick={toggleStarredHandler}
              title="Add to starred"
              data-tip
              data-for="starred"
            >
              <BiStar />
            </button>
            <ReactTooltip
              id="starred"
              effect="solid"
              place="bottom"
              backgroundColor="#4b5563"
            >
              Add to starred
            </ReactTooltip>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-red-400 dark:bg-primary-800 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl"
            aria-label="delete task"
            onClick={() => {
              deleteTask(id);
            }}
            data-tip
            data-for="deleteTask"
          >
            <BiTrash />
          </button>
          <ReactTooltip
            id="deleteTask"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            Delete task
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}
