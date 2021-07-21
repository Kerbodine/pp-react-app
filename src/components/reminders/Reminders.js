import React from 'react'
import ReminderSidebar from './ReminderSidebar'
import TaskList from './TaskList'

export default function Reminders() {

  return (
    <div className="h-screen bg-primary-800 flex">
      <div className="mt-20 mb-4 mr-4 lg:mr-0 w-full">
        <div className="h-full rounded-2xl shadow-md flex overflow-hidden">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 h-full">
              <ReminderSidebar />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="p-8 bg-primary-100 h-full">
              <input className="h-12 bg-transparent text-primary-800 font-bold outline-none text-4xl mb-4" autoComplete="off"  value="Untitled" type="text" aria-label="list title"></input>
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
