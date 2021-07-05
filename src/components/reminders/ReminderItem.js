import React from 'react'

import { BiListUl } from "react-icons/bi";

export default function ReminderItem({ title, amount }) {
  return (
    <div className="w-auto hover:bg-primary-500 bg-primary-600 rounded-md h-auto mb-2 flex py-2">
      <i className="my-auto text-2xl mx-2"><BiListUl /></i>
      <p className="my-auto text-lg">{title}</p>
      <div className="relative flex-auto">
        <div className="absolute right-0">
          <p className="my-auto mr-4 text-lg">{amount}</p>
        </div>
      </div>
    </div>
  )
}