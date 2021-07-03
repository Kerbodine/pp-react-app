import React from 'react'

export default function SideWidget({ isSideExpanded, eventName, countdown, timeUnit }) {
  return (
    <div className={`transition opacity my-2 bg-primary-600 w-1/2 h-auto rounded flex justify-center text-center ${ isSideExpanded ? "visible" : "hidden"}`}>
      <div className="m-1 h-28">
        <p className="text-primary-300 p-2 -mb-2">{eventName}</p>
        <p className="text-5xl mx-2 text-accent-400 font-semibold">{countdown}</p>
        <p>{timeUnit}</p>
      </div>
    </div>
  )
}
