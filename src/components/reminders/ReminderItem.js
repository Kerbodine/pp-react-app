import React from "react";

export default function ReminderItem({
  darkMode,
  index,
  title,
  amount,
  color,
  icon,
  selectList,
}) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className="h-10 transition-colors hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer"
        onClick={() => selectList(index)}
      >
        <div className={`w-2 h-full bg-${color}-400`}></div>
        <i className="text-2xl mx-2">{icon}</i>
        <h3 className="truncate w-24">{title}</h3>
        <p className="ml-auto mr-4 font-bold">{amount}</p>
      </div>
    </div>
  );
}
