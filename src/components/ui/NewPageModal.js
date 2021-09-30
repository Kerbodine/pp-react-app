import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { AiOutlineExclamation } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

export default function NewPageModal({
  darkMode,
  newPageMenu,
  setNewPageMenu,
  newRemindersHandler,
  newNotesHandler,
}) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setNewPageMenu(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (newPageMenu) {
    return ReactDom.createPortal(
      <div
        className={`${
          darkMode ? "dark" : ""
        } absolute top-0 bg-black/75 w-screen h-screen flex items-center justify-center z-10`}
        onClick={() => {
          setNewPageMenu(false);
        }}
      >
        <div className="rounded-2xl bg-white dark:bg-primary-800 shadow-md flex flex-col justify-center items-center p-8 z-20 text-black dark:text-white">
          <h2 className="text-3xl font-semibold text-primary-500 dark:text-primary-400">
            Add a new block:
          </h2>
          <div className="flex gap-8 mt-4">
            <div
              className="w-28 h-28 bg-primary-200 dark:bg-primary-700 hover:border-4 hover:border-primary-400 dark:hover:border-4 dark:hover:border-primary-500 rounded-2xl flex flex-col gap-4 items-center justify-center cursor-pointer"
              data-tip
              data-for="reminders-list"
              onClick={() => {
                newRemindersHandler();
              }}
            >
              <div className="flex">
                <span className="w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-500 mr-2"></span>
                <span className="w-12 h-2 rounded-full bg-primary-400 dark:bg-primary-500"></span>
              </div>
              <div className="flex">
                <span className="w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-500 mr-2"></span>
                <span className="w-12 h-2 rounded-full bg-primary-400 dark:bg-primary-500"></span>
              </div>
              <div className="flex">
                <span className="w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-500 mr-2"></span>
                <span className="w-12 h-2 rounded-full bg-primary-400 dark:bg-primary-500"></span>
              </div>
            </div>
            <ReactTooltip
              id="reminders-list"
              effect="solid"
              place="bottom"
              backgroundColor="#4b5563"
            >
              Add new reminders list
            </ReactTooltip>
            <div
              className="w-28 h-28 bg-primary-200 dark:bg-primary-700 hover:border-4 hover:border-primary-400 dark:hover:border-4 dark:hover:border-primary-500 rounded-2xl flex flex-col gap-4 items-center justify-center cursor-pointer"
              data-tip
              data-for="notepad"
              onClick={() => {
                newNotesHandler();
              }}
            >
              <div className="flex">
                <span className="w-16 h-2 rounded-full bg-primary-400 dark:bg-primary-500"></span>
              </div>
              <div className="flex">
                <span className="w-16 h-2 rounded-full bg-primary-400 dark:bg-primary-500"></span>
              </div>
              <div className="flex">
                <span className="w-8 h-2 rounded-full bg-primary-400 dark:bg-primary-500 mr-8"></span>
              </div>
            </div>
            <ReactTooltip
              id="notepad"
              effect="solid"
              place="bottom"
              backgroundColor="#4b5563"
            >
              Add new notes page
            </ReactTooltip>
          </div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
}
