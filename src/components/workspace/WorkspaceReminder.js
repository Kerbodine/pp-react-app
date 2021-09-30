import React, { useState } from "react";
import { BiHide, BiInfoCircle, BiPlus, BiShow } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import WorkspaceReminderItem from "./WorkspaceReminderItem";

export default function WorkspaceReminder({
  allLists,
  currentListIndex,
  toggleShowCompleted,
  newTaskHandler,
  taskList,
}) {
  return (
    <>
      <div className="w-full">
        <div className={`mx-8 flex gap-2 text-black dark:text-white`}>
          <div className="w-full h-6 bg-primary-200 text-sm dark:bg-primary-700 rounded-md flex items-center px-2">{`${
            allLists[currentListIndex].completed
              ? allLists[currentListIndex].completed.length
              : "0"
          } completed`}</div>
          <button
            className="w-6 h-6 text-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 rounded-md flex items-center justify-center"
            onClick={toggleShowCompleted}
            data-tip
            data-for="completedTasks"
          >
            {allLists[currentListIndex].showCompleted ? <BiShow /> : <BiHide />}
          </button>
          <ReactTooltip
            id="completedTasks"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            {allLists[currentListIndex].showCompleted
              ? "Hide completed tasks"
              : "Show completed tasks"}
          </ReactTooltip>
        </div>
      </div>
      <div className="w-full h-2 bg-primary-100 dark:bg-primary-800"></div>
      <div className="">
        <div className="overflow-y-auto overflow-hidden h-[calc(100vh-10rem)] pb-16">
          <div
            className={`${
              allLists[currentListIndex].showCompleted ? "visible" : "hidden"
            } mx-8`}
          >
            <h3 className="text-lg mt-2 font-semibold text-primary-600 dark:text-primary-300">
              Completed tasks:
            </h3>
            {Object.keys(taskList.completed).length !== 0 ? (
              taskList.completed
            ) : (
              <div className="flex items-center gap-1 text-black dark:text-white">
                <BiInfoCircle />
                <p className="text-sm">No completed tasks</p>
              </div>
            )}
          </div>
          <div className="mt-2 mx-8">
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-300">
              Current tasks:
            </h3>
            {Object.keys(taskList.tasks).length !== 0 ? (
              taskList.tasks
            ) : (
              <div className="flex items-center mb-4 text-black dark:text-white">
                <BiInfoCircle />
                <p className="ml-1 text-sm">No tasks</p>
              </div>
            )}
          </div>
          <div
            className={`mx-8 border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-primary-200 transition-all dark:hover:bg-primary-700`}
            onClick={newTaskHandler}
          >
            <i className="text-2xl text-primary-600 dark:text-primary-400">
              <BiPlus />
            </i>
            <h3 className="text-primary-600 dark:text-primary-400">
              Add new task
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
