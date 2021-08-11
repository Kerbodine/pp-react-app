import React from "react";

export default function PageItem({ index, icon, title, color, selectPage }) {
  return (
    <div
      className="w-full hover:bg-primary-100 bg-primary-200 dark:bg-primary-700 dark:hover:bg-primary-800 h-10 flex items-center text-black dark:text-white cursor-pointer"
      onClick={() => {
        selectPage(index);
      }}
    >
      <div className={`w-2 h-full bg-${color}-400`}></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="w-24 truncate">{title}</h3>
    </div>
  );
}
