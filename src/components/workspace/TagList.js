/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import TagItem from "./TagItem";
import { BiPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export default function TagList({ tags, updateTagHandler }) {
  const [allTags, setAllTags] = useState(tags);
  const tagRef = useRef();

  const addTagHandler = () => {
    const title = tagRef.current.value;
    if (title === "") {
      return;
    }
    const tag = {
      id: uuidv4(),
      title: title,
      deleteTagHandler: deleteTagHandler,
    };
    setAllTags((prevTags) => [...prevTags, tag]);
    tagRef.current.value = null;
  };

  const deleteTagHandler = (id) => {
    allTags.forEach((tag, i) => {
      if (tag.id === id) {
        let temp = allTags;
        temp.splice(i, 1);
        setAllTags([...temp]);
      }
    });
  };

  useEffect(() => {
    updateTagHandler(allTags);
  }, [allTags]);

  useEffect(() => {
    const handleSubmit = (event) => {
      if (event.keyCode === 13) {
        addTagHandler();
      }
    };
    window.addEventListener("keydown", handleSubmit);
    return () => {
      window.removeEventListener("keydown", handleSubmit);
    };
  }, []);

  return (
    <div className="w-full h-auto flex flex-wrap gap-2 whitespace-nowrap">
      {allTags.length > 0
        ? allTags.map((tag) => (
            <TagItem
              key={tag.id}
              id={tag.id}
              title={tag.title}
              color={`${tag.color}`}
              deleteTagHandler={deleteTagHandler}
            />
          ))
        : ""}

      <div
        className={`h-auto w-auto flex rounded-full overflow-hidden text-2xl bg-primary-200 dark:bg-primary-700 hover:bg-accent-400 dark:hover:bg-accent-400 text-black hover:text-white dark:text-white`}
      >
        <input
          ref={tagRef}
          className="bg-primary-200 text-sm px-2 my-auto text-black dark:text-white dark:bg-primary-700 h-8 w-20 outline-none"
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
