import React from "react";
import ReminderSidebar from "./ReminderSidebar";
import TaskList from "./TaskList";
import { BiChevronDown } from "react-icons/bi";

export default function Reminders({ darkMode }) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex bg-primary dark:bg-primary-800 transition-colors">
        <div className="mt-20 mb-4 mr-4 lg:mr-0 w-full">
          <div className="h-full rounded-2xl flex overflow-hidden">
            <div className="h-full">
              <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 transition-colors h-full">
                <ReminderSidebar darkMode={darkMode} />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="bg-primary-100 dark:bg-primary-600 transition-colors h-full">
                <div className="w-full h-12 bg-red-400"></div>
                <div className="h-12 m-8 flex flex-row items-center">
                  <input
                    className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                    autoComplete="off"
                    value="Untitled"
                    type="text"
                    aria-label="list title"
                  ></input>
                  <div className="w-8 h-8 rounded-full bg-red-400 text-white text-2xl flex items-center justify-center hover:bg-red-400/80">
                    <BiChevronDown />
                  </div>
                </div>

                <div className="mx-8">
                  <TaskList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
