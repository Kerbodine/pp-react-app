import React from "react";

export default function IconPicker({ icon, listIconHandler }) {
  return (
    <div
      className={`w-7 h-7 rounded-md bg-primary-200 dark:bg-primary-700 hover:bg-accent-400 dark:hover:bg-accent-400 hover:text-white dark:hover:text-white cursor-pointer text-primary-600 dark:text-primary-200 text-2xl flex items-center justify-center`}
      onClick={() => listIconHandler(icon)}
    >
      {icon}
    </div>
  );
}
