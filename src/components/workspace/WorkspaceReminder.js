import React, { useEffect, useRef, useState } from "react";
import { BiHide, BiInfoCircle, BiPlus, BiShow } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import WorkspaceReminderItem from "./WorkspaceReminderItem";

export default function WorkspaceReminder({
  allData,
  currentItem,
  toggleShowCompleted,
  newTaskHandler,
  updateTaskHandler,
  deleteTaskHandler,
  deleteCompletedTaskHandler,
  completeTaskHandler,
  unCompleteTaskHandler,
  sidebarNavigation,
}) {
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    setTaskList(
      currentItem.tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <WorkspaceReminderItem
              id={task.id}
              title={task.title}
              creationDate={task.creationDate}
              dueDate={task.dueDate}
              completed={false}
              description={task.description}
              today={task.today}
              important={task.important}
              starred={task.starred}
              expanded={task.expanded}
              pinned={task.pinned}
              updateComponent={updateTaskHandler}
              deleteTask={deleteTaskHandler}
              completeTaskHandler={completeTaskHandler}
              selected={index === currentItemIndex && !sidebarNavigation}
            />
          </div>
        );
      })
    );

    setCompletedList(
      currentItem.completed.map((task, index) => {
        return (
          <div key={task.id}>
            <WorkspaceReminderItem
              id={task.id}
              title={task.title}
              creationDate={task.creationDate}
              dueDate={task.dueDate}
              completed={true}
              description={task.description}
              today={task.today}
              important={task.important}
              starred={task.starred}
              expanded={task.expanded}
              pinned={task.pinned}
              updateComponent={updateTaskHandler}
              deleteTask={deleteCompletedTaskHandler}
              unCompleteTaskHandler={unCompleteTaskHandler}
              index={null}
            />
          </div>
        );
      })
    );
  }, [allData, currentItemIndex, sidebarNavigation]);

  useEffect(() => {
    const handleNavigation = (event) => {
      // increment navigation index [arrow-down] [j]
      if (event.keyCode === 40 || event.keyCode === 74) {
        if (!sidebarNavigation.current) {
          setCurrentItemIndex((prevIndex) => {
            return (prevIndex + 1) % currentItem.tasks.length;
          });
        }
        // decrement navigation index [arrow-up] [k]
      } else if (event.keyCode === 38 || event.keyCode === 75) {
        if (!sidebarNavigation.current) {
          setCurrentItemIndex((prevIndex) => {
            return prevIndex > 0 ? prevIndex - 1 : currentItem.tasks.length - 1;
          });
        }
      }
    };
    window.addEventListener("keydown", handleNavigation);
    return () => {
      window.removeEventListener("keydown", handleNavigation);
    };
  }, []);

  console.log(currentItemIndex);

  return (
    <>
      <div className={`w-full`}>
        <div className={`mx-8 flex gap-2 text-black dark:text-white`}>
          <div className="w-full h-6 bg-primary-200 text-sm dark:bg-primary-700 rounded-md flex items-center px-2">{`${
            currentItem.completed ? currentItem.completed.length : "0"
          } completed`}</div>
          <button
            className="w-6 h-6 text-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 rounded-md flex items-center justify-center"
            onClick={toggleShowCompleted}
            data-tip
            data-for="completedTasks"
          >
            {currentItem.showCompleted ? <BiShow /> : <BiHide />}
          </button>
          <ReactTooltip
            id="completedTasks"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            {currentItem.showCompleted
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
              currentItem.showCompleted ? "visible" : "hidden"
            } mx-8`}
          >
            <h3 className="text-lg mt-2 font-semibold text-primary-600 dark:text-primary-300">
              Completed tasks:
            </h3>
            {completedList ? (
              completedList
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
            {taskList ? (
              taskList
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
