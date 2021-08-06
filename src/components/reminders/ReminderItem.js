import React from "react";
import { BiListUl } from "react-icons/bi";

export default function ReminderItem({ darkMode, title, amount, color, icon }) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-10 transition-colors hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center">
        <div className={`w-2 h-full ${color}`}></div>
        <i className="text-2xl mx-2">{icon}</i>
        <h3 className="truncate w-24">{title}</h3>
        <p className="ml-auto mr-4 font-bold">{amount}</p>
      </div>
    </div>
  );
}
