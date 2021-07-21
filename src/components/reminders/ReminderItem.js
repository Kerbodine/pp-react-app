import React from 'react'

import { BiListUl } from "react-icons/bi";

export default function ReminderItem({ title, amount, color }) {
  return (
    <div className="w-full hover:bg-white bg-primary-200 h-12 flex items-center">
      <div className={`w-2 h-full ${color}`}></div>
       <i className="text-2xl mx-2"><BiListUl /></i>
       <p className="">{title}</p>
       <p className="ml-auto mx-2">{amount}</p>
    </div>
  )
}
