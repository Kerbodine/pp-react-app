import React from 'react'

export default function SideStickie({ darkMode, title, content }) {
  return (
    <div className={`${ darkMode ? "dark" : "" }`}>
      <div className="w-full mb-4 h-auto p-4 bg-primary-200 dark:bg-primary-700 rounded-2xl text-black dark:text-white transition-colors">
        <h3 className="text-2xl font-bold">{title}Title</h3>
        <p>{content}Consequat fugiat occaecat dolore tempor. Anim id qui ea mollit in sunt velit labore anim dolore non elit. Amet sunt laboris velit irure mollit nostrud aute commodo tempor est incididunt quis.</p>
      </div>
    </div>
  )
}
