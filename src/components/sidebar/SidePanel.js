import React, { useState, useEffect } from "react";

import Calendar from "react-calendar";
import SideWidget from "./SideWidget";
import SideStickie from "./SideStickie";
import SideTask from "./SideTask";

import SettingsContextProvider from "./SettingsContext";

import "./calendar.css";

import { BiAdjust, BiInfoCircle } from "react-icons/bi";
import SidePomodoro from "./SidePomodoro";
import SideGreeting from "./SideGreeting";

export default function SidePanel({
  onClick,
  setTimerComplete,
  reminderData,
  setReminderData,
}) {
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

  console.log(taskList);

  return (
    <SettingsContextProvider setTimerComplete={setTimerComplete}>
      <div className="w-72 h-screen">
        <div className="flex gap-4 h-20 bg-primary dark:bg-primary-900 p-4">
          <div className="w-32 flex gap-2 items-center h-12 bg-primary-100 dark:bg-primary-800 rounded-2xl px-3 justify-center text-black dark:text-white"></div>
          <button className="w-12 h-12 bg-primary-100 dark:bg-primary-800 dark:hover:bg-accent-400 hover:bg-accent-400 rounded-2xl flex items-center justify-center text-2xl hover:text-white dark:text-white"></button>
          <button
            onClick={onClick}
            className="w-12 h-12 bg-primary-100 dark:bg-primary-800 dark:hover:bg-accent-400 hover:bg-accent-400 rounded-2xl flex items-center justify-center text-2xl hover:text-white dark:text-white"
          >
            <div className="dark:rotate-180 duration-500 transition-transform">
              <BiAdjust />
            </div>
          </button>
        </div>
        <div className="h-[calc(100%-5rem)] bg-primary dark:bg-primary-900 overflow-y-auto overflow-hidden no-scrollbar px-4 flex flex-col gap-4 text-black dark:text-white">
          <SideGreeting />
          <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-2xl">
            <Calendar calendarType="US" view="month" />
          </div>
          <div>
            <SidePomodoro />
          </div>
          <div className="w-full p-4 flex flex-col bg-primary-100 dark:bg-primary-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Pinned tasks</h3>
            <div className="flex flex-col gap-2">
              {taskList.length > 0 ? (
                taskList
              ) : (
                <div className="flex items-center">
                  <BiInfoCircle />
                  <p className="ml-1 text-sm">No pinned tasks</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <SideWidget eventName="Test event" countdown="6" timeUnit="days" />
            <SideWidget
              eventName="Test event 2"
              countdown="11"
              timeUnit="days"
            />
          </div>
          <SideStickie />
        </div>
      </div>
    </SettingsContextProvider>
  );
}
