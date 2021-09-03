import React from "react";

export default function SettingsItem({
  index,
  icon,
  title,
  selectList,
  settingsPage,
}) {
  console.log(index, settingsPage);
  return (
    <div
      className="h-10 hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer"
      onClick={() => selectList(index)}
    >
      <div
        className={`${
          settingsPage === index ? "opacity-100" : "opacity-0"
        } ? w-2 h-full bg-accent-400 z-10`}
      ></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="truncate w-24">{title}</h3>
    </div>
  );
}
