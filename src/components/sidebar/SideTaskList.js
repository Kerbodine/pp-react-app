import React, { useContext } from "react";
import { BiInfoCircle } from "react-icons/bi";
import settingsContext from "../settings/SettingsContext";

export default function SideTaskList({ taskList }) {
  const { sidebarTasks } = useContext(settingsContext);

  return (
    <div
      className={`${
        sidebarTasks ? "visible" : "hidden"
      } w-full p-4 flex flex-col bg-primary-100 dark:bg-primary-800 rounded-2xl`}
    >
      <h3 className="text-lg font-bold mb-2">Pinned tasks</h3>
      <div className="flex flex-col gap-2">
        {taskList.length > 0 ? (
          taskList
        ) : (
          <div className="flex items-center">
            <BiInfoCircle />
            <p className="ml-1 text-sm">No pinned tasks</p>
          </div>
        )}
      </div>
    </div>
  );
}
