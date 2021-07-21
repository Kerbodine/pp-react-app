import React from 'react'
import ReminderSidebar from './ReminderSidebar'
import TaskList from './TaskList'

export default function Reminders({ darkMode }) {

  return (
    <div className={`${ darkMode ? "dark" : "" }`}>
      <div className="h-screen flex bg-primary dark:bg-primary-800 transition-colors">
        <div className="mt-20 mb-4 mr-4 lg:mr-0 w-full">
          <div className="h-full rounded-2xl flex overflow-hidden">
            <div className="h-full">
              <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 transition-colors h-full">
                <ReminderSidebar darkMode={darkMode} />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="p-8 bg-primary-100 dark:bg-primary-600 transition-colors h-full">
                <input className="h-12 bg-transparent text-black dark:text-white font-bold outline-none text-4xl mb-4" autoComplete="off"  value="Untitled" type="text" aria-label="list title"></input>
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
