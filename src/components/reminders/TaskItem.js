import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "./datepicker.css";

export default function TaskItem({
  id,
  title,
  completed,
  dueDate,
  updateComponent,
  description,
}) {
  const [taskTitle, setTaskTitle] = useState(title);
  const [startDate, setStartDate] = useState(dueDate);
  const [complete, setComplete] = useState(completed);

  const titleChangeHandler = (e) => {
    setTaskTitle(e.target.value);
  };

  useEffect(() => {
    updateComponent(id, complete, taskTitle, startDate, description);
  }, [complete, taskTitle, startDate]);

  const completeHandler = () => {
    setComplete(!completed);
  };

  return (
    <div className="w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md items-center">
      <div className="mx-2">
        <input
          type="checkbox"
          defaultChecked={complete}
          value={complete}
          onChange={completeHandler}
          className={`w-6 h-6 border border-primary-300 border-[2px] dark:bg-primary-600 checked:border-none rounded-md checkbox checked:bg-accent-400`}
        ></input>
      </div>
      <div className="text-black dark:text-white mx-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <input
            type="text"
            value={taskTitle}
            onChange={titleChangeHandler}
            className="w-0 text-lg flex-auto mr-4 truncate bg-transparent outline-none"
          ></input>
          <div className="mr-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-gray-100 px-2 rounded"
              dateFormat="dd/MM/yyyy"
            />
          </div>
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
