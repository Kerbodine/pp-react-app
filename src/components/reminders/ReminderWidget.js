import React from 'react'

export default function ReminderWidget({ icon, title, amount }) {
  return (
    <div className="bg-gray-600 w-full h-auto py-1 rounded text-center my-4">
      <div className="m-1 my-2 h-auto flex">
        <i className="m-2 my-auto lg:text-4xl text-2xl z-10">{icon}</i>
        <p className="my-auto lg:text-xl md:text-lg text-base">{title}</p>
        <div className="relative flex-auto">
          <div className="absolute right-0 w-auto flex h-full">
            <p className="my-auto mr-2 lg:text-xl md:text-lg text-base">{amount}50</p>
          </div>
        </div>
      </div>
    </div>
  )
}
