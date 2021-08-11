import React from "react";

export default function PageItem({ icon, title, color }) {
  return (
    <div className="w-full hover:bg-primary-100 bg-primary-200 dark:bg-primary-700 dark:hover:bg-primary-800 h-10 flex items-center text-black dark:text-white cursor-pointer">
      <div className={`w-2 h-full ${color}`}></div>
      <i className="text-2xl mx-2">{icon}</i>
      <p>{title}</p>
    </div>
  );
}
