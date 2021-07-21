import React from 'react'

export default function SideWidget({ darkMode, eventName, countdown, timeUnit }) {
  return (
    <div className={`${ darkMode ? "dark" : "" } bg-primary-200 dark:bg-primary-700 p-2 w-[120px] h-[120px] rounded-2xl flex flex-col justify-center text-center text-black dark:text-white transition-colors`}>
      <h3 className="font-bold">{eventName}</h3>
      <p className="text-5xl mx-2 text-accent-400">{countdown}</p>
      <p>{timeUnit}</p>
    </div>
  )
}
