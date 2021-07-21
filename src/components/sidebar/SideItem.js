import React from 'react'

export default function SideItem({ darkMode, taskName, color, type, dueDate }) {
  return (
    <div className={`${ darkMode ? "dark" : "" }`}>
      <div className="bg-primary-200 dark:bg-primary-700 w-auto rounded-2xl overflow-hidden flex px-4 transition-colors">
        <div className="my-2">
          <p className="">{taskName}</p>
          <p className="text-primary-500">{dueDate}</p>
        </div>
      </div>
    </div>
  )
}
