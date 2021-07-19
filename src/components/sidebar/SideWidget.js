import React from 'react'

export default function SideWidget({ eventName, countdown, timeUnit }) {
  return (
    <div className="bg-primary-700 hover:bg-primary-600 w-full h-auto rounded-2xl flex justify-center text-center">
      <div className="m-1 h-28">
        <p className="text-primary-300 p-2 -mb-2">{eventName}</p>
        <p className="text-5xl mx-2 text-accent-400 font-bold">{countdown}</p>
        <p>{timeUnit}</p>
      </div>
    </div>
  )
}
