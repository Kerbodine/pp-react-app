import React from 'react'

export default function TagItem({ title, color }) {
  return (
    <div className={`h-auto w-min rounded-full py-0.5 px-2 text-sm cursor-pointer bg-${color}-500 hover:bg-${color}-400 transition-colors`}>
      <p className="text-white">{title}</p>
    </div>
  )
}
