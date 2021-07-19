import React from 'react'

export default function SideStickie({ title, content }) {
  return (
    <div className="w-full mb-4 h-auto p-4 hover:bg-primary-600 bg-primary-700 rounded-2xl">
      <p className="text-xl text-accent-400 font-bold">{title}Title</p>
      <p className="text-primary-300">{content}Consequat fugiat occaecat dolore tempor. Anim id qui ea mollit in sunt velit labore anim dolore non elit. Amet sunt laboris velit irure mollit nostrud aute commodo tempor est incididunt quis.</p>
    </div>
  )
}
