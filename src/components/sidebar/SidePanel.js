import React from "react";

import Calendar from "react-calendar";
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideStickie from "./SideStickie";

import SettingsContextProvider from "./SettingsContext";

import "./calendar.css";

import { BiAdjust, BiBriefcaseAlt, BiMoon } from "react-icons/bi";
import SidePomodoro from "./SidePomodoro";

export default function SidePanel({
  onClick,
  credits,
  setCredits,
  workMode,
  toggleWorkMode,
  setTimerComplete,
}) {
  const USERNAME = "Username";

  return (
    <SettingsContextProvider setTimerComplete={setTimerComplete}>
      <div className={`w-72 h-screen`}>
        <div className="flex gap-4 h-20 bg-primary dark:bg-primary-900 p-4">
          <div className="w-32 flex gap-2 items-center h-12 bg-primary-100 dark:bg-primary-800 rounded-2xl px-3 justify-center text-black dark:text-white">
            <div className="text-2xl">
              <BiBriefcaseAlt />
            </div>
            <button
              className="w-10 h-6 bg-accent-400 rounded-full flex items-center justify-center px-1"
              onClick={toggleWorkMode}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  workMode ? "-translate-x-2" : "translate-x-2"
                }`}
              ></div>
            </button>
            <div className="text-2xl">
              <BiMoon />
            </div>
          </div>
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
          <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-2xl">
            <Calendar calendarType="US" />
          </div>
          <div>
            <SidePomodoro />
          </div>
          <div className="flex gap-4">
            <SideWidget eventName="Test event" countdown="6" timeUnit="days" />
            <SideWidget
              eventName="Test event 2"
              countdown="11"
              timeUnit="days"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SideItem taskName="Task 1" dueDate="dd/mm/yyyy" />
            <SideItem taskName="Task 2" dueDate="dd/mm/yyyy" />
            <SideItem taskName="Task 3" dueDate="dd/mm/yyyy" />
          </div>
          <SideStickie />
        </div>
      </div>
    </SettingsContextProvider>
  );
}
