import React from "react";

export default function TagItem({ title }) {
  return (
    <div
      className={`h-auto w-min rounded-full py-0.5 px-2 cursor-pointer bg-primary-200 dark:bg-primary-700 flex items-center border-primary-400 dark:border-primary-500 border-[2px]`}
    >
      <p className="text-black dark:text-white text-sm">{title}</p>
    </div>
  );
}
