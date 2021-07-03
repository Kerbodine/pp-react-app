import React from 'react'

import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";

export default function SideItem({ taskName, color, type, dueDate }) {
  return (
    <div className="my-2 bg-gray-600 w-auto rounded flex">
      <i className={"mx-2 my-auto text-2xl"}><BiRadioCircle color={color} /></i>
      <div className="my-2">
        <p className="">{taskName}</p>
        <p className="text-gray-300">{dueDate}</p>
      </div>
    </div>
  )
}
