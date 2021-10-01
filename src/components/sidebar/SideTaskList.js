import React, { useContext } from "react";
import { BiInfoCircle } from "react-icons/bi";
import settingsContext, { SettingsConsumer } from "../settings/SettingsContext";

export default function SideTaskList({ taskList }) {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div
            className={`${
              settings.data.sidebarTasks ? "visible" : "hidden"
            } w-64 p-4 flex flex-col bg-primary-100 dark:bg-primary-800 rounded-2xl`}
          >
            <h3 className="text-lg font-bold mb-2">Pinned Blocks</h3>
            <div className="flex flex-col gap-2">
              {taskList.length > 0 ? (
                taskList
              ) : (
                <div className="flex items-center">
                  <BiInfoCircle />
                  <p className="ml-1 text-sm">No pinned blocks</p>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </SettingsConsumer>
  );
}
