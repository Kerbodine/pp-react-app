import React, { useState, useEffect, useContext } from "react";

import SideStickie from "./SideStickie";
import SideTask from "./SideTask";

import SettingsContextProvider from "./SettingsContext";

import "./calendar.css";

import SidePomodoro from "./SidePomodoro";
import SideGreeting from "./SideGreeting";
import SideCalendar from "./SideCalendar";
import SideTaskList from "./SideTaskList";
import settingsContext from "../settings/SettingsContext";

import { useLocation } from "react-router-dom";

export default function SidePanel({
  onClick,
  setTimerComplete,
  reminderData,
  setReminderData,
}) {
  const location = useLocation();

  let active = false;
  location.pathname.split("/")[1] !== "login"
    ? (active = true)
    : (active = false);

  const { data } = useContext(settingsContext);

  const [allReminders, setAllReminders] = useState([...reminderData]);
  const [taskList, setTaskList] = useState([]);

  const updateTaskHandler = (id, pinned) => {
    allReminders
      .filter((item) => item.type === "reminders")
      .forEach((list, i) =>
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
    allReminders
      .filter((item) => item.type === "reminders")
      .map((list, i) =>
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

  const dueInCalculator = (dueDate) => {
    let timeDifference = dueDate - Date.now();
    let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    if (dayDifference < 0) {
      return (
        <span className="bg-red-400 rounded-md px-1 py-0.5 text-white text-sm">
          Overdue
        </span>
      );
    } else if (dayDifference === 0) {
      return (
        <span className="bg-blue-400 rounded-md px-1 py-0.5 text-white text-sm">
          Today
        </span>
      );
    } else if (dayDifference === 1) {
      return (
        <span className="bg-amber-400 rounded-md px-1 py-0.5 text-white text-sm">
          1 day
        </span>
      );
    } else {
      return (
        <span className="bg-gray-400 rounded-md px-1 py-0.5 text-white text-sm">
          {dayDifference} days
        </span>
      );
    }
  };

  useEffect(() => {
    setTaskList(
      allReminders
        .map((item, index) => {
          switch (item.type) {
            case "reminders":
              return item.tasks
                .filter((task) => task.pinned === true)
                .map((task) => {
                  return (
                    <SideTask
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      completed={task.completed}
                      pinned={task.pinned}
                      description={task.description === "" ? false : true}
                      today={task.today}
                      important={task.important}
                      starred={task.starred}
                      dueIn={dueInCalculator(task.dueDate)}
                      color={allReminders[index].color}
                      updateComponent={updateTaskHandler}
                      completeTaskHandler={completeTaskHandler}
                    />
                  );
                });
            case "notes":
              return [];
            default:
              return [];
          }
        })
        .filter((item) => item.length !== 0)
    );
  }, [allReminders, reminderData]);

  useEffect(() => {
    setReminderData(allReminders);
  }, [allReminders]);

  return (
    <div className={`${active ? "visible" : "hidden"}`}>
      <SettingsContextProvider setTimerComplete={setTimerComplete}>
        <div
          className={`${
            data.sidebarCollapsed ? "!hidden" : null
          } invisible lg:w-72 lg:visible h-screen bg-primary dark:bg-primary-900`}
        >
          <div
            className={`${
              data.sidebarCollapsed ? "!hidden" : null
            } h-screen hidden overflow-y-auto overflow-hidden no-scrollbar p-4 lg:flex lg:flex-col gap-4 text-black dark:text-white`}
          >
            <SideGreeting />
            <SideCalendar />
            <SidePomodoro />
            <SideTaskList taskList={taskList} />
            <SideStickie />
          </div>
        </div>
      </SettingsContextProvider>
    </div>
  );
}
