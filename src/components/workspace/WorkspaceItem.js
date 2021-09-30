import React, { useContext } from "react";
import settingsContext from "../settings/SettingsContext";

export default function WorkspaceItem({
  index,
  icon,
  title,
  color,
  amount,
  selectItemHandler,
  currentListIndex,
}) {
  const { data } = useContext(settingsContext);
  return (
    <div
      className={`${
        currentListIndex === index ? "bg-primary-300 dark:bg-primary-600" : ""
      } h-10 hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer`}
      onClick={() => selectItemHandler(index)}
    >
      <div className={`w-2 h-full bg-${color}-400`}></div>
      <i
        className={`text-2xl mx-2 ${
          title ? "" : "text-primary-500 dark:text-primary-400"
        }`}
      >
        {icon}
      </i>
      <h3
        className={`truncate w-24 ${
          title ? "" : "text-primary-500 dark:text-primary-400"
        }`}
      >
        {title ? title : "Untitled"}
      </h3>
      <p
        className={`ml-auto mr-4 font-semibold ${
          title ? "" : "text-primary-500 dark:text-primary-400"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}