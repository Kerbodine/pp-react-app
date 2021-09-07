import React from "react";
import { useLocation } from "react-router";

export default function SettingsItem({ icon, title, path }) {
  const location = useLocation();
  let active = false;

  if (location.pathname === "/settings" + path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div className="h-10 hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer">
      <div
        className={`${
          active ? "opacity-100" : "opacity-0"
        } ? w-2 h-full bg-accent-400 z-10`}
      ></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="truncate w-24">{title}</h3>
    </div>
  );
}
