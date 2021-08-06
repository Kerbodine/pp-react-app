import React from "react";
import { BiTrash } from "react-icons/bi";

export default function TaskItem({ title, completed, color, dueDate }) {
  return (
    <div className="h-10 w-full bg-primary-200 dark:bg-primary-700 text-black dark:text-white rounded flex items-center px-4">
      <input
        type="checkbox"
        className={`w-6 h-6 border border-primary-300 border-2 dark:bg-primary-600 checked:border-none rounded-md checkbox mr-4 checked:bg-accent-400`}
      ></input>
      <h3 className="w-0 text-lg flex-auto mr-4 truncate">{title}</h3>
      <p className="ml-auto mr-4 text-primary-500">{dueDate}</p>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-300 dark:bg-primary-600 hover:bg-red-400 dark:hover:bg-red-400 text-black dark:text-white hover:text-white transition-colors text-2xl">
        <BiTrash />
      </button>
    </div>
  );
}
