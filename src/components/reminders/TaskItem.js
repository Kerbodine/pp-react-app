import React from 'react'
import { BiTrash } from "react-icons/bi";

export default function TaskItem({ title, completed, color, dueDate }) {
  return (
    <div className="h-12 w-full bg-primary-200 rounded flex items-center p-2">
      <input type="checkbox" className="w-8 h-8 bg-primary-100 rounded checkbox mr-4"></input>
      <h3 className="w-0 text-lg flex-auto mr-4 truncate">{title}</h3>
      <p className="ml-auto mr-4 text-primary-500">{dueDate}</p>
      <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-300 hover:bg-red-400 text-black hover:text-white transition-colors text-2xl"><BiTrash /></button>
    </div>
  )
}