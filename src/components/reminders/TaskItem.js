import React from 'react'
import { BiTrash } from "react-icons/bi";

export default function TaskItem({ title, completed, color, dueDate }) {

  console.log(color)

  return (
    <div className="h-12 w-full bg-primary-200 dark:bg-primary-700 text-black dark:text-white rounded flex items-center pr-2 overflow-hidden">
      <div className={`w-2 h-full mr-2 bg-${color}-400`}></div>
      <input type="checkbox" checked={`${ completed ? "checked" : "" }`} className="w-8 h-8 bg-primary-100 dark:bg-primary-600 rounded checkbox mr-4"></input>
      <h3 className="w-0 text-lg flex-auto mr-4 truncate">{title}</h3>
      <p className="w-32 ml-auto mr-4 text-primary-500 truncate">{dueDate.toString()}</p>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-300 dark:bg-primary-600 hover:bg-red-400 dark:hover:bg-red-400 text-black dark:text-white hover:text-white transition-colors text-2xl"><BiTrash /></button>
    </div>
  )
}
