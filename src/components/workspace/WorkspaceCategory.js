import React, { useContext } from "react";
import { useLocation } from "react-router";
import settingsContext from "../settings/SettingsContext";

export default function WorkspaceCategory({ path, icon, title, color }) {
  const { data } = useContext(settingsContext);
  const location = useLocation();
  let active = false;

  if (location.pathname === path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div
      className={`${
        active ? "hidden" : "visible"
      } h-10 hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer`}
    >
      <div className={`w-2 h-full bg-${color}-400`}></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="truncate w-24">{title}</h3>
    </div>
  );
}
