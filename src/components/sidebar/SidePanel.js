import React, { useState, useEffect, useContext } from "react";

import SideStickie from "./SideStickie";
import SideTask from "./SideTask";

import SettingsContextProvider from "./SettingsContext";

import "./calendar.css";

import { BiAdjust } from "react-icons/bi";
import SidePomodoro from "./SidePomodoro";
import SideGreeting from "./SideGreeting";
import SideCalendar from "./SideCalendar";
import SideTaskList from "./SideTaskList";
import settingsContext from "../settings/SettingsContext";

export default function SidePanel({
  onClick,
  setTimerComplete,
  reminderData,
  setReminderData,
}) {
  const { sidebarCollapsed } = useContext(settingsContext);

  const [allReminders, setAllReminders] = useState(reminderData);
  const [taskList, setTaskList] = useState([]);

  const updateTaskHandler = (id, pinned) => {
    allReminders.forEach((list, i) =>
      list.tasks.forEach((task, j) => {
        if (task.id === id) {
          let temp = allReminders;
          temp[i].tasks[j].pinned = pinned;
          setAllReminders([...temp]);
        }
      })
    );
  };

  const completeTaskHandler = (id) => {
    allReminders.forEach((list, i) =>
      list.tasks.forEach((task, j) => {
        if (task.id === id) {
          let temp = allReminders;
          let tempTask = task;
          temp[i].tasks.splice(j, 1);
          temp[i].completed = [...allReminders[i].completed, tempTask];
          setAllReminders([...temp]);
        }
      })
    );
  };

  useEffect(() => {
    setTaskList(
      allReminders
        .map((task, index) =>
          task.tasks
            .filter((task) => task.pinned === true)
            .map((task) => (
              <SideTask
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                pinned={task.pinned}
                color={allReminders[index].color}
                updateComponent={updateTaskHandler}
                completeTaskHandler={completeTaskHandler}
              />
            ))
        )
        .filter((task) => task.length !== 0)
    );
  }, [allReminders, reminderData]);

  useEffect(() => {
    setReminderData(allReminders);
  }, [allReminders]);

  return (
    <SettingsContextProvider setTimerComplete={setTimerComplete}>
      <div
        className={`${
          sidebarCollapsed ? "!w-20" : null
        } w-20 lg:w-72 h-screen bg-primary dark:bg-primary-900`}
      >
        <div
          className={`${
            sidebarCollapsed ? "!flex-col" : null
          } flex flex-col lg:flex-row gap-4 h-20 p-4`}
        >
          {/* <div className="w-32 flex gap-2 items-center h-12 bg-primary-100 dark:bg-primary-800 rounded-2xl px-3 justify-center text-black dark:text-white"></div> */}
          <button
            onClick={onClick}
            className="min-w-[3rem] min-h-[3rem] bg-primary-100 dark:bg-primary-800 dark:hover:bg-accent-400 hover:bg-accent-400 rounded-2xl flex items-center justify-center text-2xl hover:text-white dark:text-white"
          >
            <div className="dark:rotate-180 duration-500 transition-transform">
              <BiAdjust />
            </div>
          </button>
          <button className="min-w-[3rem] min-h-[3rem] bg-primary-100 dark:bg-primary-800 dark:hover:bg-accent-400 hover:bg-accent-400 rounded-2xl flex items-center justify-center text-2xl hover:text-white dark:text-white"></button>
        </div>
        <div
          className={`${
            sidebarCollapsed ? "!hidden" : null
          } h-[calc(100%-5rem)] hidden overflow-y-auto overflow-hidden no-scrollbar px-4 lg:flex lg:flex-col gap-4 text-black dark:text-white`}
        >
          <SideGreeting />
          <SideCalendar />
          <SidePomodoro />
          <SideTaskList taskList={taskList} />
          <SideStickie />
        </div>
      </div>
    </SettingsContextProvider>
  );
}
