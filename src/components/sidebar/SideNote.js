import React from 'react'

export default function SideNote({ isSideExpanded, title, content }) {
  return (
    <div className={`w-full h-auto p-4 bg-gray-600 rounded ${ isSideExpanded ? "visible" : "hidden"}`}>
      <p className="text-xl">{title}Title</p>
      <p className="text-gray-300">Consequat fugiat occaecat dolore tempor. Anim id qui ea mollit in sunt velit labore anim dolore non elit. Amet sunt laboris velit irure mollit nostrud aute commodo tempor est incididunt quis.</p>
    </div>
  )
}
