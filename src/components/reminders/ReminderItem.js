import React from 'react'
import { BiListUl } from "react-icons/bi";

export default function ReminderItem({ darkMode, title, amount, color }) {
  return (
    <div className={`${ darkMode ? "dark" : "" }`}>
      <div className="bg-transparent transition-colors hover:bg-primary-100 dark:hover:bg-primary-600 text-black dark:text-white h-12 flex items-center">
        <div className={`w-2 h-full ${color}`}></div>
        <i className="text-2xl mx-2"><BiListUl /></i>
        <p className="">{title}</p>
        <p className="ml-auto mr-4">{amount}</p>
      </div>
    </div>
  )
}
