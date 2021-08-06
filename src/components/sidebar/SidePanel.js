import Calendar from "react-calendar";
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideStickie from "./SideStickie";

import "./calendar.css";

import { BiSearch, BiAdjust } from "react-icons/bi";

export default function SidePanel({ darkMode, onClick }) {
  const USERNAME = "Username";

  return (
    <div className={`${darkMode ? "dark" : ""} w-72 h-screen`}>
      <div className="flex gap-4 h-20 bg-primary dark:bg-primary-800 px-4 transition-colors">
        <div className="w-48 flex items-center h-12 bg-primary-100 dark:bg-primary-700 rounded-2xl my-auto px-3 transition-colors focus-within:ring-2 focus-within:ring-accent-400">
          <div className="text-2xl text-black dark:text-white mr-2">
            <BiSearch />
          </div>
          <input
            className="bg-transparent text-black dark:text-white outline-none"
            placeholder="Search..."
            aria-label="search"
          ></input>
        </div>
        <button
          onClick={onClick}
          className="w-12 h-12 bg-primary-100 dark:bg-primary-700 dark:hover:bg-accent-400 transition-all hover:bg-accent-400 my-auto rounded-2xl flex items-center justify-center text-2xl hover:text-white dark:text-white"
        >
          <div className="dark:rotate-180 duration-300">
            <BiAdjust />
          </div>
        </button>
      </div>
      <div className="h-full bg-primary dark:bg-primary-800 transition-colors overflow-y-auto overflow-hidden no-scrollbar px-4 flex flex-col gap-4 text-black dark:text-white">
        <div>
          <div className="w-full h-auto bg-primary-100 dark:bg-primary-700 transition-colors rounded-2xl flex">
            <div className="my-4">
              <p className="mx-4 text-xl">Hello,</p>
              <p className="mx-4 text-3xl font-bold">{USERNAME}</p>
            </div>
            <div className="w-16 h-16 ml-auto my-auto mr-4 rounded-full bg-accent-400"></div>
          </div>
        </div>
        <div>
          <Calendar calendarType="US" />
        </div>
        <div className="flex gap-4">
          <SideWidget
            eventName="Test event"
            countdown="6"
            timeUnit="days"
            darkMode={darkMode}
          />
          <SideWidget
            eventName="Test event 2"
            countdown="11"
            timeUnit="days"
            darkMode={darkMode}
          />
        </div>
        <div className="flex flex-col gap-4">
          <SideItem
            taskName="Task 1"
            dueDate="dd/mm/yyyy"
            darkMode={darkMode}
          />
          <SideItem
            taskName="Task 2"
            dueDate="dd/mm/yyyy"
            darkMode={darkMode}
          />
          <SideItem
            taskName="Task 3"
            dueDate="dd/mm/yyyy"
            darkMode={darkMode}
          />
        </div>
        <SideStickie darkMode={darkMode} />
      </div>
    </div>
  );
}
