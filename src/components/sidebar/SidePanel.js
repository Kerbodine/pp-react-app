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

export default function SidePanel({
  setTimerComplete,
  reminderData,
  setReminderData,
}) {
  const { data } = useContext(settingsContext);

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
          data.sidebarCollapsed ? "!w-20" : null
        } w-20 lg:w-72 h-screen bg-primary dark:bg-primary-900`}
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
  );
}
