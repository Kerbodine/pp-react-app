import React from "react";
import { BiTrash } from "react-icons/bi";

export default function TaskItem({ title, completed, dueDate, color }) {
  console.log(color);
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
    <div className="h-10 w-full bg-primary-200 dark:bg-primary-700 text-black dark:text-white rounded flex items-center px-4">
      <input
        type="checkbox"
        className={`w-6 h-6 border border-primary-300 border-2 dark:bg-primary-600 checked:border-none rounded-md checkbox mr-4 checked:bg-accent-400`}
      ></input>
      <h3 className="w-0 text-lg flex-auto mr-4 truncate">{title}</h3>
      <p className="ml-auto mr-4 text-primary-500">{timeConverter(dueDate)}</p>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-300 dark:bg-primary-600 hover:bg-red-400 dark:hover:bg-red-400 text-black dark:text-white hover:text-white transition-colors text-2xl"
        aria-label="delete"
      >
        <BiTrash />
      </button>
    </div>
  );
}
