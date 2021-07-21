import React from 'react'
import ReminderList from './ReminderList'
import { v4 as uuidv4 } from "uuid";
import { BiListPlus } from "react-icons/bi";

export default function ReminderSidebar({ darkMode }) {

  const allLists = [
    {
      key: uuidv4(),
      title: "Note 1",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 2",
      amount: "10",
      color: "bg-yellow-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
  ];

  return (
    <div className={`${ darkMode ? "dark" : "" } flex flex-col h-full`}>
      <div className="h-10 flex-shrink-0 bg-primary-200 transition-colors dark:bg-primary-700 text-black dark:text-white flex items-center px-4 font-bold text-lg">
        <h2>All Lists</h2>
      </div>
      <div className="flex-auto min-h-0">
        <ReminderList allLists={allLists} darkMode={darkMode} />
      </div>
      <div className="w-48 h-20 bg-primary-200 dark:bg-primary-700 p-4 transition-colors">
        <button className="bg-accent-400 hover:bg-accent-300 rounded-full h-12 flex items-center w-full text-white">
          <i><BiListPlus className={"w-6 h-6 text-2xl m-2"} /></i>
          <h2>New page</h2>
        </button>
      </div>
    </div>
  )
}
