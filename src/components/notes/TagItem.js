import React from "react";
import { BiX } from "react-icons/bi";

export default function TagItem({ id, title, deleteTagHandler }) {
  return (
    <div
      className={`rounded-full w-auto h-8 px-2 bg-primary-200 dark:bg-primary-700 flex items-center border-primary-400 dark:border-primary-500 border-2`}
    >
      <p className="text-black dark:text-white text-sm">{title}</p>
      <BiX
        className="text-xl text-primary-500 dark:text-primary-400 cursor-pointer"
        onClick={() => {
          deleteTagHandler(id);
        }}
      />
    </div>
  );
}
