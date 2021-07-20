import React from 'react'
import ReminderSidebar from './ReminderSidebar'

export default function Reminders() {

  return (
    <div className="h-screen w-full bg-primary-800 flex">
      <div className="w-full h-auto mr-4 mt-20 mb-4 lg:mr-0 ">
        <div className="h-full rounded-2xl shadow-md transition-width flex flex-row ">
          <div className="h-full">
            <div className="h-8 w-full rounded-tl-2xl bg-accent-400"></div>
            <div className="w-0 md:w-48 bg-primary-200 rounded-bl-2xl">
              <ReminderSidebar />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <div className="h-8 w-auto rounded-t-2xl md:rounded-none md:rounded-tr-2xl bg-accent-400"></div>
              <div className="px-8 pt-8 bg-primary-100">
                <p className="h-12 bg-transparent text-primary-800 font-bold outline-none text-4xl mb-4">List Title</p>
                <div className="w-full h-4 bg-primary-100"></div>
              </div>
            </div>
            <div className="px-8 -mt-2 relative overflow-y-scroll overflow-x-hidden h-full bg-primary-100 rounded-b-2xl md:rounded-none md:rounded-br-2xl">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
