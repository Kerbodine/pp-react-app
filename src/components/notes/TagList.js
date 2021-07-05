import React from 'react'
import TagItem from './TagItem'
import { BiPlusCircle } from "react-icons/bi"

export default function TagList() {

  const allTags = [
    {
      key: Math.random(),
      title: "School",
      color: "yellow-500"
    },
    {
      key: Math.random(),
      title: "Report",
      color: "green-400"
    },
    {
      key: Math.random(),
      title: "Important",
      color: "purple-400"
    },
  ]

  return (
    <div className="w-full h-auto flex flex-wrap mb-2 gap-2">
      {allTags.map((tag) => (
        <TagItem key={tag.key} title={tag.title} color={tag.color}/>
      ))}
      <div className={`h-auto w-min rounded-full py-0.5 px-0.5 text-xl bg-primary-300 hover:bg-accent-400 transition colors text-black hover:text-white`}>
        <BiPlusCircle />
      </div>
    </div>
  )
}
