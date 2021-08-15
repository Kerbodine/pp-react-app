import React, { useState, useRef } from "react";
import TagItem from "./TagItem";
import { BiPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export default function TagList() {
  const [allTags, setAllTags] = useState([]);

  const tagRef = useRef();

  const addTagHandler = () => {
    const title = tagRef.current.value;
    if (title === "") {
      return;
    }
    const tag = {
      key: uuidv4(),
      title: title,
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
        className={`h-auto w-auto flex rounded-full overflow-hidden text-2xl bg-primary-200 dark:bg-primary-700 hover:bg-accent-400 dark:hover:bg-accent-400 text-black hover:text-white dark:text-white`}
      >
        <input
          ref={tagRef}
          className="bg-primary-200 text-sm px-2 my-auto text-base text-black dark:text-white dark:bg-primary-700 h-8 w-20 outline-none"
          aria-label="add tag"
        ></input>
        <BiPlusCircle
          className="my-auto m-1 cursor-pointer"
          onClick={addTagHandler}
        />
      </div>
    </div>
  );
}
