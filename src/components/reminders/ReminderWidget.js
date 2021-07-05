import React from 'react'

export default function ReminderWidget({ icon, title, amount }) {
  return (
    <div className="hover:bg-primary-500 bg-primary-600 w-full h-auto py-1 rounded text-center xl:flex-1">
      <div className="m-1 my-2 h-auto flex">
        <i className="m-2 my-auto xl:text-4xl text-2xl z-10">{icon}</i>
        <p className="my-auto md:text-lg text-base">{title}</p>
        <div className="relative flex-auto">
          <div className="absolute right-0 w-auto flex h-full">
            <p className="my-auto mr-2 md:text-lg text-base text-accent-400 font-semibold">{amount}50</p>
          </div>
        </div>
      </div>
    </div>
  )
}
