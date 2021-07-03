import React from 'react'

import { BiListUl } from "react-icons/bi";

export default function ReminderItem({ title, amount }) {
  return (
    <div className="w-auto bg-primary-600 rounded h-auto mb-2 flex py-2">
      <i className="my-auto text-2xl mx-2"><BiListUl /></i>
      <p className="my-auto lg:text-xl md:text-lg text-base">{title}</p>
      <div className="relative flex-auto">
        <div className="absolute right-0">
          <p className="my-auto mr-4 lg:text-xl md:text-lg text-base">{amount}</p>
        </div>
      </div>
    </div>
  )
}
