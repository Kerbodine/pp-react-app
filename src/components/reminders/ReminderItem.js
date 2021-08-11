import React from "react";

export default function ReminderItem({
  index,
  icon,
  title,
  color,
  amount,
  selectList,
}) {
  return (
    <div
      className="h-10 hover:bg-primary-300 dark:hover:bg-primary-800 text-black dark:text-white flex items-center cursor-pointer"
      onClick={() => selectList(index)}
    >
      <div className={`w-2 h-full bg-${color}-400`}></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="truncate w-24">{title}</h3>
      <p className="ml-auto mr-4 font-bold">{amount}</p>
    </div>
  );
}
