import React from "react";
import { BiTrash } from "react-icons/bi";

export default function TaskItem({
  id,
  title,
  completed,
  dueDate,
  toggleComplete,
  description,
}) {
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  return (
    <div className="w-full bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md items-center">
      <div className="mx-2">
        <input
          type="checkbox"
          defaultChecked={completed}
          value={completed}
          onChange={() => {
            toggleComplete(id);
          }}
          className={`w-6 h-6 border border-primary-300 border-[2px] dark:bg-primary-600 checked:border-none rounded-md checkbox checked:bg-accent-400`}
        ></input>
      </div>
      <div className="text-black dark:text-white mx-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <h3 className="w-0 text-lg flex-auto mr-4 truncate">{title}</h3>
          <p className="ml-auto mr-4 text-primary-600">
            {timeConverter(dueDate)}
          </p>
        </div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
      <div className="mr-2">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-300 dark:bg-primary-600 hover:bg-red-400 dark:hover:bg-red-400 text-black dark:text-white hover:text-white transition-colors text-2xl"
          aria-label="delete task"
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
}
