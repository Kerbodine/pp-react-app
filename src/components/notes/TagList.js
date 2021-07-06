import React, { useState, useRef } from 'react'
import TagItem from './TagItem'
import { BiPlusCircle } from "react-icons/bi"
import { v4 as uuidv4 } from "uuid";

export default function TagList() {

  const [allTags, setAllTags] = useState([
    {
      key: uuidv4(),
      title: "School",
      color: "yellow"
    },
    {
      key: uuidv4(),
      title: "Report",
      color: "green"
    },
    {
      key: uuidv4(),
      title: "Important",
      color: "purple"
    },
  ]);

  const tagRef = useRef();

  const allColors = ["red", "yellow", "green", "blue", "purple", "pink"]

  const addTagHandler = () => {
    const title = tagRef.current.value
    if (title === "") {
      return;
    }
    const tagColor = allColors[Math.floor(Math.random() * allColors.length)]
    const tag = {
      key: uuidv4(),
      title: title,
      color: tagColor
    };
    setAllTags((prevTags) => {
      return [...prevTags, tag];
    });
    console.log(tagColor)
    tagRef.current.value = null;
  }

  return (
    <div className="w-full h-auto flex flex-wrap mb-2 gap-2">
      {allTags.map((tag) => (
        <TagItem key={tag.key} title={tag.title} color={`bg-${tag.color}-500 hover:bg-${tag.color}-400`}/>
      ))}
      <div className={`h-auto w-auto flex rounded-full text-xl bg-primary-300 hover:bg-accent-400 transition-colors text-black hover:text-white`}>
        <input ref={tagRef} className="bg-primary-300 px-2 my-auto text-sm text-black rounded-l-full h-6 w-20 outline-none"></input>
        <BiPlusCircle className="my-auto m-1" onClick={addTagHandler}/>
      </div>
      <div className="flex gap-2 hidden">
        <div className="w-6 h-6 bg-red-500 hover:bg-red-400 rounded-full" />
        <div className="w-6 h-6 bg-yellow-500 hover:bg-yellow-400 rounded-full" />
        <div className="w-6 h-6 bg-green-500 hover:bg-green-400 rounded-full" />
        <div className="w-6 h-6 bg-blue-500 hover:bg-blue-400 rounded-full" />
        <div className="w-6 h-6 bg-purple-500 hover:bg-purple-400 rounded-full" />
        <div className="w-6 h-6 bg-pink-500 hover:bg-pink-400 rounded-full" />
      </div>
    </div>
  )
}
