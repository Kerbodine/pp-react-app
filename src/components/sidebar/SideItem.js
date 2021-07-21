import React from 'react'

export default function SideItem({ taskName, color, type, dueDate }) {
  return (
    <div className="bg-primary-700 w-auto rounded-2xl overflow-hidden flex">
      <div className="w-4 bg-accent-400 mr-4"></div>
      <div className="my-2">
        <p className="">{taskName}</p>
        <p className="text-primary-300">{dueDate}</p>
      </div>
    </div>
  )
}
