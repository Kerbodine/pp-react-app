import React, { useState } from "react";
import TaskItem from "./TaskItem";

import { BiChevronDown } from "react-icons/bi";

export default function TaskList({ currentList }) {
  const [colorDropdown, setColorDropdown] = useState(false);

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  return (
    <div className="w-full h-full">
      <div className="bg-primary-100 dark:bg-primary-600 transition-colors h-full">
        <div className={`w-full h-12 ${currentList.color}`}></div>
        <div className="h-12 m-8 flex flex-row items-center">
          <input
            className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
            autoComplete="off"
            value={currentList.title}
            type="text"
            aria-label="list title"
          ></input>
          <div
            className={`relative w-8 h-8 rounded-full ${currentList.color} text-white text-2xl flex items-center justify-center hover:bg-red-400/80`}
          >
            <BiChevronDown onClick={handleColorDropdown} />
            <div
              className={`${
                colorDropdown ? "opacity-100" : "opacity-0"
              } absolute top-10 -left-2 w-12 bg-white rounded-md shadow-md transition-opacity`}
            >
              <div className="w-8 h-8 m-2 rounded-full bg-red-400 hover:bg-red-400/80"></div>
              <div className="w-8 h-8 m-2 rounded-full bg-yellow-400 hover:bg-yellow-400/80"></div>
              <div className="w-8 h-8 m-2 rounded-full bg-green-400 hover:bg-green-400/80"></div>
              <div className="w-8 h-8 m-2 rounded-full bg-blue-400 hover:bg-blue-400/80"></div>
              <div className="w-8 h-8 m-2 rounded-full bg-purple-400 hover:bg-purple-400/80"></div>
            </div>
          </div>
        </div>
        <div className="mx-8">
          <div className="overflow-y-auto no-scrollbar h-full flex flex-col gap-2 pb-16">
            {currentList.tasks.map((page) => (
              <div key={page.key}>
                <TaskItem
                  title={page.title}
                  completed={page.completed}
                  color={page.color}
                  dueDate={page.dueDate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
