import React, { useState, useRef } from "react";
import TagItem from "./TagItem";
import { BiPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export default function TagList() {
  const [allTags, setAllTags] = useState([]);

  const tagRef = useRef();

  const allColors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const addTagHandler = () => {
    const title = tagRef.current.value;
    if (title === "") {
      return;
    }
    const tagColor = allColors[Math.floor(Math.random() * allColors.length)];
    const tag = {
      key: uuidv4(),
      title: title,
      color: tagColor,
    };
    setAllTags((prevTags) => {
      return [...prevTags, tag];
    });
    tagRef.current.value = null;
  };

  return (
    <div className="w-full h-auto flex flex-wrap gap-2 whitespace-nowrap">
      {allTags.map((tag) => (
        <TagItem key={tag.key} title={tag.title} color={`${tag.color}`} />
      ))}
      <div
        className={`h-auto w-auto flex rounded-full overflow-hidden text-xl bg-primary-300 hover:bg-accent-400 transition-colors text-black hover:text-white`}
      >
        <input
          ref={tagRef}
          className="bg-primary-300 px-2 my-auto text-sm text-black h-6 w-20 outline-none"
          aria-label="add tag"
        ></input>
        <BiPlusCircle className="my-auto m-1" onClick={addTagHandler} />
      </div>
    </div>
  );
}
